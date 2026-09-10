import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const sectionCode = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-36 font-serif">
      {/* State Pavilion Section Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0C1733] via-[#102046] to-[#0C1733] border border-[#38BDF8]/30 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#060D1E] text-[#38BDF8] font-sans font-black text-xs flex items-center justify-center border border-[#38BDF8]/50 shadow-md">
            {sectionCode}
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide text-[#FDFBF7] flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <span>{name}</span>
            </h2>
            {description && (
              <p className="text-xs font-sans text-[#38BDF8]/80 italic mt-0.5">
                "{description}"
              </p>
            )}
          </div>
        </div>

        <span className="text-[10px] font-sans font-black text-[#D4AF37] uppercase bg-black/40 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
          {items.length} {items.length === 1 ? 'Regional Dish' : 'Regional Dishes'}
        </span>
      </div>

      {/* Grid: 1 Col (Mobile) -> 2 Col (Tablet/Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {items.map((item, itemIdx) => (
          <MenuItem
            key={item.id || item.name}
            item={item}
            docketNumber={`${sectionCode}.${String(itemIdx + 1).padStart(2, '0')}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;