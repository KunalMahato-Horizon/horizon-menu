import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'Groove & Needle',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#19181A] text-[#FAF5EC] pt-12 pb-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Table Service & Cartridge Info */}
          <div className="p-5 rounded-2xl bg-[#232226] border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D9822B] font-bold block mb-2">
              Dine-In Acoustic Protocol
            </span>
            <p className="text-xs text-[#FAF5EC]/80 leading-relaxed font-sans">
              All dishes are finished to order in rhythm with our active vinyl session. Please inform your server of any dietary nuances.
            </p>
          </div>

          {/* Session Playback Hours */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#232226] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D9822B] font-bold block mb-2">
                Listening & Dining Schedule
              </span>
              <div className="space-y-1.5">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs font-mono">
                    <span className="text-[#FAF5EC]/60">{h.days}</span>
                    <span className="font-bold text-[#D9822B]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Soundstage Location */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#232226] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D9822B] font-bold block mb-2">
                Soundstage Location
              </span>
              <p className="text-xs text-[#FAF5EC]/80 leading-relaxed mb-2 font-sans">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#FAF5EC]/50 block">
                🎙️ Analog Direct Table Plating
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs font-mono text-[#FAF5EC]/60">
          <p>© {new Date().getFullYear()} {name}. Hi-Fi Dining & Acoustic Table Session.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-white font-bold transition-colors uppercase tracking-wider text-[10px]"
          >
            Cue Up To Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;