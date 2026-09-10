import React from 'react';
import { AshokaChakra, TirangaRibbon, SarnathCapital } from './RepublicIcons';

const Header = ({ business, salutesRecorded, onRecordSalute }) => {
  const { name = 'GANTANTRA // 1950', location = 'Table 04' } = business || {};

  return (
    <header className="relative z-20 font-serif">
      {/* Top Silk Piping */}
      <TirangaRibbon className="w-full h-1.5" />

      <div className="px-3 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-6xl mx-auto rounded-2xl flex items-center justify-between h-15 sm:h-17 px-4 sm:px-6 border border-[#38BDF8]/25 bg-[#0B152D]/95 backdrop-blur-md shadow-2xl">
          {/* Brand & Sarnath Emblem */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#070F22] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-inner">
              <SarnathCapital className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black tracking-wider uppercase text-[#FDFBF7] block leading-none truncate">
                  {name}
                </span>
                <span className="text-[10px] text-white bg-[#FF671F] px-1.5 py-0.2 rounded font-sans font-black tracking-wide uppercase hidden xs:inline">
                  २६ जनवरी
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-widest text-[#38BDF8] uppercase font-bold mt-1 block truncate">
                {location} • RASHTRAPATI BHAVAN BANQUET CARTE
              </span>
            </div>
          </div>

          {/* National Salute Interactive Counter */}
          <div className="flex items-center gap-2.5 font-sans">
            <button
              onClick={onRecordSalute}
              className="px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#112248] hover:bg-[#183168] border border-[#38BDF8]/40 text-[#FDFBF7] text-[10px] sm:text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-md"
              title="Record a 21-gun state banquet salute"
            >
              <AshokaChakra className="w-4 h-4 text-[#38BDF8]" />
              <span>{salutesRecorded} Gun Salutes</span>
            </button>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-[10px] sm:text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#046A38] animate-pulse" />
              <span>State Kitchen Active</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;