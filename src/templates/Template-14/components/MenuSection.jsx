import React from 'react';
import MenuItem from './MenuItem';

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const sectionNumeral = romanNumerals[index] || String(index + 1);

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28">
      {/* Editorial Section Banner */}
      <div className="flex items-baseline justify-between pb-3 mb-4 border-b-2 border-[#0E261C]">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-serif font-black text-[#C5A059] bg-[#0E261C] px-2 py-0.5 rounded-xs">
            {sectionNumeral}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-base">{icon}</span>}
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0E261C] tracking-tight">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-xs font-mono text-[#787263] uppercase">
          {items.length} {items.length === 1 ? 'Plat' : 'Plats'}
        </span>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-[#787263] font-serif italic mb-4 max-w-xl">
          "{description}"
        </p>
      )}

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item) => (
          <MenuItem key={item.id || item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;