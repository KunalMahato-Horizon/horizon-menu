import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReceiptHeader from './components/ReceiptHeader';
import ReceiptHero from './components/ReceiptHero';
import PaperFeedNav from './components/PaperFeedNav';
import ReceiptSection from './components/ReceiptSection';
import ReceiptFooter from './components/ReceiptFooter';

const SawtoothTearEdge = ({ position = 'top' }) => (
  <div className={`w-full overflow-hidden leading-none select-none ${position === 'bottom' ? 'rotate-180 -mt-1' : '-mb-1'}`}>
    <svg className="w-full h-3.5 fill-[#FAF8F5]" viewBox="0 0 1200 14" preserveAspectRatio="none">
      <path d="M0,14 L15,0 L30,14 L45,0 L60,14 L75,0 L90,14 L105,0 L120,14 L135,0 L150,14 L165,0 L180,14 L195,0 L210,14 L225,0 L240,14 L255,0 L270,14 L285,0 L300,14 L315,0 L330,14 L345,0 L360,14 L375,0 L390,14 L405,0 L420,14 L435,0 L450,14 L465,0 L480,14 L495,0 L510,14 L525,0 L540,14 L555,0 L570,14 L585,0 L600,14 L615,0 L630,14 L645,0 L660,14 L675,0 L690,14 L705,0 L720,14 L735,0 L750,14 L765,0 L780,14 L795,0 L810,14 L825,0 L840,14 L855,0 L870,14 L885,0 L900,14 L915,0 L930,14 L945,0 L960,14 L975,0 L990,14 L1005,0 L1020,14 L1035,0 L1050,14 L1065,0 L1080,14 L1095,0 L1110,14 L1125,0 L1140,14 L1155,0 L1170,14 L1185,0 L1200,14 Z" />
    </svg>
  </div>
);

const TemplateForty = ({ menuData }) => {
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

  const totalItemCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  return (
    <div className="min-h-screen bg-[#111215] text-[#18181B] font-mono antialiased px-2 sm:px-4 py-4 selection:bg-black selection:text-white">
      {/* 1. Register Printhead Top HUD */}
      <ReceiptHeader business={business} />

      {/* Centered Continuous Thermal Paper Roll Container */}
      <div className="max-w-2xl mx-auto pt-16 sm:pt-20">
        {/* Top Serrated Sawtooth Tear Edge */}
        <SawtoothTearEdge position="top" />

        {/* Thermal Paper Body */}
        <main className="bg-[#FAF8F5] shadow-2xl shadow-black/80 px-2 sm:px-6 relative">
          {/* Subtle thermal scanline background gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.015)_51%)] bg-[size:100%_4px] pointer-events-none" />

          {/* 2. Top Receipt Ticket Header */}
          <ReceiptHero business={business} />

          {/* 3. Paper Feed Navigation (Function Keys) */}
          <PaperFeedNav
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />

          {/* 4. Live Search & Register Filters Bar */}
          <section id="menu-root" className="max-w-xl mx-auto px-2 sm:px-4 pt-2 pb-4">
            <div className="p-2 rounded bg-[#EAE7DF] border border-black/20 flex flex-col sm:flex-row items-center gap-2">
              {/* Search Box */}
              <div className="relative w-full flex-1">
                <input
                  type="text"
                  placeholder="QUERY REGISTER ITEMS..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-3 pr-3 py-1.5 bg-white rounded border border-black/30 text-xs font-mono font-bold uppercase text-black placeholder-black/40 focus:outline-none focus:border-black"
                />
              </div>

              {/* Quick Dietary Switches */}
              <div className="flex items-center gap-1 shrink-0 self-start sm:self-auto text-[10px]">
                <button
                  onClick={() => setDietaryFilter('all')}
                  className={`px-2.5 py-1 rounded font-black uppercase transition-all ${
                    dietaryFilter === 'all'
                      ? 'bg-black text-white'
                      : 'bg-white text-black/70 hover:text-black border border-black/20'
                  }`}
                >
                  ALL
                </button>
                <button
                  onClick={() => setDietaryFilter('veg')}
                  className={`px-2.5 py-1 rounded font-black uppercase transition-all ${
                    dietaryFilter === 'veg'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-white text-emerald-800 hover:text-emerald-950 border border-black/20'
                  }`}
                >
                  VEG
                </button>
                <button
                  onClick={() => setDietaryFilter('non-veg')}
                  className={`px-2.5 py-1 rounded font-black uppercase transition-all ${
                    dietaryFilter === 'non-veg'
                      ? 'bg-rose-700 text-white'
                      : 'bg-white text-rose-800 hover:text-rose-950 border border-black/20'
                  }`}
                >
                  MEAT
                </button>
              </div>
            </div>
          </section>

          {/* 5. Continuous Departments & Line Items */}
          <div className="max-w-xl mx-auto pt-2 pb-6">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <ReceiptSection
                  key={category.id}
                  category={category}
                  index={index}
                />
              ))
            ) : (
              <div className="py-16 text-center text-black/40 font-mono text-xs uppercase border-y border-dashed border-black/20 my-4">
                *** NO REGISTER LINE ENTRIES MATCH QUERY ***
              </div>
            )}
          </div>

          {/* 6. Receipt Totals & Barcode Tear-Off Footer */}
          <ReceiptFooter
            business={business}
            totalItemCount={totalItemCount}
          />
        </main>

        {/* Bottom Serrated Sawtooth Tear Edge */}
        <SawtoothTearEdge position="bottom" />
      </div>
    </div>
  );
};

export default TemplateForty;