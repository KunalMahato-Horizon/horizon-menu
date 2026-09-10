import React, { useState, useEffect } from 'react';

const MastheadHeader = ({ business }) => {
  const { name = 'THE MORNING DISPATCH', logo = null, location = 'Table No. 04' } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const now = new Date();
    setTodayDate(
      now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-2 font-serif transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border-b-4 border-black transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5EFEB]/95 backdrop-blur-md shadow-md border-t border-x'
            : 'bg-[#F5EFEB] border-t-2 border-x-2'
        }`}
      >
        {/* Newspaper Title Lockup */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-black text-[#F5EFEB] flex items-center justify-center font-serif font-black text-sm shrink-0 border border-black shadow-xs group-hover:rotate-6 transition-transform">
            {logo || '📰'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-base font-black tracking-tight uppercase text-black block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#8B0000] uppercase font-black mt-1 block truncate">
              {location} • LATE CITY EDITION
            </span>
          </div>
        </button>

        {/* Date & Weather Ear */}
        <div className="flex items-center gap-2 sm:gap-4 font-mono text-[10px] sm:text-xs">
          <div className="hidden md:flex flex-col text-right text-black/70 border-r-2 border-black pr-3">
            <span className="font-bold">{todayDate || 'DAILY EDITION'}</span>
            <span className="text-[9px] text-black/50">WEATHER: 24°C • CLEAR HEARTH</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black text-[#F5EFEB] font-black uppercase text-[9px] sm:text-[10px] shrink-0 border border-black">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden xs:inline">PRESSES ROLLING</span>
            <span className="xs:hidden">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MastheadHeader;