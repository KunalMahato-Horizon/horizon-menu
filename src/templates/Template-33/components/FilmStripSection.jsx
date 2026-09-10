import React from 'react';
import ExposureFrame from './ExposureFrame';

const FilmStripSection = ({ category, index = 0, isSafelight = false }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const rollCode = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28 font-mono">
      {/* Continuous Top Film Sprocket Rail */}
      <div
        className={`rounded-t-2xl px-4 py-2 border-x border-t flex items-center justify-between overflow-hidden select-none text-[9px] ${
          isSafelight
            ? 'bg-[#150406] border-[#FF2A3A]/30 text-[#FF2A3A]/70'
            : 'bg-[#0E1015] border-white/10 text-white/40'
        }`}
      >
        <div className="flex items-center gap-2">
          <span>KODAK NOIR 400</span>
          <span>•</span>
          <span>ROLL {rollCode}</span>
        </div>

        {/* Sprocket Perforation Holes Graphic */}
        <div className="flex items-center gap-2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-2 rounded-[2px] bg-black/70 border border-white/10"
            />
          ))}
        </div>

        <span className="hidden sm:inline">SAFETY FILM</span>
      </div>

      {/* Roll Banner Header */}
      <div
        className={`p-4 sm:p-5 border-x flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
          isSafelight
            ? 'bg-[#1A0508] border-[#FF2A3A]/30 text-[#FF2A3A]'
            : 'bg-[#12141C] border-white/10 text-white'
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`px-2.5 py-1 rounded font-black text-xs ${
              isSafelight ? 'bg-[#FF2A3A] text-black' : 'bg-white text-black'
            }`}
          >
            {rollCode}
          </span>
          <div>
            <h2 className="text-base sm:text-xl font-black uppercase tracking-wider flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <span>{name}</span>
            </h2>
            {description && (
              <p className="text-xs font-sans italic opacity-60 mt-0.5">
                "{description}"
              </p>
            )}
          </div>
        </div>

        <span className="text-[10px] uppercase opacity-60 bg-white/[0.04] px-2.5 py-1 rounded border border-white/5 self-start sm:self-auto">
          {items.length} {items.length === 1 ? 'Frame' : 'Frames'} Exposed
        </span>
      </div>

      {/* Proof Frames: 1 Col (Mobile) -> 2 Col (Tablet) -> 3 Col (Desktop) */}
      <div
        className={`p-4 border-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${
          isSafelight
            ? 'bg-[#0E0304] border-[#FF2A3A]/30'
            : 'bg-[#0A0B0E] border-white/10'
        }`}
      >
        {items.map((item, itemIdx) => (
          <ExposureFrame
            key={item.id || item.name}
            item={item}
            frameNumber={`${rollCode}.${String(itemIdx + 1).padStart(2, '0')}`}
            isSafelight={isSafelight}
          />
        ))}
      </div>

      {/* Continuous Bottom Film Sprocket Rail */}
      <div
        className={`rounded-b-2xl px-4 py-2 border-x border-b flex items-center justify-between overflow-hidden select-none text-[9px] ${
          isSafelight
            ? 'bg-[#150406] border-[#FF2A3A]/30 text-[#FF2A3A]/70'
            : 'bg-[#0E1015] border-white/10 text-white/40'
        }`}
      >
        <span>EMULSION #33400</span>

        {/* Sprocket Holes */}
        <div className="flex items-center gap-2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-2 rounded-[2px] bg-black/70 border border-white/10"
            />
          ))}
        </div>

        <span className="hidden sm:inline">PROCESS C-41</span>
      </div>
    </section>
  );
};

export default FilmStripSection;