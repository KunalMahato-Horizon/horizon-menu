import React, { useState, useEffect } from 'react';

const DossierCaseCard = ({ item, assetIndex = 1, isGlobalDeclassified = false }) => {
  const [isLocalRevealed, setIsLocalRevealed] = useState(false);

  const isRevealed = isGlobalDeclassified || isLocalRevealed;

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
  const isTopSecret = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-xl p-4 sm:p-5 bg-[#F5EFE1] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-[6px_6px_0px_0px_#1A1A1A] transition-all flex flex-col justify-between font-mono">
      {/* Paperclip Visual Accent (Top Right) */}
      <div className="absolute -top-3 right-5 w-4 h-10 border-2 border-[#4A5568] rounded-full pointer-events-none z-20 shadow-xs" />

      <div>
        {/* Header Strip & Stamped Budget */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap text-[9px]">
            <span className="px-1.5 py-0.5 rounded bg-[#1A1A1A] text-[#ECE3CE] font-bold">
              ASSET #{String(assetIndex).padStart(2, '0')}
            </span>

            {type && (
              <span
                className={`px-1.5 py-0.5 rounded border border-[#1A1A1A] font-black uppercase ${
                  isVeg ? 'bg-[#DCFCE7] text-[#166534]' : 'bg-[#FEE2E2] text-[#991B1B]'
                }`}
              >
                {isVeg ? 'PLANT INTEL' : 'HEARTH MEAT'}
              </span>
            )}

            {isTopSecret && (
              <span className="px-1.5 py-0.5 rounded bg-[#B91C1C] text-white font-black uppercase">
                PRIORITY ASSET
              </span>
            )}

            {spicy && <span title="Spicy Heat">🌶️</span>}
          </div>

          <span className="px-2 py-0.5 rounded bg-white border border-[#1A1A1A] text-sm sm:text-base font-black text-[#1A1A1A] shrink-0 shadow-[1px_1px_0px_0px_#1A1A1A]">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Dish Codename */}
        <h3 className="text-base sm:text-lg font-black text-[#1A1A1A] group-hover:text-[#B91C1C] transition-colors leading-snug mb-2 uppercase">
          {name}
        </h3>

        {/* Redacted Description Container */}
        {description && (
          <div className="mb-3">
            <p className="text-xs text-[#2D3748] font-sans leading-relaxed line-clamp-3">
              {description}
            </p>

            {/* Tap-to-Reveal Redacted Intelligence Bar */}
            <div
              onClick={() => setIsLocalRevealed(!isLocalRevealed)}
              className="mt-2.5 p-2 rounded border border-[#1A1A1A]/30 bg-white/70 cursor-pointer hover:border-[#B91C1C] transition-all"
              title="Click to toggle redacted security clearance"
            >
              <div className="flex items-center justify-between text-[9px] uppercase font-bold text-[#1A1A1A]/70 mb-1">
                <span>INGREDIENT PROVENANCE:</span>
                <span className="text-[#B91C1C]">
                  {isRevealed ? '[CLEARED 🔓]' : '[TAP TO DECLASSIFY 🔒]'}
                </span>
              </div>

              {isRevealed ? (
                <p className="text-[11px] font-mono font-bold text-[#1A1A1A] bg-[#FEF08A] px-1 py-0.5 rounded inline-block animate-fadeIn">
                  Cooked to order over direct coal embers. Finished with proprietary table seasoning.
                </p>
              ) : (
                <div className="flex items-center gap-1 select-none">
                  <span className="bg-[#1A1A1A] text-[#1A1A1A] px-2 py-0.5 rounded text-[10px]">
                    ████████████
                  </span>
                  <span className="bg-[#1A1A1A] text-[#1A1A1A] px-3 py-0.5 rounded text-[10px]">
                    ████████
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer Intel Tags & Paperclipped Surveillance Photo */}
      <div className="flex items-end justify-between gap-2 pt-2.5 mt-auto border-t border-[#1A1A1A]/15">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] text-[#1A1A1A]/60 bg-white px-1.5 py-0.2 rounded border border-[#1A1A1A]/20"
              >
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded border border-[#1A1A1A] bg-white p-0.5 shrink-0 shadow-[2px_2px_0px_0px_#1A1A1A]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover filter contrast-110"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default DossierCaseCard;