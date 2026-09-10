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
    <div className="sticky top-[68px] sm:top-[76px] z-40 px-4 sm:px-6 lg:px-8 my-2">
      <nav className="max-w-6xl mx-auto rounded-2xl bg-[#FAF9F5]/95 backdrop-blur-md border border-[#E3DFD5] p-1.5 shadow-xs">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Items Button */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-sans uppercase font-bold tracking-wider transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-[#1A1918] text-[#FAF9F5] shadow-xs'
                : 'bg-transparent text-[#736E65] hover:text-[#1A1918] hover:bg-black/5'
            }`}
          >
            All Offerings
          </button>

          {/* Categories */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-sans uppercase font-bold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1A1918] text-[#FAF9F5] shadow-xs'
                    : 'bg-transparent text-[#736E65] hover:text-[#1A1918] hover:bg-black/5'
                }`}
              >
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