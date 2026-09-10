import React from 'react';

const SplitFlapHero = ({ business }) => {
  const {
    name = 'AERONAUT AIRWAYS',
    tagline = 'First-class culinary routes, supersonic wood-flame & cloud infusions',
    description = 'All flights originate directly from our kitchen runway and touch down at your table. Inspect the scheduled departure tickets below.',
    rating = 4.9,
    businessType = 'First-Class In-Flight Salon & Dining',
    location = 'Concourse A, Gate 41',
  } = business || {};

  const scrollToGates = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-[#0A1424] text-white font-mono overflow-hidden">
      {/* Flight Radar Altitude Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-6">
        {/* Split-Flap Departure Board Frame */}
        <div className="p-4 sm:p-7 rounded-2xl bg-[#0F1C32] border-2 border-white/20 shadow-2xl shadow-black/80 space-y-4">
          
          {/* Mechanical Departures Board Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-white/10 pb-3 text-[10px] sm:text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#FF4B26] text-white font-black uppercase">
                FLIGHT FL-041
              </span>
              <span className="text-zinc-400">ROUTING: KITCHEN ✈ TABLE SERVICE</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-zinc-300 font-bold">{businessType}</span>
              {rating && <span className="text-[#FFC72C] font-black">★ {rating} SKYTRAX</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Terminal Callout */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#162947] border border-[#FF4B26]/40 text-xs font-bold text-[#FF4B26]">
                <span>✈ NOW BOARDING PASSENGERS AT TABLE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.98] text-white">
                {name}
              </h1>

              {tagline && (
                <p className="text-sm sm:text-base font-bold text-[#FFC72C] border-l-4 border-[#FF4B26] pl-3">
                  &gt; "{tagline}"
                </p>
              )}

              {description && (
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl font-sans font-light">
                  {description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={scrollToGates}
                  className="px-6 py-3 rounded-xl bg-[#FF4B26] text-white font-black text-xs uppercase tracking-wider hover:bg-[#ff6342] hover:shadow-[0_0_25px_rgba(255,75,38,0.4)] active:scale-95 transition-all shadow-lg"
                >
                  Inspect Flight Tickets ↓
                </button>
                {location && (
                  <div className="px-4 py-2.5 rounded-xl bg-[#162947] border border-white/15 text-xs text-zinc-300">
                    TERMINAL LOCATION: {location}
                  </div>
                )}
              </div>
            </div>

            {/* Right Split-Flap Destination Screen */}
            <div className="lg:col-span-5">
              <div className="p-4 rounded-xl bg-black/60 border-2 border-white/15 space-y-2.5 shadow-inner">
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest border-b border-white/10 pb-1.5 flex justify-between font-bold">
                  <span>DESTINATION</span>
                  <span>DEPARTURE</span>
                  <span>GATE</span>
                </div>

                <div className="space-y-1.5 text-xs font-black tracking-widest">
                  <div className="flex justify-between items-center bg-[#162947]/80 px-2 py-1.5 rounded border border-white/5">
                    <span className="text-white">APPETIZERS</span>
                    <span className="text-[#FFC72C]">ON SCHEDULE</span>
                    <span className="text-[#FF4B26]">G-01</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#162947]/80 px-2 py-1.5 rounded border border-white/5">
                    <span className="text-white">HEARTH MAINS</span>
                    <span className="text-emerald-400">PREPARING</span>
                    <span className="text-[#FF4B26]">G-02</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#162947]/80 px-2 py-1.5 rounded border border-white/5">
                    <span className="text-white">CLOUD ELIXIRS</span>
                    <span className="text-[#FFC72C]">BOARDING</span>
                    <span className="text-[#FF4B26]">G-03</span>
                  </div>
                </div>

                <div className="text-[9px] text-zinc-500 pt-1 text-center uppercase tracking-widest">
                  ALL PASSENGERS TO STATIONS • NON-STOP TABLE VOYAGE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitFlapHero;