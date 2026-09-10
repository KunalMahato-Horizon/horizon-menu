import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  return (
    <section id={`category-${id}`} className="mb-12 scroll-mt-28">
      {/* Newspaper Section Title Banner */}
      <div className="border-t-2 border-b-2 border-[#1A1A1A] py-2 mb-4">
        <div className="flex items-baseline justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-black text-[#991B1B] uppercase">
              SECTION 0{index + 1}
            </span>
            <span className="text-base text-[#1A1A1A]">•</span>
            {icon && <span className="text-sm">{icon}</span>}
            <h2 className="text-xl sm:text-2xl font-serif font-black text-[#1A1A1A] uppercase tracking-wide">
              {name}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#1A1A1A]">
            {items.length} Entries Recorded
          </span>
        </div>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-[#555555] font-serif italic mb-4 max-w-xl">
          "{description}"
        </p>
      )}

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item) => (
          <MenuItem key={item.id || item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;