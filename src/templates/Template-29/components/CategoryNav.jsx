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
      <nav className="max-w-7xl mx-auto rounded-2xl bg-[#0E1015]/95 backdrop-blur-xl border border-white/10 p-1.5 shadow-2xl">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Exhibits */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 border ${
              activeCategory === 'all'
                ? 'bg-white text-black border-white shadow-lg'
                : 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            [ All Sculptures ]
          </button>

          {/* Individual Category Tabs */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00F5D4] to-[#F72585] text-black border-transparent shadow-lg font-black'
                    : 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-[10px] opacity-50">0{idx + 1}</span>
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