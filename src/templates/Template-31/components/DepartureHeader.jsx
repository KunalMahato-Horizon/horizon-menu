import React, { useState, useEffect } from 'react';

const DepartureHeader = ({ business }) => {
  const { name = 'METRO CONCOURSE', logo = null, location = 'Platform 04' } = business || {};
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 transition-all duration-200">
      <div className="max-w-6xl mx-auto rounded-2xl bg-[#0C0E14]/95 backdrop-blur-xl border border-white/15 px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between font-mono shadow-2xl">
        {/* Subway Brand Seal */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FF3344] text-white flex items-center justify-center font-black text-xs shadow-md shadow-[#FF3344]/30 group-hover:rotate-45 transition-transform">
            {logo || '●'}
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-white block leading-none truncate">
              {name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-[#00D26A] font-bold uppercase mt-1 block truncate">
              {location} • IN-STATION SERVICE
            </span>
          </div>
        </button>

        {/* Live Clock & Platform Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[10px] text-white/70">
            <span className="text-white/40">DEPARTURE:</span>
            <span className="text-white font-bold">{time}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D26A]/10 border border-[#00D26A]/30 text-[10px] sm:text-[11px] font-bold text-[#00D26A] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#00D26A] animate-ping" />
            <span className="hidden xs:inline">TRACK CLEAR • TABLE ON</span>
            <span className="xs:hidden">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DepartureHeader;