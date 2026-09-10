import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category }) => {
  const {
    id = "",
    name = "",
    description = "",
    icon = null,
    items = [],
  } = category;

  if (items.length === 0) return null;

  return (
    <section 
      id={`category-${id}`} 
      className="mb-14 md:mb-16 scroll-mt-32"
      aria-labelledby={`section-title-${id}`}
    >
      {/* Minimal header with line */}
      <div className="mb-8 flex items-end justify-between">
        <div className="flex-1">
          <h2 
            id={`section-title-${id}`}
            className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-2"
          >
            {icon && <span aria-hidden="true">{icon}</span>}
            {name}
          </h2>
          {description && (
            <p className="text-sm text-slate-400 mt-1">
              {description}
            </p>
          )}
        </div>
        
        {/* Decorative line */}
        <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent ml-6 mb-2"></div>
        
        {/* Item count */}
        <span className="text-xs font-medium text-slate-500 ml-4 mb-2">
          {items.length} items
        </span>
      </div>

      {/* Items List */}
      <div className="divide-y divide-slate-800/50">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;