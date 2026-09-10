import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'Nocturne Atelier',
    tagline = 'Gastronomic experimentation after dark',
    description = 'An immersive evening menu celebrating wood-fired heirloom ingredients, single-estate olive oils, and nocturnal flavors.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Neo-Bistro & Cocktail Lab',
    location = 'Metro Central, Level 2',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Dynamic Background Spotlights */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#E2B855]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bold Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#E2B855]" />
              <span className="text-xs uppercase tracking-wider text-white/70 font-mono font-medium">
                {businessType}
              </span>
              {rating && (
                <>
                  <span className="text-white/20">•</span>
                  <span className="text-xs font-semibold text-[#E2B855] font-mono">
                    ★ {rating}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              {name}
            </h1>

            {tagline && (
              <p className="text-lg sm:text-xl text-[#E2B855]/90 font-light tracking-wide">
                {tagline}
              </p>
            )}

            {description && (
              <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-xl font-light">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#E2B855] to-[#C99C36] text-[#0A0B10] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#E2B855]/20 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                Browse The Carte
              </button>

              {location && (
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/70 font-mono">
                  <svg className="w-3.5 h-3.5 text-[#E2B855]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#161822]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#13151F]">
                    <span className="text-7xl mb-2">🍸</span>
                    <span className="text-xs uppercase tracking-widest text-white/40 font-mono">
                      Signature Experience
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent opacity-80" />
                
                {/* Floating Glass Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#E2B855] uppercase tracking-widest block">
                      Seasonal Tasting
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight">
                      Curated Daily Selection
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
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