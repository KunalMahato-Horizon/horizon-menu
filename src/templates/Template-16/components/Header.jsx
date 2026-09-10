import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'The Daily Press', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-3 transition-all duration-200">
      <div
        className={`max-w-5xl mx-auto rounded-none border-b-2 border-t-2 border-[#1A1A1A] flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F5F2EB]/95 backdrop-blur-md shadow-sm'
            : 'bg-[#F5F2EB]/90'
        }`}
      >
        {/* Newspaper Masthead Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#1A1A1A] bg-[#1A1A1A] text-[#F5F2EB] flex items-center justify-center font-serif font-black text-sm sm:text-base shrink-0">
            {logo || '📰'}
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-serif font-black tracking-widest uppercase text-[#1A1A1A] block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-[#991B1B] font-bold uppercase mt-0.5 block truncate">
              Vol. XVI • Table Edition • Est. 1898
            </span>
          </div>
        </button>

        {/* Live Press Pill */}
        <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 border border-[#1A1A1A] bg-white text-[10px] sm:text-[11px] font-mono font-bold uppercase text-[#1A1A1A] shrink-0 shadow-[2px_2px_0px_0px_#1A1A1A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#991B1B] animate-pulse" />
          <span className="hidden xs:inline">Press Running • Dine-In</span>
          <span className="xs:hidden">Live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;