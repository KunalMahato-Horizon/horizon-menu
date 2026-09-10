import React, { useEffect, useRef } from 'react';

const PaperFeedNav = ({ categories = [], activeCategory, onSelectCategory }) => {
  const scrollRef = useRef(null);
  const btnRefs = useRef({});

  useEffect(() => {
    const btn = btnRefs.current[activeCategory];
    if (btn && scrollRef.current) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-[64px] sm:top-[70px] z-40 px-2 sm:px-4 my-2 font-mono">
      <nav className="max-w-xl mx-auto rounded-lg bg-[#EAE7DF] border-2 border-[#18181B] p-1.5 shadow-sm">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* Master Item Key */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-3 py-1.5 rounded text-[11px] uppercase font-black tracking-wider transition-all border ${
              activeCategory === 'all'
                ? 'bg-black text-[#FAF8F5] border-black shadow-xs'
                : 'bg-white text-black/70 border-black/20 hover:border-black hover:text-black'
            }`}
          >
            [ALL ITEMS]
          </button>

          {/* Dynamic Register Function Keys */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded text-[11px] uppercase font-black tracking-wider transition-all border ${
                  isActive
                    ? 'bg-black text-[#FAF8F5] border-black shadow-xs'
                    : 'bg-white text-black/70 border-black/20 hover:border-black hover:text-black'
                }`}
              >
                <span className="opacity-50">F{idx + 1}:</span>
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

export default PaperFeedNav;