import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'Riviera Sol',
    tagline = 'Sunlit crudo, wood-fired seafood & coastal spritzes',
    description = 'Inspired by seaside cantinas along the Mediterranean coast. Caught fresh at dawn, seasoned with cold-pressed Sicilian olive oils and sea salt.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Coastal Trattoria & Raw Bar',
    location = 'Harbourfront Promenade, Pier 7',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 px-4 sm:px-6 bg-[#FBF9F4] overflow-hidden">
      {/* Mediterranean Sun & Stripe Motifs */}
      <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-[#FCECD8]/70 blur-3xl pointer-events-none" />
      <div className="absolute top-32 left-10 w-64 h-64 rounded-full bg-[#EBF2FA]/80 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Presentation */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E3A73]/5 border border-[#0E3A73]/15 text-[#0E3A73] text-[11px] font-mono uppercase font-bold tracking-wider">
              <span>{businessType}</span>
              {rating && <span className="text-[#D95338] font-bold">★ {rating}</span>}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#0E3A73] tracking-tight leading-[1.08]">
              {name}
            </h1>

            {tagline && (
              <p className="text-base sm:text-xl text-[#D95338] font-serif italic font-medium">
                "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3 rounded-xl bg-[#0E3A73] text-[#FBF9F4] text-xs font-mono font-bold uppercase tracking-wider shadow-md hover:bg-[#D95338] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                Explore Today's Catch ↓
              </button>
              {location && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#F4EFE6] text-xs font-mono text-[#0E3A73] font-semibold border border-[#E4DCD0]">
                  <span>🌊</span>
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Featured Showcase */}
          <div className="lg:col-span-5">
            <div className="relative p-2.5 rounded-3xl bg-[#0E3A73] shadow-xl">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#1E4D8C]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#144278]">
                    <span className="text-6xl mb-2">🐟</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#FBF9F4]/70 uppercase">
                      Wild Coastal Harvest
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A73]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#FBF9F4]/95 backdrop-blur-xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#D95338] uppercase tracking-wider block">
                      Daily Special
                    </span>
                    <span className="text-xs font-serif font-black text-[#0E3A73]">
                      Freshly Landed & Plated
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#0E3A73] text-[#FBF9F4] text-[10px] font-mono font-bold">
                    Dine-In
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;