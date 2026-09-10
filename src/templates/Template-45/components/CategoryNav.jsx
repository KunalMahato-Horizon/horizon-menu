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
    <div className="sticky top-[64px] sm:top-[74px] z-40 px-3 sm:px-6 lg:px-8 my-2 font-serif">
      <nav className="max-w-6xl mx-auto rounded-2xl bg-[#1A1320]/95 backdrop-blur-md border border-[#D4A373]/30 p-1.5 shadow-lg">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Offerings Tab */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs uppercase font-sans font-bold tracking-wider transition-all duration-200 border ${
              activeCategory === 'all'
                ? 'bg-[#D4A373] text-[#18111D] border-[#D4A373] shadow-sm'
                : 'bg-[#221828] text-zinc-300 border-transparent hover:text-white hover:bg-[#2A1E31]'
            }`}
          >
            [ All Courses ]
          </button>

          {/* Category Tabs */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-sans uppercase font-bold tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#D4A373] text-[#18111D] border-[#D4A373] shadow-sm'
                    : 'bg-[#221828] text-zinc-300 border-transparent hover:text-white hover:bg-[#2A1E31]'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-[#18111D]' : 'text-[#D4A373]'}`}>
                  0{idx + 1}
                </span>
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