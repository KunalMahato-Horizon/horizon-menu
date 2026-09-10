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
      <nav className="max-w-5xl mx-auto rounded-2xl bg-[#FBF8F1] border-2 border-[#18181B] p-1.5 shadow-[4px_4px_0px_0px_#18181B]">
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Tab */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-mono font-black uppercase tracking-wider border-2 border-[#18181B] transition-all duration-150 ${
              activeCategory === 'all'
                ? 'bg-[#18181B] text-[#FFE500] shadow-[2px_2px_0px_0px_#FF5733]'
                : 'bg-white text-[#18181B] hover:bg-[#FFE500]'
            }`}
          >
            All Eats
          </button>

          {/* Categories */}
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-black uppercase tracking-wider border-2 border-[#18181B] transition-all duration-150 ${
                  isActive
                    ? 'bg-[#18181B] text-[#FFE500] shadow-[2px_2px_0px_0px_#FF5733]'
                    : 'bg-white text-[#18181B] hover:bg-[#FFE500]'
                }`}
              >
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

export default CategoryNav;