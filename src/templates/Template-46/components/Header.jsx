import React from 'react';
import { PineWreath, HearthLantern } from './ChristmasArt';

const Header = ({ business, chestnutsRoasted, onRoastChestnut }) => {
  const { name = 'THE YULETIDE MANOR', location = 'Table 04' } = business || {};

  return (
    <header className="relative z-20 font-serif">
      <div className="px-3 sm:px-6 lg:px-8 pt-4">
        <div className="max-w-6xl mx-auto rounded-3xl flex items-center justify-between h-15 sm:h-17 px-4 sm:px-6 border-2 border-[#D4AF37]/35 bg-[#0C241B]/95 backdrop-blur-md shadow-xl shadow-black/60">
          {/* Brand Emblem */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#143B2C] border-2 border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-inner">
              <PineWreath className="w-7 h-7" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black tracking-wide uppercase text-[#FFFBEB] block leading-none truncate">
                  {name}
                </span>
                <span className="text-[10px] text-white bg-[#991B1B] px-2 py-0.5 rounded font-sans font-black tracking-wider uppercase hidden xs:inline border border-amber-300/40">
                  NOËL 2026
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-widest text-[#D4AF37] uppercase font-bold mt-1 block truncate">
                {location} • WINTER SOLSTICE BANQUET
              </span>
            </div>
          </div>

          {/* Interactive Hearth Action */}
          <div className="flex items-center gap-2.5 font-sans">
            <button
              onClick={onRoastChestnut}
              className="px-3 sm:px-4 py-1.5 rounded-2xl bg-[#184634] hover:bg-[#1E5741] border border-[#D4AF37]/45 text-[#FFFBEB] text-[10px] sm:text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-md"
              title="Toss a chestnut into the open fire"
            >
              <HearthLantern className="w-4 h-4 text-[#F59E0B]" />
              <span>{chestnutsRoasted} Chestnuts Roasted</span>
            </button>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-black/40 border border-[#D4AF37]/25 text-[10px] sm:text-xs text-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Birch Fire Glowing</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;