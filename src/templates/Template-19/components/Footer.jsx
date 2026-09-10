import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'BENTO // KITCHEN',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#0A0C10] text-white pt-12 pb-8 px-3 sm:px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          
          {/* Card 1: Dining Station Rules */}
          <div className="p-5 rounded-3xl bg-[#121620] border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4FF00] font-bold block mb-2">
              // STATION NOTICE
            </span>
            <p className="text-xs font-mono text-white/60 leading-relaxed">
              Dishes are cooked to live order and dispatched sequentially. Please inform your server of any allergy nuances.
            </p>
          </div>

          {/* Card 2: Operating Timings */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-3xl bg-[#121620] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4FF00] font-bold block mb-2">
                // ACTIVE OPERATING WINDOW
              </span>
              <div className="space-y-1.5 font-mono">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs">
                    <span className="text-white/40">{h.days}</span>
                    <span className="font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Location */}
          {location && (
            <div className="p-5 rounded-3xl bg-[#121620] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4FF00] font-bold block mb-2">
                // DOCK LOCATION
              </span>
              <p className="text-xs font-mono text-white/60 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#00F0FF] block">
                ● DINE-IN SERVICE TERMINAL
              </span>
            </div>
          )}

        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} {name}. ALL DOCKETS ACTIVE.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-[#D4FF00] hover:text-[#0A0C10] border border-white/10 font-bold uppercase transition-all"
          >
            RETURN TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;