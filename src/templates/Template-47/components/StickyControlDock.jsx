import React, { useEffect, useRef } from 'react';

const StickyControlDock = ({
  searchQuery,
  onSearchChange,
  dietaryFilter,
  onDietaryChange,
  totalResults,
  categories = [],
  activeCategory,
  onSelectCategory,
}) => {
  const scrollRef = useRef(null);
  const btnRefs = useRef({});

  useEffect(() => {
    const btn = btnRefs.current[activeCategory];
    if (btn && scrollRef.current) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-0 z-40 bg-[#070E1E]/95 backdrop-blur-md pt-2.5 pb-2.5 px-3 sm:px-6 lg:px-8 border-b border-[#38BDF8]/25 shadow-2xl shadow-black/80 font-serif">
      <div className="max-w-6xl mx-auto space-y-2">
        {/* Tier 1: Search Console & Dietary Toggles */}
        <div className="p-2 rounded-2xl bg-[#0B1733] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center gap-2.5 font-sans shadow-md">
          {/* Search Box */}
          <div className="relative w-full flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#38BDF8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

            <input
              type="text"
              placeholder="Search diplomatic roasts, Dal Raisina, Awadhi biryani, mithai..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-9 py-1.5 bg-[#060D1D] rounded-xl text-xs sm:text-sm text-[#FDFBF7] placeholder-zinc-500 border border-transparent focus:border-[#38BDF8]/60 focus:outline-none transition-all font-serif font-bold"
            />

            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Dietary Switches */}
          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => onDietaryChange('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase transition-all ${
                dietaryFilter === 'all'
                  ? 'bg-[#38BDF8] text-[#070E1E] shadow-sm'
                  : 'bg-[#112248] text-zinc-300 hover:text-white'
              }`}
            >
              All ({totalResults})
            </button>
            <button
              onClick={() => onDietaryChange('veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black uppercase transition-all ${
                dietaryFilter === 'veg'
                  ? 'bg-[#046A38] text-white shadow-sm'
                  : 'bg-[#112248] text-zinc-300 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Shakahari (Veg)
            </button>
            <button
              onClick={() => onDietaryChange('non-veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black uppercase transition-all ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#FF671F] text-white shadow-sm'
                  : 'bg-[#112248] text-zinc-300 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-200" />
              Mansahari (Feast)
            </button>
          </div>
        </div>

        {/* Tier 2: State Tableaux Horizontal Tabs */}
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pt-0.5"
        >
          <button
            ref={(el) => (btnRefs.current['all'] = el)}
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs uppercase font-sans font-black tracking-wider transition-all duration-200 border ${
              activeCategory === 'all'
                ? 'bg-[#D4AF37] text-[#070E1E] border-[#D4AF37] shadow-sm'
                : 'bg-[#0B1733] text-zinc-300 border-white/10 hover:text-white hover:bg-[#112248]'
            }`}
          >
            [ All State Pavilions ]
          </button>

          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                ref={(el) => (btnRefs.current[cat.id] = el)}
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-sans uppercase font-black tracking-wider transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#38BDF8] text-[#070E1E] border-[#38BDF8] shadow-sm'
                    : 'bg-[#0B1733] text-zinc-300 border-white/10 hover:text-white hover:bg-[#112248]'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-[#070E1E]' : 'text-[#FF671F]'}`}>
                  STATE 0{idx + 1}
                </span>
                {cat.icon && <span className="text-xs">{cat.icon}</span>}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StickyControlDock;