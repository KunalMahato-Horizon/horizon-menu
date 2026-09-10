import React from 'react';

const BoardingPassTicket = ({ item, ticketIndex = 1, gateNumber = '01' }) => {
  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = item || {};

  const isVeg = type?.toLowerCase() === 'veg';
  const isFirstClass = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <article className="group relative rounded-2xl bg-white text-[#0A1424] border-2 border-white/30 shadow-2xl flex flex-col md:flex-row overflow-hidden font-mono transition-transform hover:-translate-y-1 duration-200">
      
      {/* ================= LEFT MAIN COUPON (70% WIDTH) ================= */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-3">
        {/* Ticket Header Ribbon */}
        <div className="flex items-start justify-between gap-3 border-b border-zinc-200 pb-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-0.5 rounded bg-[#0A1424] text-white text-[9px] font-black uppercase">
              TICKET #{String(ticketIndex).padStart(2, '0')}
            </span>

            <span className="text-[9px] font-bold text-zinc-500 uppercase">
              GATE {gateNumber} • FL-041
            </span>

            {isFirstClass && (
              <span className="px-2 py-0.5 rounded bg-[#FF4B26] text-white text-[9px] font-black uppercase">
                FIRST CLASS
              </span>
            )}

            {type && (
              <span
                className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase border ${
                  isVeg
                    ? 'border-emerald-600 text-emerald-700 bg-emerald-50'
                    : 'border-rose-600 text-rose-700 bg-rose-50'
                }`}
              >
                {isVeg ? 'VEG' : 'CATCH/MEAT'}
              </span>
            )}

            {spicy && <span title="Spicy Pepper">🌶️ HEATED</span>}
          </div>

          <span className="text-[10px] text-zinc-400 uppercase font-black hidden sm:inline">
            AERONAUT 41
          </span>
        </div>

        {/* Passenger Dish Headline */}
        <div>
          <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#0A1424] group-hover:text-[#FF4B26] transition-colors leading-snug">
            {name}
          </h3>

          {description && (
            <p className="text-xs text-zinc-600 font-sans leading-relaxed line-clamp-2 sm:line-clamp-3 mt-1.5 font-normal">
              {description}
            </p>
          )}
        </div>

        {/* Airport Flight Route & Tags */}
        <div className="pt-2 flex items-center justify-between gap-2 border-t border-zinc-100 text-[10px]">
          <div className="flex items-center gap-2 text-zinc-500">
            <span className="font-black text-[#0A1424]">HEARTH</span>
            <span>✈</span>
            <span className="font-black text-[#FF4B26]">TABLE SERVICE</span>
          </div>

          <div className="flex items-center gap-1 overflow-hidden">
            {tags
              .filter((t) => !['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t))
              .slice(0, 2)
              .map((tag, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 text-[9px]"
                >
                  #{tag}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* ================= PERFORATED TEAR NOTCHES ================= */}
      {/* Desktop Vertical Dashed Line with Half-Circle Cutouts */}
      <div className="relative hidden md:flex flex-col items-center justify-between w-0 border-r-2 border-dashed border-zinc-300">
        <div className="w-5 h-5 rounded-full bg-[#0A1424] -mt-2.5 -mr-2.5" />
        <div className="w-5 h-5 rounded-full bg-[#0A1424] -mb-2.5 -mr-2.5" />
      </div>

      {/* Mobile Horizontal Dashed Line with Half-Circle Cutouts */}
      <div className="relative flex md:hidden items-center justify-between h-0 border-b-2 border-dashed border-zinc-300">
        <div className="w-5 h-5 rounded-full bg-[#0A1424] -ml-2.5 -mt-2.5" />
        <div className="w-5 h-5 rounded-full bg-[#0A1424] -mr-2.5 -mt-2.5" />
      </div>

      {/* ================= RIGHT DETACHABLE BOARDING STUB (30% WIDTH) ================= */}
      <div className="w-full md:w-56 p-4 sm:p-5 bg-[#F8FAFC] flex flex-row md:flex-col justify-between items-center md:items-stretch gap-3 shrink-0">
        {/* Seat Code & Boarding Group */}
        <div className="space-y-1 text-left">
          <div className="flex items-baseline justify-between text-[10px] text-zinc-500">
            <span>BOARDING</span>
            <span className="font-black text-[#0A1424]">GRP 1</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-[#0A1424] tracking-tight">
            SEAT {String(ticketIndex).padStart(2, '0')}A
          </div>
        </div>

        {/* Dish Thumbnail */}
        {image && (
          <div className="w-14 h-14 sm:w-full sm:h-20 rounded-lg overflow-hidden border border-zinc-200 bg-black shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}

        {/* Fare Price & Barcode */}
        <div className="space-y-1.5 text-right md:text-left">
          <div className="text-[9px] text-zinc-500 uppercase">AIRFARE (DINE-IN)</div>
          <div className="text-base sm:text-lg font-black text-[#FF4B26]">
            ₹{Number(price).toLocaleString('en-IN')}
          </div>

          {/* Barcode Graphic */}
          <div className="hidden md:block pt-1 opacity-70">
            <div className="text-lg tracking-tight font-black leading-none select-none">
              ||| |||| | ||||| ||| ||
            </div>
            <span className="text-[7px] text-zinc-400 block tracking-widest">
              * TKT-041-{ticketIndex} *
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BoardingPassTicket;