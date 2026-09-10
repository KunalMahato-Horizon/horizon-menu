import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  return (
    <section id={`category-${id}`} className="mb-12 scroll-mt-52 font-serif">
      {/* Section Header */}
      <div className="p-4 rounded-2xl bg-[#19111D] border border-[#D4A373]/25 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#271B2B] text-[#D4A373] font-sans font-bold text-xs flex items-center justify-center border border-[#D4A373]/30">
            0{index + 1}
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-[#F4EBD9] flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <span>{name}</span>
            </h2>
            {description && (
              <p className="text-xs font-sans text-[#D4A373]/80 italic mt-0.5">
                "{description}"
              </p>
            )}
          </div>
        </div>

        <span className="text-[10px] font-sans text-zinc-400 uppercase bg-black/30 px-3 py-1 rounded-full border border-white/5 self-start sm:self-auto">
          {items.length} {items.length === 1 ? 'Preparation' : 'Preparations'}
        </span>
      </div>

      {/* Grid: 1 Col (Mobile) -> 2 Col (Tablet/Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItem key={item.id || item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;