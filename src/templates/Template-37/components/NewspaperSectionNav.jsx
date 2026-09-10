import React, { useEffect, useRef } from 'react';

const NewspaperSectionNav = ({ categories = [], activeCategory, onSelectCategory }) => {
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
      <nav className="max-w-7xl mx-auto rounded-xl bg-white border-2 border-black p-1.5 shadow-[3px_3px_0px_0px_#121212]">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* Complete Paper Tab */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded text-xs font-black uppercase tracking-wider transition-all border ${
              activeCategory === 'all'
                ? 'bg-black text-[#F5EFEB] border-black shadow-xs'
                : 'bg-transparent text-black/60 border-transparent hover:bg-[#F5EFEB] hover:text-black'
            }`}
          >
            [ All Gazette Sections ]
          </button>

          {/* Newspaper Sections */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            const secLetter = String.fromCharCode(65 + idx);

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-black uppercase tracking-wider transition-all border ${
                  isActive
                    ? 'bg-[#8B0000] text-white border-[#8B0000] shadow-xs'
                    : 'bg-transparent text-black/60 border-transparent hover:bg-[#F5EFEB] hover:text-black'
                }`}
              >
                <span className="text-[10px] opacity-75">SEC. {secLetter}</span>
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

export default NewspaperSectionNav;