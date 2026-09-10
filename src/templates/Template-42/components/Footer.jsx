import React from 'react';

const Footer = ({ business }) => {
  const { name = 'Maison & Co.', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#1A1918] text-[#FAF9F5] pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-[#E3DFD5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-sm">
          {/* Card 1: Hospitality Notice */}
          <div className="p-5 rounded-2xl bg-[#242320] border border-white/5 space-y-2">
            <span className="text-xs font-sans uppercase tracking-widest text-[#9E5A38] font-bold block">
              Culinary Care
            </span>
            <p className="text-xs text-[#FAF9F5]/75 leading-relaxed font-sans">
              All dishes are finished to order in rhythm with our active hearth. Please inform your server of any allergy nuances or dietary preferences.
            </p>
          </div>

          {/* Card 2: Operating Hours */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#242320] border border-white/5 space-y-2">
              <span className="text-xs font-sans uppercase tracking-widest text-[#9E5A38] font-bold block">
                Dining Hours
              </span>
              <div className="space-y-1.5 text-xs font-sans">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-[#FAF9F5]/60">{h.days}</span>
                    <span className="font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Address & Info */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#242320] border border-white/5 space-y-2">
              <span className="text-xs font-sans uppercase tracking-widest text-[#9E5A38] font-bold block">
                Location
              </span>
              <p className="text-xs text-[#FAF9F5]/75 leading-relaxed font-sans">
                {location}
              </p>
              <span className="text-[11px] text-[#FAF9F5]/50 block">
                Table QR Dining Experience
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs font-sans text-[#FAF9F5]/50">
          <p>© {new Date().getFullYear()} {name}. Contemporary Dining.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-white font-bold transition-colors uppercase tracking-wider text-[11px]"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;