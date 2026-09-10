import React from 'react';

const Hero = ({ business }) => {
  const {
    name = "Crème & Crust",
    tagline = "",
    description = "",
    location = "",
    timings = "",
  } = business || {};

  return (
    <section className="relative bg-[#3E2211] text-white pt-24 md:pt-32 pb-16 px-4 overflow-hidden border-b-4 border-[#241308]">
      {/* Background Ambient Warmth */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F2B828]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Ornate Frame Border */}
      <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl border border-[#F2B828]/30 relative bg-[#351B0C]/60 backdrop-blur-sm shadow-2xl">
        {/* Corner Accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#F2B828]" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#F2B828]" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#F2B828]" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#F2B828]" />

        <div className="text-center max-w-2xl mx-auto space-y-4">
          {/* Circular Roastery Stamp */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-[#F2B828] bg-[#F2B828]/10 border border-[#F2B828]/20 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Bespoke Roastery • Fresh Harvest
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-stone-100 leading-none">
            {name}
          </h1>

          {tagline && (
            <p className="text-base sm:text-xl font-serif italic text-[#F2B828] font-light">
              "{tagline}"
            </p>
          )}

          {description && (
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed max-w-lg mx-auto">
              {description}
            </p>
          )}

          {/* Quick Details Pill Rack */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-stone-300">
            {location && (
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                📍 {location}
              </span>
            )}
            {timings && (
              <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                🕒 {timings}
              </span>
            )}
            <span className="px-3 py-1 rounded-lg bg-[#F2B828]/15 border border-[#F2B828]/30 text-[#F2B828] font-bold">
              100% Arabica
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;