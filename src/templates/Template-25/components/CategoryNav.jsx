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
      <nav className="max-w-5xl mx-auto rounded-2xl bg-[#F0F4F8]/95 backdrop-blur-md border border-[#CBD5E1] p-1.5 shadow-sm">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Courses Tab */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 border ${
              activeCategory === 'all'
                ? 'bg-[#0B192C] text-[#38BDF8] border-[#0B192C] shadow-xs'
                : 'bg-white text-[#475569] border-[#E2E8F0] hover:text-[#0B192C] hover:bg-slate-100'
            }`}
          >
            [ Complete Board ]
          </button>

          {/* Dynamic Nordic Categories */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#0B192C] text-[#38BDF8] border-[#0B192C] shadow-xs'
                    : 'bg-white text-[#475569] border-[#E2E8F0] hover:text-[#0B192C] hover:bg-slate-100'
                }`}
              >
                <span className="text-[10px] text-[#0284C7]">0{idx + 1}</span>
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