import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'Paloma Solarium',
    tagline = 'Open flame cooking, agave distillates & sun-baked sourdough',
    description = 'Celebrated desert flavors prepared over native mesquite charcoal. Unhurried table service with locally harvested produce and seasonal infusions.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Desert Cantina & Hearth Bar',
    location = 'Canyon View Promenade, Suite 3',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 px-4 sm:px-6 bg-[#F9F6F0] overflow-hidden">
      {/* Mid-Century Sun Halos */}
      <div className="absolute top-12 right-1/4 w-80 h-80 rounded-full bg-[#E8A948]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-32 left-10 w-64 h-64 rounded-full bg-[#D96B43]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F2B20]/5 border border-[#1F2B20]/15 text-[#1F2B20] text-[11px] font-mono uppercase font-bold tracking-wider">
              <span>{businessType}</span>
              {rating && <span className="text-[#D96B43]">✦ ★ {rating}</span>}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#1F2B20] tracking-tight leading-[1.08]">
              {name}
            </h1>

            {tagline && (
              <p className="text-base sm:text-lg text-[#D96B43] font-serif italic">
                "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-[#4E564E] leading-relaxed max-w-xl font-sans">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3 rounded-full bg-[#D96B43] text-[#F9F6F0] text-xs font-mono font-bold uppercase tracking-wider shadow-sm hover:bg-[#C25833] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                Explore The Hearth ↓
              </button>
              {location && (
                <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#EFE8DC] text-xs font-mono text-[#1F2B20] border border-[#E5DDD0]">
                  <span>🌵</span>
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Arched Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative p-2.5 rounded-t-[70px] rounded-b-3xl bg-[#EFE8DC] border-2 border-[#E5DDD0] shadow-md">
              <div className="relative h-72 sm:h-88 rounded-t-[60px] rounded-b-2xl overflow-hidden bg-[#E2D8C7]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#E5DDD0]">
                    <span className="text-6xl mb-2">✺</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#1F2B20] uppercase font-bold">
                      Open Flame Special
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2B20]/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#F9F6F0]/95 backdrop-blur-xs flex items-center justify-between border border-[#E5DDD0]">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#D96B43] uppercase tracking-wider block">
                      Mesquite Hearth Pick
                    </span>
                    <span className="text-xs font-serif font-bold text-[#1F2B20]">
                      Smoked Daily In-House
                    </span>
                  </div>
                  <span className="text-base text-[#E8A948]">✦</span>
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