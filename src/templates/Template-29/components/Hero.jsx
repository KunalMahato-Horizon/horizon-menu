import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'CHROMA // LAB',
    tagline = 'Avant-garde edible sculptures, liquid nitrogen cold drops & infrared hearth',
    description = 'A culinary gallery where structural pastry, dry-aged cuts, and hyper-seasonal botanicals intersect. Browse the active exhibition catalogue below.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Culinary Art Studio & Concept Bar',
    location = 'Gallery Block 29, Level 0',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-10 px-4 sm:px-6 lg:px-8 bg-[#060709] overflow-hidden text-white">
      {/* Iridescent Aurora Lighting Glows */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#7B2CBF]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-36 right-10 w-80 h-80 bg-[#00F5D4]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Presentation */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-mono font-semibold tracking-wider text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
              <span className="uppercase">{businessType}</span>
              {rating && <span className="text-[#F72585] font-bold">★ {rating}</span>}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-mono font-black tracking-tight leading-[1.05] uppercase bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              {name}
            </h1>

            {tagline && (
              <p className="text-sm sm:text-lg text-[#00F5D4] font-mono">
                &gt; {tagline}
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed max-w-xl font-light">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3 rounded-xl bg-white text-black font-mono font-black text-xs uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#00F5D4] hover:to-[#F72585] hover:text-white transition-all shadow-lg shadow-white/5 active:scale-95"
              >
                Inspect Exhibition ↓
              </button>
              {location && (
                <div className="px-4 py-2.5 rounded-xl bg-[#0E1015] border border-white/10 text-xs font-mono text-zinc-400">
                  📍 {location}
                </div>
              )}
            </div>
          </div>

          {/* Right Widescreen Sculpture Showcase */}
          <div className="lg:col-span-5">
            <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-[#00F5D4]/40 via-white/10 to-[#F72585]/40 shadow-2xl">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-[22px] overflow-hidden bg-[#0E1015]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0E1015] text-center p-6">
                    <span className="text-6xl mb-3 text-white/80">◈</span>
                    <span className="text-xs font-mono tracking-widest text-[#00F5D4] uppercase font-bold">
                      SCULPTURAL TASTING INSTALLATION
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-transparent pointer-events-none" />

                {/* Floating Exhibition Card Note */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-[#00F5D4] uppercase tracking-widest block font-bold">
                      INSTALLATION 01
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase">
                      Live Kitchen Craft Plating
                    </span>
                  </div>
                  <span className="px-2 py-1 rounded bg-white/10 border border-white/20 text-[9px] font-mono text-zinc-300">
                    EDITION // 29
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