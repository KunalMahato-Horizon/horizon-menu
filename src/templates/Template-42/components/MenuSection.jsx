import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  return (
    <section id={`category-${id}`} className="mb-12 scroll-mt-28">
      {/* Editorial Section Header */}
      <div className="flex items-baseline justify-between pb-3 mb-4 border-b border-[#1A1918]/15">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-sans font-bold text-[#9E5A38]">
            0{index + 1}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-base">{icon}</span>}
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1918] tracking-tight">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-xs font-sans text-[#736E65]">
          {items.length} {items.length === 1 ? 'Dish' : 'Dishes'}
        </span>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-[#57534D] font-serif italic mb-4 max-w-xl">
          "{description}"
        </p>
      )}

      {/* Balanced 1-to-2 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item) => (
          <MenuItem key={item.id || item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;