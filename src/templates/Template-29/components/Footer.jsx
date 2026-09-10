import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'CHROMA // LAB',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#030406] text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Card 1: Exhibition Protocol */}
          <div className="p-5 rounded-3xl bg-[#0E1015] border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F5D4] font-bold block mb-2">
              // EXHIBITION DINING NOTICE
            </span>
            <p className="text-xs font-sans text-zinc-400 leading-relaxed font-light">
              All dishes are sculpted and finished live upon ticket reception. Please inform your server of any dietary nuances or ingredient sensitivities.
            </p>
          </div>

          {/* Card 2: Operating Timings */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-3xl bg-[#0E1015] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F5D4] font-bold block mb-2">
                // SERVICE WINDOWS
              </span>
              <div className="space-y-1.5 font-mono text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-zinc-500">{h.days}</span>
                    <span className="font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Location */}
          {location && (
            <div className="p-5 rounded-3xl bg-[#0E1015] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F5D4] font-bold block mb-2">
                // GALLERY COORDINATES
              </span>
              <p className="text-xs font-sans text-zinc-400 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#F72585] block">
                ◈ IN-PERSON TABLE CARTE SERVICE
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} {name}. AVANT-GARDE GASTRONOMY.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white hover:text-black font-bold uppercase transition-all"
          >
            Return to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;