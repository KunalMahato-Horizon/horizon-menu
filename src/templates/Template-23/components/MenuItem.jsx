import React from 'react';

const DietaryPill = ({ type }) => {
  if (!type) return null;
  const isVeg = type.toLowerCase() === 'veg';
  const isEgg = type.toLowerCase() === 'egg';

  const colorClass = isVeg
    ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    : isEgg
    ? 'text-amber-300 bg-amber-500/10 border-amber-500/20'
    : 'text-rose-400 bg-rose-500/10 border-rose-500/20';

  const label = isVeg ? 'Plant-Based' : isEgg ? 'Farm Egg' : 'Hearth Catch';

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[9px] font-mono font-bold tracking-wider ${colorClass}`}>
      <span className="w-1 h-1 rounded-full bg-current" />
      <span>{label}</span>
    </span>
  );
};

const MenuItem = ({ item, plateCode = '01' }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isChefHighlight = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  // Derive contextual flavor and pairing notes based on tags / item type
  const secondaryTags = tags.filter(
    (t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-3xl p-5 sm:p-6 bg-[#11131B] border border-white/[0.08] hover:border-[#DFB76C]/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl">
      <div>
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono font-bold text-[#DFB76C] px-2 py-0.5 rounded-full bg-[#DFB76C]/10 border border-[#DFB76C]/20">
              ACT // {plateCode}
            </span>
            <DietaryPill type={type} />
            {isChefHighlight && (
              <span className="px-2 py-0.5 rounded-full bg-[#DFB76C] text-[#090A0F] text-[9px] font-mono font-black uppercase">
                ★ Reserve Pick
              </span>
            )}
            {spicy && (
              <span className="px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[9px] font-mono font-bold">
                Smoked Chili 🌶
              </span>
            )}
          </div>

          <span className="text-base sm:text-lg font-mono font-black text-white shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Dish Title */}
        <h3 className="text-base sm:text-lg font-serif font-black text-white group-hover:text-[#DFB76C] transition-colors leading-snug mb-2">
          {name}
        </h3>

        {/* Narrative Description */}
        {description && (
          <p className="text-xs sm:text-sm text-white/60 font-sans font-light leading-relaxed line-clamp-2 sm:line-clamp-3 mb-4">
            {description}
          </p>
        )}

        {/* Flavor Spectrum Matrix Chips */}
        {secondaryTags.length > 0 && (
          <div className="mb-4">
            <span className="text-[9px] font-mono uppercase tracking-widest text-white/30 block mb-1.5">
              Flavor Spectrum:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {secondaryTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/70 font-mono text-[10px]"
                >
                  ✦ {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sommelier Pairing Strip & Dish Image */}
      <div className="pt-3 mt-auto border-t border-white/[0.06] flex items-center justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[9px] font-mono uppercase tracking-wider text-[#DFB76C] block font-bold">
            Sommelier Pairing:
          </span>
          <span className="text-xs font-serif italic text-white/80 truncate block">
            {type === 'veg'
              ? 'Oak-Aged Botanical Spritz or Riesling'
              : 'Sub-Zero Pinot Noir or Smoked Mezcal'}
          </span>
        </div>

        {image && (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-[#090A0F]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default MenuItem;