import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category, index = 0 }) => {
  const {
    id = '',
    name = '',
    description = '',
    icon = null,
    items = [],
  } = category || {};

  if (!items || items.length === 0) return null;

  const sectionNumber = String(index + 1).padStart(2, '0');

  return (
    <section
      id={`category-${id}`}
      className="mb-16 md:mb-20 scroll-mt-32"
      aria-labelledby={`section-title-${id}`}
    >
      {/* Category Header */}
      <div className="relative mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-[#E5E0D5]">
          {/* Left: Index, Icon & Title */}
          <div className="flex items-start sm:items-center gap-3.5">
            {/* Number Badge */}
            <span className="shrink-0 inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-[#EFECE6] border border-[#E5E0D5] text-[11px] font-mono font-bold text-[#B88746] tracking-wider">
              {sectionNumber}
            </span>

            <div className="flex items-center gap-2.5 flex-wrap">
              {icon && (
                <span className="text-xl leading-none" aria-hidden="true">
                  {icon}
                </span>
              )}
              <h2
                id={`section-title-${id}`}
                className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2A24] tracking-tight leading-tight"
              >
                {name}
              </h2>
            </div>
          </div>

          {/* Right: Item Count Tag */}
          <div className="flex items-center gap-2 self-start sm:self-auto pl-11 sm:pl-0">
            <span className="text-xs font-semibold text-[#8A8578] uppercase tracking-wider bg-[#EFECE6]/60 px-3 py-1 rounded-full border border-[#E5E0D5]/60">
              {items.length} {items.length === 1 ? 'Dish' : 'Dishes'}
            </span>
          </div>
        </div>

        {/* Description / Story Note */}
        {description && (
          <p className="mt-3 text-xs sm:text-sm text-[#6C675B] font-serif italic max-w-2xl leading-relaxed">
            "{description}"
          </p>
        )}
      </div>

      {/* Responsive 2-Column Dish Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item) => (
          <MenuItem key={item.id || item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;