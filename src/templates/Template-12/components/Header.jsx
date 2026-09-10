import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'Komorebi Tea & Robata', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-3 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-2xl transition-all duration-300 flex items-center justify-between ${
          isScrolled
            ? 'bg-[#F3F1EC]/90 backdrop-blur-md border border-[#E2DDD3] shadow-xs py-2.5 px-5'
            : 'bg-transparent py-4 px-2 border border-transparent'
        }`}
      >
        {/* Brand Stamp */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 rounded-lg bg-[#4A5844] text-[#F3F1EC] flex items-center justify-center font-serif font-bold text-sm shadow-xs group-hover:bg-[#3B4736] transition-colors">
            {logo || name.charAt(0)}
          </div>
          <div>
            <span className="text-base font-serif font-bold text-[#1F211D] tracking-wide block leading-tight">
              {name}
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#78746B] uppercase block">
              Dine-In Menu • お品書き
            </span>
          </div>
        </button>

        {/* Live Kitchen Badge */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E4DC] border border-[#DDD7CC] text-[11px] font-mono text-[#4A5844]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A5844] animate-pulse" />
            <span className="font-semibold">Kitchen Active</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;