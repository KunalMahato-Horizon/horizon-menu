import React from 'react';

// Generates a recognizable 2-letter chemical symbol from the dish name
const getSymbol = (name = '') => {
  const clean = name.replace(/[^a-zA-Z]/g, '');
  if (clean.length < 2) return 'El';
  return clean[0].toUpperCase() + clean[1].toLowerCase();
};

const SERIES_THEMES = [
  { border: 'border-cyan-500/40 hover:border-cyan-400 shadow-cyan-950/50 text-cyan-300 bg-cyan-950/20' },
  { border: 'border-amber-500/40 hover:border-amber-400 shadow-amber-950/50 text-amber-300 bg-amber-950/20' },
  { border: 'border-rose-500/40 hover:border-rose-400 shadow-rose-950/50 text-rose-300 bg-rose-950/20' },
  { border: 'border-purple-500/40 hover:border-purple-400 shadow-purple-950/50 text-purple-300 bg-purple-950/20' },
  { border: 'border-emerald-500/40 hover:border-emerald-400 shadow-emerald-950/50 text-emerald-300 bg-emerald-950/20' },
];

const ElementTile = ({ item, atomicNumber = 1, seriesIndex = 0, onInspect }) => {
  const {
    name = '',
    price = 0,
    type = null,
    spicy = false,
  } = item || {};

  const symbol = getSymbol(name);
  const theme = SERIES_THEMES[seriesIndex % SERIES_THEMES.length];
  const isVeg = type?.toLowerCase() === 'veg';

  return (
    <div
      onClick={() => onInspect(item, atomicNumber, symbol)}
      className={`group relative rounded-xl border-2 p-3 sm:p-4 transition-all duration-200 cursor-pointer flex flex-col justify-between aspect-square select-none shadow-lg hover:-translate-y-1 ${theme.border} bg-[#0D1017]`}
    >
      {/* Atomic Header: Number & Oxidation */}
      <div className="flex items-start justify-between text-[9px] sm:text-[10px] font-mono leading-none">
        <span className="font-bold text-white/50 group-hover:text-white">
          {String(atomicNumber).padStart(2, '0')}
        </span>
        <div className="flex items-center gap-1">
          {isVeg && (
            <span className="text-emerald-400 font-bold" title="Plant-Based">
              pH+
            </span>
          )}
          {spicy && (
            <span className="text-rose-400 font-bold" title="Oxidized Spice">
              +3
            </span>
          )}
        </div>
      </div>

      {/* Center 2-Letter Chemical Symbol */}
      <div className="my-auto text-center">
        <span className="text-2xl sm:text-4xl font-black font-mono tracking-tighter block group-hover:scale-110 transition-transform">
          {symbol}
        </span>
        <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-tight block truncate mt-1">
          {name}
        </span>
      </div>

      {/* Atomic Mass (Price) */}
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono border-t border-white/10 pt-1.5 text-zinc-400">
        <span className="text-[8px] uppercase tracking-widest text-white/40">MASS</span>
        <span className="font-bold text-white group-hover:text-cyan-300">
          ₹{Number(price).toLocaleString('en-IN')}
        </span>
      </div>
    </div>
  );
};

export default ElementTile;