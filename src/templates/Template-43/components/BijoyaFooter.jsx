import React from 'react';
import { ShankhoIcon } from './DurgaIcons';

const BijoyaFooter = ({ business }) => {
  const { name = 'MAHAMAYA BHOG', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#0D0204] text-[#FFFDF8] pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-t-4 border-[#DC2626] font-serif">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Shubho Bijoya Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#24080F] via-[#2E0A13] to-[#24080F] border-2 border-[#F59E0B] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#DC2626] border-2 border-[#F59E0B] flex items-center justify-center shrink-0 shadow-md">
              <ShankhoIcon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#FDE68A] uppercase">
                শুভ বিজয়া • SHUBHO BIJOYA
              </h3>
              <p className="text-xs font-sans text-zinc-300">
                May Maa Durga bless your home with warmth, good health, and celebratory feasts.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="px-5 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-sans font-black text-xs uppercase tracking-wider transition-colors border border-[#F59E0B] shrink-0 shadow-md"
          >
            Ascend to Pandal Top ↑
          </button>
        </div>

        {/* 3-Column Seva Protocol */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-sans">
          <div className="p-5 rounded-xl bg-[#1A050B] border border-white/10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#FDE68A] font-bold block font-serif">
              🪔 Bhog Seva Protocol
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              All offerings are prepared to table order with traditional brass and clayware presentation. Notify your server of any dietary fasting requirements.
            </p>
          </div>

          {hours && hours.length > 0 && (
            <div className="p-5 rounded-xl bg-[#1A050B] border border-white/10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#FDE68A] font-bold block font-serif">
                ⏳ Pandal Bhog Timings
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
            <div className="p-5 rounded-xl bg-[#1A050B] border border-white/10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#FDE68A] font-bold block font-serif">
                📍 Pandal Location
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                {location}
              </p>
              <span className="text-[11px] text-[#F59E0B] block font-bold">
                Shasthi to Dashami Dining Active
              </span>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-white/10 text-center text-xs font-sans text-zinc-500">
          © {new Date().getFullYear()} {name}. SHUBHO SHARADIYA FESTIVAL. ALL BLESSINGS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default BijoyaFooter;