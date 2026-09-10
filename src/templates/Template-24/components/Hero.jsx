import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'Torii Midnight Yatai',
    tagline = 'Binchotan charcoal skewers, savory dashi & cold draft highballs',
    description = 'An evening izakaya counter celebrating skewered yakitori grilled over white oak charcoal, handmade gyoza, and slow-simmered late-night broth.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Midnight Robata & Izakaya',
    location = 'Lantern Alley, Stall 07',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-12 px-4 sm:px-6 bg-[#121113] overflow-hidden text-white">
      {/* Red Paper Lantern Warm Lighting Halo */}
      <div className="absolute top-12 right-1/4 w-80 h-80 rounded-full bg-[#E63946]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-32 left-10 w-64 h-64 rounded-full bg-[#E9C46A]/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Stall Lore */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-[#E9C46A] text-[11px] font-mono uppercase font-bold tracking-widest">
              <span>{businessType}</span>
              {rating && <span className="text-[#FF6B6B]">★ {rating}</span>}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight leading-[1.08]">
              {name}
            </h1>

            {tagline && (
              <p className="text-base sm:text-lg text-[#E9C46A] font-serif italic">
                "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-xl font-sans">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3 rounded-xl bg-[#E63946] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-[#E63946]/20 hover:bg-[#FF4D5E] hover:-translate-y-0.5 active:translate-y-0 transition-all border border-[#FF6B6B]/40"
              >
                Inspect Counter Dishes ↓
              </button>
              {location && (
                <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.04] text-xs font-mono text-white/70 border border-white/10">
                  <span>🏮</span>
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Lattice Grill Display */}
          <div className="lg:col-span-5">
            <div className="relative p-2.5 rounded-3xl bg-[#1A181C] border border-white/10 shadow-2xl">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#201D22]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#171519]">
                    <span className="text-6xl mb-2">🍢</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#E9C46A] uppercase font-bold">
                      Charred Skewer Specialist
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121113]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#121113]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-[#E63946] uppercase tracking-wider block">
                      Yakitori Recommendation
                    </span>
                    <span className="text-xs font-serif font-black text-white">
                      Binchotan Seared Daily
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#E63946] text-white text-[9px] font-mono font-bold">
                    HOT
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