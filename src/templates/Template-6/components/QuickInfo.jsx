import React, { useState } from 'react';

const QuickInfo = ({ business = {} }) => {
  const {
    wifiName = "NeonVelvet_Guest",
    wifiPassword = "velvetnightlife",
    prepTime = "15–20m",
    paymentMethods = "UPI • Cards • Cash",
  } = business;

  const [copied, setCopied] = useState(false);

  const handleCopyWifi = () => {
    if (wifiPassword) {
      navigator.clipboard.writeText(wifiPassword);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      id="quick-amenities"
      className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 max-w-4xl mx-auto"
      aria-label="Tabletop In-Store Quick Strip"
    >
      {/* Low-Profile Compact Pill Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-purple-500/20 shadow-md shadow-slate-950/40 text-xs text-slate-300">
        
        {/* Wi-Fi & 1-Click Copy */}
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
          
          <span className="text-slate-400 hidden sm:inline">Wi-Fi:</span>
          <span className="font-semibold text-slate-200">{wifiName}</span>

          <button
            type="button"
            onClick={handleCopyWifi}
            className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-slate-800 hover:bg-purple-900/50 text-purple-300 border border-purple-500/30 transition-all active:scale-95 cursor-pointer"
            title="Click to copy password"
          >
            {copied ? 'Copied!' : 'Copy Pass'}
          </button>
        </div>

        <div className="hidden sm:block w-px h-3.5 bg-slate-800" />

        {/* Kitchen Prep Time */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>Avg. Prep:</span>
          <span className="font-semibold text-slate-200">{prepTime}</span>
        </div>

        <div className="hidden md:block w-px h-3.5 bg-slate-800" />

        {/* Payment Methods */}
        <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
          <span>Pay:</span>
          <span className="font-semibold text-slate-300">{paymentMethods}</span>
        </div>

        <div className="hidden md:block w-px h-3.5 bg-slate-800" />

        {/* Table Service Badge */}
        <div className="inline-flex items-center gap-1 text-[11px] font-medium text-purple-300/80 bg-purple-950/40 px-2 py-0.5 rounded-lg border border-purple-500/20">
          <span>✦</span>
          <span>Table Service</span>
        </div>

      </div>
    </div>
  );
};

export default QuickInfo;