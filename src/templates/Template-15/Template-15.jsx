import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

const TemplateFifteen = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const isClickScrolling = useRef(false);

  // Scroll-spy observer
  useEffect(() => {
    const allIds = ['all', ...categories.map((c) => c.id)];
    const elements = allIds
      .map((id) => (id === 'all' ? document.getElementById('menu-root') : document.getElementById(`category-${id}`)))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((prev, curr) =>
            Math.abs(curr.boundingClientRect.top) < Math.abs(prev.boundingClientRect.top) ? curr : prev
          );
          const id = top.target.id === 'menu-root' ? 'all' : top.target.id.replace('category-', '');
          setActiveCategory(id);
        }
      },
      { rootMargin: '-100px 0px -55% 0px', threshold: [0, 0.2, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  const handleSelectCategory = (id) => {
    setActiveCategory(id);
    isClickScrolling.current = true;

    const targetId = id === 'all' ? 'menu-root' : `category-${id}`;
    const el = document.getElementById(targetId);

    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    } else {
      isClickScrolling.current = false;
    }
  };

  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        const matchingItems = (cat.items || []).filter((item) => {
          const matchesQuery =
            (item.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.description || '').toLowerCase().includes(searchQuery.toLowerCase());

          const matchesDiet =
            dietaryFilter === 'all' ||
            (dietaryFilter === 'veg' && item.type === 'veg') ||
            (dietaryFilter === 'non-veg' && item.type === 'non-veg');

          return matchesQuery && matchesDiet;
        });

        return { ...cat, items: matchingItems };
      })
      .filter((cat) => cat.items.length > 0);
  }, [categories, searchQuery, dietaryFilter]);

  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#18181B] font-sans antialiased selection:bg-[#FFE500] selection:text-[#18181B]">
      <Header business={business} />
      <Hero business={business} />

      {/* Sticky Neo-Brutalist Category Nav */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Search & Dietary Filters Bar */}
      <section id="menu-root" className="max-w-5xl mx-auto px-4 sm:px-6 pt-2 pb-4">
        <div className="p-2.5 rounded-2xl bg-white border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] flex flex-col sm:flex-row items-center gap-3">
          {/* Search Box */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search burgers, shakes, fries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#F4F4F5] rounded-xl text-xs sm:text-sm text-[#18181B] placeholder-[#71717A] border-2 border-transparent focus:border-[#18181B] focus:outline-none transition-all font-mono font-bold"
            />
          </div>

          {/* Quick Dietary Filters */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-black uppercase border-2 border-[#18181B] transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-[#18181B] text-[#FFE500]'
                  : 'bg-white text-[#18181B] hover:bg-[#FFE500]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono font-black uppercase border-2 border-[#18181B] transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-[#A7F3D0] text-[#18181B]'
                  : 'bg-white text-[#18181B] hover:bg-[#A7F3D0]'
              }`}
            >
              Veg
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono font-black uppercase border-2 border-[#18181B] transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#FECDD3] text-[#18181B]'
                  : 'bg-white text-[#18181B] hover:bg-[#FECDD3]'
              }`}
            >
              Non-Veg
            </button>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-12">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <MenuSection key={category.id} category={category} index={index} />
          ))
        ) : (
          <div className="py-16 text-center text-[#71717A] font-mono font-bold text-xs uppercase">
            No dishes matching your filter.
          </div>
        )}
      </main>

      <Footer business={business} />
    </div>
  );
};

export default TemplateFifteen;