import React from 'react';

const FilmRollHero = ({ business, isSafelight }) => {
  const {
    name = 'NOIR 35MM',
    tagline = 'Silver halide reductions, wood smoke exposures & artisanal grain',
    description = 'Every dish is exposed, timed, and washed like a fine-art silver gelatin print. Scrutinize the proof frames below to inspect the day’s harvest.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Analog Hearth & Chemical Bar',
    location = 'Gallery Quarter, Frame 33',
  } = business || {};

  const scrollToProofs = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`relative pt-24 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden font-mono transition-colors duration-500 ${
        isSafelight ? 'bg-[#0A0203] text-[#FF2A3A]' : 'bg-[#0A0B0E] text-[#F4F4F6]'
      }`}
    >
      <div className="relative max-w-7xl mx-auto space-y-6">
        {/* Film Stock Header Ribbon */}
        <div
          className={`flex flex-wrap items-center justify-between gap-2 border-b pb-3 text-[10px] tracking-wider uppercase ${
            isSafelight ? 'border-[#FF2A3A]/30 text-[#FF2A3A]/70' : 'border-white/10 text-white/40'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold">
              ISO 400 • 35MM FORMAT
            </span>
            <span>CONTACT SHEET // LATITUDE 33</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-bold">{businessType}</span>
            {rating && (
              <span className={isSafelight ? 'text-white' : 'text-[#FFC72C]'}>
                ★ {rating} / 5.0
              </span>
            )}
          </div>
        </div>

        {/* Narrative Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold tracking-widest uppercase border ${
                isSafelight
                  ? 'bg-[#FF2A3A]/10 border-[#FF2A3A]/40 text-[#FF2A3A]'
                  : 'bg-white/[0.05] border-white/15 text-white/80'
              }`}
            >
              <span>▸ 36 EXPOSURES LOGGED</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[0.98]">
              {name}
            </h1>

            {tagline && (
              <p
                className={`text-sm sm:text-base font-bold ${
                  isSafelight ? 'text-[#FF808A]' : 'text-[#FFC72C]'
                }`}
              >
                &gt; {tagline}
              </p>
            )}

            {description && (
              <p
                className={`text-xs sm:text-sm leading-relaxed max-w-xl font-sans font-light ${
                  isSafelight ? 'text-[#FF808A]/80' : 'text-zinc-400'
                }`}
              >
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToProofs}
                className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 ${
                  isSafelight
                    ? 'bg-[#FF2A3A] text-black hover:bg-white'
                    : 'bg-white text-black hover:bg-[#FFC72C]'
                }`}
              >
                Examine Proof Frames ↓
              </button>
              {location && (
                <div
                  className={`px-4 py-2.5 rounded-xl border text-xs ${
                    isSafelight
                      ? 'bg-[#150406] border-[#FF2A3A]/30 text-[#FF2A3A]'
                      : 'bg-[#14171F] border-white/10 text-white/70'
                  }`}
                >
                  🎞 {location}
                </div>
              )}
            </div>
          </div>

          {/* Master Exposure Contact Card */}
          <div className="lg:col-span-5">
            <div
              className={`p-3 rounded-2xl border transition-colors ${
                isSafelight ? 'bg-[#150406] border-[#FF2A3A]/40' : 'bg-[#14171F] border-white/15'
              }`}
            >
              <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden bg-black border border-white/10">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isSafelight ? 'filter contrast-125 sepia hue-rotate-[315deg]' : 'opacity-85'
                    }`}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-5xl mb-2">📸</span>
                    <span className="text-xs uppercase tracking-widest font-bold">
                      FINE GRAIN GELATIN PRINT
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Film Edge Data Overlay */}
                <div className="absolute top-3 left-3 text-[9px] text-white/80 bg-black/60 px-2 py-0.5 rounded border border-white/20">
                  EXP. 00 // MASTER FRAME
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest block font-bold text-white/50">
                      NEGATIVE PROOF
                    </span>
                    <span className="font-bold text-white uppercase">Table-Plated Exposure</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded font-black text-[9px] ${
                      isSafelight ? 'bg-[#FF2A3A] text-black' : 'bg-[#FFC72C] text-black'
                    }`}
                  >
                    100% PROVENANCE
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

export default FilmRollHero;