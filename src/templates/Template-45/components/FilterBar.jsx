import React from 'react';

const FilterBar = ({
  searchQuery,
  onSearchChange,
  dietaryFilter,
  onDietaryChange,
  totalResults,
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 font-sans">
      <div className="p-2.5 rounded-2xl bg-[#1A1320] border border-[#D4A373]/25 flex flex-col sm:flex-row items-center gap-3 shadow-sm">
        {/* Search Input with Reset Button */}
        <div className="relative w-full flex-1">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4A373]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

          <input
            type="text"
            placeholder="Search dishes, saffron sweets, kebabs..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-9 py-2 bg-[#140E18] rounded-xl text-xs sm:text-sm text-[#F4EBD9] placeholder-zinc-500 border border-transparent focus:border-[#D4A373]/50 focus:outline-none transition-all font-sans"
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

        {/* Dietary Filters with Count Pill */}
        <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
          <button
            onClick={() => onDietaryChange('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
              dietaryFilter === 'all'
                ? 'bg-[#D4A373] text-[#18111D] shadow-xs'
                : 'bg-[#251A29] text-zinc-300 hover:text-white'
            }`}
          >
            All ({totalResults})
          </button>
          <button
            onClick={() => onDietaryChange('veg')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
              dietaryFilter === 'veg'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-[#251A29] text-zinc-300 hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Veg
          </button>
          <button
            onClick={() => onDietaryChange('non-veg')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
              dietaryFilter === 'non-veg'
                ? 'bg-[#A25035] text-white shadow-xs'
                : 'bg-[#251A29] text-zinc-300 hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            Non-Veg
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;