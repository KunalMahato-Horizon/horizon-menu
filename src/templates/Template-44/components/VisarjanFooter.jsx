import React from 'react';
import { GaneshaSilhouette, DholTashaIcon } from './GaneshaIcons';

const VisarjanFooter = ({ business }) => {
  const { name = 'SIDDHIVINAYAK BHOJ', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#120306] text-[#FFFDF7] pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-t-4 border-[#EA580C] font-serif">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Pudhchya Varshi Lavkar Ya Blessing Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#2B0810] via-[#380E15] to-[#2B0810] border-2 border-[#F59E0B] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#EA580C] border-2 border-[#F59E0B] flex items-center justify-center shrink-0 shadow-md">
              <GaneshaSilhouette className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#FDE68A] uppercase">
                पुढच्या वर्षी लवकर या • GANPATI BAPPA MORYA!
              </h3>
              <p className="text-xs font-sans text-zinc-300">
                May the Remover of Obstacles bless your journey with wisdom, prosperity, and joyous feasts.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="px-5 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#DC2626] text-white font-sans font-black text-xs uppercase tracking-wider transition-colors border border-[#F59E0B] shrink-0 shadow-md"
          >
            Ascend to Pandal Top ↑
          </button>
        </div>

        {/* 3-Column Mandap Seva Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-sans">
          <div className="p-5 rounded-xl bg-[#23080C] border border-white/10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#FDE68A] font-bold block font-serif">
              🪔 Naivedya Kitchen Protocol
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              All dishes are finished fresh upon table order with pure ghee, whole spices, and ceremonial brass kansa plating. Inform your server of any dietary fasting needs.
            </p>
          </div>

          {hours && hours.length > 0 && (
            <div className="p-5 rounded-xl bg-[#23080C] border border-white/10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#FDE68A] font-bold block font-serif">
                ⏳ Mandap Aarti Timings
              </span>
              <div className="space-y-1.5 text-xs font-mono">
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
            <div className="p-5 rounded-xl bg-[#23080C] border border-white/10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#FDE68A] font-bold block font-serif">
                📍 Utsav Pandal Location
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                {location}
              </p>
              <span className="text-[11px] text-[#F59E0B] block font-bold">
                10-Day Mahotsav Dining Active
              </span>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-white/10 text-center text-xs font-sans text-zinc-500">
          © {new Date().getFullYear()} {name}. GANESHOTSAV MAHAPRASAD. ALL OBSTACLES REMOVED.
        </div>
      </div>
    </footer>
  );
};

export default VisarjanFooter;