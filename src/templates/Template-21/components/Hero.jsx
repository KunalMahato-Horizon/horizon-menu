import React from 'react';

const Hero = ({ business }) => {
  const {
    name = "L'Herbier Kitchen",
    tagline = 'Wild roots, wood-pressed botanicals & ancient grain sourdough',
    description = 'An edible herbarium curated around seasonal micro-harvests and wild-foraged greens. Every plate is documented, cataloged, and prepared fresh for your table.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Botanical Dining & Natural Wine Room',
    location = 'Conservatory Row, Greenhouse 4',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 px-4 sm:px-6 bg-[#F6F3EB] overflow-hidden">
      {/* Delicate Herbarium Ring Watermark */}
      <div className="absolute top-10 right-1/3 w-72 h-72 rounded-full border border-[#DBD4C0]/50 pointer-events-none" />
      <div className="absolute top-24 right-1/4 w-52 h-52 rounded-full border border-[#DBD4C0]/30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Field Notes Column */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#1E2721] text-[#C4923C] text-[10px] font-mono uppercase tracking-widest font-bold">
              <span>{businessType}</span>
              {rating && <span>• ★ {rating}</span>}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#1E2721] tracking-tight leading-[1.08]">
              {name}
            </h1>

            {tagline && (
              <p className="text-base sm:text-lg text-[#964F33] font-serif italic">
                "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-[#4F5751] leading-relaxed max-w-xl font-serif">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3 rounded-md bg-[#1E2721] text-[#F6F3EB] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#2F3E34] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xs border border-[#C4923C]/50"
              >
                Inspect The Folio ↓
              </button>
              {location && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-[#ECE5D4] text-xs font-mono text-[#1E2721] border border-[#DBD4C0]">
                  <span>🌿</span>
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Botanical Specimen Mount */}
          <div className="lg:col-span-5">
            <div className="relative p-2.5 rounded-2xl bg-[#EDE6D6] border border-[#DBD4C0] shadow-md">
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-[#E2D8C3] border border-[#DBD4C0]/80">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#E5DEC9]">
                    <span className="text-6xl mb-2">🌱</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#1E2721] uppercase font-bold">
                      Specimen Collector
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2721]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#F6F3EB]/95 border border-[#DBD4C0] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-[#964F33] uppercase tracking-wider block">
                      Daily Foraged Harvest
                    </span>
                    <span className="text-xs font-serif font-bold text-[#1E2721]">
                      Table-Side Plating
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#3F5E46] font-bold">
                    SPEC // 01
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