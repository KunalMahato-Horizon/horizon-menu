import React, { useState, useEffect } from 'react';
import { MukutTrinetra, DhakIcon } from './DurgaIcons';

const PandalHeader = ({ business, flowersOffered, onOfferAnjali }) => {
  const { name = 'MAHAMAYA BHOG', location = 'Table 04' } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-2.5 font-serif transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl flex items-center justify-between h-15 sm:h-17 px-4 sm:px-6 border-2 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#180509]/95 backdrop-blur-md border-[#F59E0B]/60 shadow-2xl shadow-black'
            : 'bg-[#1F070C]/90 backdrop-blur-xs border-[#DC2626]/50 shadow-lg'
        }`}
      >
        {/* Divine Visage & Pandal Identity */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 sm:gap-3.5 text-left focus:outline-none group"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-b from-[#DC2626] to-[#7F1D1D] p-1 border-2 border-[#F59E0B] shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <MukutTrinetra className="w-8 h-8 text-white" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-black tracking-wider uppercase text-[#FDE68A] block leading-none truncate">
                {name}
              </span>
              <span className="text-[10px] text-[#DC2626] bg-[#FDE68A] px-1.5 py-0.2 rounded font-sans font-black hidden xs:inline">
                মা আসছেন
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-sans tracking-widest text-[#F59E0B] uppercase font-bold mt-1 block truncate">
              {location} • DURGOTSAV MAHABHOJ
            </span>
          </div>
        </button>

        {/* Anjali Flower Offering Counter + Dhak Audio Pill */}
        <div className="flex items-center gap-2 sm:gap-3 font-sans">
          <button
            onClick={onOfferAnjali}
            className="px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#DC2626]/20 border border-[#F59E0B] text-[#FDE68A] text-[10px] sm:text-xs font-bold flex items-center gap-1.5 shadow-xs hover:bg-[#DC2626]/30 active:scale-95 transition-all"
            title="Click to offer Pushpanjali flower petals"
          >
            <span className="text-sm">🌺</span>
            <span>{flowersOffered} Anjali Offered</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#DC2626] to-[#991B1B] text-white text-[10px] sm:text-xs font-bold shadow-xs shrink-0 border border-[#F59E0B]/40">
            <DhakIcon className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">DHAK BEATS ACTIVE</span>
            <span className="sm:hidden">BHOG</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PandalHeader;