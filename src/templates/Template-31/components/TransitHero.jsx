import React from 'react';

const TransitHero = ({ business }) => {
  const {
    name = 'METRO CONCOURSE',
    tagline = 'Express culinary transit lines, hearth-fired stops & craft transfers',
    description = 'Follow the colored transit tracks below. Each station stop represents a freshly engineered plate dispatched directly to your platform.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Concourse Kitchen & Tap Terminal',
    location = 'Central Junction, Gate 31',
  } = business || {};

  const scrollToTracks = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-[#0C0E14] text-white font-mono overflow-hidden">
      {/* Station Track Guide Lines (Decorative Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-6">
        {/* Terminal Dispatch Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 text-[10px] text-white/50">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold">ROUTE 31</span>
            <span>RAPID IN-TABLE SERVICE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">{businessType}</span>
            {rating && <span className="text-[#FFB800] font-black">★ {rating} / 5.0</span>}
          </div>
        </div>

        {/* Hero Narrative & Concourse Sign */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#FF3344]" />
              <span className="uppercase tracking-widest font-bold">ALL PLATFORMS CLEAR</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95] text-white">
              {name}
            </h1>

            {tagline && (
              <p className="text-sm sm:text-base text-[#00D26A] font-bold">
                &gt; {tagline}
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-xl font-sans font-light">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToTracks}
                className="px-6 py-3 rounded-xl bg-white text-black font-black text-xs uppercase tracking-wider hover:bg-[#FF3344] hover:text-white transition-all shadow-md active:scale-95"
              >
                Trace Transit Lines ↓
              </button>
              {location && (
                <div className="px-4 py-2.5 rounded-xl bg-[#161922] border border-white/10 text-xs text-white/70">
                  ⌖ {location}
                </div>
              )}
            </div>
          </div>

          {/* Right Terminal Departure Screen Banner */}
          <div className="lg:col-span-5">
            <div className="p-3 rounded-3xl bg-[#161922] border border-white/10 shadow-2xl">
              <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden bg-black/60 border border-white/5">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                    <span className="text-5xl mb-2">🚇</span>
                    <span className="text-xs tracking-widest text-white/50 uppercase font-bold">
                      EXPRESS DINING TERMINAL
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E14] via-transparent to-transparent pointer-events-none" />
                
                {/* Platform Callout Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0C0E14]/90 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[9px] text-[#FFB800] uppercase tracking-widest block font-bold">
                      TERMINAL HARVEST
                    </span>
                    <span className="font-bold text-white uppercase">Table Delivery Direct</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#00D26A] text-black font-black text-[9px]">
                    ON SCHEDULE
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

export default TransitHero;