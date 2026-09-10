import React from 'react';

const defaultOffers = [
  {
    id: 1,
    title: "Coffee + Croissant Combo",
    description: "Any specialty roast coffee paired with a fresh butter croissant",
    price: 199,
    originalPrice: 290,
    icon: "☕",
    tag: "Save ₹91",
  },
  {
    id: 2,
    title: "Happy Hours Special",
    description: "Flat 20% off on all artisan beverages & cold brews",
    price: null,
    originalPrice: null,
    icon: "⏰",
    tag: "3 PM - 6 PM",
  },
];

const Offers = ({ offers = [] }) => {
  const displayOffers = offers && offers.length > 0 ? offers : defaultOffers;

  if (displayOffers.length === 0) return null;

  return (
    <section className="mb-14 sm:mb-18" aria-labelledby="offers-heading">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-neutral-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 ring-1 ring-inset ring-amber-200/60 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            Limited Time
          </div>
          <h2
            id="offers-heading"
            className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight"
          >
            Today's Deals & Combos
          </h2>
        </div>

        <span className="text-xs sm:text-sm text-neutral-500 font-medium">
          Valid for dine-in & takeaway
        </span>
      </div>

      {/* Offers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {displayOffers.map((offer) => (
          <article
            key={offer.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-neutral-950 p-6 sm:p-7 text-white border border-neutral-800/80 shadow-lg shadow-neutral-950/10 hover:border-neutral-700 transition-all duration-300"
          >
            {/* Ambient Background Mesh Flares */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Row: Icon & Dynamic Promo Tag */}
            <div className="relative flex items-start justify-between gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-2xl shadow-inner select-none">
                {offer.icon || "🎁"}
              </div>

              {offer.tag && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-neutral-950 shadow-sm">
                  <span>✦</span>
                  <span>{offer.tag}</span>
                </span>
              )}
            </div>

            {/* Middle Content */}
            <div className="relative space-y-2 mb-6">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                {offer.title}
              </h3>

              {offer.description && (
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {offer.description}
                </p>
              )}
            </div>

            {/* Bottom Row: Price Lockup / Promo Perk */}
            <div className="relative pt-4 border-t border-white/10 flex items-center justify-between">
              {offer.price ? (
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    ₹{offer.price}
                  </span>
                  {offer.originalPrice && (
                    <span className="text-sm font-semibold text-neutral-500 line-through">
                      ₹{offer.originalPrice}
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400">
                  <span>Special Daily Perk</span>
                </div>
              )}

              {/* Claim / Order Badge */}
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
                <span>Ask Server</span>
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Offers;