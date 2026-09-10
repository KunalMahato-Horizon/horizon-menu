import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'Brasserie Saint-Germain',
    tagline = 'Gastronomie bourgeoise, rotisserie au feu de bois & grands crus',
    description = 'An homage to classic Parisian dining rooms. Traditional copper-pan reductions, dry-aged French cuts, and viennoiserie crafted with Normandy butter.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Brasserie Traditionnelle & Bar à Vin',
    location = 'Place Royale, Galerie 14',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 px-4 sm:px-6 bg-[#F8F5EE] overflow-hidden">
      {/* Decorative Heritage Flourishes */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-48 bg-[#C5A059]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#0E261C] text-[#C5A059] text-[10px] font-mono uppercase tracking-widest font-bold">
              <span>{businessType}</span>
              {rating && <span>• ★ {rating}</span>}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0E261C] tracking-tight leading-[1.1]">
              {name}
            </h1>

            {tagline && (
              <p className="text-base sm:text-lg text-[#C5A059] font-serif italic">
                "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-[#4A473D] leading-relaxed max-w-xl font-serif">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-6 py-3 rounded-md bg-[#0E261C] text-[#F8F5EE] border border-[#C5A059] text-xs font-mono font-bold uppercase tracking-widest shadow-sm hover:bg-[#163B2C] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                Consulter La Carte ↓
              </button>
              {location && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-[#EFE9DB] text-xs font-serif text-[#0E261C] border border-[#D8CEBA]">
                  <span>📍</span>
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Showcase Frame */}
          <div className="lg:col-span-5">
            <div className="relative p-2 rounded-xl bg-[#0E261C] border-2 border-[#C5A059]/40 shadow-xl">
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden bg-[#16382B]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#132F23]">
                    <span className="text-6xl mb-2">🥩</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase">
                      Spécialité Maison
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E261C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-md bg-[#F8F5EE]/95 border border-[#C5A059]/40 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-[#C5A059] uppercase tracking-wider block">
                      Recommandation du Chef
                    </span>
                    <span className="text-xs font-serif font-bold text-[#0E261C]">
                      Fait Maison Tous Les Jours
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-xs bg-[#0E261C] text-[#C5A059] text-[9px] font-mono font-bold border border-[#C5A059]/50">
                    Table
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