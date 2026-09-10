import React from 'react';
import { MatteClayDiya } from './DiwaliVisuals';

const Footer = ({ business }) => {
  const { name = 'DEEPOTSAV // SANDHYA', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#100B13] text-[#F4EBD9] pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-t border-[#D4A373]/20 font-serif">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="p-6 rounded-2xl bg-[#1A121F] border border-[#D4A373]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#271B2B] border border-[#D4A373]/40 flex items-center justify-center shrink-0">
              <MatteClayDiya className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F4EBD9] uppercase tracking-wide">
                शुभ दीपावली • Shubh Deepavali
              </h3>
              <p className="text-xs font-sans text-zinc-400">
                May the festival of lamps bring peace, good health, and celebratory meals to your home.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="px-5 py-2.5 rounded-xl bg-[#D4A373] hover:bg-[#E2B170] text-[#18111D] font-sans font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Back to Top ↑
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-sans">
          <div className="p-4 rounded-xl bg-[#160E1A] border border-white/5 space-y-1.5">
            <span className="text-xs uppercase tracking-widest text-[#D4A373] font-bold block font-serif">
              Kitchen Preparation
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Dishes are finished fresh to order with traditional brass and clayware service. Please inform your server of any dietary requirements.
            </p>
          </div>

          {hours && hours.length > 0 && (
            <div className="p-4 rounded-xl bg-[#160E1A] border border-white/5 space-y-1.5">
              <span className="text-xs uppercase tracking-widest text-[#D4A373] font-bold block font-serif">
                Dining Hours
              </span>
              <div className="space-y-1 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-zinc-400">{h.days}</span>
                    <span className="font-bold text-[#F4EBD9]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {location && (
            <div className="p-4 rounded-xl bg-[#160E1A] border border-white/5 space-y-1.5">
              <span className="text-xs uppercase tracking-widest text-[#D4A373] font-bold block font-serif">
                Location
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                {location}
              </p>
              <span className="text-[11px] text-[#D4A373] block">
                Table QR Service Active
              </span>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-white/10 text-center text-xs font-sans text-zinc-500">
          © {new Date().getFullYear()} {name}. Shubh Deepavali.
        </div>
      </div>
    </footer>
  );
};

export default Footer;