import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'BLUEPRINT // LAB',
    tagline = 'Calculated flavor geometry, open ember reductions & precision craft',
    description = 'Every plate is mapped, engineered, and executed to structural culinary tolerance. Browse the technical schematics, component ingredients, and preparation notes below.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Schematic Culinary Studio & Bar',
    location = 'Sector Grid 26 // Bay C',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-3 sm:px-6 bg-[#0A192F] overflow-hidden text-white font-mono">
      {/* Millimeter Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-6">
        {/* Engineering Title Block Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#00F0FF]/20 pb-2 text-[10px] text-[#48CAE4]">
          <div className="flex items-center gap-3">
            <span>SCALE: 1:1</span>
            <span>•</span>
            <span>SPEC: DINE-IN TABLE CARTE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#F0F4F8]">{businessType}</span>
            {rating && <span className="text-[#FFB703] font-bold">★ {rating} / 5.0</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Drafting Specs */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-[10px] font-bold tracking-widest uppercase">
              <span>SECTION // PRIMARY SCHEMATIC</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F0F4F8] tracking-tight uppercase leading-[1.02]">
              {name}
            </h1>

            {tagline && (
              <p className="text-sm sm:text-base text-[#48CAE4] font-bold">
                &gt; {tagline}
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-xl font-sans font-light">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-5 py-2.5 rounded-md bg-[#00F0FF] text-[#0A192F] text-xs font-black uppercase tracking-wider hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
              >
                [ VIEW DISH SCHEMATICS ↓ ]
              </button>
              {location && (
                <div className="px-3.5 py-2 rounded-md bg-[#071324] border border-[#00F0FF]/20 text-xs text-[#48CAE4]">
                  ⌖ {location}
                </div>
              )}
            </div>
          </div>

          {/* Right CAD Technical Illustration Box */}
          <div className="lg:col-span-5">
            <div className="relative p-2 rounded-2xl bg-[#071324] border border-[#00F0FF]/30 shadow-2xl">
              <div className="relative h-60 sm:h-76 rounded-xl overflow-hidden border border-[#00F0FF]/20 bg-[#0A192F]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#071324] text-center p-4">
                    <span className="text-5xl mb-2 text-[#00F0FF]">⌖</span>
                    <span className="text-[10px] tracking-widest text-[#48CAE4] uppercase font-bold">
                      ISOMETRIC PROJECTION // ACTIVE
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-transparent to-transparent" />
                
                {/* Crosshairs & Dimension Labels */}
                <div className="absolute top-3 left-3 text-[9px] text-[#00F0FF]/70 font-mono">
                  + 0.00 / 120.40
                </div>
                <div className="absolute top-3 right-3 text-[9px] text-[#FFB703] border border-[#FFB703]/40 px-1.5 py-0.2 rounded font-mono">
                  PROTOTYPE
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#071324]/90 border border-[#00F0FF]/30 backdrop-blur-md flex items-center justify-between text-xs">
                  <span className="font-bold text-white tracking-wide">PLATING ELEVATION 01</span>
                  <span className="text-[#00F0FF] font-black">TOLERANCE ±0.05</span>
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