import React, { useState } from 'react';

const IndexSheetModal = ({ isOpen, onClose, categories = [], onSelectDishIndex }) => {
  if (!isOpen) return null;
  const [search, setSearch] = useState('');

  let runningIndex = 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn font-mono">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#111216] border border-white/20 rounded-3xl p-6 z-10 shadow-2xl max-h-[85vh] flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#CCFF00] tracking-widest block">
                TABLE MENU DIRECTORY
              </span>
              <h2 className="text-xl font-black text-white uppercase">All Offerings</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-xs"
            >
              ✕
            </button>
          </div>

          {/* Quick Filter */}
          <input
            type="text"
            placeholder="Filter by plate name or ingredient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder-white/40 focus:border-[#CCFF00] focus:outline-none mb-4"
          />
        </div>

        {/* Scrollable Dish Registry */}
        <div className="overflow-y-auto space-y-4 pr-1 max-h-[50vh] [scrollbar-width:thin]">
          {categories.map((cat, catIdx) => {
            return (
              <div key={cat.id || catIdx} className="space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-white/40 block px-1">
                  {cat.name}
                </span>

                <div className="space-y-1">
                  {cat.items
                    .filter((item) =>
                      item.name.toLowerCase().includes(search.toLowerCase()) ||
                      (item.description || '').toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => {
                      const itemIndex = runningIndex++;
                      return (
                        <button
                          key={item.id || item.name}
                          onClick={() => {
                            onSelectDishIndex(itemIndex);
                            onClose();
                          }}
                          className="w-full px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/5 flex items-center justify-between text-left group transition-colors"
                        >
                          <div className="flex items-center gap-2 min-w-0 pr-2">
                            <span className="text-[10px] text-white/30 shrink-0">
                              #{String(itemIndex + 1).padStart(2, '0')}
                            </span>
                            <span className="text-xs font-bold text-white group-hover:text-[#CCFF00] truncate">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-xs font-black text-white/70 shrink-0">
                            ₹{Number(item.price).toLocaleString('en-IN')}
                          </span>
                        </button>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-white/10 mt-4 text-center">
          <span className="text-[10px] text-white/40">Tap any item to jump directly to its slide</span>
        </div>
      </div>
    </div>
  );
};

export default IndexSheetModal;