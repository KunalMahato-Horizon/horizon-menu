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
      className="mb-12 sm:mb-16 scroll-mt-28"
      aria-labelledby={`section-title-${id}`}
    >
      {/* Category Section Header */}
      <div className="mb-6 sm:mb-8 pb-4 border-b border-neutral-200/70">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            {/* Category Icon */}
            {icon && (
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-neutral-100 border border-neutral-200/80 shadow-2xs flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 select-none"
                aria-hidden="true"
              >
                {icon}
              </div>
            )}

            {/* Title, Badge & Description */}
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <h2
                  id={`section-title-${id}`}
                  className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight"
                >
                  {name}
                </h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              {description && (
                <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-xl">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Accent Bar */}
        <div className="mt-4 flex items-center gap-1.5">
          <span className="w-12 h-1 bg-neutral-900 rounded-full" />
          <span className="w-2 h-1 bg-amber-500 rounded-full" />
        </div>
      </div>

      {/* Responsive Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;