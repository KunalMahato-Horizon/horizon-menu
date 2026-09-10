import React, { useEffect, useRef } from 'react';
import { ShankhoIcon } from './DurgaIcons';

const TITHI_TITLES = [
  'MAHASAPTHAMI',
  'MAHAASHTAMI',
  'MAHANAVAMI',
  'BIJOYA DASHAMI',
  'SANDHI PUJA',
];

const RitualNav = ({ categories = [], activeCategory, onSelectCategory }) => {
  const scrollRef = useRef(null);
  const btnRefs = useRef({});

  useEffect(() => {
    const btn = btnRefs.current[activeCategory];
    if (btn && scrollRef.current) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-[68px] sm:top-[76px] z-40 px-3 sm:px-6 lg:px-8 my-2 font-serif">
      <nav className="max-w-7xl mx-auto rounded-2xl bg-[#1A050B]/95 backdrop-blur-md border-2 border-[#F59E0B]/60 p-1.5 shadow-2xl">
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* Master Pandal Manifest */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2.5 rounded-xl text-xs uppercase font-sans font-black tracking-wider transition-all duration-200 border flex items-center gap-2 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#DC2626] to-[#991B1B] text-white border-[#F59E0B] shadow-md'
                : 'bg-[#2B0812] text-[#FDE68A] border-white/10 hover:bg-[#380B18]'
            }`}
          >
            <ShankhoIcon className="w-4 h-4" />
            <span>[ Complete Bhog Spread ]</span>
          </button>

          {/* Festive Day Tithis */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            const tithi = TITHI_TITLES[idx % TITHI_TITLES.length];

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-sans uppercase font-black tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#DC2626] to-[#991B1B] text-white border-[#F59E0B] shadow-md'
                    : 'bg-[#2B0812] text-zinc-300 border-white/10 hover:bg-[#380B18] hover:text-white'
                }`}
              >
                <div className="flex flex-col items-start leading-none">
                  <span className={`text-[8px] font-mono ${isActive ? 'text-[#FDE68A]' : 'text-[#F59E0B]'}`}>
                    {tithi}
                  </span>
                  <span className="mt-0.5 text-xs">{cat.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default RitualNav;