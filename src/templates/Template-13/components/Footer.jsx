import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'Riviera Sol',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#0E3A73] text-[#FBF9F4] pt-12 pb-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Table-side Dining Notice */}
          <div className="p-5 rounded-2xl bg-[#144278] border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D95338] font-bold block mb-2">
              Dine-In Information
            </span>
            <p className="text-xs text-[#FBF9F4]/80 leading-relaxed">
              Every dish is plated fresh upon order. For seafood allergies or dietary customizations, please notify your server directly.
            </p>
          </div>

          {/* Kitchen Schedule */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#144278] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D95338] font-bold block mb-2">
                Galley & Bar Hours
              </span>
              <div className="space-y-1.5">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs font-mono">
                    <span className="text-[#FBF9F4]/60">{h.days}</span>
                    <span className="font-bold text-[#FBF9F4]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location Details */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#144278] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D95338] font-bold block mb-2">
                Seaside Location
              </span>
              <p className="text-xs text-[#FBF9F4]/80 leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#FBF9F4]/50 block">
                ☀️ Direct Table Service
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs font-mono text-[#FBF9F4]/50">
          <p>© {new Date().getFullYear()} {name}. Mediterranean Coastal Carte.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-white font-bold transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;