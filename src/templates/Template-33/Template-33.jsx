import React, { useState, useEffect, useRef, useMemo } from 'react';
import DarkroomHeader from './components/DarkroomHeader';
import FilmRollHero from './components/FilmRollHero';
import RollSelectorNav from './components/RollSelectorNav';
import FilmStripSection from './components/FilmStripSection';
import DarkroomFooter from './components/DarkroomFooter';

const TemplateThirtyThree = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [isSafelight, setIsSafelight] = useState(false);
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
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-500 ${
        isSafelight
          ? 'bg-[#0A0203] text-[#FF2A3A] selection:bg-[#FF2A3A] selection:text-black'
          : 'bg-[#0A0B0E] text-[#F4F4F6] selection:bg-[#FFC72C] selection:text-black'
      }`}
    >
      {/* 1. Darkroom Header */}
      <DarkroomHeader
        business={business}
        isSafelight={isSafelight}
        onToggleSafelight={() => setIsSafelight(!isSafelight)}
      />

      {/* 2. Hero Section */}
      <FilmRollHero
        business={business}
        isSafelight={isSafelight}
      />

      {/* 3. Sticky Film Roll Nav */}
      <RollSelectorNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        isSafelight={isSafelight}
      />

      {/* 4. Live Search & Optical Filter Console */}
      <section id="menu-root" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4 font-mono">
        <div
          className={`p-2.5 rounded-xl border flex flex-col sm:flex-row items-center gap-3 transition-colors ${
            isSafelight
              ? 'bg-[#150406] border-[#FF2A3A]/30'
              : 'bg-[#14171F] border-white/15'
          }`}
        >
          {/* Search Field */}
          <div className="relative w-full flex-1">
            <svg
              className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${
                isSafelight ? 'text-[#FF2A3A]/50' : 'text-white/40'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search exposure frames, cuts, infusions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg text-xs sm:text-sm placeholder-white/30 border focus:outline-none transition-all font-mono ${
                isSafelight
                  ? 'bg-black/60 text-[#FF2A3A] border-[#FF2A3A]/30 focus:border-[#FF2A3A]'
                  : 'bg-black/50 text-white border-white/10 focus:border-white'
              }`}
            />
          </div>

          {/* Quick Dietary Switches */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                dietaryFilter === 'all'
                  ? isSafelight
                    ? 'bg-[#FF2A3A] text-black'
                    : 'bg-white text-black'
                  : 'bg-white/[0.04] text-white/60 hover:text-white'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-500 text-black'
                  : 'bg-white/[0.04] text-white/60 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              VEG
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                dietaryFilter === 'non-veg'
                  ? isSafelight
                    ? 'bg-[#FF2A3A] text-black'
                    : 'bg-rose-500 text-white'
                  : 'bg-white/[0.04] text-white/60 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              MEAT
            </button>
          </div>
        </div>
      </section>

      {/* 5. Photographic Film Strips */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <FilmStripSection
              key={category.id}
              category={category}
              index={index}
              isSafelight={isSafelight}
            />
          ))
        ) : (
          <div className="py-20 text-center font-mono text-xs uppercase opacity-40">
            // NO NEGATIVE FRAMES MATCH CURRENT EXPOSURE QUERY //
          </div>
        )}
      </main>

      {/* 6. Footer */}
      <DarkroomFooter
        business={business}
        isSafelight={isSafelight}
      />
    </div>
  );
};

export default TemplateThirtyThree;