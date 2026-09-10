import React from 'react';

const MenuIntro = ({ business }) => {
  const {
    name = "Menu",
    tagline = "",
    description = "",
  } = business || {};

  return (
    <section
      id="menu"
      className="scroll-mt-24 pt-14 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8"
      aria-labelledby="menu-intro-heading"
    >
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Editorial Star Ornament */}
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
          <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
          <span className="text-amber-500 text-xs sm:text-sm select-none">✦</span>
          <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
        </div>

        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-amber-50 text-amber-900 ring-1 ring-inset ring-amber-200/60 mb-3">
          <span>Artisan Kitchen</span>
        </div>

        {/* Section Heading */}
        <h2
          id="menu-intro-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight mb-3 sm:mb-4"
        >
          Curated Dining Selection
        </h2>

        {/* Tagline / Subtitle */}
        {tagline && (
          <p className="text-base sm:text-lg text-amber-900/80 font-serif italic mb-3">
            "{tagline}"
          </p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-stone-500 font-normal leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
          {description ||
            "Every creation is prepared to order using hand-selected, seasonal ingredients. Explore our curated courses below."}
        </p>

        {/* In-Store Dietary Quick Legend Strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-2 sm:p-2.5 rounded-2xl bg-stone-100/80 border border-stone-200/80 text-[11px] sm:text-xs font-semibold text-stone-600">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-xs border border-emerald-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            </span>
            <span>Vegetarian</span>
          </div>

          <span className="text-stone-300">•</span>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-xs border border-rose-600">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
            </span>
            <span>Non-Vegetarian</span>
          </div>

          <span className="text-stone-300">•</span>

          <div className="flex items-center gap-1.5">
            <span className="text-amber-500 font-bold">✦</span>
            <span>Chef Recommendation</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MenuIntro;