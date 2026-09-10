import React from 'react';
import PlateCard from './PlateCard';

const CourseColumn = ({ category, courseIndex, totalCourses }) => {
  const { name = '', description = '', icon = null, items = [] } = category || {};

  return (
    <div className="flex-1 w-full space-y-4 font-mono">
      {/* Course Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#14161F] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#FF5722] text-black font-black text-xs">
            0{courseIndex + 1} / 0{totalCourses}
          </span>
          <div>
            <h2 className="text-lg sm:text-xl font-serif font-black text-white uppercase tracking-wide flex items-center gap-2">
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

        <span className="text-[10px] text-white/40 uppercase bg-white/[0.04] px-2.5 py-1 rounded-md self-start sm:self-auto">
          {items.length} {items.length === 1 ? 'Plate' : 'Plates'}
        </span>
      </div>

      {/* Grid within Course */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {items.map((item, idx) => (
          <PlateCard key={item.id || item.name} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default CourseColumn;