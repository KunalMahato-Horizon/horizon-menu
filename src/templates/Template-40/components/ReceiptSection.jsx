import React from 'react';
import ReceiptLineItem from './ReceiptLineItem';

const ReceiptSection = ({ category, index = 0 }) => {
  const { id = '', name = '', description = '', icon = null, items = [] } = category || {};
  if (!items || items.length === 0) return null;

  return (
    <section id={`category-${id}`} className="mb-8 scroll-mt-28 font-mono">
      {/* Department Section Header */}
      <div className="border-t-2 border-b-2 border-black py-1.5 mb-2 flex items-center justify-between px-2 sm:px-4 bg-[#EFECE3]">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black bg-black text-white px-1.5 py-0.5 rounded">
            DEPT 0{index + 1}
          </span>
          <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black flex items-center gap-1.5">
            {icon && <span>{icon}</span>}
            <span>{name}</span>
          </h2>
        </div>

        <span className="text-[10px] font-bold text-black/60">
          COUNT: {items.length}
        </span>
      </div>

      {description && (
        <p className="text-[10px] text-black/60 italic px-2 sm:px-4 mb-2">
          // {description}
        </p>
      )}

      {/* Continuous Itemized Line Items */}
      <div className="divide-y-0">
        {items.map((item, itemIdx) => (
          <ReceiptLineItem
            key={item.id || item.name}
            item={item}
            itemIndex={itemIdx + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ReceiptSection;