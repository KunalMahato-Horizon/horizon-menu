import React from 'react';

const ReceiptHero = ({ business }) => {
  const {
    name = 'NOVA THERMAL TICKET',
    tagline = 'Freshly printed farm cuts, ember reductions & cold-pressed brews',
    description = 'Items are printed in order of preparation. Present your table ticket number to the counter server upon requirement.',
    rating = 4.9,
    businessType = 'Thermal Deli & Craft Counter',
    location = 'Terminal Row, Station 40',
  } = business || {};

  const scrollToMenu = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 sm:pt-24 pb-4 px-2 sm:px-4 font-mono text-[#18181B] text-center">
      <div className="max-w-xl mx-auto space-y-3">
        {/* Receipt Header Border */}
        <div className="text-[11px] tracking-tight select-none opacity-60">
          ************************************************
        </div>

        {/* Store Name & Register Header */}
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-widest block text-black/60">
            *** OFFICIAL DINE-IN BILL OF FARE ***
          </span>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black">
            {name}
          </h1>
          <p className="text-xs uppercase font-bold text-black/70">
            {businessType} • EST. 2026
          </p>
          {location && (
            <p className="text-[11px] text-black/60">
              TERMINAL: {location}
            </p>
          )}
        </div>

        {/* Dash Rule */}
        <div className="text-[11px] tracking-tight select-none opacity-60">
          ------------------------------------------------
        </div>

        {/* Tagline & Receipt Memo */}
        <div className="space-y-2 py-1 text-left px-2 sm:px-4">
          {tagline && (
            <p className="text-xs font-bold text-black uppercase">
              &gt; MEMO: {tagline}
            </p>
          )}
          {description && (
            <p className="text-[11px] text-black/70 leading-relaxed font-sans font-light">
              {description}
            </p>
          )}
          <div className="flex justify-between items-center text-[10px] text-black/60 pt-1 border-t border-dashed border-black/20">
            <span>PRINT SPEED: 250MM/S</span>
            {rating && <span className="font-bold text-black">★ {rating} CRITIC SCORE</span>}
          </div>
        </div>

        {/* Scroll Action Button */}
        <div className="pt-2">
          <button
            onClick={scrollToMenu}
            className="w-full py-2.5 rounded bg-black text-[#FAF8F5] text-xs font-black uppercase tracking-wider hover:bg-zinc-800 transition-colors shadow-xs active:translate-y-0.5"
          >
            [ SCROLL DOWN FOR ITEMIZED DOCKET ↓ ]
          </button>
        </div>

        <div className="text-[11px] tracking-tight select-none opacity-60">
          ================================================
        </div>
      </div>
    </section>
  );
};

export default ReceiptHero;