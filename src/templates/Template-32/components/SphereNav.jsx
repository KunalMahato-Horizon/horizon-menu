import React, { useEffect, useRef } from 'react';

const SphereNav = ({ categories = [], activeCategory, onSelectCategory }) => {
  const scrollRef = useRef(null);
  const btnRefs = useRef({});

  useEffect(() => {
    const btn = btnRefs.current[activeCategory];
    if (btn && scrollRef.current) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-[68px] sm:top-[76px] z-30 px-3 sm:px-6 lg:px-8 my-2 font-mono">
      <nav className="max-w-7xl mx-auto rounded-2xl bg-[#080911]/95 backdrop-blur-xl border border-[#E5C06E]/20 p-1.5 shadow-2xl">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* Master Deck Tab */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all border ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#C59B3F] to-[#E5C06E] text-[#080911] border-transparent shadow-md'
                : 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            [ All Arcana ]
          </button>

          {/* Dynamic Celestial Spheres */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all border ${
                  isActive
                    ? 'bg-[#E5C06E]/20 text-[#E5C06E] border-[#E5C06E]/50 shadow-sm'
                    : 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-[10px] text-[#E5C06E]">✦ 0{idx + 1}</span>
                {cat.icon && <span className="text-xs">{cat.icon}</span>}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default SphereNav;