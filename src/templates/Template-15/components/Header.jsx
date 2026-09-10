import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'SUPER DUPER', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-3 transition-all duration-200">
      <div
        className={`max-w-5xl mx-auto rounded-2xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border-2 border-[#18181B] transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FFE500] shadow-[4px_4px_0px_0px_#18181B]'
            : 'bg-[#FBF8F1] shadow-[3px_3px_0px_0px_#18181B]'
        }`}
      >
        {/* Brand Stamp */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#18181B] text-[#FFE500] border-2 border-[#18181B] flex items-center justify-center font-black text-sm sm:text-base group-hover:rotate-6 transition-transform shrink-0">
            {logo || '⚡'}
          </div>
          <div className="min-w-0">
            <span className="text-sm sm:text-base font-black text-[#18181B] tracking-tight uppercase block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-[#18181B] font-bold uppercase mt-0.5 block truncate">
              Dine-In Ticket • No. 15
            </span>
          </div>
        </button>

        {/* Live Service Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#18181B] text-[#FBF8F1] text-[10px] sm:text-[11px] font-mono font-bold uppercase shrink-0 shadow-[2px_2px_0px_0px_#FF5733]">
          <span className="w-2 h-2 rounded-full bg-[#FFE500] animate-pulse" />
          <span className="hidden xs:inline">Table Service Active</span>
          <span className="xs:hidden">Live</span>
        </div>
      </div>
    </header>
  );
};

export default Header;