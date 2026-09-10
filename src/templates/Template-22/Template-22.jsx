import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

const TemplateTwentyTwo = ({ menuData }) => {
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
    <div className="min-h-screen bg-[#F7F7F8] text-[#0F0F11] font-mono antialiased selection:bg-[#0047FF] selection:text-white">
      <Header business={business} />
      <Hero business={business} />

      {/* Sticky Swiss Nav Bar */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Interactive Filter Control Bar */}
      <section id="menu-root" className="max-w-5xl mx-auto px-4 sm:px-8 pt-4 pb-4">
        <div className="p-2.5 rounded-xl bg-white border border-black/10 flex flex-col sm:flex-row items-center gap-3">
          {/* Query Console */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search ledger entries or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#F7F7F8] rounded-lg text-xs sm:text-sm text-[#0F0F11] placeholder-black/40 border border-transparent focus:border-black/30 focus:outline-none transition-all font-mono font-medium"
            />
          </div>

          {/* Quick Dietary Switches */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-black uppercase transition-all border ${
                dietaryFilter === 'all'
                  ? 'bg-[#0F0F11] text-white border-[#0F0F11]'
                  : 'bg-white text-black/60 border-black/10 hover:border-black/30'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-black uppercase transition-all border ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-white text-black/60 border-black/10 hover:border-black/30'
              }`}
            >
              VEG
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-black uppercase transition-all border ${
                dietaryFilter === 'non-veg'
                  ? 'bg-rose-700 text-white border-rose-700'
                  : 'bg-white text-black/60 border-black/10 hover:border-black/30'
              }`}
            >
              NON-VEG
            </button>
          </div>
        </div>
      </section>

      {/* Main Ledger Sections */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-2 pb-14">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <MenuSection key={category.id} category={category} index={index} />
          ))
        ) : (
          <div className="py-20 text-center text-black/40 font-mono text-xs uppercase">
            // NO ENTRIES LOCATED IN CURRENT SEARCH //
          </div>
        )}
      </main>

      <Footer business={business} />
    </div>
  );
};

export default TemplateTwentyTwo;