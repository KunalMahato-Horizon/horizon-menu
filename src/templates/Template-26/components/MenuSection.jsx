import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const layerCode = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-12 scroll-mt-28 font-mono">
      {/* Layer Header Ribbon */}
      <div className="p-3 rounded-lg bg-[#071324] border border-[#00F0FF]/30 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 rounded bg-[#00F0FF] text-[#0A192F] font-black text-xs">
            LAYER {layerCode}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-sm">{icon}</span>}
            <h2 className="text-sm sm:text-base font-black text-white uppercase tracking-wider">
              {name}
            </h2>
          </div>
        </div>

        <span className="text-[10px] text-[#48CAE4] uppercase">
          {items.length} {items.length === 1 ? 'UNIT SPEC' : 'UNITS SPECIFIED'}
        </span>
      </div>

      {description && (
        <p className="text-xs text-[#8DA9C4] italic mb-3 px-1">
          // NOTE: {description}
        </p>
      )}

      {/* Grid of Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, itemIdx) => (
          <MenuItem
            key={item.id || item.name}
            item={item}
            schematicId={`${layerCode}.${String(itemIdx + 1).padStart(2, '0')}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;