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
    <div className="sticky top-[64px] sm:top-[72px] z-40 px-4 sm:px-8 py-2 bg-[#F7F7F8]/95 backdrop-blur-md border-b border-black/10">
      <nav className="max-w-5xl mx-auto">
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5"
        >
          {/* All Ledger Tab */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-mono font-black uppercase tracking-wider transition-all duration-150 border ${
              activeCategory === 'all'
                ? 'bg-[#0F0F11] text-white border-[#0F0F11]'
                : 'bg-white text-black/60 border-black/10 hover:text-black hover:border-black/30'
            }`}
          >
            [00] All Ledger
          </button>

          {/* Dynamic Categories */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-black uppercase tracking-wider transition-all duration-150 border ${
                  isActive
                    ? 'bg-[#0047FF] text-white border-[#0047FF]'
                    : 'bg-white text-black/60 border-black/10 hover:text-black hover:border-black/30'
                }`}
              >
                <span className="opacity-50">[0{idx + 1}]</span>
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