import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'Paloma Solarium',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#1F2B20] text-[#F9F6F0] pt-12 pb-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Table Service Note */}
          <div className="p-5 rounded-2xl bg-[#28372A] border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8A948] font-bold block mb-2">
              Dine-In Table Notice
            </span>
            <p className="text-xs text-[#F9F6F0]/80 leading-relaxed font-sans">
              All dishes are finished fresh upon ticket reception over open mesquite coals. Please notify your server of any ingredient sensitivities.
            </p>
          </div>

          {/* Operating Hours */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#28372A] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8A948] font-bold block mb-2">
                Hearth Service Hours
              </span>
              <div className="space-y-1.5">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs font-mono">
                    <span className="text-[#F9F6F0]/60">{h.days}</span>
                    <span className="font-bold text-[#E8A948]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#28372A] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8A948] font-bold block mb-2">
                Canyon Location
              </span>
              <p className="text-xs text-[#F9F6F0]/80 leading-relaxed mb-2 font-sans">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#D96B43] block">
                ✺ Direct Table Plating
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs font-mono text-[#F9F6F0]/60">
          <p>© {new Date().getFullYear()} {name}. Desert Modern Table Dining.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-white font-bold transition-colors uppercase tracking-wider text-[10px]"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;