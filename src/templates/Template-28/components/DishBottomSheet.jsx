import React from 'react';

const DishBottomSheet = ({ dish, onClose }) => {
  if (!dish) return null;

  const {
    name = '',
    description = '',
    price = 0,
    image = null,
    type = null,
    spicy = false,
    tags = [],
  } = dish;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-Up Bottom Card */}
      <div className="relative w-full max-w-lg bg-[#141721] border-t border-white/20 rounded-t-3xl p-5 shadow-2xl z-10 max-h-[85vh] overflow-y-auto">
        {/* Pull Handle */}
        <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-4" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-sm"
        >
          ✕
        </button>

        {/* Big Image Hero */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-black mb-4 border border-white/10">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-5xl">
              🥘
            </div>
          )}
          <div className="absolute top-3 left-3 flex gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-black/70 border border-white/20 text-white font-mono text-[10px] uppercase font-bold">
              {type || 'Plated to Order'}
            </span>
            {spicy && (
              <span className="px-2 py-0.5 rounded-full bg-rose-500/80 text-white font-mono text-[10px] font-bold">
                🌶 Spicy
              </span>
            )}
          </div>
        </div>

        {/* Title & Price Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h2 className="text-lg font-mono font-black text-white leading-snug">
            {name}
          </h2>
          <span className="text-base font-mono font-black text-[#FF5E00] shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        {/* Ingredients & Prep */}
        <p className="text-xs text-white/70 leading-relaxed font-sans mb-4">
          {description || 'Prepared fresh in-house by our culinary team with daily market ingredients.'}
        </p>

        {/* Tags / Flavor Spectrum */}
        {tags.length > 0 && (
          <div className="mb-5">
            <span className="text-[9px] font-mono uppercase tracking-widest text-white/40 block mb-1.5">
              Flavor Highlights:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[10px] font-mono text-white/80"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Dine-In Notification */}
        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center mb-2">
          <span className="text-[10px] font-mono text-white/60">
            Table QR Dine-In Service • Order directly with your attendant
          </span>
        </div>
      </div>
    </div>
  );
};

export default DishBottomSheet;