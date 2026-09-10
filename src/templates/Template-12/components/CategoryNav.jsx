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
    <div className="sticky top-16 z-40 px-4 sm:px-6 my-4">
      <nav className="max-w-5xl mx-auto rounded-xl bg-[#F3F1EC]/95 backdrop-blur-md border border-[#E2DDD3] p-1.5 shadow-xs">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Filter */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-1.5 rounded-lg text-xs font-mono font-medium uppercase tracking-wider transition-all ${
              activeCategory === 'all'
                ? 'bg-[#4A5844] text-[#F3F1EC] font-bold shadow-xs'
                : 'text-[#5C5950] hover:text-[#1F211D] hover:bg-[#E8E4DC]'
            }`}
          >
            All Plates
          </button>

          {/* Category Tabs */}
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-mono font-medium uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#4A5844] text-[#F3F1EC] font-bold shadow-xs'
                    : 'text-[#5C5950] hover:text-[#1F211D] hover:bg-[#E8E4DC]'
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