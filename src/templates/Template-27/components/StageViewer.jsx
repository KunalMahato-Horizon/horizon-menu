import React from 'react';

const StageViewer = ({ dish, business }) => {
  const { name: venueName = 'STUDIO RAW', location = 'Downtown' } = business || {};
  const {
    name = 'Select a Dish',
    description = 'Tap or hover any plate in the catalogue to inspect its culinary preparation and flavor matrix.',
    price = 0,
    image = null,
    type = null,
    tags = [],
    spicy = false,
  } = dish || {};

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-8 bg-[#1A1A1A] text-[#FAF8F5] rounded-3xl relative overflow-hidden shadow-2xl border border-white/10">
      {/* Background Ambient Spotlight */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3B00]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Station Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-[#FF3B00] uppercase font-bold">
            INSPECTION STAGE
          </span>
        </div>
        <span className="text-[10px] font-mono text-white/40 uppercase">
          {location}
        </span>
      </div>

      {/* Dynamic Main Visual Stage */}
      <div className="my-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="relative w-full aspect-video sm:aspect-square max-h-[360px] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-xl mb-6 group">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white/30 font-mono text-xs">
              <span className="text-5xl mb-2">🍽️</span>
              <span>LIVE PLATING STAGE</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          {/* Floating Badges */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {type && (
                <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase ${
                  type === 'veg' ? 'bg-emerald-500 text-black' : 'bg-[#FF3B00] text-white'
                }`}>
                  {type}
                </span>
              )}
              {spicy && (
                <span className="px-2 py-0.5 rounded bg-black/70 border border-white/20 text-rose-300 text-[9px] font-mono">
                  🌶 Spicy
                </span>
              )}
            </div>

            {price > 0 && (
              <span className="px-3 py-1 rounded-lg bg-white text-[#1A1A1A] font-mono font-black text-sm">
                ₹{Number(price).toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>

        {/* Selected Plate Details */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white leading-tight">
            {name}
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light max-w-md">
            {description}
          </p>
        </div>
      </div>

      {/* Footer Flavor Tags & Protocol */}
      <div className="pt-4 border-t border-white/10 relative z-10 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
        <div className="flex items-center gap-1 flex-wrap">
          {tags.length > 0 ? (
            tags.map((t, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/60">
                #{t}
              </span>
            ))
          ) : (
            <span className="text-white/40">KITCHEN SCRATCH CRAFT</span>
          )}
        </div>
        <span className="text-white/40">PLATED TO ORDER</span>
      </div>
    </div>
  );
};

export default StageViewer;