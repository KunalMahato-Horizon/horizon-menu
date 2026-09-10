import React, { useEffect, useRef } from 'react';

const GateSelectorNav = ({ categories = [], activeCategory, onSelectCategory }) => {
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
      <nav className="max-w-7xl mx-auto rounded-xl bg-[#0A1424]/95 backdrop-blur-xl border-2 border-white/15 p-1.5 shadow-2xl">
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Gates Pass */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-lg text-xs uppercase font-black tracking-wider transition-all border ${
              activeCategory === 'all'
                ? 'bg-[#FF4B26] text-white border-[#FF4B26] shadow-md shadow-[#FF4B26]/30'
                : 'bg-[#162947]/70 text-zinc-300 border-white/10 hover:text-white hover:bg-[#162947]'
            }`}
          >
            [ Complete Flight Manifest ]
          </button>

          {/* Individual Departure Gates */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs uppercase font-bold tracking-wider transition-all border ${
                  isActive
                    ? 'bg-white text-black border-white shadow-md font-black'
                    : 'bg-[#162947]/70 text-zinc-300 border-white/10 hover:text-white hover:bg-[#162947]'
                }`}
              >
                <span className={`text-[10px] font-black ${isActive ? 'text-[#FF4B26]' : 'text-[#FFC72C]'}`}>
                  GATE 0{idx + 1}
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

export default GateSelectorNav;