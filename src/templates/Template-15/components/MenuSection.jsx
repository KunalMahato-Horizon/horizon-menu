import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const sectionNumber = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28">
      {/* Brutalist Section Ribbon */}
      <div className="p-3.5 rounded-2xl bg-[#FFE500] border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-[#18181B] text-[#FFE500] flex items-center justify-center font-mono font-black text-xs">
            {sectionNumber}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-xl">{icon}</span>}
            <h2 className="text-lg sm:text-xl font-black text-[#18181B] uppercase tracking-tight">
              {name}
            </h2>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-lg bg-white border-2 border-[#18181B] text-xs font-mono font-black uppercase text-[#18181B]">
          {items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}
        </span>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-[#52525B] font-medium mb-4 px-1">
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