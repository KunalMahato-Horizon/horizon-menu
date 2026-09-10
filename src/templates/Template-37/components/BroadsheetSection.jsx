import React from 'react';
import PressArticleItem from './PressArticleItem';

const BroadsheetSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const secLetter = String.fromCharCode(65 + index);

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28 font-serif">
      {/* Broadsheet Page Header */}
      <div className="border-b-4 border-black pb-2 mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div className="flex items-baseline gap-3">
          <span className="text-xl sm:text-2xl font-black font-mono text-[#8B0000]">
            SECTION {secLetter}
          </span>
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
            {icon && <span>{icon}</span>}
            <span>{name}</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-black/60">
          {description && <span className="italic">"{description}"</span>}
          <span className="font-bold uppercase">
            — {items.length} {items.length === 1 ? 'Dispatch' : 'Dispatches'}
          </span>
        </div>
      </div>

      {/* Broadsheet Column Grid: 1 Col (Mobile) -> 2 Col (Tablet) -> 3 Col (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {items.map((item, itemIdx) => (
          <PressArticleItem
            key={item.id || item.name}
            item={item}
            articleNumber={itemIdx + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default BroadsheetSection;