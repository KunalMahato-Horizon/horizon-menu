import React from 'react';

const ColophonFooter = ({ business }) => {
  const { name = 'THE MORNING DISPATCH', location = '', hours = [] } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#121212] text-[#F5EFEB] pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-t-8 border-black font-serif">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Press Masthead Colophon */}
        <div className="border-b-2 border-white/20 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="text-center sm:text-left">
            <span className="text-sm font-black uppercase text-white block">
              {name} • OFFICIAL PRESS COLOPHON
            </span>
            <p className="text-white/50 text-[11px]">
              Printed fresh daily on table press machinery. No subscriptions required.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 bg-white text-black font-black uppercase text-[10px] hover:bg-zinc-200 transition-colors"
          >
            Return to Masthead Top ↑
          </button>
        </div>

        {/* 3-Column Newspaper Bureau Notice */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          {/* Column 1: Kitchen Bureau Instructions */}
          <div className="p-4 bg-white/5 border border-white/10">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#F5EFEB] block mb-2">
              // TABLE REPORTERS NOTICE
            </span>
            <p className="font-sans text-white/70 leading-relaxed text-xs">
              Every dish is composed directly upon receiving your table docket. Inform your attendant reporter of any allergen nuances or dietary sensitivities.
            </p>
          </div>

          {/* Column 2: Publishing Schedule */}
          {hours && hours.length > 0 && (
            <div className="p-4 bg-white/5 border border-white/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#F5EFEB] block mb-2">
                // PUBLICATION SCHEDULE
              </span>
              <div className="space-y-1.5 text-xs">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-white/50">{h.days}</span>
                    <span className="font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 3: Bureau Coordinates */}
          {location && (
            <div className="p-4 bg-white/5 border border-white/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#F5EFEB] block mb-2">
                // PRINTING HOUSE HEADQUARTERS
              </span>
              <p className="font-sans text-white/70 leading-relaxed mb-2 text-xs">
                {location}
              </p>
              <span className="text-[10px] text-white block font-black">
                ● AUTHORIZED DINE-IN SERVICE ONLY
              </span>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-white/10 text-center font-mono text-[10px] text-white/40">
          © {new Date().getFullYear()} {name}. ALL EDITORIAL RIGHTS RESERVED. PRINTED FOR TABLE CONSUMPTION.
        </div>
      </div>
    </footer>
  );
};

export default ColophonFooter;