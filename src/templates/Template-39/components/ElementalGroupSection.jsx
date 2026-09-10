import React from 'react';
import ElementTile from './ElementTile';

const ElementalGroupSection = ({ category, index = 0, runningAtomicStart = 1, onInspectElement }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28 font-mono">
      {/* Section Header */}
      <div className="p-4 rounded-xl bg-[#0E121B] border border-cyan-500/30 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-400 text-black font-black text-xs flex items-center justify-center">
            G0{index + 1}
          </div>
          <div>
            <h2 className="text-base sm:text-xl font-black uppercase tracking-wider text-white flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <span>{name}</span>
            </h2>
            {description && (
              <p className="text-xs text-zinc-400 font-sans italic mt-0.5">
                "{description}"
              </p>
            )}
          </div>
        </div>

        <span className="text-[10px] text-cyan-300 uppercase bg-black/40 px-3 py-1 rounded border border-cyan-500/30 self-start sm:self-auto">
          {items.length} {items.length === 1 ? 'Element Registered' : 'Elements Registered'}
        </span>
      </div>

      {/* Responsive Periodic Table Grid: 2 Col (Mobile) -> 4 Col (Tablet) -> 6 Col (Desktop) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {items.map((item, itemIdx) => (
          <ElementTile
            key={item.id || item.name}
            item={item}
            atomicNumber={runningAtomicStart + itemIdx}
            seriesIndex={index}
            onInspect={onInspectElement}
          />
        ))}
      </div>
    </section>
  );
};

export default ElementalGroupSection;