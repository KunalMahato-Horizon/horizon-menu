import React, { useState } from 'react';

const RestaurantInfo = ({ business = {} }) => {
  const {
    wifiName = "Emerald_Guest",
    wifiPassword = "freshandcrisp",
    prepTime = "15–20 mins",
    dietaryNote = "Jain, Vegan & allergy customization available on request",
    paymentMethods = ["UPI / QR Scan", "Cards", "Cash"],
    serviceType = "Table Service",
  } = business;

  const [copiedWifi, setCopiedWifi] = useState(false);

  const handleCopyWifi = () => {
    if (wifiPassword) {
      navigator.clipboard.writeText(wifiPassword);
      setCopiedWifi(true);
      setTimeout(() => setCopiedWifi(false), 2000);
    }
  };

  return (
    <section
      id="table-amenities"
      className="py-10 sm:py-14 bg-neutral-50/80 border-t border-neutral-200/60"
      aria-label="In-Store Dining Amenities"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-md mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200/60 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tabletop Services</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            Guest Convenience & Dining Notes
          </h2>
        </div>

        {/* 3-Card Tabletop Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Card 1: Fast Guest Wi-Fi */}
          <div className="group bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-xs hover:shadow-xl hover:shadow-neutral-950/5 transition-all duration-300 flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-1">
                Guest Wi-Fi
              </h3>
              <p className="text-xs text-neutral-500 font-normal mb-3.5">
                Connect instantly from your table.
              </p>

              {/* Wi-Fi Credentials Pill */}
              <div className="rounded-2xl bg-neutral-50 p-3 border border-neutral-200/60 space-y-1.5 text-xs text-left max-w-xs mx-auto">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-medium">Network</span>
                  <span className="font-semibold text-neutral-800">{wifiName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-medium">Password</span>
                  <span className="font-mono font-bold text-neutral-900 bg-white px-2 py-0.5 rounded-md border border-neutral-200/60">
                    {wifiPassword}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyWifi}
              className={`mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-xs ${
                copiedWifi
                  ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                  : 'bg-neutral-900 hover:bg-neutral-800 text-white'
              }`}
            >
              {copiedWifi ? (
                <>
                  <svg className="w-3.5 h-3.5 text-emerald-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Password Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Password</span>
                </>
              )}
            </button>
          </div>

          {/* Card 2: Kitchen Timing & Dietary Notes */}
          <div className="group bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-xs hover:shadow-xl hover:shadow-neutral-950/5 transition-all duration-300 flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-1">
                Made Fresh to Order
              </h3>
              <p className="text-xs text-neutral-500 font-normal mb-3.5">
                Every order is freshly prepared upon receipt.
              </p>

              <div className="space-y-2 text-xs text-neutral-600 max-w-xs mx-auto">
                <div className="flex items-center justify-between rounded-xl bg-neutral-50 p-2.5 border border-neutral-200/60">
                  <span className="text-neutral-500 font-medium">Average Prep:</span>
                  <span className="font-bold text-neutral-900">{prepTime}</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed italic text-left px-1">
                  ✦ {dietaryNote}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Tell your server about food allergies</span>
              </span>
            </div>
          </div>

          {/* Card 3: Table Service & Payment Methods */}
          <div className="group bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-xs hover:shadow-xl hover:shadow-neutral-950/5 transition-all duration-300 flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900 mb-1">
                Ordering & Settlement
              </h3>
              <p className="text-xs text-neutral-500 font-normal mb-3.5">
                {serviceType} • Pay seamlessly at your table.
              </p>

              {/* Payment Methods Badges */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3 max-w-xs mx-auto">
                {paymentMethods.map((method, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-200/70 text-neutral-700"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-100">
              <span className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full inline-block">
                Wave or ask server for water & the bill
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RestaurantInfo;