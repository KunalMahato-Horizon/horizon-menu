import React, { useEffect, useRef } from 'react';
import { ModakIcon, DurvaGrassIcon } from './GaneshaIcons';

const COURSE_TITLES = [
  'MODAK PEETH',
  'FARAL & STARTERS',
  'SHAHI THALI MAINS',
  'CURRIES & ROTIS',
  'AMRIT SIPS & DESSERTS',
];

const NaivedyaNav = ({ categories = [], activeCategory, onSelectCategory }) => {
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
      <nav className="max-w-7xl mx-auto rounded-2xl bg-[#23080C]/95 backdrop-blur-md border-2 border-[#F59E0B]/60 p-1.5 shadow-2xl">
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Prasadam Offerings */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2.5 rounded-xl text-xs uppercase font-sans font-black tracking-wider transition-all duration-200 border flex items-center gap-2 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#EA580C] to-[#DC2626] text-white border-[#F59E0B] shadow-md'
                : 'bg-[#380E15] text-[#FDE68A] border-white/10 hover:bg-[#4A121C]'
            }`}
          >
            <ModakIcon className="w-4 h-4 shrink-0" />
            <span>[ Complete Naivedya ]</span>
          </button>

          {/* Dynamic Sacred Categories */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            const subtitle = COURSE_TITLES[idx % COURSE_TITLES.length];

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-sans uppercase font-black tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#EA580C] to-[#DC2626] text-white border-[#F59E0B] shadow-md'
                    : 'bg-[#380E15] text-zinc-300 border-white/10 hover:bg-[#4A121C] hover:text-white'
                }`}
              >
                <div className="flex flex-col items-start leading-none">
                  <span className={`text-[8px] font-mono ${isActive ? 'text-[#FDE68A]' : 'text-[#F59E0B]'}`}>
                    {subtitle}
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

export default NaivedyaNav;