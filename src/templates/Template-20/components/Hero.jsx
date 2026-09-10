import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'Caffè Pasticceria',
    tagline = 'Handmade brioche, gelato artigianale & espresso bar',
    description = 'An homage to Mid-Century Milanese cinema cafes. Slow-fermented panettone, layered mille-feuille, and heritage espresso pulled fresh for your table.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Grand Café & Gelateria',
    location = 'Corso Magenta, Galleria 20',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 px-4 sm:px-6 bg-[#FDFBF7] overflow-hidden">
      <div className="relative max-w-4xl mx-auto text-center space-y-5">
        {/* Symmetrical Header Banner */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#CFE7DA] border-2 border-[#3D141E] text-xs font-mono font-bold uppercase text-[#3D141E] shadow-[2px_2px_0px_#3D141E]">
          <span>{businessType}</span>
          {rating && <span>✦ ★ {rating}</span>}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-[#3D141E] tracking-tight leading-[1.02]">
          {name}
        </h1>

        {/* Tagline */}
        {tagline && (
          <p className="text-base sm:text-xl text-[#3D141E]/80 font-serif italic font-medium max-w-xl mx-auto">
            "{tagline}"
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-[#3D141E]/70 leading-relaxed max-w-lg mx-auto font-sans">
            {description}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={scrollToMenu}
            className="px-6 py-3 rounded-full bg-[#F5CAD2] text-[#3D141E] font-mono font-bold text-xs uppercase tracking-wider border-2 border-[#3D141E] shadow-[3px_3px_0px_#3D141E] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#3D141E] transition-all"
          >
            Consulter Le Menu ↓
          </button>
          {location && (
            <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border-2 border-[#3D141E] text-xs font-mono font-bold text-[#3D141E] shadow-[2px_2px_0px_#3D141E]">
              <span>📍</span>
              <span>{location}</span>
            </div>
          )}
        </div>

        {/* Symmetrical Frame Showcase */}
        <div className="pt-6 max-w-2xl mx-auto">
          <div className="relative p-3 rounded-3xl bg-[#CFE7DA] border-3 border-[#3D141E] shadow-[6px_6px_0px_#3D141E]">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#3D141E] bg-[#F5CAD2]">
              {coverImage ? (
                <img
                  src={coverImage}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#FDFBF7]">
                  <span className="text-7xl mb-2">🍰</span>
                  <span className="text-[11px] font-mono tracking-widest text-[#3D141E] font-bold uppercase">
                    Pastry of the House
                  </span>
                </div>
              )}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white border-2 border-[#3D141E] text-[#3D141E] font-mono font-bold text-[10px] uppercase shadow-[1px_1px_0px_#3D141E]">
                Fait Maison
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 border-2 border-[#3D141E] flex items-center justify-between">
                <span className="text-xs font-serif font-black text-[#3D141E]">
                  Table Service Selection
                </span>
                <span className="text-[10px] font-mono font-bold text-[#3D141E] bg-[#F5CAD2] px-2 py-0.5 rounded-full border border-[#3D141E]">
                  Fresh Batch
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;