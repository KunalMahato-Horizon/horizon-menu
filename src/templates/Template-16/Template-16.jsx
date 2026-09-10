import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

const TemplateSixteen = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const isClickScrolling = useRef(false);

  // Scroll spy detection
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
    <div className="min-h-screen bg-[#F5F2EB] text-[#1A1A1A] font-serif antialiased selection:bg-[#991B1B] selection:text-white">
      <Header business={business} />
      <Hero business={business} />

      {/* Sticky Gazette Index Nav */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Search & Editorial Filter Section */}
      <section id="menu-root" className="max-w-5xl mx-auto px-4 sm:px-6 pt-2 pb-4">
        <div className="p-2 border-2 border-[#1A1A1A] bg-white flex flex-col sm:flex-row items-center gap-3">
          {/* Query Box */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A1A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search classified dishes, cuts, drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-1.5 bg-[#F5F2EB] text-xs sm:text-sm text-[#1A1A1A] placeholder-[#666666] border border-[#1A1A1A] focus:outline-none font-mono"
            />
          </div>

          {/* Quick Dietary Filters */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1 text-xs font-mono font-bold uppercase border border-[#1A1A1A] transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#F5F2EB]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-mono font-bold uppercase border border-[#1A1A1A] transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#F5F2EB]'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
              Veg
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-mono font-bold uppercase border border-[#1A1A1A] transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#F5F2EB]'
              }`}
            >
              <span className="w-1.5 h-1.5 bg-rose-600 rounded-full" />
              Non-Veg
            </button>
          </div>
        </div>
      </section>

      {/* Main Menu Sections */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-12">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <MenuSection key={category.id} category={category} index={index} />
          ))
        ) : (
          <div className="py-16 text-center text-[#666666] font-mono text-xs uppercase">
            No entries found in current dispatch.
          </div>
        )}
      </main>

      <Footer business={business} />
    </div>
  );
};

export default TemplateSixteen;