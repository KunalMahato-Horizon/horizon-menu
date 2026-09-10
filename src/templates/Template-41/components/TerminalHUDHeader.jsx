import React, { useState, useEffect } from 'react';

const TerminalHUDHeader = ({ business }) => {
  const { name = 'AERONAUT AIRWAYS', logo = null, location = 'Seat 04A' } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);
  const [gmtTime, setGmtTime] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setGmtTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 transition-all duration-300 font-mono">
      <div
        className={`max-w-7xl mx-auto rounded-xl flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border-2 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A1424]/95 backdrop-blur-xl border-[#FF4B26] shadow-2xl text-white'
            : 'bg-[#0F1C32]/90 backdrop-blur-md border-white/15 text-white shadow-lg'
        }`}
      >
        {/* Airline Brand Lockup */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FF4B26] text-white flex items-center justify-center font-black text-xs sm:text-sm tracking-tighter shrink-0 group-hover:scale-105 transition-transform shadow-md">
            {logo || '✈'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase block leading-none truncate text-white">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-bold text-[#FF4B26] mt-1 block truncate">
              {location} • FIRST CLASS SERVICE
            </span>
          </div>
        </button>

        {/* Universal Flight Telemetry & Radar Status */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs">
          <div className="hidden md:flex flex-col text-right text-zinc-400 border-r border-white/15 pr-3">
            <span className="text-[9px] text-zinc-500 font-bold uppercase">CHRONOMETER</span>
            <span className="text-xs font-bold text-white tracking-widest">{gmtTime}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-[10px] sm:text-xs shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="hidden xs:inline">CABIN SERVICE ACTIVE</span>
            <span className="xs:hidden">BOARDING</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TerminalHUDHeader;