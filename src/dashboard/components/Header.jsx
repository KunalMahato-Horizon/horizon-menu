import React from 'react';

const Header = ({ title = "Menus", searchQuery, onSearchChange, onOpenNewModal }) => {
  return (
    <header className="h-16 border-b border-[#1E293B] bg-[#0F172A]/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
      <div>
        <h1 className="text-base font-semibold text-[#F8FAFC] tracking-tight">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative w-56 sm:w-64">
          <input
            type="text"
            placeholder="Filter menus..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs font-medium rounded-lg bg-[#111827] border border-[#1E293B] text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#0D9488] transition-colors"
          />
          <svg
            className="w-3.5 h-3.5 text-[#94A3B8] absolute left-2.5 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onOpenNewModal}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-semibold tracking-wide transition-colors shadow-sm shadow-[#0D9488]/20"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>New Menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;