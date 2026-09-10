import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'VAULT // OBSIDIAN',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#06070A] text-white pt-12 pb-24 px-4 sm:px-6 border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Card 1: Tasting Protocol */}
          <div className="p-5 rounded-3xl bg-[#0F1118] border border-white/[0.08]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFB76C] font-bold block mb-2">
              // TASTING PROTOCOL
            </span>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Plates are prepared sequentially upon order receipt. For pairing alternatives or zero-proof infusions, consult your table sommelier.
            </p>
          </div>

          {/* Card 2: Operating Windows */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-3xl bg-[#0F1118] border border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFB76C] font-bold block mb-2">
                // CELLAR SCHEDULE
              </span>
              <div className="space-y-1.5 font-mono text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-white/40">{h.days}</span>
                    <span className="font-bold text-[#DFB76C]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Location */}
          {location && (
            <div className="p-5 rounded-3xl bg-[#0F1118] border border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFB76C] font-bold block mb-2">
                // CHAMBER LOCATION
              </span>
              <p className="text-xs text-white/60 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#DFB76C] block">
                ● LIVE DINE-IN SERVICE
              </span>
            </div>
          )}
        </div>

        {/* Return to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.06] text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} {name}. SPEAKEASY CELLAR TASTING MENU.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-white/[0.05] hover:bg-[#DFB76C] hover:text-[#090A0F] font-bold uppercase transition-all"
          >
            Return to Front ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;