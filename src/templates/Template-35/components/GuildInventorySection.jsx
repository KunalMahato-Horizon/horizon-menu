import React from 'react';
import ItemCard from './ItemCard';

const GuildInventorySection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const bagNumber = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28 font-mono">
      {/* Pouch Header Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#151924] border-2 border-[#F59E0B]/40 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#F59E0B] text-black font-black text-sm flex items-center justify-center shadow-md">
            {bagNumber}
          </div>
          <div>
            <h2 className="text-base sm:text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <span>{name}</span>
            </h2>
            {description && (
              <p className="text-xs text-zinc-400 font-sans italic mt-0.5">
                "{description}"
              </p>
            )}
          </div>
        </div>

        <span className="text-[10px] text-[#FDE68A] uppercase bg-black/40 px-3 py-1 rounded-xl border border-[#F59E0B]/30 self-start sm:self-auto">
          {items.length} {items.length === 1 ? 'Inventory Item' : 'Inventory Items'}
        </span>
      </div>

      {/* Responsive Bag Grid: 1 Col (Mobile) -> 2 Col (Tablet) -> 3 Col (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {items.map((item, itemIdx) => (
          <ItemCard
            key={item.id || item.name}
            item={item}
            slotIndex={itemIdx}
          />
        ))}
      </div>
    </section>
  );
};

export default GuildInventorySection;