import React from 'react';

const ValenceInspectorModal = ({ isOpen, onClose, selectedElement }) => {
  if (!isOpen || !selectedElement) return null;

  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    atomicNumber = 1,
    symbol = 'El',
    tags = [],
  } = selectedElement;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn font-mono">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1017] border-2 border-cyan-400 p-6 z-10 shadow-2xl shadow-cyan-950/80 space-y-4">
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-cyan-500/30 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-400 text-cyan-300 flex flex-col items-center justify-center font-black">
              <span className="text-[9px] text-white/50">{atomicNumber}</span>
              <span className="text-xl leading-none">{symbol}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-widest text-cyan-400 font-bold block">
                MOLECULAR SPECTROGRAM
              </span>
              <h3 className="text-lg font-black text-white uppercase">{name}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs"
          >
            ✕
          </button>
        </div>

        {/* Electron Shell Visual & Photo */}
        {image && (
          <div className="relative w-full h-44 rounded-xl overflow-hidden border border-white/15 bg-black">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-bold text-cyan-300 border border-cyan-400/40">
              MASS: ₹{Number(price).toLocaleString('en-IN')}
            </div>
          </div>
        )}

        {/* Compound Description */}
        <div>
          <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1">
            CHEMICAL COMPOSITION & PREPARATION
          </span>
          <p className="text-xs sm:text-sm text-zinc-200 font-sans leading-relaxed">
            {description || 'Constructed with calibrated ingredients, cold-distilled infusions, and direct flame balance.'}
          </p>
        </div>

        {/* Electron Shell Orbitals (Tags) */}
        {tags.length > 0 && (
          <div>
            <span className="text-[10px] text-zinc-400 uppercase font-bold block mb-1.5">
              VALENCE FLAVOR BONDS
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/40 text-xs text-cyan-300"
                >
                  Bond #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Table Protocol Notice */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center text-[10px] text-zinc-400">
          Reactions initiated upon table ticket receipt • Inform attendant of compound sensitivities
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-cyan-400 text-black font-black uppercase text-xs tracking-wider hover:bg-cyan-300 transition-colors"
        >
          Return to Matrix
        </button>
      </div>
    </div>
  );
};

export default ValenceInspectorModal;