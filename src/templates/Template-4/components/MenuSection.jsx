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
      className="mb-14 sm:mb-20 scroll-mt-28 sm:scroll-mt-32"
      aria-labelledby={`section-title-${id}`}
    >
      {/* Category Header - Centered Editorial Style */}
      <div className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto px-4">
        <div className="inline-flex flex-col items-center">
          {/* Category Icon */}
          {icon && (
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-stone-200/80 shadow-2xs flex items-center justify-center text-xl sm:text-2xl mb-3 select-none text-stone-900"
              aria-hidden="true"
            >
              {icon}
            </div>
          )}

          {/* Title & Count Badge */}
          <div className="flex items-center justify-center gap-2.5 mb-1.5">
            <h2
              id={`section-title-${id}`}
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 tracking-wide"
            >
              {name}
            </h2>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-stone-200/60 text-stone-600 font-mono">
              {items.length}
            </span>
          </div>

          {/* Category Subtitle / Note */}
          {description && (
            <p className="text-xs sm:text-sm text-stone-500 font-serif italic max-w-md mx-auto leading-relaxed">
              "{description}"
            </p>
          )}

          {/* Signature Accent Divider */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent via-stone-300 to-stone-400" />
            <span className="text-amber-500 text-xs select-none">✦</span>
            <span className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent via-stone-300 to-stone-400" />
          </div>
        </div>
      </div>

      {/* Responsive Menu Items Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;