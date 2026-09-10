import React, { useEffect, useRef } from 'react';

// Color themes mapped to distinct transit lines
const LINE_COLORS = [
  { line: 'LINE 1', code: 'CRIMSON', color: '#FF3344', border: 'border-[#FF3344]' },
  { line: 'LINE 2', code: 'EMERALD', color: '#00D26A', border: 'border-[#00D26A]' },
  { line: 'LINE 3', code: 'AMBER', color: '#FFB800', border: 'border-[#FFB800]' },
  { line: 'LINE 4', code: 'SAPPHIRE', color: '#0090FF', border: 'border-[#0090FF]' },
  { line: 'LINE 5', code: 'PURPLE', color: '#B5179E', border: 'border-[#B5179E]' },
];

const MetroLineNav = ({ categories = [], activeCategory, onSelectCategory }) => {
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
      <nav className="max-w-6xl mx-auto rounded-2xl bg-[#0C0E14]/95 backdrop-blur-xl border border-white/15 p-1.5 shadow-2xl">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* All Lines Tab */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all border ${
              activeCategory === 'all'
                ? 'bg-white text-black border-white shadow-lg'
                : 'bg-transparent text-white/50 border-transparent hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            [ Complete Transit Map ]
          </button>

          {/* Dynamic Subway Lines */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            const style = LINE_COLORS[idx % LINE_COLORS.length];

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all border ${
                  isActive
                    ? 'bg-white/10 text-white shadow-md'
                    : 'bg-transparent text-white/50 border-transparent hover:text-white hover:bg-white/[0.05]'
                }`}
                style={{ borderColor: isActive ? style.color : 'transparent' }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                  style={{ backgroundColor: style.color }}
                />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MetroLineNav;