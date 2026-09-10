import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'VAULT // OBSIDIAN',
    tagline = 'Micro-seasonal tasting flight, rare barrel ages & open flame infusions',
    description = 'Every plate is calibrated around specific flavor spectrums, wild botanicals, and mesquite ember roasting. Browse the flight selections and pairings below.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Speakeasy Dining & Tasting Cellar',
    location = 'Sub-Level 02, Vault Chambers',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-10 px-4 sm:px-6 bg-[#090A0F] overflow-hidden">
      {/* Ambient Lighting Cones */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#DFB76C]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto space-y-6">
        {/* Top Badging - now sits safely below the header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DFB76C]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-white/70">
            {businessType}
          </span>
          {rating && (
            <>
              <span className="text-white/20">•</span>
              <span className="text-[11px] font-mono font-bold text-[#DFB76C]">
                ★ {rating}
              </span>
            </>
          )}
        </div>

        {/* Title Block */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black text-white tracking-tight leading-[1.08] uppercase">
            {name}
          </h1>

          {tagline && (
            <p className="text-base sm:text-xl text-[#DFB76C]/90 font-serif italic max-w-2xl">
              "{tagline}"
            </p>
          )}

          {description && (
            <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed max-w-2xl font-light">
              {description}
            </p>
          )}
        </div>

        {/* Actions & Key Indicators */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={scrollToMenu}
            className="px-6 py-3 rounded-full bg-[#DFB76C] text-[#090A0F] font-mono font-black text-xs uppercase tracking-wider hover:brightness-110 hover:shadow-[0_0_20px_rgba(223,183,108,0.3)] active:scale-95 transition-all"
          >
            Explore Tasting Flight ↓
          </button>
          {location && (
            <div className="px-4 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-white/70">
              📍 {location}
            </div>
          )}
        </div>

        {/* Cinematic Tasting Spotlight Banner */}
        <div className="pt-4">
          <div className="relative h-60 sm:h-80 rounded-3xl overflow-hidden border border-white/[0.08] bg-[#11131B] group">
            {coverImage ? (
              <img
                src={coverImage}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#11131B]">
                <span className="text-6xl mb-2">🥃</span>
                <span className="text-xs font-mono tracking-widest text-[#DFB76C] uppercase font-bold">
                  Chef's Reserve Specimen
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-black/40 to-transparent pointer-events-none" />

            {/* Floating Glass Plate Note */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#DFB76C] uppercase tracking-widest block font-bold">
                  TONIGHT'S CELLAR HARVEST
                </span>
                <span className="text-sm font-serif font-bold text-white">
                  Dry-Aged & Binchotan Charcoal Infusions
                </span>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#DFB76C]/20 border border-[#DFB76C]/40 text-[#DFB76C] font-mono text-[10px] font-bold uppercase">
                Pairing Menu
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;