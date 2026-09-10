import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'BENTO // KITCHEN',
    tagline = 'Engineered gastronomy, wild fermentations & precision flame',
    description = 'Every dish is executed with micro-seasonal ingredients, cold-extracted botanicals, and measured charcoal grilling. Browse the digital docket below.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Modular Bistro & Lab',
    location = 'Sector 7 // Module 19',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-3 sm:px-6 bg-[#0A0C10] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* 3-Part Bento Master Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          
          {/* Bento Tile A: Primary Concept (Span 7) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#121620] border border-white/10 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-white/80">
                <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
                <span className="uppercase tracking-widest">{businessType}</span>
                {rating && <span className="text-[#D4FF00] font-bold">★ {rating}</span>}
              </div>

              <h1 className="text-3xl sm:text-5xl font-mono font-black text-white tracking-tight uppercase leading-[1.05]">
                {name}
              </h1>

              {tagline && (
                <p className="text-sm sm:text-base text-[#D4FF00] font-mono">
                  &gt; {tagline}
                </p>
              )}

              {description && (
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-lg font-mono">
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 mt-4 border-t border-white/10">
              <button
                onClick={scrollToMenu}
                className="px-5 py-2.5 rounded-xl bg-[#D4FF00] text-[#0A0C10] font-mono font-black text-xs uppercase tracking-wider hover:brightness-110 hover:shadow-[0_0_20px_rgba(212,255,0,0.4)] transition-all"
              >
                [ VIEW ACTIVE DOCKET ↓ ]
              </button>
              {location && (
                <span className="text-xs font-mono text-white/40">
                  LOC // {location}
                </span>
              )}
            </div>
          </div>

          {/* Bento Tile B: Visual Spotlight Tile (Span 5) */}
          <div className="md:col-span-5 rounded-3xl bg-[#121620] border border-white/10 overflow-hidden relative group min-h-[260px] md:min-h-auto shadow-xl">
            {coverImage ? (
              <img
                src={coverImage}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#161C28] p-6 text-center">
                <span className="text-6xl mb-3">⚡</span>
                <span className="text-xs font-mono tracking-widest text-[#D4FF00] uppercase font-bold">
                  MICRO-HARVEST SPEC
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-black/30 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#0A0C10]/80 backdrop-blur-md border border-white/15 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#D4FF00] uppercase tracking-widest block font-bold">
                  SPEC // DISH OF THE DAY
                </span>
                <span className="text-xs font-mono font-bold text-white uppercase">
                  Table Plating In Progress
                </span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
            </div>
          </div>

          {/* Bento Tile C: Telemetry Ribbon (Full 12 Columns) */}
          <div className="md:col-span-12 p-3 sm:p-4 rounded-2xl bg-[#10141D] border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono">
            <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[9px] text-white/40 uppercase block">SERVICE TYPE</span>
              <span className="text-xs font-bold text-white">DIRECT TABLE QR</span>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[9px] text-white/40 uppercase block">PREPARATION</span>
              <span className="text-xs font-bold text-[#D4FF00]">100% SCRATCH</span>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[9px] text-white/40 uppercase block">AVERAGE TICKET</span>
              <span className="text-xs font-bold text-[#00F0FF]">~10-15 MIN</span>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[9px] text-white/40 uppercase block">WATER & CONDIMENTS</span>
              <span className="text-xs font-bold text-white">UPON REQUEST</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;