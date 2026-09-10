import React from 'react';

const DishRow = ({ item, isSelected, onSelect }) => {
  const { name = '', description = '', price = 0, type = null, tags = [] } = item || {};

  const isBestseller = tags.some((t) =>
    ['Popular', 'Bestseller', 'Must Try', "Chef's Special", 'Signature'].includes(t)
  );

  return (
    <div
      onClick={onSelect}
      onMouseEnter={onSelect}
      className={`group px-4 py-3.5 rounded-2xl transition-all duration-150 cursor-pointer border ${
        isSelected
          ? 'bg-[#1A1A1A] text-[#FAF8F5] border-[#1A1A1A] shadow-md -translate-y-0.5'
          : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 hover:bg-[#F5F2EC]'
      }`}
    >
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
            type === 'veg' ? 'bg-emerald-500' : 'bg-[#FF3B00]'
          }`} />
          <h4 className="text-sm font-serif font-black tracking-tight truncate group-hover:text-[#FF3B00] transition-colors">
            {name}
          </h4>
          {isBestseller && (
            <span className={`text-[9px] font-mono font-bold px-1.5 rounded uppercase ${
              isSelected ? 'bg-white/10 text-[#FF3B00]' : 'bg-[#FF3B00]/10 text-[#FF3B00]'
            }`}>
              Top
            </span>
          )}
        </div>

        <span className="text-xs sm:text-sm font-mono font-black shrink-0">
          ₹{Number(price).toLocaleString('en-IN')}
        </span>
      </div>

      {description && (
        <p className={`text-xs font-sans line-clamp-1 transition-colors ${
          isSelected ? 'text-white/60' : 'text-[#1A1A1A]/50'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default DishRow;