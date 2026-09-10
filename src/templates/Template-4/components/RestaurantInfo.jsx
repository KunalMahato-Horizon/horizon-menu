import React, { useState } from 'react';

const RestaurantInfo = ({ business = {} }) => {
  const {
    wifiName = "L'Oasis_Guest",
    wifiPassword = "oasisexperience",
    prepTime = "15–20 mins",
    dietaryNote = "Jain, Vegan & Gluten-free options curated on request",
    paymentMethods = ["UPI", "Credit / Debit Cards", "Cashless Tap"],
    waterChoice = "Complimentary infused mineral water served upon seating",
  } = business;

  const [copied, setCopied] = useState(false);

  const handleCopyWifi = () => {
    if (wifiPassword) {
      navigator.clipboard.writeText(wifiPassword);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section
      id="amenities"
      className="relative z-20 -mt-10 sm:-mt-16 md:-mt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      aria-label="Guest In-Store Amenities"
    >
      {/* Elevated Glassmorphic Amenity Container */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl sm:rounded-[32px] border border-stone-200/90 shadow-[0_20px_60px_-15px_rgba(28,25,23,0.08)] overflow-hidden">
        
        {/* Subtle Ambient Gold Glow Top Edge */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-100">
          
          {/* Card 1: Fast Guest Wi-Fi */}
          <div className="p-6 sm:p-7 lg:p-8 flex flex-col justify-between group hover:bg-stone-50/50 transition-colors duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                  <svg className="w-5 h-5 text-amber-800" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  5G Fast
                </span>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-1">
                Guest Wi-Fi
              </h3>
              <p className="text-xs text-stone-500 font-normal mb-4">
                Instant high-speed connectivity for your table.
              </p>

              {/* Wi-Fi Info Capsule */}
              <div className="rounded-2xl bg-stone-50 p-3 border border-stone-200/70 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400 font-medium">SSID</span>
                  <span className="font-semibold text-stone-800">{wifiName}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400 font-medium">Password</span>
                  <span className="font-mono font-bold text-stone-900 bg-white px-2 py-0.5 rounded-md border border-stone-200/60">
                    {wifiPassword}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyWifi}
              className={`mt-4 w-full py-2.5 px-3 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 ${
                copied
                  ? 'bg-emerald-700 text-white shadow-emerald-700/20'
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Password Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Password</span>
                </>
              )}
            </button>
          </div>

          {/* Card 2: Kitchen & Fresh Prep Info */}
          <div className="p-6 sm:p-7 lg:p-8 flex flex-col justify-between group hover:bg-stone-50/50 transition-colors duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                  <svg className="w-5 h-5 text-amber-800" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-amber-900/80 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                  Made to Order
                </span>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-1">
                Kitchen Timing
              </h3>
              <p className="text-xs text-stone-500 font-normal mb-4">
                Dishes are prepared fresh upon receipt of order.
              </p>

              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex items-center justify-between rounded-xl bg-stone-50 p-2.5 border border-stone-200/60">
                  <span className="text-stone-500 font-medium">Average Prep:</span>
                  <span className="font-bold text-stone-900">{prepTime}</span>
                </div>
                <p className="text-[11px] text-stone-500 leading-relaxed italic px-1">
                  ✦ {dietaryNote}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-[11px] text-stone-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="truncate">{waterChoice}</span>
            </div>
          </div>

          {/* Card 3: Seamless Table Service & Payment */}
          <div className="p-6 sm:p-7 lg:p-8 flex flex-col justify-between group hover:bg-stone-50/50 transition-colors duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                  <svg className="w-5 h-5 text-amber-800" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full">
                  At Table
                </span>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-1">
                Settlement & Care
              </h3>
              <p className="text-xs text-stone-500 font-normal mb-4">
                Pay seamlessly at your table whenever you are ready.
              </p>

              {/* Payment Methods Badges */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {paymentMethods.map((method, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-stone-50 border border-stone-200/70 text-stone-700"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 text-center">
              <span className="text-[11px] font-semibold text-amber-950/80 bg-amber-50/80 border border-amber-200/50 px-3 py-1 rounded-full inline-block">
                Wave or ask your server for bill & assistance
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RestaurantInfo;