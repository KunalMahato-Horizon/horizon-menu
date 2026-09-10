import React from 'react';
import { 
  QrCode, 
  Smartphone, 
  Compass, 
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Store,
  Send,
  Sliders,
  Download
} from 'lucide-react';

const CUSTOMER_STEPS = [
  {
    number: '01',
    title: 'Scan',
    subtitle: 'Point & scan',
    description: 'Guests point their phone camera at the QR code on the table or counter.',
    visual: (
      <div className="bg-slate-50 rounded-xl p-3.5 border border-navy/5 text-center flex flex-col items-center justify-center">
        <div className="p-2 bg-white rounded-lg shadow-2xs border border-navy/5">
          <QrCode className="w-10 h-10 text-navy" />
        </div>
        <p className="text-[10px] text-navy/60 font-medium mt-2">No app required</p>
      </div>
    )
  },
  {
    number: '02',
    title: 'Open',
    subtitle: 'Loads instantly',
    description: 'Your digital menu launches immediately in their default mobile browser.',
    visual: (
      <div className="bg-slate-50 rounded-xl p-3 border border-navy/5">
        <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-navy/5 text-left">
          <div className="w-2 h-2 rounded-full bg-rose-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[9px] text-navy/40 font-mono ml-auto">
            horizonmenu.com
          </span>
        </div>
        <div className="space-y-1">
          {['☕ Coffee & Brews', '🥐 Fresh Bakery', '🍰 Desserts'].map((cat, i) => (
            <div 
              key={cat} 
              className={`text-[9px] px-2 py-1 rounded font-medium ${
                i === 0 ? 'bg-brand text-white' : 'bg-white text-navy/70 border border-navy/5'
              }`}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    number: '03',
    title: 'Browse',
    subtitle: 'Explore dishes',
    description: 'Customers filter categories, check ingredients, dietary tags, and prices.',
    visual: (
      <div className="bg-slate-50 rounded-xl p-2.5 border border-navy/5 space-y-1.5">
        <div className="bg-white p-2 rounded-lg border border-navy/5 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-2 text-left">
            <span className="text-sm">☕</span>
            <div>
              <p className="text-[10px] font-bold text-navy leading-tight">Café Latte</p>
              <p className="text-[8px] text-navy/50">Double shot</p>
            </div>
          </div>
          <span className="text-[10px] font-extrabold text-brand-dark">₹180</span>
        </div>
        <div className="bg-white p-2 rounded-lg border border-navy/5 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-2 text-left">
            <span className="text-sm">🥐</span>
            <div>
              <p className="text-[10px] font-bold text-navy leading-tight">Croissant</p>
              <p className="text-[8px] text-navy/50">Flaky butter</p>
            </div>
          </div>
          <span className="text-[10px] font-extrabold text-brand-dark">₹150</span>
        </div>
      </div>
    )
  },
  {
    number: '04',
    title: 'Choose',
    subtitle: 'Order as usual',
    description: 'Diners pick their dishes and proceed with your existing staff or counter flow.',
    visual: (
      <div className="bg-slate-50 rounded-xl p-3.5 border border-navy/5 text-center flex flex-col items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1.5">
          <CheckCircle2 size={22} />
        </div>
        <p className="text-[10px] font-bold text-navy">Order Decided</p>
        <p className="text-[8px] text-navy/50 mt-0.5">Staff places the order</p>
      </div>
    )
  }
];

const ONBOARDING_STEPS = [
  { icon: Store, title: 'Choose a Design', desc: 'Pick from 6 tailored templates' },
  { icon: Send, title: 'Send Your Menu', desc: 'Share your PDF, sheet, or photo' },
  { icon: Sliders, title: 'We Customize', desc: 'Branded with your logo & palette' },
  { icon: Download, title: 'Get Your QR Code', desc: 'Ready for table stands & print' }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative overflow-hidden border-y border-navy/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-soft/60 text-brand-dark px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 border border-brand/20 shadow-xs">
            <Sparkles size={14} className="text-brand" />
            <span>Effortless Flow</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-4 tracking-tight">
            From Scan to Menu in <span className="text-brand">Seconds</span>
          </h2>
          
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed max-w-2xl mx-auto">
            Zero app downloads, no registrations, no friction. Just an instant menu experience designed natively for modern phones.
          </p>
        </div>
        
        {/* Customer Experience: 4 Steps */}
        <div className="relative mb-20 md:mb-24">
          
          {/* Desktop Connecting Line */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-brand/20 via-brand to-brand/20 -z-0" 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {CUSTOMER_STEPS.map((step, idx) => (
              <div 
                key={step.number} 
                className="bg-warm-bg rounded-2xl p-5 border border-navy/5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl bg-brand text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-semibold text-brand-dark bg-brand-soft px-2.5 py-0.5 rounded-full">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy mb-3">
                    {step.title}
                  </h3>

                  {/* Visual Simulation */}
                  <div className="mb-4">
                    {step.visual}
                  </div>
                </div>

                <p className="text-xs text-navy/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Setup Flow: How the venue gets onboarded */}
        <div className="max-w-4xl mx-auto bg-warm-bg rounded-3xl p-6 sm:p-8 md:p-10 border border-navy/5 shadow-xs">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">
              How do you get your Horizon Menu?
            </h3>
            <p className="text-sm text-navy/70">
              No technical setup required on your end. We take care of the entire digitisation.
            </p>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ONBOARDING_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title}
                  className="bg-white rounded-xl p-4 border border-navy/5 flex flex-col items-center text-center shadow-2xs relative"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-3">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-navy mb-1">{step.title}</h4>
                  <p className="text-xs text-navy/60 leading-tight">{step.desc}</p>

                  {/* Desktop connector arrow */}
                  {index < ONBOARDING_STEPS.length - 1 && (
                    <div 
                      aria-hidden="true" 
                      className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-navy/10 items-center justify-center text-navy/40 shadow-2xs"
                    >
                      <ArrowRight size={12} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="mt-8 text-center pt-6 border-t border-navy/5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white bg-brand hover:bg-brand-dark rounded-xl shadow-xs transition-colors"
            >
              <span>View Plans & Pricing</span>
              <ArrowRight size={15} />
            </a>
            <a
              href="#templates"
              className="inline-flex items-center gap-1 px-4 py-2.5 text-sm font-semibold text-navy/70 hover:text-navy transition-colors"
            >
              <span>Explore 6 Menu Styles</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}