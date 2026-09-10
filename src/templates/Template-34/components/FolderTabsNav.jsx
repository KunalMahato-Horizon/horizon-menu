import React, { useEffect, useRef } from 'react';

const FolderTabsNav = ({ categories = [], activeCategory, onSelectCategory }) => {
  const scrollRef = useRef(null);
  const btnRefs = useRef({});

  useEffect(() => {
    const btn = btnRefs.current[activeCategory];
    if (btn && scrollRef.current) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-[68px] sm:top-[76px] z-40 px-3 sm:px-6 lg:px-8 my-2 font-mono">
      <nav className="max-w-6xl mx-auto">
        <div
          ref={scrollRef}
          className="flex items-end gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pt-2 px-1"
        >
          {/* Master File Tab */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-t-xl text-xs uppercase font-black tracking-wider transition-all border-t-2 border-x-2 border-[#1A1A1A] ${
              activeCategory === 'all'
                ? 'bg-[#F5EFE1] text-[#1A1A1A] shadow-[2px_-2px_0px_0px_#1A1A1A] -mb-[2px] pb-3 z-10'
                : 'bg-[#DFD3B5] text-[#1A1A1A]/70 hover:bg-[#E8DFC7] hover:text-[#1A1A1A]'
            }`}
          >
            [ Complete Archive ]
          </button>

          {/* Staggered Folder Tabs */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-t-xl text-xs uppercase font-black tracking-wider transition-all border-t-2 border-x-2 border-[#1A1A1A] ${
                  isActive
                    ? 'bg-[#F5EFE1] text-[#1A1A1A] shadow-[2px_-2px_0px_0px_#1A1A1A] -mb-[2px] pb-3 z-10'
                    : 'bg-[#DFD3B5] text-[#1A1A1A]/70 hover:bg-[#E8DFC7] hover:text-[#1A1A1A]'
                }`}
              >
                <span className="text-[10px] text-[#B91C1C]">TAB 0{idx + 1}</span>
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

export default FolderTabsNav;