import React from 'react';
import DossierCaseCard from './DossierCaseCard';

const CaseFileSection = ({ category, index = 0, isGlobalDeclassified = false }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  const fileCode = String(index + 1).padStart(2, '0');

  return (
    <section id={`category-${id}`} className="mb-14 scroll-mt-28 font-mono">
      {/* Folder Header Divider */}
      <div className="p-4 rounded-xl bg-[#F5EFE1] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#B91C1C] text-white font-black text-xs">
            DOSSIER {fileCode}
          </span>
          <div>
            <h2 className="text-base sm:text-xl font-black uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <span>{name}</span>
            </h2>
            {description && (
              <p className="text-xs font-sans italic text-[#1A1A1A]/70 mt-0.5">
                "{description}"
              </p>
            )}
          </div>
        </div>

        <span className="text-[10px] text-[#1A1A1A] uppercase bg-white px-2.5 py-1 rounded border border-[#1A1A1A] font-bold self-start sm:self-auto">
          {items.length} {items.length === 1 ? 'Asset File' : 'Asset Files'}
        </span>
      </div>

      {/* Grid of Case Files: 1 Col (Mobile) -> 2 Col (Tablet) -> 2-3 Col (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
        {items.map((item, itemIdx) => (
          <DossierCaseCard
            key={item.id || item.name}
            item={item}
            assetIndex={itemIdx + 1}
            isGlobalDeclassified={isGlobalDeclassified}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseFileSection;