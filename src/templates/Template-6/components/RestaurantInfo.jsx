import React, { useState } from 'react';

const RestaurantInfo = ({ business = {} }) => {
  const {
    wifiName = "NeonVelvet_Guest",
    wifiPassword = "velvetnightlife",
    prepTime = "15–20 mins",
    dietaryNote = "Jain, Vegan & allergen adjustments available",
    paymentMethods = "UPI • Cards • Cash",
    instagram = "@neonvelvet",
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
    <section
      id="guest-info"
      className="py-12 sm:py-16 relative overflow-hidden bg-slate-950 text-white selection:bg-purple-600 selection:text-white border-t border-slate-900"
      aria-label="Tabletop Guest Information"
    >
      {/* Soft Ambient Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Unified Floating Card */}
        <div className="rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-purple-500/20 p-6 sm:p-8 shadow-xl shadow-slate-950/50">
          
          {/* Top Row: Wi-Fi Quick Connect Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Complimentary Guest Wi-Fi
                </h3>
                <p className="text-xs text-slate-400">
                  Network: <span className="font-semibold text-slate-200">{wifiName}</span>
                </p>
              </div>
            </div>

            {/* Password Pill & One-Click Copy */}
            <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2 bg-slate-950/70 p-1.5 pl-3 rounded-2xl border border-purple-500/20">
              <span className="font-mono text-xs font-bold text-purple-300 tracking-wider">
                {wifiPassword}
              </span>
              <button
                type="button"
                onClick={handleCopyWifi}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-xs ${
                  copied
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 hover:bg-slate-700 text-purple-200 hover:text-white border border-purple-500/30'
                }`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Bottom Grid: 3 Clean Minimal Utility Pods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            
            {/* 1. Kitchen Pacing */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Fresh Preparation
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Made to order. Average ticket time is <strong className="text-purple-300 font-mono">{prepTime}</strong>.
              </p>
            </div>

            {/* 2. Dietary & Spice Customization */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs text-purple-400">🌱</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Custom Requests
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {dietaryNote}. Inform your server when ordering.
              </p>
            </div>

            {/* 3. Settlement & Social */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs text-purple-400">💳</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Table Settlement
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{paymentMethods}</span>
                {instagram && (
                  <a
                    href={`https://instagram.com/${instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {instagram} ↗
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RestaurantInfo;