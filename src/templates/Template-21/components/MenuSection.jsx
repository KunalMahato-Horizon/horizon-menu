import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const sectionIndex = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28">
      {/* Folio Banner Header */}
      <div className="flex items-baseline justify-between pb-3 mb-4 border-b-2 border-[#1E2721]">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-mono font-bold text-[#C4923C] bg-[#1E2721] px-2 py-0.5 rounded-xs">
            FOLIO {sectionIndex}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-base">{icon}</span>}
            <h2 className="text-xl sm:text-2xl font-serif font-black text-[#1E2721] tracking-tight">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-xs font-mono text-[#964F33] font-bold uppercase">
          {items.length} {items.length === 1 ? 'Specimen' : 'Specimens'} Documented
        </span>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-[#6A726A] font-serif italic mb-4 max-w-xl">
          "{description}"
        </p>
      )}

      {/* Grid of Specimens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, itemIdx) => (
          <MenuItem
            key={item.id || item.name}
            item={item}
            specimenCode={`${String.fromCharCode(65 + index)}-${String(itemIdx + 1).padStart(2, '0')}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;