import React from 'react';
import { SarnathCapital, TirangaRibbon } from './RepublicIcons';

const Footer = ({ business }) => {
  const { name = 'GANTANTRA // 1950', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#040813] text-[#FDFBF7] pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-t-2 border-[#D4AF37]/35 font-serif">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Satyameva Jayate State Plaque */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0A1630] via-[#0E1F45] to-[#0A1630] border border-[#38BDF8]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#060D1E] border border-[#D4AF37]/60 flex items-center justify-center shrink-0 shadow-md">
              <SarnathCapital className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#FDFBF7] uppercase">
                सत्यमेव जयते • TRUTH ALONE TRIUMPHS
              </h3>
              <p className="text-xs font-sans text-zinc-300">
                Celebrating the constitutional spirit of India through the unity of regional cuisines.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-[#070E1E] font-sans font-black text-xs uppercase tracking-wider transition-all hover:brightness-110 shrink-0 shadow-md"
          >
            Ascend to Banquet Top ↑
          </button>
        </div>

        {/* 3-Column Protocol Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-sans">
          <div className="p-5 rounded-2xl bg-[#081126] border border-white/10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#38BDF8] font-bold block font-serif">
              ✦ Diplomatic Hospitality
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              All dishes are plated upon heavy brass chargers in accordance with state banquet etiquette. Please inform your server of any dietary protocol restrictions.
            </p>
          </div>

          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#081126] border border-white/10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#38BDF8] font-bold block font-serif">
                ⏳ Ceremonial Service Hours
              </span>
              <div className="space-y-1 text-xs font-mono">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-zinc-400">{h.days}</span>
                    <span className="font-bold text-[#FDFBF7]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {location && (
            <div className="p-5 rounded-2xl bg-[#081126] border border-white/10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#38BDF8] font-bold block font-serif">
                📍 Pavilion Coordinates
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                {location}
              </p>
              <span className="text-[11px] text-[#FF671F] block font-bold">
                Table Carte Service Active
              </span>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-white/10 text-center text-xs font-sans text-zinc-500">
          © {new Date().getFullYear()} {name}. REPUBLIC OF INDIA STATE BANQUET. ALL SOVEREIGN RIGHTS RESERVED.
        </div>
      </div>
      
      {/* Bottom Tricolour Line */}
      <div className="mt-6">
        <TirangaRibbon className="w-full h-1" />
      </div>
    </footer>
  );
};

export default Footer;