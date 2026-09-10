import React, { useState } from 'react';
import { 
  QrCode, 
  Smartphone, 
  ArrowRight, 
  FileText,
  Check,
  X,
  Sparkles,
  ScanLine,
  Zap,
  ArrowDown
} from 'lucide-react';

const PHYSICAL_MENU_PROBLEMS = [
  'Reprint every time prices change',
  'Stained, sticky, and worn paper edges',
  'Zero food imagery for most items',
  'Recurring printing & lamination costs'
];

const DIGITAL_MENU_ADVANTAGES = [
  'Instant price & item updates with zero reprint fees',
  'Always clean, hygienic, and accessible on phone',
  'Rich, high-resolution food photos that sell',
  'One-time setup with predictable low hosting costs'
];

export default function About() {
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);

  const handleScanAnimation = () => {
    if (isScanning) return;
    setIsScanning(true);
    setHasScanned(false);

    setTimeout(() => {
      setIsScanning(false);
      setHasScanned(true);
    }, 1200);
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-warm-bg relative overflow-hidden">
      {/* Subtle background ambient blur */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-soft/30 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 bg-brand-soft/60 text-brand-dark px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 border border-brand/20 shadow-xs">
            <Sparkles size={14} className="text-brand" />
            <span>Why Switch?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-4 tracking-tight leading-tight">
            From Paper to <span className="text-brand">Digital</span>
          </h2>

          <p className="text-base sm:text-lg text-navy/70 leading-relaxed max-w-2xl mx-auto">
            Replace paper menus with a fast, mobile-friendly digital menu that customers can open instantly by scanning a QR code.
          </p>
        </div>

        {/* Interactive Transformation Stage */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg border border-navy/5 p-5 sm:p-7 md:p-9">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 lg:gap-8 items-stretch">
              
              {/* Left Column: Physical Paper Menu (The Old Way) */}
              <div className="bg-amber-50/40 rounded-2xl p-5 sm:p-6 border border-amber-200/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-200/50">
                    <div className="flex items-center gap-2 text-navy font-bold text-sm">
                      <FileText className="text-slate-400" size={16} />
                      <span>Physical Paper</span>
                    </div>
                    <span className="text-xs bg-rose-100 text-rose-700 font-semibold px-2.5 py-0.5 rounded-full">
                      The Old Way
                    </span>
                  </div>

                  {/* Mock Worn Paper Card */}
                  <div className="bg-white/90 rounded-xl p-4 border border-dashed border-amber-300 shadow-xs mb-5">
                    <div className="text-center mb-3 pb-2 border-b border-dashed border-slate-200">
                      <div className="font-bold text-navy text-xs">Café Nova</div>
                      <div className="text-[10px] text-slate-400 italic">Paper Menu (Worn & Outdated)</div>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-700 font-medium">Café Latte</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400 line-through text-[11px]">₹150</span>
                          <span className="text-rose-600 font-bold text-[10px] bg-rose-50 px-1.5 py-0.5 rounded">₹180 pen mark</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-700 font-medium">Club Sandwich</span>
                        <span className="text-slate-400 line-through text-[11px]">₹220</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400 line-through">Choco Croissant</span>
                        <span className="text-[10px] text-rose-500 font-semibold bg-rose-50 px-1 rounded">Out of Stock</span>
                      </div>
                    </div>
                  </div>

                  {/* Problems Bullet List */}
                  <div className="space-y-2.5">
                    {PHYSICAL_MENU_PROBLEMS.map((problem) => (
                      <div key={problem} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy/70">
                        <div className="w-4 h-4 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="text-rose-600" size={11} />
                        </div>
                        <span>{problem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle Column: Interactive Connector */}
              <div className="flex md:flex-col items-center justify-center gap-3 py-4 md:py-0">
                <button
                  type="button"
                  onClick={handleScanAnimation}
                  disabled={isScanning}
                  className={`group relative p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                    isScanning 
                      ? 'bg-brand-dark text-white scale-105 shadow-md shadow-brand/30' 
                      : 'bg-brand text-white shadow-sm hover:bg-brand-dark hover:scale-105 active:scale-95'
                  }`}
                  aria-label="Simulate scanning QR code"
                >
                  <QrCode className="w-9 h-9 transition-transform group-hover:rotate-3" />
                  
                  {isScanning && (
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
                    </span>
                  )}
                </button>

                <div className="flex items-center md:flex-col gap-1 text-brand">
                  <ArrowRight className="rotate-90 md:rotate-0 w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                </div>

                <button
                  type="button"
                  onClick={handleScanAnimation}
                  className="text-xs font-bold text-brand-dark bg-brand-soft hover:bg-brand-soft/80 px-3.5 py-1.5 rounded-full transition-colors active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Zap size={13} className="text-brand fill-brand" />
                  <span>{isScanning ? 'Syncing...' : 'Tap to Scan'}</span>
                </button>
              </div>

              {/* Right Column: Horizon Digital Menu (The Modern Way) */}
              <div className={`relative rounded-2xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between ${
                hasScanned 
                  ? 'bg-gradient-to-br from-navy via-navy to-slate-900 border-brand/40 shadow-xl ring-2 ring-brand/30' 
                  : 'bg-gradient-to-br from-navy via-navy to-slate-900 border-navy/10 shadow-md'
              }`}>
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <Smartphone size={16} className="text-brand-soft" />
                      <span>Horizon Digital Menu</span>
                    </div>
                    <span className="text-xs bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Ready
                    </span>
                  </div>

                  {/* Inside Digital Card Preview */}
                  <div className="bg-white rounded-xl p-4 relative overflow-hidden shadow-sm mb-5">
                    {/* Scanner Overlay */}
                    {isScanning && (
                      <div className="absolute inset-0 bg-brand/10 z-10 flex flex-col items-center justify-center backdrop-blur-xs">
                        <ScanLine className="text-brand w-7 h-7 animate-bounce" />
                        <span className="text-[10px] font-bold text-brand-dark bg-white px-2 py-0.5 rounded-full mt-1 shadow-xs">
                          Loading Menu...
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-3 pb-2 border-b border-slate-100">
                      <div className="font-bold text-navy text-xs">Café Nova</div>
                      <div className="text-[10px] text-brand font-semibold">Live Digital Catalog</div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: 'Café Latte', price: '₹180', emoji: '☕', tag: 'Bestseller' },
                        { name: 'Club Sandwich', price: '₹250', emoji: '🥪', tag: null },
                        { name: 'Chocolate Cake', price: '₹220', emoji: '🍰', tag: 'Fresh' }
                      ].map((item) => (
                        <div key={item.name} className="flex items-center gap-2.5 bg-slate-50 p-2 rounded-lg border border-slate-100">
                          <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center text-sm shadow-2xs shrink-0">
                            {item.emoji}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-navy flex items-center gap-1.5">
                              <span className="truncate">{item.name}</span>
                              {item.tag && (
                                <span className="text-[9px] text-brand-dark bg-brand-soft px-1.5 py-0.2 rounded font-medium">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="text-xs font-bold text-brand-dark pr-1">{item.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400">
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <Check size={11} /> 100% Updated
                      </span>
                      <span className="font-semibold text-navy">Powered by Horizon</span>
                    </div>
                  </div>

                  {/* Advantages Bullet List */}
                  <div className="space-y-2.5">
                    {DIGITAL_MENU_ADVANTAGES.map((advantage) => (
                      <div key={advantage} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="text-emerald-400" size={11} />
                        </div>
                        <span>{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}