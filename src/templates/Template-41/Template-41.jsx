import React, { useState, useEffect, useRef, useMemo } from 'react';
import TerminalHUDHeader from './components/TerminalHUDHeader';
import SplitFlapHero from './components/SplitFlapHero';
import GateSelectorNav from './components/GateSelectorNav';
import TerminalGateSection from './components/TerminalGateSection';
import TerminalFooter from './components/TerminalFooter';

const TemplateFortyOne = ({ menuData }) => {
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
    <div className="min-h-screen bg-[#0A1424] text-white font-sans antialiased selection:bg-[#FF4B26] selection:text-white">
      {/* 1. Terminal HUD Header */}
      <TerminalHUDHeader business={business} />

      {/* 2. Solari Split-Flap Hero Board */}
      <SplitFlapHero business={business} />

      {/* 3. Sticky Concourse Gate Navigation */}
      <GateSelectorNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Live Flight Search & Cabin Class Filter */}
      <section id="menu-root" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4 font-mono">
        <div className="p-2.5 rounded-2xl bg-[#0F1C32] border-2 border-white/15 flex flex-col sm:flex-row items-center gap-3 shadow-xl">
          {/* Query Console */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF4B26]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search flight coupons, ingredients, cabin options..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black/40 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-500 border border-white/10 focus:border-[#FF4B26] focus:outline-none transition-all font-mono"
            />
          </div>

          {/* Quick Cabin Dietary Filters */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-[#FF4B26] text-white'
                  : 'bg-white/[0.05] text-zinc-400 hover:text-white'
              }`}
            >
              ALL CABINS
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white/[0.05] text-zinc-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              VEG MEALS
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-rose-600 text-white'
                  : 'bg-white/[0.05] text-zinc-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-300" />
              NON-VEG
            </button>
          </div>
        </div>
      </section>

      {/* 5. Terminal Gate Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <TerminalGateSection
              key={category.id}
              category={category}
              index={index}
            />
          ))
        ) : (
          <div className="py-20 text-center font-mono text-xs uppercase text-zinc-500">
            // NO ACTIVE FLIGHT PASSES ISSUED FOR CURRENT SEARCH //
          </div>
        )}
      </main>

      {/* 6. Footer */}
      <TerminalFooter business={business} />
    </div>
  );
};

export default TemplateFortyOne;