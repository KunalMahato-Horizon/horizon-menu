import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28">
      {/* Section Slate Header */}
      <div className="p-4 rounded-2xl bg-[#121620] border border-white/10 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-lg bg-[#D4FF00] text-[#0A0C10] font-mono font-black text-xs">
            0{index + 1}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-lg">{icon}</span>}
            <h2 className="text-base sm:text-xl font-mono font-black text-white uppercase tracking-wider">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-[10px] font-mono font-bold text-white/40 uppercase bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/5">
          {items.length} {items.length === 1 ? 'UNIT' : 'UNITS'}
        </span>
      </div>

      {description && (
        <p className="text-xs text-white/50 font-mono mb-4 px-1">
          // {description}
        </p>
      )}

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, itemIndex) => (
          <MenuItem
            key={item.id || item.name}
            item={item}
            isSpotlight={itemIndex === 0 && items.length > 2}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;