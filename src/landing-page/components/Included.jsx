import React from 'react';
import { 
  Palette, 
  FileText, 
  Smartphone, 
  RefreshCw, 
  Check, 
  ArrowRight, 
  Sparkles, 
  QrCode
} from 'lucide-react';

const DELIVERABLE_PILLARS = [
  {
    icon: Palette,
    title: 'Design & Branding',
    badgeClass: 'bg-brand-soft text-brand-dark',
    items: [
      'Your café logo and branding',
      'Custom brand color palette',
      'Your chosen template layout',
      'High-res food photo integration'
    ]
  },
  {
    icon: FileText,
    title: 'Complete Menu Setup',
    badgeClass: 'bg-amber-50 text-amber-800',
    items: [
      'Organized food & drink categories',
      'All menu items with live pricing',
      'Dish descriptions & dietary tags',
      'Veg / Non-Veg & Bestseller badges'
    ]
  },
  {
    icon: Smartphone,
    title: 'Digital Page & QR',
    badgeClass: 'bg-sky-50 text-sky-800',
    items: [
      'Fast, mobile-first browser menu',
      'Custom high-resolution QR code',
      'Café opening hours & map address',
      'Phone, WhatsApp & social links'
    ]
  },
  {
    icon: RefreshCw,
    title: 'After-Launch Care',
    badgeClass: 'bg-emerald-50 text-emerald-800',
    items: [
      'Menu updates when prices change',
      '99.9% reliable cloud hosting',
      'Zero paper reprint headaches',
      'Direct personal WhatsApp support'
    ]
  }
];

const SUMMARY_HIGHLIGHTS = [
  'Fully branded digital menu on your own link',
  'Your selected responsive template',
  'Print-ready table QR code vector files',
  'Opening hours, location & social links',
  'Ongoing menu updates & maintenance'
];

export default function Included() {
  return (
    <section id="included" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-navy/5">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 w-96 h-96 bg-brand-soft/30 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 bg-brand-soft/60 text-brand-dark px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 border border-brand/20 shadow-xs">
            <Sparkles size={14} className="text-brand" />
            <span>What You Get</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight leading-tight mb-4">
            Everything in your <span className="text-brand">Digital Menu</span>
          </h2>

          <p className="text-base sm:text-lg text-navy/70 leading-relaxed max-w-2xl mx-auto">
            A complete, done-for-you digital menu setup customized for your venue and ready to hand over to your guests.
          </p>
        </div>

        {/* Deliverables Grid: 4 Pillars (Left) + Summary Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 4 Groups */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DELIVERABLE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.title}
                  className="bg-warm-bg rounded-2xl p-5 sm:p-6 border border-navy/5 shadow-xs hover:shadow-md hover:border-brand/30 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-11 h-11 ${pillar.badgeClass} rounded-xl flex items-center justify-center mb-4 shadow-2xs`}>
                      <Icon size={20} />
                    </div>

                    <h3 className="text-base font-bold text-navy mb-3">
                      {pillar.title}
                    </h3>

                    <ul className="space-y-2.5">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-navy/70 leading-snug">
                          <Check size={15} className="text-brand shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-navy rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10 relative overflow-hidden">
              
              {/* Card Ambient Glow */}
              <div 
                aria-hidden="true" 
                className="absolute top-0 right-0 w-48 h-48 bg-brand/20 rounded-full blur-2xl pointer-events-none" 
              />

              <div className="relative space-y-6">
                
                {/* Header */}
                <div className="pb-5 border-b border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-brand-soft bg-brand/20 px-3 py-1 rounded-full border border-brand/30">
                      The Deliverable
                    </span>
                    <QrCode className="text-slate-400 w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Horizon Menu Package
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Everything created, formatted, and delivered turnkey for your café.
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-3">
                  {SUMMARY_HIGHLIGHTS.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-emerald-400" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA to Pricing */}
                <div className="pt-5 border-t border-white/10">
                  <a
                    href="#pricing"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-brand-soft text-navy font-bold text-sm shadow-md transition-colors group cursor-pointer"
                  >
                    <span>View Pricing & Plans</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Transparent annual pricing with zero hidden fees.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}