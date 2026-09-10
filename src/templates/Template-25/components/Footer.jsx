import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'Fjord & Frost',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#0B192C] text-white pt-12 pb-8 px-4 sm:px-6 border-t-2 border-[#38BDF8]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: Hearth Standards */}
          <div className="p-5 rounded-2xl bg-[#112240] border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
              Table Smörgåsbord Service
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              All seafood and game cuts are cured or ember-finished fresh to order. Please inform your server directly of any pine, berry, or shellfish allergies.
            </p>
          </div>

          {/* Card 2: Smoker & Hearth Schedule */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#112240] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
                Hearth Service Windows
              </span>
              <div className="space-y-1.5 font-mono text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-slate-400">{h.days}</span>
                    <span className="font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Wharf Location */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#112240] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold block mb-2">
                Wharf Coordinates
              </span>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#38BDF8] block">
                ⚓ Dine-In Table Operations Active
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs font-mono text-slate-400">
          <p>© {new Date().getFullYear()} {name}. Nordic Coastal Hearth & Smörgåsbord.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-white font-bold transition-colors uppercase tracking-wider text-[10px]"
          >
            Back to Top of Fjord ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;