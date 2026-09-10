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
      <nav className="max-w-5xl mx-auto bg-[#F5F2EB]/95 backdrop-blur-md border-y-2 border-[#1A1A1A] py-1 shadow-sm">
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-1"
        >
          {/* Full Index */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-3.5 py-1.5 text-xs font-mono uppercase font-bold tracking-wider border transition-all ${
              activeCategory === 'all'
                ? 'bg-[#1A1A1A] text-[#F5F2EB] border-[#1A1A1A]'
                : 'bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#EAE6DD]'
            }`}
          >
            [ Complete Index ]
          </button>

          {/* Category Columns */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase font-bold tracking-wider border transition-all ${
                  isActive
                    ? 'bg-[#1A1A1A] text-[#F5F2EB] border-[#1A1A1A]'
                    : 'bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#EAE6DD]'
                }`}
              >
                {cat.icon && <span className="text-xs">{cat.icon}</span>}
                <span>Sec. {idx + 1}: {cat.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default CategoryNav;