import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const sectionCode = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28">
      {/* Glacial Fjord Section Ribbon */}
      <div className="flex items-baseline justify-between pb-3 mb-4 border-b-2 border-[#0B192C]">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-mono font-black text-[#38BDF8] bg-[#0B192C] px-2 py-0.5 rounded-md">
            COURSE {sectionCode}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-lg">{icon}</span>}
            <h2 className="text-xl sm:text-2xl font-serif font-black text-[#0B192C] tracking-tight">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-[#0284C7] uppercase">
          {items.length} {items.length === 1 ? 'Plate' : 'Plates'}
        </span>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-[#64748B] font-serif italic mb-4 max-w-xl">
          "{description}"
        </p>
      )}

      {/* Grid of Plates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, itemIdx) => (
          <MenuItem
            key={item.id || item.name}
            item={item}
            courseCode={`${sectionCode}.${String(itemIdx + 1).padStart(2, '0')}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;