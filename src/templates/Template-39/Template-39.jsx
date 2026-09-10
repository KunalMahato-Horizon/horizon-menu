import React, { useState, useEffect, useRef, useMemo } from 'react';
import ElementalHeader from './components/ElementalHeader';
import CyclotronHero from './components/CyclotronHero';
import SeriesFilterNav from './components/SeriesFilterNav';
import ElementalGroupSection from './components/ElementalGroupSection';
import ValenceInspectorModal from './components/ValenceInspectorModal';
import LaboratoryFooter from './components/LaboratoryFooter';

const TemplateThirtyNine = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [selectedElement, setSelectedElement] = useState(null);
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
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

  const handleInspectElement = (item, atomicNumber, symbol) => {
    setSelectedElement({ ...item, atomicNumber, symbol });
    setIsInspectorOpen(true);
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

  let atomicCounter = 1;

  return (
    <div className="min-h-screen bg-[#080A0F] text-white font-sans antialiased selection:bg-cyan-400 selection:text-black">
      {/* 1. Header */}
      <ElementalHeader business={business} />

      {/* 2. Hero */}
      <CyclotronHero business={business} />

      {/* 3. Sticky Series Nav */}
      <SeriesFilterNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Live Search & pH/Dietary Filter Bar */}
      <section id="menu-root" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4 font-mono">
        <div className="p-2.5 rounded-2xl bg-[#0E121B] border border-cyan-500/30 flex flex-col sm:flex-row items-center gap-3">
          {/* Query Console */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by element name, symbol, or compound..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black/50 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-500 border border-white/10 focus:border-cyan-400 focus:outline-none transition-all font-mono"
            />
          </div>

          {/* Quick Dietary Switches */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-cyan-400 text-black font-black'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white'
              }`}
            >
              ALL ELEMENTS
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-500 text-black font-black'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              pH+ (VEG)
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-rose-600 text-white font-black'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              OXIDIZED (MEAT)
            </button>
          </div>
        </div>
      </section>

      {/* 5. Main Periodic Matrix Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => {
            const startAtomic = atomicCounter;
            atomicCounter += category.items.length;

            return (
              <ElementalGroupSection
                key={category.id}
                category={category}
                index={index}
                runningAtomicStart={startAtomic}
                onInspectElement={handleInspectElement}
              />
            );
          })
        ) : (
          <div className="py-20 text-center font-mono text-xs uppercase text-zinc-500">
            // NO ACTIVE ELEMENTS DETECTED IN THIS SERIES //
          </div>
        )}
      </main>

      {/* 6. Molecular Valence Inspector Modal */}
      <ValenceInspectorModal
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
        selectedElement={selectedElement}
      />

      {/* 7. Laboratory Footer */}
      <LaboratoryFooter business={business} />
    </div>
  );
};

export default TemplateThirtyNine;