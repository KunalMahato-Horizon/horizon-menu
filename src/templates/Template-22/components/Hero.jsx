import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'ATELIER // MONOLITH',
    tagline = 'Architectural gastronomy, wood-fired cuts & precision fermentation',
    description = 'An interactive dining ledger. Tap any plate in the ledger below to expand dish specifications, farm provenance, and allergen profiles.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Modernist Dining & Wine Lab',
    location = 'Gallery Quarter, Pavillion 22',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-4 sm:px-8 bg-[#F7F7F8] border-b border-black/10">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Telemetry Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono uppercase text-black/50 border-b border-black/10 pb-3">
          <div className="flex items-center gap-3">
            <span>LOOKBOOK // 2026</span>
            <span>•</span>
            <span>TABLE-SIDE SERVICE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#0F0F11] font-bold">{businessType}</span>
            {rating && <span className="text-[#0047FF] font-black">★ {rating}</span>}
          </div>
        </div>

        {/* Dramatic Typographic Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-mono font-black text-[#0F0F11] tracking-tighter uppercase leading-[0.95]">
            {name}
          </h1>

          {tagline && (
            <p className="text-sm sm:text-lg font-mono text-[#0047FF] font-bold uppercase tracking-tight">
              &gt; {tagline}
            </p>
          )}

          {description && (
            <p className="text-xs sm:text-sm text-black/60 font-mono leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>

        {/* Action Controls & Banner */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={scrollToMenu}
            className="px-6 py-3 rounded-xl bg-[#0F0F11] text-white text-xs font-mono font-black uppercase tracking-wider hover:bg-[#0047FF] transition-colors shadow-sm"
          >
            Open Menu Ledger ↓
          </button>
          {location && (
            <div className="px-4 py-3 rounded-xl bg-white border border-black/10 text-xs font-mono font-bold text-[#0F0F11]">
              Location: {location}
            </div>
          )}
        </div>

        {/* Full-Bleed Widescreen Hero Strip */}
        <div className="pt-4">
          <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden border border-black/10 bg-[#0F0F11]">
            {coverImage ? (
              <img
                src={coverImage}
                alt={name}
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#0F0F11] text-white">
                <span className="text-6xl mb-2">◼</span>
                <span className="text-xs font-mono tracking-widest uppercase text-white/50">
                  Curated Plating
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-mono text-xs">
              <span className="font-bold tracking-wider">TAP ANY DISH ROW BELOW TO REVEAL SPECIFICATIONS</span>
              <span className="text-[#0047FF] font-black hidden sm:inline">[INTERACTIVE]</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;