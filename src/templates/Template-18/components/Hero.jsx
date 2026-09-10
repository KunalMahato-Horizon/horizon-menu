import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'Groove & Needle',
    tagline = 'Deep vinyl cuts, siphon coffees & flame-seared robata',
    description = 'An acoustic sanctuary where analog sound meets slow kitchen craft. Every plate is prepared in rhythm with natural fermentation and wood charcoal.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Hi-Fi Audio Kissa & Kitchen',
    location = 'Vinyl Row, Soundstage 2',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 px-4 sm:px-6 bg-[#FAF5EC] overflow-hidden">
      {/* Vinyl Groove Rings Watermark */}
      <div className="absolute top-8 right-1/4 w-80 h-80 rounded-full border-4 border-[#E8DFCF]/50 pointer-events-none" />
      <div className="absolute top-16 right-1/4 w-64 h-64 rounded-full border-2 border-[#E8DFCF]/40 pointer-events-none" />
      <div className="absolute top-24 right-1/4 w-48 h-48 rounded-full border border-[#E8DFCF]/30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Liner Notes */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#19181A]/5 border border-[#19181A]/10 text-[#19181A] text-[11px] font-mono uppercase font-bold tracking-wider">
              <span>{businessType}</span>
              {rating && <span className="text-[#D9822B]">● ★ {rating}</span>}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#19181A] tracking-tight leading-[1.08]">
              {name}
            </h1>

            {tagline && (
              <p className="text-base sm:text-lg text-[#D9822B] font-serif italic">
                "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-[#4E4B45] leading-relaxed max-w-xl font-sans">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3 rounded-full bg-[#19181A] text-[#FAF5EC] text-xs font-mono font-bold uppercase tracking-wider shadow-sm hover:bg-[#D9822B] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                Inspect Tracklist ↓
              </button>
              {location && (
                <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#EDE5D6] text-xs font-mono text-[#19181A] border border-[#E0D5C3]">
                  <span>🎚️</span>
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Gatefold Album Sleeve Showcase */}
          <div className="lg:col-span-5">
            <div className="relative p-2.5 rounded-3xl bg-[#19181A] shadow-xl">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#262428] border border-white/10">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#201F22]">
                    <span className="text-6xl mb-2">📻</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#D9822B] uppercase font-bold">
                      Master Stereo Cut
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#19181A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#FAF5EC]/95 backdrop-blur-xs flex items-center justify-between border border-[#E3DAC9]">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-[#D9822B] uppercase tracking-wider block">
                      Featured Record Plate
                    </span>
                    <span className="text-xs font-serif font-black text-[#19181A]">
                      High-Fidelity Fresh Ingredients
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#19181A] text-[#FAF5EC] text-[9px] font-mono font-bold">
                    33 RPM
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