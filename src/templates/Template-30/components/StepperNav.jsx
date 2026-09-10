import React from 'react';

const StepperNav = ({
  business,
  categories,
  activeCourseIndex,
  onSelectCourse,
  onOpenDirectory,
  dietaryFilter,
  setDietaryFilter,
}) => {
  const { name = 'ATELIER LINEAR', logo = null, location = 'Table 12' } = business || {};

  return (
    <header className="sticky top-0 z-40 bg-[#0E1015]/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 py-3 font-mono">
      <div className="max-w-7xl mx-auto space-y-3">
        {/* Top Operational Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF5722] text-black flex items-center justify-center font-black text-xs shadow-md shadow-[#FF5722]/20">
              {logo || '30'}
            </div>
            <div>
              <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider block leading-none">
                {name}
              </span>
              <span className="text-[9px] text-[#FF5722] font-bold uppercase mt-0.5 block">
                {location} • BANQUET STEPPER
              </span>
            </div>
          </div>

          {/* Quick Dietary Filters & Directory Trigger */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/[0.05] p-1 rounded-lg border border-white/10 text-[10px]">
              {['all', 'veg', 'non-veg'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setDietaryFilter(filter)}
                  className={`px-2 py-0.5 rounded uppercase font-bold transition-all ${
                    dietaryFilter === filter
                      ? 'bg-white text-black'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {filter === 'non-veg' ? 'meat' : filter}
                </button>
              ))}
            </div>

            <button
              onClick={onOpenDirectory}
              className="px-2.5 py-1 rounded-lg bg-white/[0.08] hover:bg-white/15 border border-white/15 text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
            >
              Index ☰
            </button>
          </div>
        </div>

        {/* Course Stepper Progress Rail */}
        <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pt-1 pb-0.5">
          {categories.map((cat, idx) => {
            const isActive = activeCourseIndex === idx;
            const isCompleted = idx < activeCourseIndex;

            return (
              <button
                key={cat.id || idx}
                onClick={() => onSelectCourse(idx)}
                className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${
                  isActive
                    ? 'bg-[#FF5722] text-black border-[#FF5722] shadow-md shadow-[#FF5722]/20'
                    : isCompleted
                    ? 'bg-white/[0.08] text-white border-white/20'
                    : 'bg-white/[0.02] text-white/40 border-white/5 hover:text-white/70'
                }`}
              >
                <span className="text-[9px] opacity-70">
                  {isCompleted ? '✓' : `0${idx + 1}`}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default StepperNav;