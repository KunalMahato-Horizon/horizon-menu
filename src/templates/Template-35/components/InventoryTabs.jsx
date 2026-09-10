import React, { useEffect, useRef } from 'react';

const InventoryTabs = ({ categories = [], activeCategory, onSelectCategory }) => {
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
      <nav className="max-w-7xl mx-auto rounded-2xl bg-[#0B0D13]/95 backdrop-blur-xl border-2 border-[#F59E0B]/30 p-1.5 shadow-2xl">
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5 px-0.5"
        >
          {/* Master Inventory Bag */}
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-2 rounded-xl text-xs uppercase font-black tracking-wider transition-all border ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0B0D13] border-[#F59E0B] shadow-md shadow-[#F59E0B]/20'
                : 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            [ All Bags // Satchel ]
          </button>

          {/* Dynamic Inventory Pouches */}
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all border ${
                  isActive
                    ? 'bg-[#F59E0B]/20 text-[#FDE68A] border-[#F59E0B] shadow-sm'
                    : 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span className="text-[10px] text-[#F59E0B]">POUCH 0{idx + 1}</span>
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

export default InventoryTabs;