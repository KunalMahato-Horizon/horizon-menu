import React from 'react';

const Hero = ({ business }) => {
  const {
    name = 'The Daily Press',
    tagline = 'Hot off the skillet, wood-fired & printed fresh daily',
    description = 'Sourced before sunrise from market stalls and maritime docks. Handcrafted with honest ingredients and unhurried culinary tradition.',
    coverImage = null,
    rating = 4.9,
    businessType = 'Bakehouse & Hearth Kitchen',
    location = 'Printing House Row, Gate 4',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-4 sm:px-6 bg-[#F5F2EB] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Broadsheet Dateline Bar */}
        <div className="border-y border-[#1A1A1A] py-1.5 mb-6 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono uppercase text-[#1A1A1A] tracking-wider">
          <div className="flex items-center gap-3">
            <span>Special Late Edition</span>
            <span>•</span>
            <span>Circulation: Table-Side</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{businessType}</span>
            {rating && <span className="font-bold text-[#991B1B]">★ {rating} Rating</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Front Page Scoop (Left) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-block border border-[#991B1B] text-[#991B1B] px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest">
              Front Page Scoop
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#1A1A1A] tracking-tight leading-[1.02] uppercase">
              {name}
            </h1>

            {tagline && (
              <p className="text-base sm:text-xl font-serif italic text-[#1A1A1A] border-l-2 border-[#991B1B] pl-3">
                "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-[#333333] leading-relaxed max-w-xl font-serif">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToMenu}
                className="px-5 py-2.5 bg-[#1A1A1A] text-[#F5F2EB] font-mono text-xs uppercase font-bold tracking-widest border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] transition-colors shadow-[3px_3px_0px_0px_#991B1B]"
              >
                Read The Day's Bill ↓
              </button>
              {location && (
                <div className="px-3 py-2 bg-white border border-[#1A1A1A] text-xs font-mono font-bold text-[#1A1A1A]">
                  Dispatch: {location}
                </div>
              )}
            </div>
          </div>

          {/* Front Page Feature Image (Right) */}
          <div className="lg:col-span-5">
            <div className="p-2 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
              <div className="relative h-64 sm:h-80 overflow-hidden border border-[#1A1A1A] bg-[#EAE6DD]">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={name}
                    className="w-full h-full object-cover filter contrast-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#E5E0D5]">
                    <span className="text-6xl mb-2">🍞</span>
                    <span className="text-[10px] font-mono tracking-widest text-[#1A1A1A] font-bold uppercase">
                      Hearthside Selection
                    </span>
                  </div>
                )}
              </div>
              <div className="pt-2 px-1 flex items-center justify-between text-[10px] font-mono text-[#1A1A1A]">
                <span className="italic font-serif">Fig 1. Daily Handcrafted Special</span>
                <span className="font-bold text-[#991B1B] uppercase">Fresh Batch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;