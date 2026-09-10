import React, { useState, useMemo } from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ category = {} }) => {
  const {
    id = "",
    name = "",
    description = "",
    icon = null,
    items = [],
  } = category;

  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'veg' | 'popular'

  // Filter items dynamically within the section
  const filteredItems = useMemo(() => {
    if (activeFilter === 'veg') {
      return items.filter((item) => item.isVeg === true);
    }
    if (activeFilter === 'popular') {
      return items.filter(
        (item) =>
          item.tags &&
          (item.tags.includes('Popular') ||
            item.tags.includes('Bestseller') ||
            item.tags.includes('Must Try') ||
            item.tags.includes('Chef Special'))
      );
    }
    return items;
  }, [items, activeFilter]);

  // Check counts to display filter buttons only if relevant
  const hasVeg = useMemo(() => items.some((item) => item.isVeg === true), [items]);
  const hasPopular = useMemo(
    () =>
      items.some(
        (item) =>
          item.tags &&
          (item.tags.includes('Popular') ||
            item.tags.includes('Bestseller') ||
            item.tags.includes('Must Try') ||
            item.tags.includes('Chef Special'))
      ),
    [items]
  );

  if (!items || items.length === 0) return null;

  return (
    <section
      id={`category-${id}`}
      className="mb-14 sm:mb-20 scroll-mt-28 sm:scroll-mt-32"
      aria-labelledby={`section-title-${id}`}
    >
      {/* Category Header Card */}
      <div className="relative p-5 sm:p-7 rounded-3xl bg-neutral-900 text-white mb-6 sm:mb-8 overflow-hidden shadow-xl shadow-neutral-950/10 border border-neutral-800">
        {/* Ambient Decorative Mesh Glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          
          {/* Title & Icon Header */}
          <div className="flex items-start gap-3.5">
            {icon && (
              <div
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-2xl flex-shrink-0 select-none shadow-inner"
                aria-hidden="true"
              >
                {icon}
              </div>
            )}

            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <h2
                  id={`section-title-${id}`}
                  className="text-2xl sm:text-3xl font-black tracking-tight text-white"
                >
                  {name}
                </h2>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-300 font-mono border border-white/10">
                  {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              {description && (
                <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-lg">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Quick Dietary Filters (In-Store Diner Controls) */}
          {(hasVeg || hasPopular) && (
            <div className="flex items-center gap-1.5 self-start md:self-auto p-1 rounded-2xl bg-neutral-950/70 border border-neutral-800 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeFilter === 'all'
                    ? 'bg-white text-neutral-950 shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                All
              </button>

              {hasVeg && (
                <button
                  type="button"
                  onClick={() => setActiveFilter('veg')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                    activeFilter === 'veg'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-neutral-400 hover:text-emerald-400'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Veg Only</span>
                </button>
              )}

              {hasPopular && (
                <button
                  type="button"
                  onClick={() => setActiveFilter('popular')}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                    activeFilter === 'popular'
                      ? 'bg-amber-400 text-neutral-950 shadow-xs'
                      : 'text-neutral-400 hover:text-amber-300'
                  }`}
                >
                  <span>🔥</span>
                  <span>Popular</span>
                </button>
              )}
            </div>
          )}

        </div>
      </div>

      {/* Menu Items Feed / Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 rounded-3xl bg-neutral-50 border border-dashed border-neutral-200 p-6">
          <p className="text-sm font-medium text-neutral-500">
            No dishes found matching the selected filter in this category.
          </p>
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className="mt-3 text-xs font-bold text-emerald-600 hover:underline"
          >
            Show All {name} Dishes
          </button>
        </div>
      )}
    </section>
  );
};

export default MenuSection;