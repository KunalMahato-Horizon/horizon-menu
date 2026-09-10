import React from 'react';
import { MatteClayDiya, HangingFairyLights } from './DiwaliVisuals';

const Header = ({ business, activeDiyas, onLightDiya }) => {
  const { name = 'DEEPOTSAV // SANDHYA', location = 'Table 04' } = business || {};

  return (
    <header className="relative z-20 font-serif">
      {/* Hanging Fairy Lights */}
      <div className="w-full overflow-hidden leading-none pointer-events-none opacity-80">
        <HangingFairyLights className="w-full h-7 sm:h-9" />
      </div>

      <div className="px-3 sm:px-6 lg:px-8 mt-1">
        <div className="max-w-6xl mx-auto rounded-2xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border bg-[#1A1320]/90 backdrop-blur-xs border-[#D4A373]/20 shadow-md">
          {/* Brand Identity */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#251A29] border border-[#D4A373]/40 flex items-center justify-center shrink-0 shadow-inner">
              <MatteClayDiya className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold tracking-wide uppercase text-[#F4EBD9] block leading-none truncate">
                  {name}
                </span>
                <span className="text-[10px] text-[#261B24] bg-[#D4A373] px-1.5 py-0.2 rounded font-sans font-bold hidden xs:inline">
                  दीपावली
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-widest text-[#D4A373] uppercase mt-1 block truncate">
                {location} • FESTIVE DINING CARTE
              </span>
            </div>
          </div>

          {/* Diya Counter */}
          <div className="flex items-center gap-2.5 font-sans">
            <button
              onClick={onLightDiya}
              className="px-3 py-1.5 rounded-xl bg-[#261B24] hover:bg-[#322330] border border-[#D4A373]/40 text-[#F4EBD9] text-[10px] sm:text-xs font-medium flex items-center gap-1.5 transition-colors active:scale-95 shadow-xs"
              title="Light an earthen lamp"
            >
              <span className="text-amber-400">🪔</span>
              <span>{activeDiyas} Diyas Lit</span>
            </button>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/30 border border-white/10 text-[10px] sm:text-xs text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Hearth Warm</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;