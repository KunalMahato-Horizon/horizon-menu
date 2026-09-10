import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28">
      {/* Symmetrical Section Header */}
      <div className="p-3.5 rounded-2xl bg-[#F5CAD2] border-2 border-[#3D141E] shadow-[3px_3px_0px_#3D141E] mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-[#3D141E] text-[#FDFBF7] flex items-center justify-center font-mono font-bold text-xs">
            0{index + 1}
          </span>
          <div className="flex items-center gap-2">
            {icon && <span className="text-lg">{icon}</span>}
            <h2 className="text-lg sm:text-xl font-serif font-black text-[#3D141E] tracking-tight">
              {name}
            </h2>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-white border border-[#3D141E] text-xs font-mono font-bold text-[#3D141E]">
          {items.length} {items.length === 1 ? 'Création' : 'Créations'}
        </span>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-[#3D141E]/70 font-serif italic mb-4 px-2 text-center sm:text-left">
          "{description}"
        </p>
      )}

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item) => (
          <MenuItem key={item.id || item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;