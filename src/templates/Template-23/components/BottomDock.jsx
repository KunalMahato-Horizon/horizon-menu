import React, { useEffect, useRef } from 'react';

const BottomDock = ({ categories = [], activeCategory, onSelectCategory }) => {
  const scrollRef = useRef(null);
  const btnRefs = useRef({});

  useEffect(() => {
    const btn = btnRefs.current[activeCategory];
    if (btn && scrollRef.current) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeCategory]);

  return (
    <aside
      aria-label="Tasting Acts Navigation"
      className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none"
    >
      <nav className="max-w-fit mx-auto rounded-full bg-[#090A0F]/90 backdrop-blur-2xl border border-white/15 p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] pointer-events-auto">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-w-[85vw] sm:max-w-2xl px-1"
        >
          {/* All Acts Pill */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-[#DFB76C] text-[#090A0F] shadow-[0_0_15px_rgba(223,183,108,0.4)]'
                : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            All Acts
          </button>

          {/* Individual Acts */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#DFB76C] text-[#090A0F] shadow-[0_0_15px_rgba(223,183,108,0.4)]'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span className="text-[10px] opacity-40">0{idx + 1}</span>
                {cat.icon && <span className="text-xs">{cat.icon}</span>}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default BottomDock;