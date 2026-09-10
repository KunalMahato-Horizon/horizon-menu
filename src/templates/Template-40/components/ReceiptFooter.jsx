import React from 'react';

const ReceiptFooter = ({ business, totalItemCount = 0 }) => {
  const { name = 'NOVA THERMAL TICKET', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="pt-6 pb-12 font-mono text-[#18181B] text-center">
      <div className="max-w-xl mx-auto space-y-3 px-2 sm:px-4">
        {/* Total Summary Divider */}
        <div className="text-[11px] tracking-tight select-none opacity-60">
          ================================================
        </div>

        {/* Register Totals Audit */}
        <div className="space-y-1 text-xs text-left px-2 sm:px-4 font-bold">
          <div className="flex justify-between">
            <span>REGISTER ITEMS REGISTERED:</span>
            <span>{totalItemCount} ITEMS</span>
          </div>
          <div className="flex justify-between">
            <span>TABLE SALES TAX:</span>
            <span>INCLUDED (5.0%)</span>
          </div>
          <div className="flex justify-between border-t border-black/20 pt-1 text-sm font-black">
            <span>DINE-IN SERVICE STATUS:</span>
            <span className="text-emerald-700">PAID & SERVED</span>
          </div>
        </div>

        <div className="text-[11px] tracking-tight select-none opacity-60">
          ------------------------------------------------
        </div>

        {/* Hours & Location Memo */}
        <div className="text-[10px] text-black/70 space-y-1 text-left px-2 sm:px-4">
          {hours.length > 0 && (
            <div className="flex justify-between">
              <span>ACTIVE SERVICE HOURS:</span>
              <span className="font-bold">{hours[0].days} {hours[0].time}</span>
            </div>
          )}
          {location && (
            <div className="flex justify-between">
              <span>DISPATCH POINT:</span>
              <span className="font-bold">{location}</span>
            </div>
          )}
        </div>

        {/* Simulated POS Barcode */}
        <div className="pt-3 pb-2 flex flex-col items-center justify-center gap-1">
          <svg className="w-64 h-12" viewBox="0 0 256 48" fill="none">
            {/* Barcode line pattern */}
            <rect x="0" y="0" width="4" height="48" fill="#18181B"/>
            <rect x="6" y="0" width="2" height="48" fill="#18181B"/>
            <rect x="12" y="0" width="6" height="48" fill="#18181B"/>
            <rect x="22" y="0" width="2" height="48" fill="#18181B"/>
            <rect x="26" y="0" width="4" height="48" fill="#18181B"/>
            <rect x="34" y="0" width="8" height="48" fill="#18181B"/>
            <rect x="46" y="0" width="2" height="48" fill="#18181B"/>
            <rect x="52" y="0" width="4" height="48" fill="#18181B"/>
            <rect x="60" y="0" width="6" height="48" fill="#18181B"/>
            <rect x="70" y="0" width="2" height="48" fill="#18181B"/>
            <rect x="76" y="0" width="6" height="48" fill="#18181B"/>
            <rect x="86" y="0" width="4" height="48" fill="#18181B"/>
            <rect x="94" y="0" width="2" height="48" fill="#18181B"/>
            <rect x="100" y="0" width="8" height="48" fill="#18181B"/>
            <rect x="112" y="0" width="4" height="48" fill="#18181B"/>
            <rect x="120" y="0" width="2" height="48" fill="#18181B"/>
            <rect x="126" y="0" width="6" height="48" fill="#18181B"/>
            <rect x="136" y="0" width="2" height="48" fill="#18181B"/>
            <rect x="142" y="0" width="4" height="48" fill="#18181B"/>
            <rect x="150" y="0" width="8" height="48" fill="#18181B"/>
            <rect x="162" y="0" width="2" height="48" fill="#18181B"/>
            <rect x="168" y="0" width="6" height="48" fill="#18181B"/>
            <rect x="178" y="0" width="4" height="48" fill="#18181B"/>
            <rect x="186" y="0" width="2" height="48" fill="#18181B"/>
            <rect x="192" y="0" width="8" height="48" fill="#18181B"/>
            <rect x="204" y="0" width="4" height="48" fill="#18181B"/>
            <rect x="212" y="0" width="6" height="48" fill="#18181B"/>
            <rect x="222" y="0" width="2" height="48" fill="#18181B"/>
            <rect x="228" y="0" width="6" height="48" fill="#18181B"/>
            <rect x="238" y="0" width="2" height="48" fill="#18181B"/>
            <rect x="244" y="0" width="4" height="48" fill="#18181B"/>
            <rect x="252" y="0" width="4" height="48" fill="#18181B"/>
          </svg>
          <span className="text-[10px] tracking-widest text-black/60 font-bold">
            * 3902 - 9481 - 0440 - 2026 *
          </span>
        </div>

        {/* Thank You Note */}
        <p className="text-xs uppercase font-black text-black">
          *** THANK YOU FOR DINING WITH US ***
        </p>

        {/* Return to Top Button */}
        <div className="pt-2">
          <button
            onClick={scrollToTop}
            className="text-[10px] font-bold text-black hover:underline uppercase"
          >
            [ REWIND TO TOP OF RECEIPT ↑ ]
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ReceiptFooter;