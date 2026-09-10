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
      <nav className="max-w-5xl mx-auto rounded-lg bg-[#F8F5EE]/95 backdrop-blur-md border border-[#D8CEBA] p-1.5 shadow-sm">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Courses Tab */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-1.5 rounded-sm text-xs font-serif font-bold tracking-wide uppercase transition-all duration-200 border ${
              activeCategory === 'all'
                ? 'bg-[#0E261C] text-[#C5A059] border-[#C5A059] shadow-xs'
                : 'text-[#4A473D] border-transparent hover:text-[#0E261C] hover:bg-[#EFE9DB]'
            }`}
          >
            Toute La Carte
          </button>

          {/* Dynamic Categories */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-sm text-xs font-serif font-bold tracking-wide uppercase transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#0E261C] text-[#C5A059] border-[#C5A059] shadow-xs'
                    : 'text-[#4A473D] border-transparent hover:text-[#0E261C] hover:bg-[#EFE9DB]'
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