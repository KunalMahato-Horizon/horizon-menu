import React from 'react';
import { ModakIcon } from './GaneshaIcons';

const PrasadCard = ({ item, prasadCode = '01' }) => {
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
  const isMahaprasadBestseller = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-2xl p-5 bg-gradient-to-br from-[#29090E] to-[#1A0508] border-2 border-[#F59E0B]/40 hover:border-[#F59E0B] transition-all duration-200 flex flex-col justify-between shadow-xl font-serif">
      {/* Auspicious Ganesha Corner Accents */}
      <span className="absolute top-2 left-2.5 text-xs text-[#F59E0B]/50 select-none">🪔</span>
      <span className="absolute top-2 right-2.5 text-xs text-[#F59E0B]/50 select-none">🪔</span>

      <div>
        {/* Header Tags: Satvik vs Festive & Price */}
        <div className="flex items-start justify-between gap-3 mb-2 font-sans pt-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2 py-0.5 rounded bg-[#3B0E14] border border-[#F59E0B]/40 text-[9px] font-black text-[#FDE68A] uppercase">
              NAIVEDYA #{prasadCode}
            </span>

            {type && (
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-black uppercase border ${
                  isVeg
                    ? 'border-emerald-500/50 text-emerald-300 bg-emerald-950/40'
                    : 'border-rose-500/50 text-rose-300 bg-rose-950/40'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isVeg ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                <span>{isVeg ? 'SATVIK VEG' : 'NON-VEG FEAST'}</span>
              </span>
            )}

            {isMahaprasadBestseller && (
              <span className="px-2 py-0.5 rounded bg-[#F59E0B] text-black text-[9px] font-black uppercase shadow-xs">
                ★ BAPPA'S FAVORITE
              </span>
            )}

            {spicy && (
              <span className="text-[9px] font-black text-rose-300 bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-500/40">
                KOLHAPURI SPICY 🌶
              </span>
            )}
          </div>

          {/* Stamped Brass Coin Price */}
          <div className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-black font-black text-sm sm:text-base shrink-0 font-mono shadow-md">
            ₹{Number(price).toLocaleString('en-IN')}
          </div>
        </div>

        {/* Dish Name */}
        <h3 className="text-base sm:text-lg font-black text-[#FDE68A] group-hover:text-white transition-colors leading-snug mb-1.5 uppercase">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 font-light">
            {description}
          </p>
        )}
      </div>

      {/* Footer Tags & Food Photo */}
      <div className="flex items-end justify-between gap-2 pt-2.5 mt-auto border-t border-white/10 font-sans">
        <div className="flex items-center gap-1 flex-wrap">
          {tags
            .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
            .map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] text-zinc-400 bg-black/40 px-2 py-0.5 rounded border border-white/5"
              >
                #{tag}
              </span>
            ))}
        </div>

        {image ? (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 border-[#F59E0B]/60 bg-black shadow-md">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-lg bg-black/30 border border-[#F59E0B]/30 flex items-center justify-center shrink-0">
            <ModakIcon className="w-5 h-5 opacity-75" />
          </div>
        )}
      </div>
    </article>
  );
};

export default PrasadCard;