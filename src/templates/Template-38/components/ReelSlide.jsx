import React, { useState } from 'react';
import ReelActionRail from './ReelActionRail';
import SpecsDrawer from './SpecsDrawer';

const ReelSlide = ({ item, index, categoryName, isActive }) => {
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const { name = '', description = '', price = 0, image = null, tags = [] } = item || {};

  return (
    <section className="relative w-full h-[100dvh] snap-start shrink-0 flex flex-col justify-end overflow-hidden bg-black select-none">
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100"
            loading={index < 3 ? 'eager' : 'lazy'}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-t from-black via-zinc-900 to-[#1A1D24] flex items-center justify-center">
            <span className="text-6xl opacity-30">🍽️</span>
          </div>
        )}

        {/* Dual Vignette Shadows for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating Action Rail on Right Edge */}
      <ReelActionRail item={item} onOpenSpecs={() => setIsSpecsOpen(true)} />

      {/* Lower-Third Content Card */}
      <div className="relative z-10 p-5 sm:p-8 pb-10 max-w-xl space-y-2.5 font-sans">
        {/* Category Tag */}
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-[#CCFF00] uppercase tracking-wider">
          <span>{categoryName}</span>
          <span>•</span>
          <span>PLATE #{String(index + 1).padStart(2, '0')}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-md">
          {name}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed line-clamp-2 sm:line-clamp-3 max-w-md drop-shadow">
            {description}
          </p>
        )}

        {/* Bottom Bar: Price & Tags */}
        <div className="flex items-center gap-3 pt-1">
          <div className="px-3 py-1 rounded-xl bg-[#CCFF00] text-black font-mono font-black text-sm sm:text-base shadow-lg">
            ₹{Number(price).toLocaleString('en-IN')}
          </div>

          <div className="flex items-center gap-1.5 overflow-hidden">
            {tags.slice(0, 2).map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/70"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Slide-Up Specs Drawer */}
      <SpecsDrawer item={item} isOpen={isSpecsOpen} onClose={() => setIsSpecsOpen(false)} />
    </section>
  );
};

export default ReelSlide;