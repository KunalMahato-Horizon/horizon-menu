import React from 'react';
import StationStop from './StationStop';

const LINE_PALETTE = ['#FF3344', '#00D26A', '#FFB800', '#0090FF', '#B5179E'];

const TransitLineSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const lineColor = LINE_PALETTE[index % LINE_PALETTE.length];
  const lineNumber = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28 font-mono">
      {/* Metro Line Station Signboard */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#161922] border border-white/10 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs text-black"
            style={{ backgroundColor: lineColor }}
          >
            {lineNumber}
          </div>
          <div>
            <h2 className="text-base sm:text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <span>{name}</span>
            </h2>
            {description && (
              <p className="text-xs text-white/50 font-sans italic mt-0.5">
                "{description}"
              </p>
            )}
          </div>
        </div>

        <span className="text-[10px] text-white/50 uppercase bg-white/[0.04] px-3 py-1 rounded-lg border border-white/5 self-start sm:self-auto">
          {items.length} Station Stops
        </span>
      </div>

      {/* The Subway Track Spine */}
      <div className="relative pl-2 sm:pl-4">
        {/* The Continuous Colored Rail Line */}
        <div
          className="absolute left-[17px] sm:left-[25px] top-4 bottom-8 w-1 rounded-full opacity-75"
          style={{ backgroundColor: lineColor }}
        />

        {/* Station Stops connected on the track */}
        <div className="space-y-2">
          {items.map((item, itemIdx) => (
            <StationStop
              key={item.id || item.name}
              item={item}
              lineColor={lineColor}
              stationIndex={itemIdx + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransitLineSection;