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
      <nav className="max-w-5xl mx-auto rounded-2xl bg-[#FAF5EC]/95 backdrop-blur-md border border-[#E3DAC9] p-1.5 shadow-sm">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* Master Reel */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-[#19181A] text-[#FAF5EC] shadow-sm'
                : 'text-[#4E4B45] hover:text-[#19181A] hover:bg-[#EDE5D6]'
            }`}
          >
            [ Master Reel ]
          </button>

          {/* Categories */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#D9822B] text-white shadow-sm'
                    : 'text-[#4E4B45] hover:text-[#19181A] hover:bg-[#EDE5D6]'
                }`}
              >
                {cat.icon && <span className="text-xs">{cat.icon}</span>}
                <span>Side {String.fromCharCode(65 + idx)}: {cat.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default CategoryNav;