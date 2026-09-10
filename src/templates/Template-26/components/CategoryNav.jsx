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
      <nav className="max-w-6xl mx-auto rounded-xl bg-[#071324]/95 backdrop-blur-md border border-[#00F0FF]/30 p-1.5 font-mono shadow-xl">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Layers */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
              activeCategory === 'all'
                ? 'bg-[#00F0FF] text-[#0A192F] border-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                : 'bg-transparent text-[#48CAE4] border-transparent hover:bg-white/[0.05] hover:text-white'
            }`}
          >
            [ LAYER // ALL ]
          </button>

          {/* Dynamic Category Layers */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
                  isActive
                    ? 'bg-[#00F0FF] text-[#0A192F] border-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                    : 'bg-transparent text-[#48CAE4] border-transparent hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                <span className="opacity-40">L.0{idx + 1}</span>
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

export default CategoryNav;