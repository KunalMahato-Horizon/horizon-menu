import React from 'react';
import ComicPanelItem from './ComicPanelItem';

const MangaSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const chapterNum = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28 font-sans">
      {/* Chapter Banner Header */}
      <div className="p-4 sm:p-5 rounded-xl bg-white border-3 border-black shadow-[5px_5px_0px_0px_#000] mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-black text-white font-black text-xs flex items-center justify-center border-2 border-black rotate-[-2deg]">
            {chapterNum}
          </div>
          <div>
            <h2 className="text-base sm:text-xl font-black uppercase tracking-tight text-black flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <span>CHAPTER {chapterNum}: {name}</span>
            </h2>
            {description && (
              <p className="text-xs font-mono text-black/60 mt-0.5">
                // {description}
              </p>
            )}
          </div>
        </div>

        <span className="text-[10px] font-mono font-black text-black uppercase bg-yellow-300 px-3 py-1 rounded border-2 border-black self-start sm:self-auto shadow-[2px_2px_0px_0px_#000]">
          {items.length} {items.length === 1 ? 'Panel' : 'Panels'}
        </span>
      </div>

      {/* Comic Page Grid: 1 Col (Mobile) -> 2 Col (Tablet) -> 3 Col (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {items.map((item, itemIdx) => (
          <ComicPanelItem
            key={item.id || item.name}
            item={item}
            panelIndex={itemIdx + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default MangaSection;