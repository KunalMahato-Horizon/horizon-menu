import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const actNumber = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-24">
      {/* Act Header Ribbon */}
      <div className="p-4 sm:p-5 rounded-3xl bg-[#11131B] border border-white/[0.08] mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#DFB76C] text-[#090A0F] font-mono font-black text-xs">
            ACT {actNumber}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-lg">{icon}</span>}
            <h2 className="text-lg sm:text-xl font-serif font-black text-white uppercase tracking-wide">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-xs font-mono text-white/40 uppercase self-start sm:self-auto">
          {items.length} {items.length === 1 ? 'Flight Dish' : 'Flight Dishes'}
        </span>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-white/50 font-serif italic mb-4 px-2 max-w-2xl">
          "{description}"
        </p>
      )}

      {/* Grid of Flight Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, itemIdx) => (
          <MenuItem
            key={item.id || item.name}
            item={item}
            plateCode={`${actNumber}.${String(itemIdx + 1).padStart(2, '0')}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;