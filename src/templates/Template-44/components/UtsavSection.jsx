import React from 'react';
import PrasadCard from './PrasadCard';
import { ToranRunner } from './GaneshaIcons';

const UtsavSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const sectionCode = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28 font-serif">
      {/* Section Mandap Ribbon */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#2E0B10] via-[#380E15] to-[#2E0B10] border-2 border-[#F59E0B] mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#EA580C] text-[#FDE68A] font-sans font-black text-sm flex items-center justify-center border border-[#F59E0B] shadow-md">
            {sectionCode}
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-[#FDE68A] flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <span>{name}</span>
            </h2>
            {description && (
              <p className="text-xs font-sans text-zinc-300 italic mt-0.5">
                "{description}"
              </p>
            )}
          </div>
        </div>

        <span className="text-[10px] font-sans font-black text-[#F59E0B] uppercase bg-black/40 px-3 py-1 rounded-full border border-[#F59E0B]/40 self-start sm:self-auto">
          {items.length} {items.length === 1 ? 'Prasadam Item' : 'Prasadam Items'}
        </span>
      </div>

      {/* Grid: 1 Col (Mobile) -> 2 Col (Tablet/Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {items.map((item, itemIdx) => (
          <PrasadCard
            key={item.id || item.name}
            item={item}
            prasadCode={`${sectionCode}.${String(itemIdx + 1).padStart(2, '0')}`}
          />
        ))}
      </div>

      {/* Marigold Toran Divider */}
      <div className="pt-8">
        <ToranRunner className="w-full h-3 opacity-70" />
      </div>
    </section>
  );
};

export default UtsavSection;