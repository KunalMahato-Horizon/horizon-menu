import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const sectionIndex = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-16 scroll-mt-36">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-[#E2B855] px-2 py-1 rounded bg-[#E2B855]/10 border border-[#E2B855]/20">
            {sectionIndex}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-xl">{icon}</span>}
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-xs font-mono text-white/40">
          {items.length} {items.length === 1 ? 'Item' : 'Items'}
        </span>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-white/50 italic mb-6 -mt-2 max-w-xl">
          "{description}"
        </p>
      )}

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItem key={item.id || item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;