import React from 'react';

const MangaHero = ({ business }) => {
  const {
    name = 'SHONEN KITCHEN',
    tagline = 'High-voltage wok action, binchotan flame bursts & umami strikes',
    description = 'Read right-to-left or left-to-right. Every dish panel is drawn to deliver maximum culinary impact directly to your table.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Serialized Manga Dining',
    location = 'Neo Tokyo Arcade, Bay 36',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-3 sm:px-6 lg:px-8 bg-[#FAF8F5] overflow-hidden text-black font-sans">
      {/* Halftone Screentone Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_12%,transparent_13%)] bg-[size:10px_10px] opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Manga Page Frame Border */}
        <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] relative overflow-hidden">
          {/* Action Callout Sticker */}
          <div className="absolute top-3 right-3 sm:top-5 sm:right-5 px-3 py-1 bg-red-500 text-white font-black text-xs sm:text-sm uppercase tracking-widest rotate-[4deg] border-2 border-black shadow-[3px_3px_0px_0px_#000] select-none">
            NEW CHAPTER!
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Comic Narrative Block */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] sm:text-xs font-mono font-black uppercase tracking-wider">
                <span>WEEKLY RELEASE</span>
                <span>•</span>
                <span>{businessType}</span>
                {rating && <span className="text-yellow-300">★ {rating}</span>}
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.92] text-black">
                {name}
              </h1>

              {tagline && (
                <div className="relative inline-block bg-yellow-300 px-4 py-2 border-3 border-black shadow-[3px_3px_0px_0px_#000] rotate-[-1deg]">
                  <p className="text-xs sm:text-sm font-black uppercase tracking-wide">
                    "{tagline}"
                  </p>
                </div>
              )}

              {description && (
                <p className="text-xs sm:text-sm text-black/80 font-mono leading-relaxed max-w-xl">
                  {description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={scrollToMenu}
                  className="px-6 py-3 rounded-lg bg-black text-white font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black hover:bg-red-500 hover:text-white transition-all shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  START READING CHAPTERS ↓
                </button>
                {location && (
                  <div className="px-4 py-2.5 rounded-lg bg-[#FAF8F5] border-2 border-black text-xs font-mono font-black">
                    LOC: {location}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Key Manga Splash Panel */}
            <div className="lg:col-span-5">
              <div className="relative p-2 rounded-xl bg-white border-3 border-black shadow-[6px_6px_0px_0px_#000] rotate-[1deg] hover:rotate-0 transition-transform">
                <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-zinc-900 border-2 border-black">
                  {coverImage ? (
                    <img
                      src={coverImage}
                      alt={name}
                      className="w-full h-full object-cover filter contrast-125"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-100 text-center p-4">
                      <span className="text-6xl mb-2">⚡</span>
                      <span className="text-xs font-black uppercase tracking-widest text-black">
                        COVER SPLASH // ISSUE 36
                      </span>
                    </div>
                  )}

                  {/* Comic Action Bubble */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white text-black font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000] rotate-[-4deg]">
                    BAM!!
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-xs border-2 border-black flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono font-black text-red-600 uppercase block">
                        SIGNATURE CREATION
                      </span>
                      <span className="text-xs font-black uppercase text-black">
                        Table Plating In Progress
                      </span>
                    </div>
                    <span className="text-sm font-black">ジュワ~</span>
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

export default MangaHero;