import React from 'react';

const SubCategoryCard = ({ subcategory, onAddItem }) => {
  const { name = "", hasSizes = false, note = "", items = [] } = subcategory;
  if (!items.length) return null;

  return (
    <div className="bg-[#3E2211] text-white rounded-xl border border-[#52301B] p-4 sm:p-5 shadow-sm">
      {/* Card Header Bar */}
      <div className="flex items-center justify-between border-b border-[#F2B828]/30 pb-2 mb-3">
        <div>
          <h3 className="text-xs sm:text-sm font-sans font-black uppercase tracking-wider text-[#F2B828]">
            {name}
          </h3>
          {note && (
            <p className="text-[10px] font-sans italic text-white/60 mt-0.5">
              *{note}
            </p>
          )}
        </div>

        {/* Size Headers */}
        {hasSizes && (
          <div className="flex items-center gap-2 text-[10px] font-sans font-black text-[#F2B828] pr-0.5">
            <span className="w-11 text-center">M</span>
            <span className="w-11 text-center">L</span>
          </div>
        )}
      </div>

      {/* Item Rows */}
      <div className="divide-y divide-white/5">
        {items.map((item) => {
          const isMulti = item.price.M !== undefined;
          const hasOnlyM = item.price.M !== undefined && item.price.L === undefined;
          const hasOnlyL = item.price.L !== undefined && item.price.M === undefined;

          return (
            <div
              key={item.id}
              className="py-2.5 flex items-center justify-between gap-2 group hover:bg-white/[0.03] px-1 rounded-lg transition-colors"
            >
              {/* Item Info */}
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span
                  className="w-3.5 h-3.5 border border-emerald-500 rounded-xs p-0.5 flex-shrink-0 flex items-center justify-center"
                  title="Vegetarian"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium text-stone-100 group-hover:text-[#F2B828] transition-colors truncate">
                  {item.name}
                </span>
              </div>

              {/* Actionable Price Badges with '+' Tap Target */}
              <div className="flex-shrink-0">
                {isMulti && item.price.L !== undefined ? (
                  <div className="flex items-center gap-2 font-sans font-black text-xs">
                    <button
                      onClick={() => onAddItem({ name: `${item.name} (M)`, price: item.price.M })}
                      className="w-11 py-1 rounded-md bg-[#F2B828] text-[#2C1A11] hover:bg-[#ffc842] active:scale-95 transition-all text-center tabular-nums shadow-xs"
                      title="Add Medium to Counter Slip"
                    >
                      ₹{item.price.M}
                    </button>
                    <button
                      onClick={() => onAddItem({ name: `${item.name} (L)`, price: item.price.L })}
                      className="w-11 py-1 rounded-md bg-[#F2B828] text-[#2C1A11] hover:bg-[#ffc842] active:scale-95 transition-all text-center tabular-nums shadow-xs"
                      title="Add Large to Counter Slip"
                    >
                      ₹{item.price.L}
                    </button>
                  </div>
                ) : hasOnlyM ? (
                  <button
                    onClick={() => onAddItem({ name: `${item.name} (M)`, price: item.price.M })}
                    className="px-2.5 py-1 rounded-md bg-[#F2B828] text-[#2C1A11] hover:bg-[#ffc842] active:scale-95 transition-all font-sans font-black text-xs tabular-nums"
                  >
                    M: ₹{item.price.M}
                  </button>
                ) : hasOnlyL ? (
                  <button
                    onClick={() => onAddItem({ name: `${item.name} (L)`, price: item.price.L })}
                    className="px-2.5 py-1 rounded-md bg-[#F2B828] text-[#2C1A11] hover:bg-[#ffc842] active:scale-95 transition-all font-sans font-black text-xs tabular-nums"
                  >
                    L: ₹{item.price.L}
                  </button>
                ) : (
                  <button
                    onClick={() => onAddItem({ name: item.name, price: item.price.single })}
                    className="px-3 py-1 rounded-md bg-[#F2B828] text-[#2C1A11] hover:bg-[#ffc842] active:scale-95 transition-all font-sans font-black text-xs tabular-nums"
                  >
                    + ₹{item.price.single}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubCategoryCard;