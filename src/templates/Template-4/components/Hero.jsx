import React from 'react';

const Hero = ({ business }) => {
  const {
    name = "L'Oasis",
    tagline = "Artisan Cuisine & Botanical Cocktails",
    description = "",
    logo = null,
    coverImage = null,
  } = business || {};

  const scrollToMenu = () => {
    const targetElement = document.getElementById('menu') || document.querySelector('main');
    if (targetElement) {
      const yOffset = -70;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-stone-950 text-white overflow-hidden">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 select-none pointer-events-none">
        {coverImage ? (
          <>
            <img
              src={coverImage}
              alt={name}
              className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-105 scale-105"
            />
            {/* Radial vignette and vertical blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,10,9,0.7)_100%)]" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 flex items-center justify-center">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d6d3d1_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-amber-500/10 rounded-full blur-3xl" />
          </div>
        )}
      </div>

      {/* Brand Center Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center justify-center">
        
        {/* Brand Logo Emblem */}
        {logo && (
          <div className="mb-6 sm:mb-8">
            {typeof logo === 'string' && logo.length <= 4 ? (
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-stone-900/80 backdrop-blur-md ring-1 ring-white/20 shadow-2xl flex items-center justify-center text-3xl sm:text-4xl text-amber-300 font-serif font-black select-none"
                aria-hidden="true"
              >
                {logo}
              </div>
            ) : (
              <div className="p-1 rounded-3xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-2xl">
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-[22px] bg-stone-900"
                />
              </div>
            )}
          </div>
        )}

        {/* Star Divider Ornament */}
        <div className="mb-5 sm:mb-6 flex items-center justify-center gap-3">
          <span className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-amber-400" />
          <span className="text-amber-400 text-xs sm:text-sm select-none">✦</span>
          <span className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent via-amber-400/60 to-amber-400" />
        </div>

        {/* Restaurant Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-white leading-[1.08] mb-4 sm:mb-6">
          {name}
        </h1>

        {/* Tagline */}
        {tagline && (
          <p className="text-base sm:text-xl md:text-2xl text-amber-200/90 font-serif italic tracking-wide mb-4 sm:mb-6 max-w-2xl leading-relaxed">
            "{tagline}"
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm md:text-base text-stone-300/80 font-normal max-w-lg mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Interactive Scroll Indicator */}
      <button
        type="button"
        onClick={scrollToMenu}
        aria-label="Scroll to menu section"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-stone-400 hover:text-amber-300 transition-colors group cursor-pointer focus:outline-none"
      >
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-stone-400 group-hover:text-amber-300 transition-colors">
          Explore Menu
        </span>
        <div className="w-5 h-8 rounded-full border border-stone-600/80 group-hover:border-amber-400/80 flex items-start justify-center p-1 transition-colors">
          <div className="w-1 h-2 rounded-full bg-amber-400 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;