import React from 'react';
import MenuItem from './MenuItem';
import { SnowCap } from './ChristmasArt';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-36 font-serif">
      {/* Section Roof with Snow Mounds */}
      <div className="relative">
        <div className="absolute -top-3 left-4 right-4 z-10 pointer-events-none">
          <SnowCap className="w-full h-3.5 text-white" />
        </div>

        <div className="p-4 sm:p-5 rounded-3xl bg-[#0D281E] border-2 border-[#D4AF37]/35 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#143D2E] text-[#D4AF37] font-sans font-black text-xs flex items-center justify-center border border-[#D4AF37]/50 shadow-md">
              0{index + 1}
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wide text-[#FFFBEB] flex items-center gap-2">
                {icon && <span>{icon}</span>}
                <span>{name}</span>
              </h2>
              {description && (
                <p className="text-xs font-sans text-amber-200/80 italic mt-0.5">
                  "{description}"
                </p>
              )}
            </div>
          </div>

          <span className="text-[10px] font-sans font-black text-[#D4AF37] uppercase bg-black/40 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
            {items.length} {items.length === 1 ? 'Banquet Item' : 'Banquet Items'}
          </span>
        </div>
      </div>

      {/* Grid: 1 Col (Mobile) -> 2 Col (Tablet/Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {items.map((item) => (
          <MenuItem key={item.id || item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;