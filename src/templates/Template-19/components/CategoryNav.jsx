import React, { useEffect, useRef } from 'react';

const CategoryNav = ({ categories = [], activeCategory, onSelectCategory }) => {
  const scrollRef = useRef(null);
  const btnRefs = useRef({});

  useEffect(() => {
    const btn = btnRefs.current[activeCategory];
    if (btn && scrollRef.current) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-[68px] sm:top-[76px] z-40 px-3 sm:px-6 my-2">
      <nav className="max-w-6xl mx-auto rounded-2xl bg-[#0A0C10]/95 backdrop-blur-xl border border-white/15 p-1.5 shadow-2xl">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* Master Index */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 border ${
              activeCategory === 'all'
                ? 'bg-[#D4FF00] text-[#0A0C10] border-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                : 'bg-transparent text-white/60 border-transparent hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            [ALL DOCKETS]
          </button>

          {/* Dynamic Categories */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#D4FF00] text-[#0A0C10] border-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                    : 'bg-transparent text-white/60 border-transparent hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span className="text-[10px] opacity-40">0{idx + 1}</span>
                {cat.icon && <span>{cat.icon}</span>}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default CategoryNav;