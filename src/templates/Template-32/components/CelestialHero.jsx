import React from 'react';

const CelestialHero = ({ business, onConsultOracle }) => {
  const {
    name = 'THE ARCANA CARTE',
    tagline = 'Tarot of flavors, ember divinations & celestial elixirs',
    description = 'Every dish is an Arcanum waiting to be revealed. Tap any card below to flip between its astrological sigil and its culinary composition.',
    rating = 4.9,
    businessType = 'Mystic Dining Parlor & Cocktail Salon',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-[#080911] text-[#E0E7FF] overflow-hidden text-center">
      {/* Mystical Starlight Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7B1124]/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-36 left-1/4 w-80 h-80 bg-[#3B28CC]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto space-y-4">
        {/* Moon Phase Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C06E]/30 text-[10px] sm:text-xs font-mono text-[#E5C06E]">
          <span>☽ ◯ ☾</span>
          <span className="uppercase tracking-widest">{businessType}</span>
          {rating && <span className="font-bold">★ {rating}</span>}
        </div>

        {/* Serif Gothic Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white uppercase leading-[1.08]">
          {name}
        </h1>

        {tagline && (
          <p className="text-base sm:text-xl text-[#E5C06E] font-serif italic max-w-xl mx-auto">
            "{tagline}"
          </p>
        )}

        {description && (
          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed max-w-lg mx-auto font-light">
            {description}
          </p>
        )}

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <button
            onClick={scrollToMenu}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C59B3F] to-[#E5C06E] text-[#080911] font-mono font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#E5C06E]/20"
          >
            Read The Spread ↓
          </button>
          <button
            onClick={onConsultOracle}
            className="px-5 py-2.5 rounded-xl bg-[#14172B] hover:bg-[#1E233F] border border-[#E5C06E]/30 text-[#E5C06E] font-mono text-xs uppercase tracking-wider transition-all"
          >
            Draw A Random Plate ✦
          </button>
        </div>
      </div>
    </section>
  );
};

export default CelestialHero;