import React, { useState, useEffect } from 'react';

const ReceiptHeader = ({ business }) => {
  const { name = 'NOVA THERMAL TICKET', logo = null, location = 'Register 04' } = business || {};
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-2 font-mono">
      <div className="max-w-2xl mx-auto rounded-xl bg-[#181A20]/95 backdrop-blur-md border border-white/15 px-4 py-2.5 flex items-center justify-between text-white shadow-2xl">
        {/* Register Brand Stamp */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <div className="w-7 h-7 rounded bg-[#FAF8F5] text-black flex items-center justify-center font-black text-xs shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            {logo || '🧾'}
          </div>
          <div className="min-w-0">
            <span className="text-xs font-black uppercase tracking-wider block leading-none truncate text-white">
              {name}
            </span>
            <span className="text-[9px] text-[#A1A1AA] uppercase block leading-none mt-1 truncate">
              {location} • THERMAL FEED ACTIVE
            </span>
          </div>
        </button>

        {/* Live POS Clock & Feed Beacon */}
        <div className="flex items-center gap-2 text-[10px]">
          <span className="hidden sm:inline text-white/50">{time}</span>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>PAPER FEED ON</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ReceiptHeader;