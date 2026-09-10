import React from 'react';
import { AshokaChakra } from './RepublicIcons';

const MenuItem = ({ item, docketNumber = '01' }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const cleanType = (type || '').toLowerCase();
  const isVeg = cleanType === 'veg' || cleanType === 'vegetarian';
  const isStateSpecialty = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-2xl p-5 bg-gradient-to-b from-[#0F1B38] via-[#0B152D] to-[#070E20] border-2 border-[#D4AF37]/30 hover:border-[#38BDF8]/80 transition-all duration-300 flex flex-col justify-between shadow-xl font-serif">
      {/* Background Ashoka Chakra Subtle Watermark */}
      <div className="absolute right-2 bottom-2 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
        <AshokaChakra className="w-28 h-28" />
      </div>

      <div>
        {/* Top Badges & Brass Coin Price */}
        <div className="flex items-start justify-between gap-3 mb-2 font-sans pt-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2 py-0.5 rounded bg-[#112248] border border-[#38BDF8]/40 text-[9px] font-black text-[#38BDF8] uppercase">
              DOCKET #{docketNumber}
            </span>

            {type && (
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-black uppercase border ${
                  isVeg
                    ? 'border-emerald-500/50 text-emerald-300 bg-emerald-950/40'
                    : 'border-amber-500/50 text-amber-300 bg-amber-950/40'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isVeg ? 'bg-emerald-400' : 'bg-[#FF671F]'}`} />
                <span>{isVeg ? 'Shuddha Veg' : 'State Feast'}</span>
              </span>
            )}

            {isStateSpecialty && (
              <span className="px-2 py-0.5 rounded bg-[#FF671F] text-white text-[9px] font-black uppercase tracking-wide border border-amber-300/40 shadow-xs">
                ★ State Honors
              </span>
            )}

            {spicy && (
              <span className="text-[9px] font-bold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-1.5 py-0.5 rounded">
                Mirchi 🌶
              </span>
            )}
          </div>

          <span className="text-base sm:text-lg font-black text-[#FDFBF7] shrink-0 font-serif">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Dish Title */}
        <h3 className="text-base sm:text-lg font-black text-[#FDFBF7] group-hover:text-[#38BDF8] transition-colors leading-snug mb-1.5 uppercase">
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
                className="text-[9px] text-zinc-300 bg-black/40 px-2 py-0.5 rounded border border-white/5"
              >
                #{tag}
              </span>
            ))}
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 border-[#D4AF37]/45 bg-black shadow-md">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-95"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;