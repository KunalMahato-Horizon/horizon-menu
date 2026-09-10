import React from 'react';

const DirectoryDrawer = ({ isOpen, onClose, categories = [], onSelectCourseAndClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fadeIn font-mono">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-in Directory Drawer */}
      <div className="relative w-full max-w-md bg-[#0E1015] border-l border-white/10 h-full p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#FF5722] font-bold block">
                TABLE SERVICE DIRECTORY
              </span>
              <h3 className="text-lg font-black text-white">ALL BANQUET COURSES</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center text-xs"
            >
              ✕
            </button>
          </div>

          {/* Course Directory List */}
          <div className="space-y-4">
            {categories.map((cat, idx) => (
              <div key={cat.id || idx} className="p-3 rounded-xl bg-[#14161F] border border-white/5">
                <button
                  onClick={() => onSelectCourseAndClose(idx)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#FF5722] font-bold">0{idx + 1}</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#FF5722] transition-colors uppercase">
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-xs text-white/40">
                    {cat.items?.length || 0} plates →
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Drawer Footer Notice */}
        <div className="pt-6 border-t border-white/10 text-center text-xs text-white/40">
          <p>Table QR Dining • Prepared fresh upon course sequence</p>
        </div>
      </div>
    </div>
  );
};

export default DirectoryDrawer;