import React, { useState } from 'react';

const RARITY_PROFILES = [
  { tier: 'LEGENDARY', color: 'border-[#F59E0B] shadow-[#F59E0B]/20', badge: 'bg-[#F59E0B] text-black', text: 'text-[#FDE68A]' },
  { tier: 'EPIC', color: 'border-[#A855F7] shadow-[#A855F7]/20', badge: 'bg-[#A855F7] text-white', text: 'text-purple-300' },
  { tier: 'RARE', color: 'border-[#06B6D4] shadow-[#06B6D4]/20', badge: 'bg-[#06B6D4] text-black', text: 'text-cyan-300' },
  { tier: 'UNCOMMON', color: 'border-emerald-500 shadow-emerald-500/20', badge: 'bg-emerald-600 text-white', text: 'text-emerald-300' },
];

const ItemCard = ({ item, slotIndex = 0 }) => {
  const [isExamined, setIsExamined] = useState(false);

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
  const profile = RARITY_PROFILES[slotIndex % RARITY_PROFILES.length];

  return (
    <article
      onClick={() => setIsExamined(!isExamined)}
      className={`group relative rounded-2xl border-2 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 bg-[#121622] hover:-translate-y-1 cursor-pointer shadow-xl ${profile.color}`}
    >
      <div>
        {/* Item Card Header: Slot & Rarity Tag */}
        <div className="flex items-start justify-between gap-3 mb-2 font-mono">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${profile.badge}`}>
              {profile.tier}
            </span>

            <span className="px-1.5 py-0.5 rounded bg-black/40 text-[9px] text-zinc-400 border border-white/10">
              SLOT #{String(slotIndex + 1).padStart(2, '0')}
            </span>

            {type && (
              <span
                className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase border ${
                  isVeg
                    ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
                    : 'border-rose-500/40 text-rose-400 bg-rose-500/10'
                }`}
              >
                {isVeg ? 'DRUID PLANT' : 'HUNTER HARVEST'}
              </span>
            )}

            {spicy && <span title="Dragonfire Heat">🔥</span>}
          </div>

          {/* Gold Coin Price */}
          <div className="px-2.5 py-1 rounded-xl bg-black/60 border border-[#F59E0B]/40 text-sm font-black text-[#FDE68A] shrink-0">
            🪙 {Number(price).toLocaleString('en-IN')} GP
          </div>
        </div>

        {/* Dish Title */}
        <h3 className="text-base sm:text-lg font-mono font-black text-white group-hover:text-[#FDE68A] transition-colors leading-tight mb-2 uppercase">
          {name}
        </h3>

        {/* Narrative Description */}
        {description && (
          <p className="text-xs text-zinc-300 font-sans leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 font-light">
            {description}
          </p>
        )}

        {/* RPG Stat Buff Matrix */}
        <div className="grid grid-cols-2 gap-1.5 mb-3 font-mono text-[9px]">
          <div className="p-1.5 rounded-lg bg-black/30 border border-white/5 text-zinc-300 flex items-center gap-1">
            <span className="text-[#F59E0B]">✦</span>
            <span>+{20 + (slotIndex * 5)}% Satiety</span>
          </div>
          <div className="p-1.5 rounded-lg bg-black/30 border border-white/5 text-zinc-300 flex items-center gap-1">
            <span className="text-cyan-400">🛡️</span>
            <span>{isVeg ? '+15 Spirit Rest.' : '+25 Strength'}</span>
          </div>
        </div>

        {/* Interactive Expanded Lore */}
        {isExamined && (
          <div className="p-2.5 rounded-xl bg-black/60 border border-[#F59E0B]/30 mb-3 text-[10px] text-zinc-200 animate-fadeIn font-mono">
            <span className="text-[#FDE68A] font-bold block mb-1">
              📜 ALCHEMICAL RECEIPT:
            </span>
            <p className="font-sans text-xs">
              Infused with market spices and flame-seared table side upon order placement.
            </p>
          </div>
        )}
      </div>

      {/* Footer Tags & Inventory Sprite Thumbnail */}
      <div className="flex items-end justify-between gap-3 pt-3 mt-auto border-t border-white/10 font-mono">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] px-1.5 py-0.5 rounded bg-black/40 text-zinc-400 border border-white/5"
              >
                #{tag}
              </span>
            ))}
        </div>

        {image ? (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 border-white/20 bg-black">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-xl shrink-0">
            🥘
          </div>
        )}
      </div>
    </article>
  );
};

export default ItemCard;