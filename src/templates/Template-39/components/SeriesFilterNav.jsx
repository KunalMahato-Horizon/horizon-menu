import React, { useEffect, useRef } from 'react';

const SERIES_COLORS = [
  { name: 'Alkali Starters', color: 'border-cyan-500 text-cyan-300 bg-cyan-950/30' },
  { name: 'Transition Mains', color: 'border-amber-500 text-amber-300 bg-amber-950/30' },
  { name: 'Halogen Hearth', color: 'border-rose-500 text-rose-300 bg-rose-950/30' },
  { name: 'Noble Elixirs', color: 'border-purple-500 text-purple-300 bg-purple-950/30' },
  { name: 'Rare Earth Sweets', color: 'border-emerald-500 text-emerald-300 bg-emerald-950/30' },
];

const SeriesFilterNav = ({ categories = [], activeCategory, onSelectCategory }) => {
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
      <nav className="max-w-7xl mx-auto rounded-2xl bg-[#080A0F]/95 backdrop-blur-xl border border-cyan-500/30 p-1.5 shadow-2xl">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* Complete Matrix Button */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs uppercase font-black tracking-wider transition-all border ${
              activeCategory === 'all'
                ? 'bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            [ All Elements // Matrix ]
          </button>

          {/* Dynamic Series Filters */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            const style = SERIES_COLORS[idx % SERIES_COLORS.length];

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all border ${
                  isActive
                    ? `${style.color} shadow-sm font-black`
                    : 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-[10px] opacity-60">SERIES 0{idx + 1}</span>
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

export default SeriesFilterNav;