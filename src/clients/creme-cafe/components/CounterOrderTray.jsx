import React, { useState } from 'react';

const CounterOrderTray = ({ items = [], onRemoveItem, onClear }) => {
  const [isOpen, setIsOpen] = useState(false);
  const totalAmount = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg">
      {/* Expanded Order Drawer */}
      {isOpen && (
        <div className="mb-2 p-4 rounded-2xl bg-[#2C1A11] border-2 border-[#F2B828] text-white shadow-2xl max-h-72 flex flex-col animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
            <span className="text-xs font-sans font-black uppercase text-[#F2B828] tracking-wider">
              Highway Counter Slip ({items.length} items)
            </span>
            <button
              onClick={onClear}
              className="text-[10px] font-mono text-stone-400 hover:text-rose-400 uppercase tracking-wider"
            >
              Clear All
            </button>
          </div>

          <div className="overflow-y-auto space-y-2 flex-1 pr-1">
            {items.map((it, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                <span className="text-stone-200 font-medium truncate pr-2">{it.name}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#F2B828]">₹{it.price}</span>
                  <button
                    onClick={() => onRemoveItem(idx)}
                    className="w-5 h-5 rounded-full bg-white/10 text-stone-300 flex items-center justify-center hover:bg-rose-500 hover:text-white"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-stone-400 mt-2 text-center italic">
            Show this slip at the counter or tell the barista your total.
          </p>
        </div>
      )}

      {/* Main Dock Trigger Pill */}
      <div className="flex items-center justify-between p-2 pl-4 rounded-full bg-[#2C1A11] border-2 border-[#F2B828] shadow-2xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-left"
        >
          <span className="w-6 h-6 rounded-full bg-[#F2B828] text-[#2C1A11] flex items-center justify-center text-xs font-black">
            {items.length}
          </span>
          <div>
            <span className="text-[10px] font-mono text-[#F2B828] block leading-none uppercase font-bold">
              {isOpen ? "Tap to close" : "Counter Total"}
            </span>
            <span className="text-base font-serif font-black text-white leading-none">
              ₹{totalAmount}
            </span>
          </div>
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 rounded-full bg-[#F2B828] text-[#2C1A11] font-sans font-black text-xs uppercase tracking-wider hover:bg-[#ffc842] transition-colors"
        >
          {isOpen ? "Hide Slip ▲" : "View Slip ▼"}
        </button>
      </div>
    </div>
  );
};

export default CounterOrderTray;