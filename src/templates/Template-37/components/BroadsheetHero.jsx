import React from 'react';

const BroadsheetHero = ({ business }) => {
  const {
    name = 'THE MORNING DISPATCH',
    tagline = 'Charcoal-printed culinary chronicles, wood-smoked news & morning provisions',
    description = 'Hot off the stone hearth. Every plate logged in this daily issue is prepared from scratch with micro-seasonal produce and direct flame roasts.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Daily Culinary Broadsheet & Saloon',
    location = 'Printing House Row, Stall 37',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-3 sm:px-6 lg:px-8 bg-[#F5EFEB] text-black font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Broadsheet Sub-Banner Strip */}
        <div className="border-y-2 border-black py-1.5 flex flex-wrap items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-wider text-black/75">
          <div className="flex items-center gap-2">
            <span className="font-black text-[#8B0000]">VOL. XXXVII</span>
            <span>•</span>
            <span>PRICE: GRATIS FOR TABLE PATRONS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold">{businessType}</span>
            {rating && <span className="font-black text-black">★ {rating} CRITIC'S CHOICE</span>}
          </div>
        </div>

        {/* Grand Headline & Front-Page Story */}
        <div className="p-4 sm:p-8 bg-white border-2 border-black shadow-[6px_6px_0px_0px_#121212]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-3.5 text-left">
              <span className="inline-block px-2.5 py-0.5 bg-[#8B0000] text-white font-mono font-black text-[9px] sm:text-[10px] uppercase tracking-widest">
                EXCLUSIVE EXTRA EDITION
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] text-black">
                {name}
              </h1>

              {tagline && (
                <p className="text-sm sm:text-base font-bold italic text-black/80 border-l-4 border-black pl-3">
                  "{tagline}"
                </p>
              )}

              {description && (
                <p className="text-xs sm:text-sm text-black/70 font-sans leading-relaxed max-w-xl">
                  {description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={scrollToMenu}
                  className="px-5 py-2.5 bg-black text-[#F5EFEB] font-mono font-black text-xs uppercase tracking-wider border-2 border-black hover:bg-[#8B0000] hover:border-[#8B0000] transition-all shadow-[3px_3px_0px_0px_#121212] active:translate-x-[1px] active:translate-y-[1px]"
                >
                  Read Daily Dispatch ↓
                </button>
                {location && (
                  <div className="px-3.5 py-2 bg-[#F5EFEB] border border-black text-xs font-mono font-bold">
                    📍 {location}
                  </div>
                )}
              </div>
            </div>

            {/* Right Front-Page Photo Wire */}
            <div className="lg:col-span-5">
              <div className="p-2 bg-[#F5EFEB] border-2 border-black">
                <div className="relative h-56 sm:h-72 rounded overflow-hidden bg-black/10 border border-black">
                  {coverImage ? (
                    <img
                      src={coverImage}
                      alt={name}
                      className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#F5EFEB]">
                      <span className="text-5xl mb-2">📰</span>
                      <span className="text-xs font-mono uppercase font-black tracking-widest">
                        FRONT PAGE PHOTOGRAPH WIRE
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 right-2 bg-white/95 p-2 border border-black font-mono text-[9px] flex items-center justify-between">
                    <span className="font-black uppercase">Fig. 1 — The Grand Table Service</span>
                    <span className="text-black/60 font-bold">HOT OFF THE PRESS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadsheetHero;