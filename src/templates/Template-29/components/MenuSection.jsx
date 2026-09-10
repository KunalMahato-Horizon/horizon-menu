import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const sectionCode = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28">
      {/* Section Ribbon Header */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0E1015] border border-white/10 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-lg bg-white text-black font-mono font-black text-xs">
            {sectionCode}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-base">{icon}</span>}
            <h2 className="text-base sm:text-xl font-mono font-black text-white uppercase tracking-wider">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase bg-white/[0.03] px-2.5 py-1 rounded-lg border border-white/5">
          {items.length} {items.length === 1 ? 'Sculpture' : 'Sculptures'}
        </span>
      </div>

      {description && (
        <p className="text-xs text-zinc-400 font-mono mb-4 px-1">
          // {description}
        </p>
      )}

      {/* Responsive Grid: 1 Col (Mobile) -> 2 Col (Tablet) -> 3 Col (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {items.map((item, itemIdx) => (
          <MenuItem
            key={item.id || item.name}
            item={item}
            sculptureCode={`${sectionCode}.${String(itemIdx + 1).padStart(2, '0')}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;