import React from 'react';
import { 
  Smartphone, 
  RefreshCw, 
  Palette, 
  Printer, 
  ArrowRight, 
  Check, 
  X, 
  Sparkles,
  CheckCircle2,
  Zap,
  Globe,
  Tag,
  Clock,
  ShieldCheck,
  Headphones
} from 'lucide-react';

const CORE_BENEFITS = [
  {
    icon: Smartphone,
    title: 'Easy for Customers',
    description: 'Guests simply scan the table QR code and browse your menu on their phone without downloading an app or registering.',
    tag: 'Zero Friction',
    badgeClass: 'bg-brand-soft/20 text-brand-soft border-brand/30'
  },
  {
    icon: RefreshCw,
    title: 'Easy to Update',
    description: 'Change dish prices, add seasonal specials, or toggle sold-out items live without printing new batches or hiring a designer.',
    tag: 'Live Edits',
    badgeClass: 'bg-sky-500/20 text-sky-300 border-sky-500/30'
  },
  {
    icon: Palette,
    title: 'Made for Your Business',
    description: 'Every layout is tailored to your venue—incorporating your brand palette, logo, typography, and food photography.',
    tag: 'Brand Tailored',
    badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
  },
  {
    icon: Printer,
    title: 'Zero Reprint Waste',
    description: 'Eliminate recurring print bills, worn-out lamination, stained sheets, and handwritten pen corrections on the table.',
    tag: 'Cost Savings',
    badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
  }
];

const PAPER_PROCESS = [
  { text: 'Price change or new seasonal dish', alert: false },
  { text: 'Redesign source layout files', alert: false },
  { text: 'Pay print shop for reprint batch', alert: true },
  { text: 'Wait 3–5 days for printing & delivery', alert: true },
  { text: 'Manually swap out every table menu', alert: false }
];

const HORIZON_PROCESS = [
  { text: 'Price change or new seasonal dish' },
  { text: 'Send us the quick text or photo' },
  { text: 'Menu updated and reviewed live' },
  { text: 'All table QR codes sync immediately' }
];

const SUPPORTING_FEATURES = [
  { icon: Smartphone, label: 'Mobile-first layout' },
  { icon: Zap, label: 'No app download required' },
  { icon: Palette, label: 'Custom venue branding' },
  { icon: Sparkles, label: 'Rich food photography' },
  { icon: Tag, label: 'Categories & dietary tags' },
  { icon: Clock, label: 'Opening hours & contact' },
  { icon: Globe, label: 'High-speed cloud hosting' },
  { icon: ShieldCheck, label: 'High-resolution QR code' },
  { icon: Headphones, label: 'Direct WhatsApp support' }
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-96 h-96 bg-brand-dark/15 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 bg-brand/15 text-brand-soft px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 border border-brand/30 shadow-xs">
            <Sparkles size={14} className="text-brand" />
            <span>Why Horizon Menu Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Simpler for you. <br className="hidden sm:inline" />
            <span className="text-brand-soft">Effortless for your guests.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A digital QR menu makes it easier for restaurants and cafés to serve customers with a fast, mobile-friendly menu that is simple to keep updated.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 md:mb-20">
          {CORE_BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.title}
                className="bg-slate-900/80 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-brand/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-soft group-hover:scale-105 transition-transform">
                      <Icon size={22} />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${benefit.badgeClass}`}>
                      {benefit.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-soft transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-World Price Change Lifecycle Comparison */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-xl mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-bold tracking-widest text-brand-soft uppercase bg-brand/10 px-3 py-1 rounded-full border border-brand/20">
              The Real Difference
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">
              What happens when an item or price changes?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* The Traditional Paper Cycle */}
            <div className="bg-navy/70 rounded-2xl p-5 sm:p-6 border border-white/5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <Printer size={16} className="text-slate-400" />
                    <h4 className="text-sm font-bold text-slate-300">Printed Paper Menu</h4>
                  </div>
                  <span className="text-[10px] font-bold text-rose-300 bg-rose-500/15 border border-rose-500/20 px-2 py-0.5 rounded-full">
                    High Friction
                  </span>
                </div>

                <div className="space-y-2.5">
                  {PAPER_PROCESS.map((step, idx) => (
                    <div 
                      key={step.text} 
                      className={`flex items-center gap-3 p-2.5 rounded-xl border text-xs sm:text-sm ${
                        step.alert 
                          ? 'bg-rose-950/30 border-rose-800/40 text-rose-200' 
                          : 'bg-white/5 border-white/5 text-slate-400'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                        step.alert ? 'bg-rose-900/50 text-rose-300' : 'bg-white/10 text-slate-400'
                      }`}>
                        {idx + 1}
                      </div>
                      <span className="flex-1">{step.text}</span>
                      {step.alert && <X size={14} className="text-rose-400 shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 text-center pt-2 border-t border-white/5">
                Recurring costs, turnaround delays, and manual desk swaps.
              </p>
            </div>

            {/* The Horizon Menu Flow */}
            <div className="bg-gradient-to-br from-slate-900 to-navy rounded-2xl p-5 sm:p-6 border border-brand/40 ring-1 ring-brand/20 flex flex-col justify-between space-y-4 shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <Smartphone size={16} className="text-brand-soft" />
                    <h4 className="text-sm font-bold text-white">Horizon Digital Menu</h4>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Zero Friction
                  </span>
                </div>

                <div className="space-y-2.5">
                  {HORIZON_PROCESS.map((step, idx) => (
                    <div 
                      key={step.text} 
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-brand/20 text-xs sm:text-sm text-slate-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand/20 text-brand-soft flex items-center justify-center shrink-0 text-[10px] font-bold">
                        {idx + 1}
                      </div>
                      <span className="flex-1">{step.text}</span>
                      <Check size={14} className="text-emerald-400 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-2.5 text-center">
                <p className="text-xs font-semibold text-emerald-300 flex items-center justify-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Always accurate. Zero reprint costs.</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Supporting Features Grid */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-slate-400 text-center font-semibold mb-6">
            Included in every Horizon Menu
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {SUPPORTING_FEATURES.map(({ icon: Icon, label }) => (
              <div 
                key={label}
                className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-slate-200"
              >
                <Icon size={16} className="text-brand shrink-0" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}