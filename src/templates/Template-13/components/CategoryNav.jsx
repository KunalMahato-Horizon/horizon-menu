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
    /* Note the updated sticky top offset and z-index */
    <div className="sticky top-[68px] sm:top-[76px] z-40 px-4 sm:px-6 my-2">
      <nav className="max-w-5xl mx-auto rounded-2xl bg-[#FBF9F4]/95 backdrop-blur-md border border-[#E4DCD0] p-1.5 shadow-sm">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Filter */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-[#0E3A73] text-[#FBF9F4] shadow-sm'
                : 'text-[#0E3A73]/70 hover:text-[#0E3A73] hover:bg-[#F2ECE1]'
            }`}
          >
            All Courses
          </button>

          {/* Dynamic Categories */}
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0E3A73] text-[#FBF9F4] shadow-sm'
                    : 'text-[#0E3A73]/70 hover:text-[#0E3A73] hover:bg-[#F2ECE1]'
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