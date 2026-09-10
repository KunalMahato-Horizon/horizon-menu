import React, { useState } from 'react';

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV'];

const TarotCard = ({ item, cardIndex = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const romanNumeral = ROMAN_NUMERALS[cardIndex % ROMAN_NUMERALS.length];
  const isVeg = type?.toLowerCase() === 'veg';

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="cursor-pointer group select-none [perspective:1000px] w-full min-h-[380px] sm:min-h-[420px]"
    >
      {/* 3D Rotating Flipper */}
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* ================= CARD FRONT FACE ================= */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl p-5 bg-[#0D0F1D] border-2 border-[#E5C06E]/40 group-hover:border-[#E5C06E] group-hover:shadow-[0_0_25px_rgba(229,192,110,0.2)] transition-all flex flex-col justify-between overflow-hidden shadow-2xl">
          {/* Subtle Filigree Background Pattern */}
          <div className="absolute inset-2 rounded-2xl border border-[#E5C06E]/20 pointer-events-none" />

          {/* Card Top: Arcana Number & Sigil */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono">
            <span className="text-[#E5C06E] font-black tracking-widest">
              ARCANA {romanNumeral}
            </span>
            <span className="text-zinc-500 font-bold">
              {isVeg ? 'PLANT SIGIL' : 'HEARTH SIGIL'}
            </span>
          </div>

          {/* Card Center Arch: Mythic Glyph */}
          <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-t-full border-2 border-[#E5C06E]/50 flex items-center justify-center bg-gradient-to-b from-[#181D33] to-[#0D0F1D] mb-4 shadow-inner">
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {isVeg ? '🌱' : '🔥'}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-serif font-black text-white group-hover:text-[#E5C06E] transition-colors uppercase leading-tight max-w-[220px]">
              {name}
            </h3>

            {spicy && (
              <span className="mt-1 text-[10px] font-mono text-rose-400 font-bold">
                🌶 Spiced Ember
              </span>
            )}
          </div>

          {/* Card Bottom: Price Stamp & Flip Cue */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#E5C06E]/20">
            <span className="text-sm font-mono font-black text-[#E5C06E]">
              ₹{Number(price).toLocaleString('en-IN')}
            </span>
            <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white flex items-center gap-1">
              Tap to Reveal ↻
            </span>
          </div>
        </div>

        {/* ================= CARD BACK FACE (CULINARY SECRETS) ================= */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl p-5 bg-[#14172B] border-2 border-[#E5C06E] flex flex-col justify-between overflow-hidden shadow-2xl text-left">
          {/* Top Label */}
          <div className="flex items-center justify-between text-xs font-mono border-b border-[#E5C06E]/30 pb-2">
            <span className="text-[#E5C06E] font-bold">DIVINATION REVEALED</span>
            <span className="text-white/60">ARCANA {romanNumeral}</span>
          </div>

          {/* Dish Photography */}
          <div className="my-3 relative w-full h-32 sm:h-36 rounded-xl overflow-hidden bg-black/60 border border-white/10 shrink-0">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl">
                🍽️
              </div>
            )}
            <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[9px] font-mono font-black text-[#E5C06E] border border-[#E5C06E]/40">
              ₹{Number(price).toLocaleString('en-IN')}
            </span>
          </div>

          {/* Description & Sommelier Notes */}
          <div className="space-y-2 flex-1">
            <p className="text-xs text-zinc-300 font-sans leading-relaxed line-clamp-3">
              {description}
            </p>

            {tags.length > 0 && (
              <div className="flex items-center gap-1 flex-wrap pt-1">
                {tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono text-[#E5C06E] bg-white/[0.04] px-1.5 py-0.5 rounded border border-[#E5C06E]/20"
                  >
                    ✦ {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Back Footer */}
          <div className="pt-2 border-t border-[#E5C06E]/30 flex items-center justify-between text-[10px] font-mono">
            <span className="text-zinc-400">TABLE SERVICE</span>
            <span className="text-[#E5C06E] font-bold">Tap to Flip Back ↺</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotCard;