import React from 'react';

const ExposureFrame = ({ item, frameNumber = '01', isSafelight = false }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isVeg = type?.toLowerCase() === 'veg';
  const isApproved = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article
      className={`group relative rounded-xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-xl ${
        isSafelight
          ? 'bg-[#150406] border-[#FF2A3A]/30 hover:border-[#FF2A3A]'
          : 'bg-[#14171F] border-white/15 hover:border-white/40'
      }`}
    >
      {/* Grease-Pencil Highlight Badge */}
      {isApproved && (
        <div
          className={`absolute -top-2.5 right-4 px-2 py-0.5 rounded text-[8px] font-mono font-black uppercase tracking-widest border shadow-xs ${
            isSafelight
              ? 'bg-[#FF2A3A] text-black border-[#FF2A3A]'
              : 'bg-[#FFC72C] text-black border-[#FFC72C]'
          }`}
        >
          ★ PROOF // SELECTED
        </div>
      )}

      <div>
        {/* Frame Top Header & Aperture Specs */}
        <div className="flex items-start justify-between gap-3 mb-2.5 font-mono">
          <div className="flex items-center gap-1.5 flex-wrap text-[9px]">
            <span
              className={`px-1.5 py-0.5 rounded font-black ${
                isSafelight
                  ? 'bg-[#FF2A3A]/20 text-[#FF2A3A]'
                  : 'bg-white/10 text-white/90'
              }`}
            >
              FRAME ▸ {frameNumber}A
            </span>

            {type && (
              <span
                className={`px-1.5 py-0.5 rounded uppercase font-bold border ${
                  isVeg
                    ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
                    : isSafelight
                    ? 'border-[#FF2A3A]/40 text-[#FF2A3A] bg-[#FF2A3A]/10'
                    : 'border-rose-500/40 text-rose-400 bg-rose-500/10'
                }`}
              >
                {isVeg ? 'VEG EMULSION' : 'ANIMAL HARVEST'}
              </span>
            )}

            {spicy && <span title="Thermal Spice">🌶️</span>}
          </div>

          <span
            className={`text-sm sm:text-base font-mono font-black shrink-0 ${
              isSafelight ? 'text-[#FF2A3A]' : 'text-[#FFC72C]'
            }`}
          >
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Dish Title */}
        <h3 className="text-base sm:text-lg font-mono font-black text-white group-hover:text-white transition-colors leading-snug mb-1.5 uppercase">
          {name}
        </h3>

        {/* Narrative Description */}
        {description && (
          <p
            className={`text-xs sm:text-sm font-sans font-light leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 ${
              isSafelight ? 'text-[#FF808A]/80' : 'text-zinc-400'
            }`}
          >
            {description}
          </p>
        )}

        {/* Optical Metadata Specs */}
        <div
          className={`flex items-center gap-2 text-[9px] font-mono mb-3 uppercase ${
            isSafelight ? 'text-[#FF2A3A]/50' : 'text-white/30'
          }`}
        >
          <span>ƒ/2.0 HEARTH</span>
          <span>•</span>
          <span>1/125s PAN</span>
          <span>•</span>
          <span>ISO 400 SCRATCH</span>
        </div>
      </div>

      {/* Frame Bottom Thumbnail & Recipe Tags */}
      <div className="flex items-end justify-between gap-3 pt-3 mt-auto border-t border-white/5 font-mono">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] px-1.5 py-0.2 rounded bg-black/40 text-white/50 border border-white/5"
              >
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 border border-white/15 bg-black">
            <img
              src={image}
              alt={name}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                isSafelight ? 'sepia contrast-125' : 'opacity-85'
              }`}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default ExposureFrame;