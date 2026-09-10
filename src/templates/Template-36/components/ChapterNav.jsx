import React, { useEffect, useRef } from 'react';

const ChapterNav = ({ categories = [], activeCategory, onSelectCategory }) => {
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
      <nav className="max-w-7xl mx-auto rounded-xl bg-white border-3 border-black p-1.5 shadow-[4px_4px_0px_0px_#000]">
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Chapters Tab */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all border-2 border-black ${
              activeCategory === 'all'
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_#000]'
                : 'bg-white text-black hover:bg-yellow-300'
            }`}
          >
            [ Complete Manga ]
          </button>

          {/* Individual Chapters */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all border-2 border-black ${
                  isActive
                    ? 'bg-yellow-300 text-black shadow-[2px_2px_0px_0px_#000]'
                    : 'bg-white text-black hover:bg-yellow-100'
                }`}
              >
                <span className="text-[10px] text-red-600 font-bold">CH.0{idx + 1}</span>
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

export default ChapterNav;