import React, { useState } from 'react';

const InStoreInfo = ({ business = {} }) => {
  const {
    name = "The Bistro",
    wifiName = "Cafe_Guest_5G",
    wifiPassword = "freshroastcoffee",
    instagram = "theartisanbistro",
    reviewUrl = "https://g.page/r/sample/review",
    tableService = true,
    prepTime = "12–15 mins",
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
    <section className="mb-14 sm:mb-18" aria-labelledby="store-info-heading">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-6 sm:mb-8 pb-4 border-b border-neutral-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 ring-1 ring-inset ring-amber-200/60 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Guest Services
          </div>
          <h2
            id="store-info-heading"
            className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight"
          >
            In-Store Amenities & Perks
          </h2>
        </div>

        <span className="text-xs sm:text-sm text-neutral-500 font-medium">
          Dine-in Information
        </span>
      </div>

      {/* 3-Card In-Store Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        
        {/* Card 1: Fast Guest Wi-Fi */}
        <div className="flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-all">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>

            <h3 className="text-base font-bold text-neutral-900 mb-1">
              Guest Wi-Fi
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              High-speed internet for browsing and work.
            </p>

            <div className="space-y-2 rounded-2xl bg-neutral-50 p-3.5 border border-neutral-100">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-500">Network:</span>
                <span className="font-semibold text-neutral-800 font-mono">{wifiName}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-500">Password:</span>
                <span className="font-semibold text-neutral-800 font-mono">{wifiPassword}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyWifi}
            className="mt-4 w-full py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Password Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy Password</span>
              </>
            )}
          </button>
        </div>

        {/* Card 2: Dining Guidelines & Kitchen Timing */}
        <div className="flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-all">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>

            <h3 className="text-base font-bold text-neutral-900 mb-1">
              Dining Notes
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              Help us craft your dish the way you like it.
            </p>

            <div className="space-y-2.5 text-xs text-neutral-600">
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>Customization:</strong> Let your server know about allergies or Jain/Vegan preferences.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>Freshly Made:</strong> Average preparation time is <strong>{prepTime}</strong>.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1 flex-shrink-0" />
                <span>
                  <strong>Payment:</strong> UPI, Cards, and Cash accepted at your table or counter.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-100 text-center">
            <span className="text-[11px] font-semibold text-neutral-400">
              Need assistance? Wave to any team member
            </span>
          </div>
        </div>

        {/* Card 3: Google Review & Instagram Shoutout */}
        <div className="flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-md">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-400 mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <h3 className="text-base font-bold text-white mb-1">
              Enjoying Your Visit?
            </h3>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
              Tag <strong className="text-white">@{instagram.replace('@', '')}</strong> in your story or drop us a quick 5-star review!
            </p>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-xs text-amber-300 font-semibold mb-0.5">
                ★ Share Your Feedback
              </p>
              <p className="text-[11px] text-neutral-400">
                Helps our kitchen and staff serve you better.
              </p>
            </div>
          </div>

          {reviewUrl && (
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-neutral-950 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>Leave a Review</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>

      </div>
    </section>
  );
};

export default InStoreInfo;