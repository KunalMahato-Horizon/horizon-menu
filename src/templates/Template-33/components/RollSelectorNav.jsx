import React, { useEffect, useRef } from 'react';

const RollSelectorNav = ({ categories = [], activeCategory, onSelectCategory, isSafelight }) => {
  const scrollRef = useRef(null);
  const btnRefs = useRef({});

  useEffect(() => {
    const btn = btnRefs.current[activeCategory];
    if (btn && scrollRef.current) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-[68px] sm:top-[76px] z-40 px-3 sm:px-6 lg:px-8 my-2 font-mono">
      <nav
        className={`max-w-7xl mx-auto rounded-xl backdrop-blur-xl border p-1.5 shadow-2xl transition-colors ${
          isSafelight
            ? 'bg-[#120406]/95 border-[#FF2A3A]/40'
            : 'bg-[#0E1015]/95 border-white/15'
        }`}
      >
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* Master Proof Roll Button */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-lg text-xs uppercase font-bold tracking-wider transition-all border ${
              activeCategory === 'all'
                ? isSafelight
                  ? 'bg-[#FF2A3A] text-black border-[#FF2A3A]'
                  : 'bg-white text-black border-white shadow-md'
                : 'bg-transparent text-white/50 border-transparent hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            [ Master Contact Sheet ]
          </button>

          {/* Individual Category Rolls */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs uppercase font-bold tracking-wider transition-all border ${
                  isActive
                    ? isSafelight
                      ? 'bg-[#FF2A3A]/20 text-[#FF2A3A] border-[#FF2A3A]'
                      : 'bg-white/15 text-white border-white/30'
                    : 'bg-transparent text-white/50 border-transparent hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span className="text-[10px] opacity-60">ROLL 0{idx + 1}</span>
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

export default RollSelectorNav;