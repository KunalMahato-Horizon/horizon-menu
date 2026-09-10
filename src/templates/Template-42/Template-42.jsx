import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

const TemplateFortyTwo = ({ menuData }) => {
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
    <div className="min-h-screen bg-[#FAF9F5] text-[#1A1918] font-sans antialiased selection:bg-[#9E5A38] selection:text-white">
      {/* 1. Header */}
      <Header business={business} />

      {/* 2. Hero */}
      <Hero business={business} />

      {/* 3. Sticky Category Navigation */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Search & Dietary Filter Strip */}
      <section id="menu-root" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4">
        <div className="p-2 rounded-2xl bg-white border border-[#E8E5DF] flex flex-col sm:flex-row items-center gap-3 shadow-xs">
          {/* Search Box */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#736E65]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search dishes, ingredients, sips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#FAF9F5] rounded-xl text-xs sm:text-sm text-[#1A1918] placeholder-[#736E65] border border-transparent focus:border-[#1A1918]/20 focus:outline-none transition-all font-sans"
            />
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-sans font-bold transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-[#1A1918] text-[#FAF9F5]'
                  : 'bg-[#FAF9F5] text-[#736E65] hover:text-[#1A1918]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-sans font-bold transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-800 text-white'
                  : 'bg-[#FAF9F5] text-[#736E65] hover:text-[#1A1918]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Veg
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-sans font-bold transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#9E5A38] text-white'
                  : 'bg-[#FAF9F5] text-[#736E65] hover:text-[#1A1918]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-300" />
              Non-Veg
            </button>
          </div>
        </div>
      </section>

      {/* 5. Menu Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-14">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <MenuSection
              key={category.id}
              category={category}
              index={index}
            />
          ))
        ) : (
          <div className="py-20 text-center text-[#736E65] font-sans text-xs uppercase">
            No dishes matching your current search.
          </div>
        )}
      </main>

      {/* 6. Footer */}
      <Footer business={business} />
    </div>
  );
};

export default TemplateFortyTwo;