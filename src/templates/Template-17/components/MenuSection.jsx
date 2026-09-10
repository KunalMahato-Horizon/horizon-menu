import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28">
      {/* Category Ribbon */}
      <div className="flex items-baseline justify-between pb-3 mb-4 border-b-2 border-[#1F2B20]/20">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-mono font-bold text-[#E8A948] bg-[#1F2B20] px-2 py-0.5 rounded-full">
            0{index + 1}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-lg">{icon}</span>}
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1F2B20] tracking-tight">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-[#D96B43] uppercase">
          {items.length} {items.length === 1 ? 'Plate' : 'Plates'}
        </span>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-[#4E564E] font-serif italic mb-4 max-w-xl">
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