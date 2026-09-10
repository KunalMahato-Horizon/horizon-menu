import React from 'react';

const ComicPanelItem = ({ item, panelIndex = 1 }) => {
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
  const isSpecial = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-xl p-4 sm:p-5 bg-white border-3 border-black shadow-[5px_5px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] transition-all flex flex-col justify-between overflow-hidden font-sans">
      {/* Background Halftone Tone on Hover */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_12%,transparent_13%)] bg-[size:8px_8px] opacity-0 group-hover:opacity-[0.04] transition-opacity pointer-events-none" />

      <div>
        {/* Panel Header */}
        <div className="flex items-start justify-between gap-3 mb-2 font-mono">
          <div className="flex items-center gap-1.5 flex-wrap text-[9px]">
            <span className="px-1.5 py-0.5 rounded bg-black text-white font-black">
              PANEL #{String(panelIndex).padStart(2, '0')}
            </span>

            {type && (
              <span
                className={`px-1.5 py-0.5 rounded border-2 border-black font-black uppercase ${
                  isVeg ? 'bg-emerald-300 text-black' : 'bg-red-400 text-white'
                }`}
              >
                {isVeg ? 'VEG' : 'MEAT'}
              </span>
            )}

            {isSpecial && (
              <span className="px-1.5 py-0.5 rounded bg-yellow-300 text-black border-2 border-black font-black uppercase">
                CRITICAL HIT!
              </span>
            )}

            {spicy && <span title="Spicy Attack">🌶️ SPICY</span>}
          </div>

          {/* Jagged Price Tag */}
          <div className="px-2.5 py-0.5 bg-black text-white font-black text-sm sm:text-base border-2 border-black rotate-[-2deg] shadow-[2px_2px_0px_0px_#000] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </div>
        </div>

        {/* Action Sound Burst */}
        <div className="flex items-baseline justify-between mb-1">
          <h3 className="text-base sm:text-lg font-black text-black group-hover:text-red-600 transition-colors uppercase leading-tight">
            {name}
          </h3>
          <span className="text-xs font-black text-black/30 font-mono tracking-widest hidden sm:inline">
            ババーン!
          </span>
        </div>

        {/* Dialogue Bubble Description */}
        {description && (
          <div className="relative mt-2 p-2.5 rounded-lg bg-[#FAF8F5] border-2 border-black mb-3">
            <p className="text-xs font-mono text-black/80 leading-relaxed line-clamp-3">
              "{description}"
            </p>
          </div>
        )}
      </div>

      {/* Panel Footer: Tags & Screentone Thumbnail */}
      <div className="flex items-end justify-between gap-2 pt-2.5 mt-auto border-t-2 border-dashed border-black/20 font-mono">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] text-black font-bold bg-white px-1.5 py-0.2 rounded border border-black"
              >
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded border-2 border-black bg-black shrink-0 overflow-hidden shadow-[2px_2px_0px_0px_#000]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover filter contrast-125 group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default ComicPanelItem;