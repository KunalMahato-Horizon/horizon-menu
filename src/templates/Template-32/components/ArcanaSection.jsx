import React from 'react';
import TarotCard from './TarotCard';

const ArcanaSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28">
      {/* Category Spread Header */}
      <div className="p-4 rounded-2xl bg-[#0D0F1D] border border-[#E5C06E]/30 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-lg">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#E5C06E] text-[#080911] font-mono font-black text-xs">
            SPHERE 0{index + 1}
          </span>
          <div>
            <h2 className="text-base sm:text-xl font-serif font-black text-white uppercase tracking-wider flex items-center gap-2">
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

        <span className="text-[10px] font-mono text-[#E5C06E] uppercase bg-white/[0.03] px-3 py-1 rounded-md self-start sm:self-auto border border-[#E5C06E]/20">
          {items.length} {items.length === 1 ? 'Tarot Card' : 'Tarot Cards'}
        </span>
      </div>

      {/* Multi-Screen Responsive Grid: 1 Col (Mobile) -> 2 Col (Tablet) -> 3-4 Col (Desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {items.map((item, itemIdx) => (
          <TarotCard
            key={item.id || item.name}
            item={item}
            cardIndex={itemIdx}
          />
        ))}
      </div>
    </section>
  );
};

export default ArcanaSection;