import React from 'react';

const Hero = ({ business }) => {
  const {
    name = "L'Artisan",
    tagline = "Artisanal Baking & Modern Gastronomy",
    description = "Rooted in heritage techniques and seasonal harvests. Every dish is crafted daily with locally sourced organic ingredients and timeless dedication.",
    coverImage = null,
    rating = 4.9,
    businessType = "Fine Dining & Bakery",
    location = "Downtown District",
  } = business || {};

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#F8F6F1] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B88746]/5 blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          {/* Metadata Pill */}
          {(businessType || rating) && (
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EFECE6]/80 border border-[#E5E0D5] text-xs font-medium text-[#6C675B] mb-5 tracking-wide shadow-xs">
              {businessType && (
                <span className="uppercase tracking-wider text-[11px] font-semibold text-[#2C2A24]">
                  {businessType}
                </span>
              )}
              {businessType && rating && (
                <span className="w-1 h-1 rounded-full bg-[#B88746]" />
              )}
              {rating && (
                <span className="flex items-center gap-1 font-semibold text-[#2C2A24]">
                  <span className="text-[#B88746] text-xs">★</span>
                  <span>{rating}</span>
                </span>
              )}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#2C2A24] tracking-tight leading-[1.08] mb-4">
            {name}
          </h1>

          {/* Tagline */}
          {tagline && (
            <p className="text-base sm:text-lg md:text-xl text-[#8A8578] font-serif italic tracking-wide mb-5">
              "{tagline}"
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="text-sm sm:text-base text-[#6C675B] max-w-2xl mx-auto leading-relaxed font-sans mb-8">
              {description}
            </p>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToMenu}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C2A24] text-[#F8F6F1] text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm hover:bg-[#B88746] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88746]"
            >
              <span>Explore Menu</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            {location && (
              <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#EFECE6]/50 border border-[#E5E0D5] text-xs font-medium text-[#6C675B]">
                <svg className="w-3.5 h-3.5 text-[#B88746]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Featured Showcase Card */}
        <div className="relative max-w-4xl mx-auto" id="featured">
          <div className="relative rounded-3xl overflow-hidden border border-[#E5E0D5] shadow-xl bg-[#EFECE6]">
            {coverImage ? (
              <img
                src={coverImage}
                alt={name}
                className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            ) : (
              <div className="w-full h-[320px] sm:h-[400px] md:h-[480px] bg-gradient-to-br from-[#EFECE6] via-[#E8E4DB] to-[#DFDACF] flex flex-col items-center justify-center gap-3">
                <span className="text-6xl md:text-7xl opacity-80">🍽️</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8A8578]">
                  Signature Selection
                </span>
              </div>
            )}

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2A24]/70 via-transparent to-black/10 pointer-events-none" />

            {/* Floating Glassmorphic Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <div className="px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wider uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-pulse" />
                <span>Curated Kitchen</span>
              </div>
            </div>

            {/* Bottom Card Meta */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between text-white">
              <div>
                <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
                  Today's Highlights
                </p>
                <p className="text-lg sm:text-2xl font-serif font-bold tracking-tight">
                  Handcrafted & Freshly Served
                </p>
              </div>
              <button
                onClick={scrollToMenu}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 text-xs font-semibold text-white transition-colors"
              >
                <span>Browse</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;