import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'Maison & Co.',
    tagline = 'Seasonal market produce, wood-fired hearth & single-origin roasts',
    description = 'An all-day contemporary dining room and artisan espresso bar. Dishes are prepared to order using local grower harvests and natural fermentation.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Contemporary Brasserie & Café',
    location = 'Downtown Promenade, Bay 42',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-[#FAF9F5] text-[#1A1918]">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Subtle Top Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E3DFD5] pb-3 text-xs text-[#736E65]">
          <div className="flex items-center gap-2">
            <span className="font-sans uppercase tracking-wider font-bold text-[#9E5A38]">
              All-Day Carte
            </span>
            <span>•</span>
            <span>{businessType}</span>
          </div>
          {rating && (
            <div className="font-sans font-bold text-[#1A1918]">
              ★ {rating} <span className="text-[#736E65] font-normal">Rating</span>
            </div>
          )}
        </div>

        {/* Editorial Title & Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.05] text-[#1A1918]">
              {name}
            </h1>

            {tagline && (
              <p className="text-base sm:text-lg text-[#9E5A38] font-serif italic">
                "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-[#57534D] leading-relaxed max-w-xl font-sans">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3 rounded-full bg-[#1A1918] text-[#FAF9F5] font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#9E5A38] active:scale-95 transition-all shadow-xs"
              >
                Explore The Menu ↓
              </button>
              {location && (
                <div className="px-4 py-2.5 rounded-full bg-white border border-[#E3DFD5] text-xs font-sans text-[#57534D]">
                  📍 {location}
                </div>
              )}
            </div>
          </div>

          {/* Understated Showcase Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#E3DFD5] bg-white p-2 shadow-sm">
              <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden bg-[#EFECE6]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 text-[#736E65]">
                    <span className="text-5xl mb-2">☕</span>
                    <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#1A1918]">
                      Scratch Kitchen & Roastery
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#FAF9F5]/90 backdrop-blur-xs flex items-center justify-between text-xs border border-[#E3DFD5]">
                  <span className="font-serif font-bold text-[#1A1918]">Table Service Direct</span>
                  <span className="text-[10px] font-sans font-bold uppercase text-[#9E5A38]">Fresh Daily</span>
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