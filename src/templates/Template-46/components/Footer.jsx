import React from 'react';
import { PineWreath } from './ChristmasArt';

const Footer = ({ business }) => {
  const { name = 'THE YULETIDE MANOR', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#05140E] text-[#FFFBEB] pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-t-4 border-[#991B1B] font-serif">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Season's Greetings Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0C241B] via-[#12382A] to-[#0C241B] border-2 border-[#D4AF37]/45 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#143B2C] border-2 border-[#D4AF37]/60 flex items-center justify-center shrink-0 shadow-md">
              <PineWreath className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#FDE68A] uppercase">
                Merry Christmas & Happy New Year
              </h3>
              <p className="text-xs font-sans text-zinc-300">
                May the warmth of the fireside and the company of shared banquets illuminate your holiday.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#C28B38] text-[#081C14] font-sans font-black text-xs uppercase tracking-wider transition-all hover:brightness-110 shrink-0 shadow-md"
          >
            Ascend to Chalet Top ↑
          </button>
        </div>

        {/* 3-Column Protocol */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-sans">
          <div className="p-5 rounded-2xl bg-[#081C14] border border-white/10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block font-serif">
              ✦ Hearth Kitchen Protocol
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              All winter roasts, gravies, and confections are executed to order over slow embers. Please notify your server of any dietary allergies.
            </p>
          </div>

          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#081C14] border border-white/10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block font-serif">
                ⏳ Holiday Service Bells
              </span>
              <div className="space-y-1 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-zinc-400">{h.days}</span>
                    <span className="font-bold text-[#FDE68A]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {location && (
            <div className="p-5 rounded-2xl bg-[#081C14] border border-white/10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block font-serif">
                📍 Chalet Coordinates
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                {location}
              </p>
              <span className="text-[11px] text-[#D4AF37] block font-bold">
                Holiday QR Banquet Service Active
              </span>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-white/10 text-center text-xs font-sans text-zinc-500">
          © {new Date().getFullYear()} {name}. YULETIDE SOLSTICE CELEBRATION. ALL HEARTH WARMTH RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;