import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'ATELIER // MONOLITH',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#0F0F11] text-white pt-12 pb-8 px-4 sm:px-8 border-t border-black/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 font-mono">
          
          {/* Box 1: Protocol */}
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
            <span className="text-[10px] uppercase tracking-widest text-[#0047FF] font-black block mb-2">
              // TABLE SERVICE PROTOCOL
            </span>
            <p className="text-xs text-white/60 leading-relaxed">
              Dishes are cooked to live order and dispatched sequentially. Please inform your server of any allergy nuances or timing preferences.
            </p>
          </div>

          {/* Box 2: Operating Schedule */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#0047FF] font-black block mb-2">
                // SERVICE WINDOWS
              </span>
              <div className="space-y-1.5 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-white/40">{h.days}</span>
                    <span className="font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Box 3: Location */}
          {location && (
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#0047FF] font-black block mb-2">
                // VENUE SPEC
              </span>
              <p className="text-xs text-white/70 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] text-[#0047FF] block font-bold">
                ● DINE-IN LEDGER SYSTEM ACTIVE
              </span>
            </div>
          )}

        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} {name}. SWISS LOOKBOOK & TABLE LEDGER.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#0047FF] hover:text-white font-bold uppercase transition-colors"
          >
            RETURN TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;