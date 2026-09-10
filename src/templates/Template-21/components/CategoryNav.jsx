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
    <div className="sticky top-[68px] sm:top-[76px] z-40 px-4 sm:px-6 my-2">
      <nav className="max-w-5xl mx-auto rounded-xl bg-[#F6F3EB]/95 backdrop-blur-md border border-[#DBD4C0] p-1.5 shadow-sm">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Folios */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-1.5 rounded-md text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 border ${
              activeCategory === 'all'
                ? 'bg-[#1E2721] text-[#C4923C] border-[#C4923C]/50 shadow-xs'
                : 'text-[#4F5751] border-transparent hover:text-[#1E2721] hover:bg-[#EDE6D6]'
            }`}
          >
            [ Complete Herbarium ]
          </button>

          {/* Folio Categories */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#1E2721] text-[#C4923C] border-[#C4923C]/50 shadow-xs'
                    : 'text-[#4F5751] border-transparent hover:text-[#1E2721] hover:bg-[#EDE6D6]'
                }`}
              >
                <span className="text-[10px] opacity-50">F.0{idx + 1}</span>
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