import React, { useState, useEffect, useRef, useMemo } from 'react';
import ArcanaHeader from './components/ArcanaHeader';
import CelestialHero from './components/CelestialHero';
import SphereNav from './components/SphereNav';
import ArcanaSection from './components/ArcanaSection';
import OracleModal from './components/OracleModal';
import ZodiacFooter from './components/ZodiacFooter';

const TemplateThirtyTwo = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [isOracleOpen, setIsOracleOpen] = useState(false);
  const [drawnDish, setDrawnDish] = useState(null);
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

  const handleConsultOracle = () => {
    const allDishes = categories.flatMap((cat) => cat.items || []);
    if (allDishes.length > 0) {
      const randomPick = allDishes[Math.floor(Math.random() * allDishes.length)];
      setDrawnDish(randomPick);
      setIsOracleOpen(true);
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
    <div className="min-h-screen bg-[#080911] text-white font-sans antialiased selection:bg-[#E5C06E] selection:text-black">
      {/* 1. Header */}
      <ArcanaHeader
        business={business}
        onConsultOracle={handleConsultOracle}
      />

      {/* 2. Celestial Hero */}
      <CelestialHero
        business={business}
        onConsultOracle={handleConsultOracle}
      />

      {/* 3. Sticky Spheres Nav */}
      <SphereNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Live Search & Dietary Filtering Bar */}
      <section id="menu-root" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4 font-mono">
        <div className="p-2 rounded-2xl bg-[#0D0F1D] border border-[#E5C06E]/20 flex flex-col sm:flex-row items-center gap-3">
          {/* Query Field */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search tarot cards, herbs, flame dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black/40 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-500 border border-transparent focus:border-[#E5C06E] focus:outline-none transition-all font-mono"
            />
          </div>

          {/* Quick Dietary Switches */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-gradient-to-r from-[#C59B3F] to-[#E5C06E] text-black'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              PLANT
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-rose-700 text-white'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-300" />
              HEARTH
            </button>
          </div>
        </div>
      </section>

      {/* 5. Main 3D Tarot Spreads */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <ArcanaSection key={category.id} category={category} index={index} />
          ))
        ) : (
          <div className="py-20 text-center text-zinc-500 font-mono text-xs uppercase">
            // NO CARDS IN THE SPREAD MATCH CURRENT SIGILS //
          </div>
        )}
      </main>

      {/* 6. Oracle Modal Prediction Draw */}
      <OracleModal
        isOpen={isOracleOpen}
        onClose={() => setIsOracleOpen(false)}
        drawnDish={drawnDish}
      />

      {/* 7. Footer */}
      <ZodiacFooter business={business} />
    </div>
  );
};

export default TemplateThirtyTwo;