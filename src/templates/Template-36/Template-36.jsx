import React, { useState, useEffect, useRef, useMemo } from 'react';
import MangaHeader from './components/MangaHeader';
import MangaHero from './components/MangaHero';
import ChapterNav from './components/ChapterNav';
import MangaSection from './components/MangaSection';
import MangaFooter from './components/MangaFooter';

const TemplateThirtySix = ({ menuData }) => {
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
    <div className="min-h-screen bg-[#FAF8F5] text-black font-sans antialiased selection:bg-black selection:text-yellow-300">
      {/* 1. Header */}
      <MangaHeader business={business} />

      {/* 2. Hero Cover Spread */}
      <MangaHero business={business} />

      {/* 3. Sticky Chapter Nav */}
      <ChapterNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Live Search & Dietary Comic Bubble Bar */}
      <section id="menu-root" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 pb-4 font-mono">
        <div className="p-2.5 rounded-xl bg-white border-3 border-black shadow-[4px_4px_0px_0px_#000] flex flex-col sm:flex-row items-center gap-3">
          {/* Query Field */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search panels, special moves, dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#FAF8F5] rounded border-2 border-black text-xs sm:text-sm text-black placeholder-black/40 focus:outline-none focus:bg-white transition-all font-mono font-bold"
            />
          </div>

          {/* Quick Dietary Filters */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded border-2 border-black text-xs font-black uppercase transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                  : 'bg-white text-black hover:bg-yellow-300'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded border-2 border-black text-xs font-black uppercase transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-300 text-black shadow-[2px_2px_0px_0px_#000]'
                  : 'bg-white text-black hover:bg-emerald-100'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              VEG
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded border-2 border-black text-xs font-black uppercase transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-red-500 text-white shadow-[2px_2px_0px_0px_#000]'
                  : 'bg-white text-black hover:bg-red-100'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              MEAT
            </button>
          </div>
        </div>
      </section>

      {/* 5. Manga Chapter Sections */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 pb-16">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <MangaSection
              key={category.id}
              category={category}
              index={index}
            />
          ))
        ) : (
          <div className="py-20 text-center font-mono text-xs uppercase text-black/50">
            // NO PANELS FOUND FOR ACTIVE SEARCH //
          </div>
        )}
      </main>

      {/* 6. Footer */}
      <MangaFooter business={business} />
    </div>
  );
};

export default TemplateThirtySix;