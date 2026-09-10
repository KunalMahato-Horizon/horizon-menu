import React, { useState, useEffect, useRef, useMemo } from 'react';
import UtsavHeader from './components/UtsavHeader';
import GaneshotsavHero from './components/GaneshotsavHero';
import NaivedyaNav from './components/NaivedyaNav';
import UtsavSection from './components/UtsavSection';
import VisarjanFooter from './components/VisarjanFooter';

const TemplateFortyFour = ({ menuData }) => {
  const business = menuData || {};
  const categories = business.categories || [];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [modakOfferings, setModakOfferings] = useState(21);
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
    <div className="min-h-screen bg-[#180407] text-[#FFFDF7] font-serif antialiased selection:bg-[#EA580C] selection:text-white">
      {/* 1. Auspicious Pandal Header */}
      <UtsavHeader
        business={business}
        modakOfferings={modakOfferings}
        onOfferModak={() => setModakOfferings((prev) => prev + 1)}
      />

      {/* 2. Ganeshotsav Mandap Hero */}
      <GaneshotsavHero business={business} />

      {/* 3. Sticky Naivedya Navigation */}
      <NaivedyaNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Live Search & Satvik Dietary Switcher */}
      <section id="menu-root" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4 font-sans">
        <div className="p-2.5 rounded-2xl bg-[#2E0B10] border-2 border-[#F59E0B]/40 flex flex-col sm:flex-row items-center gap-3 shadow-lg">
          {/* Query Console */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F59E0B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search ukadiche modak, puran poli, kothimbir vadi, amti..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black/50 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-400 border border-white/10 focus:border-[#F59E0B] focus:outline-none transition-all font-serif font-bold"
            />
          </div>

          {/* Satvik / Feast Switches */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-[#EA580C] text-white shadow-xs'
                  : 'bg-black/40 text-zinc-300 hover:text-white'
              }`}
            >
              All Offerings
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black uppercase transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-black/40 text-zinc-300 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Satvik Veg
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black uppercase transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#DC2626] text-white shadow-xs'
                  : 'bg-black/40 text-zinc-300 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              Festive Feast
            </button>
          </div>
        </div>
      </section>

      {/* 5. Main Utsav Course Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <UtsavSection
              key={category.id}
              category={category}
              index={index}
            />
          ))
        ) : (
          <div className="py-20 text-center font-serif text-sm italic text-[#FDE68A]">
            No prasadam items matching your active search query.
          </div>
        )}
      </main>

      {/* 6. Visarjan Blessing Footer */}
      <VisarjanFooter business={business} />
    </div>
  );
};

export default TemplateFortyFour;