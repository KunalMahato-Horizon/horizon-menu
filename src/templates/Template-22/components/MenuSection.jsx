import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const sectionCode = `0${index + 1}`;

  return (
    <section id={`category-${id}`} className="mb-12 scroll-mt-28">
      {/* Editorial Section Ribbon */}
      <div className="border-b-2 border-[#0F0F11] pb-2 mb-2 flex items-baseline justify-between font-mono">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 bg-[#0F0F11] text-white font-black text-xs rounded">
            SECTION {sectionCode}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span>{icon}</span>}
            <h2 className="text-base sm:text-lg font-black text-[#0F0F11] uppercase tracking-wider">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-xs font-bold text-black/40 uppercase">
          {items.length} {items.length === 1 ? 'UNIT' : 'UNITS'}
        </span>
      </div>

      {description && (
        <p className="text-xs font-mono text-black/50 mb-3 px-1">
          // {description}
        </p>
      )}

      {/* Ledger Container */}
      <div className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-xs">
        {items.map((item, itemIdx) => (
          <MenuItem
            key={item.id || item.name}
            item={item}
            ledgerNumber={`${sectionCode}.${String(itemIdx + 1).padStart(2, '0')}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;