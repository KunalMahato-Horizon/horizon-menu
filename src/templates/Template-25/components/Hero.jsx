import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'Fjord & Frost',
    tagline = 'Wild juniper smoke, cold-water kelp & birchwood roasted game',
    description = 'An edible expedition through Scandinavian foraging traditions. Cold-smoked in sea-salted coastal mists, roasted over slow birch embers, and plated directly to your table.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Nordic Hearth & Coastal Smokehouse',
    location = 'Arctic Harbor Wharf, Slip 25',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-12 px-4 sm:px-6 bg-[#F0F4F8] overflow-hidden">
      {/* Glacial Aurora Ambient Glows */}
      <div className="absolute top-10 right-1/4 w-80 h-80 rounded-full bg-[#38BDF8]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-32 left-10 w-72 h-72 rounded-full bg-[#0284C7]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B192C] text-[#38BDF8] text-[10px] font-mono uppercase tracking-widest font-bold">
              <span>{businessType}</span>
              {rating && <span className="text-white">✦ ★ {rating}</span>}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#0B192C] tracking-tight leading-[1.08]">
              {name}
            </h1>

            {tagline && (
              <p className="text-base sm:text-lg text-[#0284C7] font-serif italic">
                "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl font-sans">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3 rounded-xl bg-[#0B192C] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-sm hover:bg-[#0284C7] hover:-translate-y-0.5 active:translate-y-0 transition-all border border-[#38BDF8]/30"
              >
                Inspect The Smörgåsbord ↓
              </button>
              {location && (
                <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-xs font-mono text-[#0B192C] border border-[#CBD5E1] shadow-xs">
                  <span>⚓</span>
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Frosted Acrylic Showcase */}
          <div className="lg:col-span-5">
            <div className="relative p-2.5 rounded-3xl bg-white/70 backdrop-blur-md border-2 border-[#CBD5E1] shadow-lg">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#E2E8F0]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#E2E8F0]">
                    <span className="text-6xl mb-2">🐟</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#0B192C] uppercase font-bold">
                      Arctic Smokehouse Cut
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#F0F4F8]/95 backdrop-blur-xs border border-[#CBD5E1] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-[#B91C1C] uppercase tracking-wider block">
                      Coastal Harvest
                    </span>
                    <span className="text-xs font-serif font-black text-[#0B192C]">
                      Cold-Smoked Table Cut
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#0B192C] text-[#38BDF8] text-[9px] font-mono font-bold">
                    FRESH
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