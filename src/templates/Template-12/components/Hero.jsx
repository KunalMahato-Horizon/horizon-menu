import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'Komorebi Tea & Robata',
    tagline = 'Sunlight filtering through trees, seasonal small plates & matcha',
    description = 'Hand-harvested organic teas, binchotan charcoal grills, and slow-fermented grains honoring natural Japanese simplicity.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Robata & Tea Lounge',
    location = 'Zen Quarter, Courtyard 4',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 px-4 sm:px-6 bg-[#F3F1EC] overflow-hidden">
      {/* Zen Circular Graphic Accent */}
      <div className="absolute top-12 right-0 w-80 h-80 rounded-full border border-[#E2DDD3]/60 -z-0 pointer-events-none" />
      <div className="absolute top-24 right-12 w-56 h-56 rounded-full border border-[#E2DDD3]/40 -z-0 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8E4DC] text-[#4A5844] text-[11px] font-mono uppercase tracking-wider font-semibold">
              <span>{businessType}</span>
              {rating && <span>• ★ {rating}</span>}
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1F211D] tracking-tight leading-[1.15]">
              {name}
            </h1>

            {tagline && (
              <p className="text-base sm:text-lg text-[#C47B5A] font-serif italic">
                "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-[#5C5950] leading-relaxed max-w-lg">
                {description}
              </p>
            )}

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-5 py-2.5 rounded-xl bg-[#4A5844] text-[#F3F1EC] text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#3B4736] transition-all shadow-xs"
              >
                Browse The Dishes ↓
              </button>
              {location && (
                <span className="text-xs font-mono text-[#78746B]">
                  📍 {location}
                </span>
              )}
            </div>
          </div>

          {/* Right Showcase Image Card */}
          <div className="lg:col-span-5">
            <div className="relative p-2 rounded-2xl bg-[#E8E4DC] border border-[#DDD7CC] shadow-sm">
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-[#DDD7CC]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#E2DDD3]">
                    <span className="text-6xl mb-2">🍵</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#78746B] uppercase">
                      Artisanal Selection
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F211D]/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#F3F1EC]/90 backdrop-blur-xs flex items-center justify-between">
                  <span className="text-xs font-serif font-bold text-[#1F211D]">
                    Crafted for Table Dining
                  </span>
                  <span className="text-[10px] font-mono text-[#4A5844] font-semibold">
                    100% Organic
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