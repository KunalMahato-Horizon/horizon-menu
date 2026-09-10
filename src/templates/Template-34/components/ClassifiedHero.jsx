import React from 'react';

const ClassifiedHero = ({ business }) => {
  const {
    name = 'PROJECT // NOVA',
    tagline = 'Declassified culinary intelligence, ember-roasted assets & covert infusions',
    description = 'Every plate documented in this folder has been approved for table-side consumption. Tap any black redacted ink strip [██████] to expose secret ingredients, pairings, and preparation methods.',
    rating = 4.9,
    businessType = 'Classified Tasting Bureau & Kitchen',
    location = 'Sector 34 // Safehouse Gate 4',
  } = business || {};

  const scrollToDossier = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-3 sm:px-6 lg:px-8 bg-[#ECE3CE] text-[#1A1A1A] font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Manila File Folder Jacket Container */}
        <div className="relative p-6 sm:p-8 rounded-2xl bg-[#F5EFE1] border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A]">
          {/* Diagonal Red Rubber Stamp Badge */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 border-3 border-[#B91C1C] text-[#B91C1C] px-3 py-1 text-xs sm:text-sm font-black uppercase tracking-widest rotate-[-8deg] pointer-events-none select-none">
            DECLASSIFIED
          </div>

          <div className="space-y-4 max-w-3xl">
            {/* Bureau Metadata Tag */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-[#1A1A1A]/70 uppercase">
              <span className="px-2 py-0.5 rounded bg-[#1A1A1A] text-[#ECE3CE] font-bold">
                FILE NO. 34-GASTRO
              </span>
              <span>•</span>
              <span>{businessType}</span>
              {rating && <span className="font-bold text-[#B91C1C]">★ {rating} RATING</span>}
            </div>

            {/* Folder Codename Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.98]">
              {name}
            </h1>

            {tagline && (
              <p className="text-sm sm:text-base font-bold text-[#B91C1C] border-l-3 border-[#B91C1C] pl-3">
                &gt; "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-sans">
                {description}
              </p>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToDossier}
                className="px-5 py-2.5 rounded bg-[#1A1A1A] text-[#ECE3CE] text-xs font-black uppercase tracking-wider border-2 border-[#1A1A1A] hover:bg-[#B91C1C] hover:border-[#B91C1C] transition-all shadow-[3px_3px_0px_0px_#B91C1C] active:translate-x-[1px] active:translate-y-[1px]"
              >
                Inspect Case Files ↓
              </button>
              {location && (
                <div className="px-3.5 py-2 rounded bg-white border border-[#1A1A1A] text-xs font-bold">
                  COORDINATES: {location}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassifiedHero;