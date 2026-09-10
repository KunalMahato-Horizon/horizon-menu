import React from 'react';

const OracleModal = ({ isOpen, onClose, drawnDish }) => {
  if (!isOpen || !drawnDish) return null;

  const { name = '', description = '', price = 0, image = null, type = null } = drawnDish;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn font-mono">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-sm rounded-3xl bg-[#0D0F1D] border-2 border-[#E5C06E] p-6 text-center shadow-2xl z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm"
        >
          ✕
        </button>

        <span className="text-3xl mb-2 block">🔮</span>
        <span className="text-[10px] font-bold text-[#E5C06E] uppercase tracking-widest block mb-1">
          THE ORACLE HAS CHOSEN
        </span>
        <h3 className="text-xl font-serif font-black text-white uppercase mb-3">
          {name}
        </h3>

        {image && (
          <div className="w-full h-36 rounded-xl overflow-hidden mb-3 border border-[#E5C06E]/30">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}

        <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-4">
          {description}
        </p>

        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs mb-4">
          <span className="text-zinc-400">{type?.toUpperCase() || 'CHEF SELECTION'}</span>
          <span className="text-sm font-black text-[#E5C06E]">₹{Number(price).toLocaleString('en-IN')}</span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#C59B3F] to-[#E5C06E] text-black font-black text-xs uppercase tracking-wider"
        >
          Accept Prophecy
        </button>
      </div>
    </div>
  );
};

export default OracleModal;