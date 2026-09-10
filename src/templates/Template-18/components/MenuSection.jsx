import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const sideLetter = String.fromCharCode(65 + index);

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28">
      {/* Vinyl Groove Header Ribbon */}
      <div className="flex items-baseline justify-between pb-3 mb-4 border-b-2 border-[#19181A]">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-mono font-black text-[#FAF5EC] bg-[#19181A] px-2 py-0.5 rounded-md">
            SIDE {sideLetter}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-lg">{icon}</span>}
            <h2 className="text-xl sm:text-2xl font-serif font-black text-[#19181A] tracking-tight">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-[#D9822B] uppercase">
          {items.length} {items.length === 1 ? 'Cut' : 'Cuts'} Recorded
        </span>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-[#5A5751] font-serif italic mb-4 max-w-xl">
          "{description}"
        </p>
      )}

      {/* Grid of Tracks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, itemIdx) => (
          <MenuItem
            key={item.id || item.name}
            item={item}
            trackNumber={String(itemIdx + 1).padStart(2, '0')}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;