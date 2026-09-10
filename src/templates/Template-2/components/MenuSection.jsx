import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category }) => {
  const {
    id = "",
    name = "",
    description = "",
    icon = null,
    items = [],
  } = category || {};

  if (!items || items.length === 0) return null;

  return (
    <section
      id={`category-${id}`}
      className="mb-14 sm:mb-18 scroll-mt-28"
      aria-labelledby={`section-title-${id}`}
    >
      {/* Category Section Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex flex-col items-center max-w-lg mx-auto">
          
          {/* Icon Badge */}
          {icon && (
            <div className="mb-3 relative group">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-amber-900/[0.04] border border-amber-900/10 shadow-xs flex items-center justify-center text-2xl select-none">
                {icon}
              </div>
            </div>
          )}

          {/* Section Title & Dish Count */}
          <div className="flex items-center justify-center gap-2.5">
            <h2
              id={`section-title-${id}`}
              className="text-2xl sm:text-3xl font-black text-amber-950 font-serif tracking-tight"
            >
              {name}
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-900/10 text-amber-900">
              {items.length}
            </span>
          </div>

          {/* Tagline / Section Description */}
          {description && (
            <p className="mt-1.5 text-sm sm:text-base text-stone-600 font-normal leading-relaxed italic">
              {description}
            </p>
          )}

          {/* Warm Divider */}
          <div className="mt-3.5 flex items-center justify-center gap-2.5">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-amber-300" />
            <span className="text-amber-500 text-[10px] select-none">✦</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-amber-300" />
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;