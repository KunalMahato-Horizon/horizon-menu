import React from 'react';

const StationStop = ({ item, lineColor = '#FF3344', stationIndex = 1 }) => {
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
  const isExpressSpecial = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <div className="relative flex items-start gap-4 sm:gap-6 group">
      {/* 1. Station Node on the Rail Line */}
      <div className="relative z-10 flex flex-col items-center shrink-0 mt-1">
        <div
          className="w-5 h-5 rounded-full border-4 bg-[#0C0E14] group-hover:scale-125 transition-transform duration-200 shadow-md"
          style={{ borderColor: lineColor }}
        />
        <span className="text-[9px] font-mono text-white/30 font-bold mt-1">
          STN.{String(stationIndex).padStart(2, '0')}
        </span>
      </div>

      {/* 2. Station Content Board */}
      <article className="flex-1 rounded-2xl bg-[#161922] border border-white/10 hover:border-white/25 p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between shadow-xl mb-6">
        <div>
          {/* Station Metadata & Fare Token */}
          <div className="flex items-start justify-between gap-3 mb-2 font-mono">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className="px-2 py-0.5 rounded text-[9px] font-black uppercase text-black"
                style={{ backgroundColor: lineColor }}
              >
                STOP {stationIndex}
              </span>

              {type && (
                <span
                  className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase border ${
                    isVeg
                      ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
                      : 'border-rose-500/40 text-rose-400 bg-rose-500/10'
                  }`}
                >
                  {isVeg ? 'VEG' : 'CATCH/MEAT'}
                </span>
              )}

              {isExpressSpecial && (
                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/20 text-[9px] text-[#FFB800] font-bold uppercase">
                  ★ EXPRESS
                </span>
              )}

              {spicy && <span className="text-[10px]" title="Spicy">🌶️</span>}
            </div>

            {/* Stamped Fare Token */}
            <div className="px-3 py-1 rounded-xl bg-white/[0.08] border border-white/15 text-sm sm:text-base font-black text-white shrink-0 group-hover:border-[#00D26A] transition-colors">
              ₹{Number(price).toLocaleString('en-IN')}
            </div>
          </div>

          {/* Dish / Station Name */}
          <h3 className="text-base sm:text-lg font-mono font-black text-white group-hover:text-white transition-colors leading-snug mb-1.5 uppercase">
            {name}
          </h3>

          {/* Preparation & Tasting Description */}
          {description && (
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans font-light line-clamp-2 sm:line-clamp-3 mb-3">
              {description}
            </p>
          )}
        </div>

        {/* Transfer Line & Station Photo */}
        <div className="flex items-end justify-between gap-3 pt-3 mt-auto border-t border-white/5 font-mono">
          <div className="text-[10px] space-y-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-white/40 uppercase tracking-widest text-[9px]">
                TRANSFER:
              </span>
              {tags.length > 0 ? (
                tags
                  .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
                  .map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 rounded bg-white/[0.04] text-white/70 text-[9px] border border-white/5"
                    >
                      Line #{tag}
                    </span>
                  ))
              ) : (
                <span className="text-white/40 text-[9px]">Direct Platform Plating</span>
              )}
            </div>
          </div>

          {image && (
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default StationStop;