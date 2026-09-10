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
      className="mb-12 scroll-mt-24"
      aria-labelledby={`section-title-${id}`}
    >
      {/* Category Header - Bold geometric style */}
      <div className="mb-6">
        <div className="flex items-center justify-between border-b-2 border-black pb-3">
          <div className="flex items-center gap-3">
            {icon && (
              <span className="text-xl" aria-hidden="true">
                {icon}
              </span>
            )}
            <h2 
              id={`section-title-${id}`}
              className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight"
            >
              {name}
            </h2>
          </div>
          <span className="text-sm font-mono font-bold text-black/40">
            {String(items.length).padStart(2, '0')}
          </span>
        </div>
        
        {description && (
          <p className="text-sm text-black/50 mt-2">
            {description}
          </p>
        )}
      </div>

      {/* Items List */}
      <div className="border-t border-black/10">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;