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
      <nav className="max-w-5xl mx-auto rounded-full bg-[#FDFBF7]/95 backdrop-blur-md border-2 border-[#3D141E] p-1.5 shadow-[3px_3px_0px_#3D141E]">
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-1"
        >
          {/* All Filter */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-mono uppercase font-bold tracking-wider border-2 border-[#3D141E] transition-all duration-150 ${
              activeCategory === 'all'
                ? 'bg-[#3D141E] text-[#FDFBF7] shadow-[2px_2px_0px_#F5CAD2]'
                : 'bg-white text-[#3D141E] hover:bg-[#F5CAD2]'
            }`}
          >
            Toute La Carte
          </button>

          {/* Categories */}
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono uppercase font-bold tracking-wider border-2 border-[#3D141E] transition-all duration-150 ${
                  isActive
                    ? 'bg-[#3D141E] text-[#FDFBF7] shadow-[2px_2px_0px_#F5CAD2]'
                    : 'bg-white text-[#3D141E] hover:bg-[#F5CAD2]'
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