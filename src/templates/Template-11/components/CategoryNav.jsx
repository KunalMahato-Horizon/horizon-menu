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
    <div className="sticky top-20 z-40 px-4 sm:px-6 my-6 pointer-events-none">
      <nav className="max-w-4xl mx-auto rounded-2xl bg-[#12141C]/90 backdrop-blur-xl border border-white/10 p-1.5 shadow-2xl pointer-events-auto">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Tab */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-mono font-medium uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#E2B855] to-[#C99C36] text-[#0A0B10] font-bold shadow-lg shadow-[#E2B855]/20'
                : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            All Plates
          </button>

          {/* Dynamic Categories */}
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#E2B855] to-[#C99C36] text-[#0A0B10] font-bold shadow-lg shadow-[#E2B855]/20'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.icon && <span className="text-sm">{cat.icon}</span>}
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