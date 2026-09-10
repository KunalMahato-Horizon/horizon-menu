import React from 'react';

const CyclotronHero = ({ business }) => {
  const {
    name = 'ELEMENTAL // LAB',
    tagline = 'Molecular gastronomy, atomic flavor valences & liquid nitrogen reductions',
    description = 'Every dish is categorized by elemental family, atomic mass, and flavor valence. Tap any element tile in the matrix to inspect its electron shells and ingredient compounds.',
    rating = 4.9,
    businessType = 'Sensory Chemistry & Experimental Dining',
    location = 'Testing Facility, Bay 39',
  } = business || {};

  const scrollToMatrix = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-[#080A0F] text-white font-mono overflow-hidden">
      {/* Ambient Cyclotron Magnetic Glows */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-28 right-10 w-80 h-80 bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-6">
        {/* Laboratory Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-500/20 pb-3 text-[10px] text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-cyan-500 text-black font-black uppercase">
              SERIES 39
            </span>
            <span>GASTRONOMIC SPECTRUM V39.0</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">{businessType}</span>
            {rating && <span className="text-cyan-400 font-black">★ {rating} PURITY</span>}
          </div>
        </div>

        {/* Hero Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#101420] border border-cyan-500/30 text-xs font-bold text-cyan-300">
              <span>⚛ MOLECULAR TABLE CARTE DOCKET</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] text-white">
              {name}
            </h1>

            {tagline && (
              <p className="text-sm sm:text-base text-cyan-400 font-bold">
                &gt; "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl font-sans font-light">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMatrix}
                className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-black text-xs uppercase tracking-wider hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 transition-all"
              >
                Inspect Periodic Table ↓
              </button>
              {location && (
                <div className="px-4 py-2.5 rounded-xl bg-[#101420] border border-white/10 text-xs text-zinc-300">
                  ⚗️ {location}
                </div>
              )}
            </div>
          </div>

          {/* Right Elemental Series Key Card */}
          <div className="lg:col-span-5">
            <div className="p-5 rounded-2xl bg-[#0E121B] border border-cyan-500/30 shadow-2xl shadow-cyan-950/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-black uppercase text-cyan-300">
                  ELEMENTAL SERIES SPECTRUM
                </span>
                <span className="text-[10px] text-zinc-400">TABLE KEY</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>Alkali Starters</span>
                </div>
                <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-500/40 text-amber-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Transition Mains</span>
                </div>
                <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/40 text-purple-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                  <span>Noble Elixirs</span>
                </div>
                <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>Rare Earth Sweets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyclotronHero;