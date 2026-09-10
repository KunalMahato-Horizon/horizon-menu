import React from 'react';
import BoardingPassTicket from './BoardingPassTicket';

const TerminalGateSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const gateNumber = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28 font-mono">
      {/* Gate Signboard Header */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0F1C32] border-2 border-white/15 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF4B26] text-white font-black text-sm flex items-center justify-center shadow-md">
            G{gateNumber}
          </div>
          <div>
            <h2 className="text-base sm:text-xl font-black uppercase tracking-wider text-white flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <span>GATE {gateNumber}: {name}</span>
            </h2>
            {description && (
              <p className="text-xs text-zinc-400 font-sans italic mt-0.5">
                "{description}"
              </p>
            )}
          </div>
        </div>

        <span className="text-[10px] text-[#FFC72C] uppercase bg-black/40 px-3 py-1 rounded-xl border border-white/10 self-start sm:self-auto font-bold">
          {items.length} {items.length === 1 ? 'Flight Ticket' : 'Flight Tickets'} Issued
        </span>
      </div>

      {/* Grid of Boarding Passes: 1 Col (Mobile) -> 2 Col (Tablet/Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {items.map((item, itemIdx) => (
          <BoardingPassTicket
            key={item.id || item.name}
            item={item}
            ticketIndex={itemIdx + 1}
            gateNumber={gateNumber}
          />
        ))}
      </div>
    </section>
  );
};

export default TerminalGateSection;