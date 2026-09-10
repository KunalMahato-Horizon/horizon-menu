import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

const TemplateSeventeen = ({ menuData }) => {
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
    <div className="min-h-screen bg-[#F9F6F0] text-[#1F2B20] font-sans antialiased selection:bg-[#D96B43] selection:text-white">
      <Header business={business} />
      <Hero business={business} />

      {/* Sticky Pill Nav */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Search & Dietary Bar */}
      <section id="menu-root" className="max-w-5xl mx-auto px-4 sm:px-6 pt-2 pb-4">
        <div className="p-2 rounded-full bg-[#EFE8DC] border border-[#E5DDD0] flex flex-col sm:flex-row items-center gap-3">
          {/* Search Box */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4E564E]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search wood-fired cuts, tacos, agave..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2 bg-white rounded-full text-xs sm:text-sm text-[#1F2B20] placeholder-[#788078] border border-transparent focus:border-[#D96B43] focus:outline-none transition-all font-mono"
            />
          </div>

          {/* Quick Dietary Filters */}
          <div className="flex items-center gap-1.5 shrink-0 self-center sm:self-auto px-2">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-[#1F2B20] text-[#E8A948]'
                  : 'text-[#4E564E] hover:bg-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-[#1F2B20] text-emerald-400'
                  : 'text-[#4E564E] hover:bg-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Plant
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#D96B43] text-white'
                  : 'text-[#4E564E] hover:bg-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-200" />
              Catch
            </button>
          </div>
        </div>
      </section>

      {/* Dish Sections */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-12">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <MenuSection key={category.id} category={category} index={index} />
          ))
        ) : (
          <div className="py-16 text-center text-[#788078] font-mono text-xs">
            No dishes matching your current selection.
          </div>
        )}
      </main>

      <Footer business={business} />
    </div>
  );
};

export default TemplateSeventeen;