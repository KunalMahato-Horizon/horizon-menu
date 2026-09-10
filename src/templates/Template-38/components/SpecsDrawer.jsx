import React from 'react';

const SpecsDrawer = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  const { name = '', description = '', price = 0, tags = [], type = null } = item;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm animate-fadeIn font-mono">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[#111216] border-t-2 border-white/20 rounded-t-3xl p-6 z-10 shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto">
        {/* Top Handle */}
        <div className="w-12 h-1 bg-white/20 rounded-full mx-auto" />

        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
          <div>
            <span className="text-[10px] text-[#CCFF00] uppercase font-bold tracking-widest block">
              CHEF SPECIFICATIONS
            </span>
            <h3 className="text-xl font-black text-white uppercase">{name}</h3>
          </div>
          <span className="text-lg font-black text-white shrink-0">
            ₹{Number(price).toLocaleString('en-IN')}
          </span>
        </div>

        <div>
          <span className="text-[10px] text-white/40 uppercase font-bold block mb-1">
            CULINARY COMPOSITION
          </span>
          <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
            {description || 'Prepared fresh by our kitchen station using local morning produce and fire-seared finish.'}
          </p>
        </div>

        {tags.length > 0 && (
          <div>
            <span className="text-[10px] text-white/40 uppercase font-bold block mb-1.5">
              TASTING PROFILE TAGS
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
          <p className="text-[10px] text-white/50 uppercase">
            Plated to table order • Inform your server of any dietary nuances
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-white text-black font-black uppercase text-xs tracking-wider active:scale-98 transition-all"
        >
          Close Specifications
        </button>
      </div>
    </div>
  );
};

export default SpecsDrawer;