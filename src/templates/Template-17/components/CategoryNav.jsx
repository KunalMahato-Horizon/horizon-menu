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
      <nav className="max-w-5xl mx-auto rounded-full bg-[#F9F6F0]/95 backdrop-blur-md border border-[#E5DDD0] p-1.5 shadow-sm">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-1"
        >
          {/* All Filter */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-[#1F2B20] text-[#E8A948] shadow-xs'
                : 'text-[#4E564E] hover:text-[#1F2B20] hover:bg-[#EFE8DC]'
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
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#D96B43] text-white shadow-xs'
                    : 'text-[#4E564E] hover:text-[#1F2B20] hover:bg-[#EFE8DC]'
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