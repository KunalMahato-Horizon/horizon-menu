import React, { useState, useEffect } from 'react';

const DossierHeader = ({ business, isAllDeclassified, onToggleDeclassifyAll }) => {
  const { name = 'PROJECT // NOVA', logo = null, location = 'Safehouse 04' } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 transition-all duration-300 font-mono">
      <div
        className={`max-w-6xl mx-auto rounded-xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 transition-all duration-300 border-2 border-[#1A1A1A] ${
          isScrolled
            ? 'bg-[#ECE3CE]/95 backdrop-blur-md shadow-[4px_4px_0px_0px_#1A1A1A]'
            : 'bg-[#E5DBBF]/90 backdrop-blur-xs shadow-[2px_2px_0px_0px_#1A1A1A]'
        }`}
      >
        {/* Bureau Identification */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded border-2 border-[#1A1A1A] bg-[#B91C1C] text-[#ECE3CE] flex items-center justify-center font-black text-xs shrink-0 shadow-[2px_2px_0px_0px_#1A1A1A] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-transform">
            {logo || 'TOP'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase block leading-none truncate text-[#1A1A1A]">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-bold text-[#B91C1C] mt-1 block truncate">
              {location} • CLEARANCE LEVEL 5
            </span>
          </div>
        </button>

        {/* Declassify All Toggle & Table Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleDeclassifyAll}
            className={`px-2.5 sm:px-3 py-1.5 rounded border-2 border-[#1A1A1A] text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all shadow-[2px_2px_0px_0px_#1A1A1A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none ${
              isAllDeclassified
                ? 'bg-[#FEF08A] text-[#1A1A1A]'
                : 'bg-[#1A1A1A] text-[#ECE3CE] hover:bg-[#2E2E2E]'
            }`}
            title="Toggle Redacted Ink on All Dishes"
          >
            <span>{isAllDeclassified ? '🔓' : '🔒'}</span>
            <span className="hidden sm:inline ml-1">
              {isAllDeclassified ? 'Intel Decrypted' : 'Declassify All'}
            </span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#1A1A1A] bg-white text-[10px] font-bold text-[#1A1A1A] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] animate-pulse" />
            <span className="hidden xs:inline">HEARTH ON</span>
            <span className="xs:hidden">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DossierHeader;