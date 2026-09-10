import React from 'react';
import {
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Heart,
  HelpCircle,
  CreditCard,
  MessageCircle
} from 'lucide-react';

const PRICING_PLANS = [
  {
    id: 'ready',
    name: 'Ready Menu',
    price: '₹999',
    tagline: 'Year 1 complete setup & hosting included',
    description: 'For cafés that want a fast, clean digital menu using one of our pre-built styles.',
    popular: false,
    features: [
      'Ready-made template layout',
      'Complete menu setup & input',
      'Basic brand customization (logo & colors)',
      'High-res table QR code',
      'Mobile-optimized experience',
      '1 year cloud hosting & maintenance',
      '1 major update',
      '6 minor updates'
    ],
    renewalLabel: 'From Year 2',
    renewalPrice: '₹499 / year',
    renewalSummary: 'Hosting, maintenance & included updates',
    renewalFeatures: [
      '1 year cloud hosting',
      '1 major layout update',
      '6 minor item/price updates'
    ],
    ctaText: 'Choose Ready',
    ctaHref: '#contact'
  },
  {
    id: 'plus',
    name: 'Plus Menu',
    price: '₹1,299',
    tagline: 'Year 1 complete setup & hosting included',
    description: 'Our most popular tier. Enhanced styling flexibility with additional update allowances.',
    popular: true,
    badge: 'Most Popular',
    features: [
      'Ready-made template layout',
      'Complete menu setup & input',
      'Enhanced customization & styling',
      'Logo, custom palette & typography match',
      'High-res table QR code',
      'Mobile-optimized experience',
      '1 year cloud hosting & maintenance',
      '2 major updates',
      '8 minor updates'
    ],
    renewalLabel: 'From Year 2',
    renewalPrice: '₹799 / year',
    renewalSummary: 'Hosting, maintenance & included updates',
    renewalFeatures: [
      '1 year cloud hosting',
      '2 major layout updates',
      '8 minor item/price updates'
    ],
    ctaText: 'Choose Plus',
    ctaHref: '#contact'
  },
  {
    id: 'custom',
    name: 'Custom Menu',
    price: '₹2,599',
    tagline: 'Year 1 complete setup & hosting included',
    description: 'A custom-designed menu crafted specifically around your unique interior and identity.',
    popular: false,
    features: [
      'Fully custom-designed menu layout',
      'Bespoke venue branding & color identity',
      'Full menu catalogue configuration',
      'High-res vector QR code',
      'Mobile-optimized experience',
      '1 year cloud hosting & maintenance',
      '2 major updates',
      '10 minor updates'
    ],
    renewalLabel: 'From Year 2',
    renewalPrice: '₹799 / year',
    renewalSummary: 'Hosting, maintenance & included updates',
    renewalFeatures: [
      '1 year cloud hosting',
      '2 major layout updates',
      '10 minor item/price updates'
    ],
    ctaText: 'Choose Custom',
    ctaHref: '#contact'
  }
];

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: 'Transparent Pricing',
    description: 'No surprise recurring bills or setup fees'
  },
  {
    icon: Zap,
    title: 'Hands-Off Setup',
    description: 'We input your catalogue and design the QR'
  },
  {
    icon: Heart,
    title: 'Updates Included',
    description: 'Change prices or seasonal dishes with ease'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-warm-bg relative overflow-hidden">
      {/* Background Ambience */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-soft/40 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-brand/5 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 bg-brand-soft/60 text-brand-dark px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 border border-brand/20 shadow-xs">
            <Sparkles size={14} className="text-brand" />
            <span>Honest & Predictable</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight leading-tight mb-4">
            Simple Pricing. <span className="text-brand">Online & Maintained.</span>
          </h2>

          <p className="text-base sm:text-lg text-navy/70 leading-relaxed max-w-2xl mx-auto">
            Choose a plan, send your dishes, and we’ll build your menu, put it online, and keep it up to date all year long.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-brand-dark mt-2">
            ✨ First year hosting, domain link, and maintenance included with every package.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl flex flex-col justify-between transition-all duration-200 ${
                plan.popular
                  ? 'border-2 border-brand shadow-xl md:-translate-y-2 ring-4 ring-brand/10'
                  : 'border border-navy/10 shadow-xs hover:shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-brand text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-xs">
                    <Sparkles size={12} />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                {/* Card Title & Meta */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-navy">{plan.name}</h3>
                  <span className={`w-2.5 h-2.5 rounded-full ${plan.popular ? 'bg-brand' : 'bg-navy/30'}`} />
                </div>

                <p className="text-xs text-navy/60 min-h-[36px] mb-5 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="border-y border-navy/5 py-4 mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-black text-navy tracking-tight">{plan.price}</span>
                    <span className="text-xs text-navy/50 font-medium">Year 1 total</span>
                  </div>
                  <p className="text-xs font-medium text-brand-dark mt-1">{plan.tagline}</p>
                </div>

                {/* Feature Inclusions */}
                <div className="space-y-3 mb-6 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-navy/40">
                    What's included
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-navy/70 leading-snug">
                        <div className="w-4 h-4 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Link */}
                <a
                  href={plan.ctaHref}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-150 group shadow-xs mb-5 ${
                    plan.popular
                      ? 'bg-brand text-white hover:bg-brand-dark shadow-brand/20 active:scale-98'
                      : 'bg-navy text-white hover:bg-navy/90 active:scale-98'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Year 2 Renewal Transparency */}
                <div className="pt-4 border-t border-navy/5 text-center bg-warm-bg/50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 rounded-b-3xl">
                  <p className="text-[11px] font-medium text-navy/50">{plan.renewalLabel}</p>
                  <p className="text-sm font-extrabold text-navy mt-0.5">
                    {plan.renewalPrice}
                  </p>
                  <p className="text-[10px] text-navy/60 mt-0.5">
                    {plan.renewalSummary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Terms Split */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-navy/40 text-center font-bold mb-4">
            Payment Terms (Milestone Based)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-navy/5 shadow-xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
                <CreditCard size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-navy mb-0.5">Ready Menu</p>
                <p className="text-xs text-navy/60">25% advance · 75% on launch</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-navy/5 shadow-xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
                <CreditCard size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-navy mb-0.5">Plus Menu</p>
                <p className="text-xs text-navy/60">25% advance · 75% on launch</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-navy/5 shadow-xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
                <CreditCard size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-navy mb-0.5">Custom Menu</p>
                <p className="text-xs text-navy/60">35% advance · 65% on launch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Updates Clarification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-6">
          <div className="bg-white rounded-2xl p-5 border border-navy/5 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
                <HelpCircle size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-navy mb-2">What counts as a minor update?</p>
                <ul className="text-xs text-navy/70 space-y-1.5">
                  <li>• Updating dish prices</li>
                  <li>• Adding or removing specific menu items</li>
                  <li>• Modifying descriptions or ingredients</li>
                  <li>• Swapping out food photography</li>
                  <li>• Updating venue opening hours or contact numbers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-navy/5 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
                <HelpCircle size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-navy mb-2">What counts as a major update?</p>
                <ul className="text-xs text-navy/70 space-y-1.5">
                  <li>• Switching to a different menu style or template</li>
                  <li>• Complete category re-architecture</li>
                  <li>• Venue rebrand (new logo, custom fonts, color schemes)</li>
                  <li>• Festival or seasonal theme overhaul</li>
                  <li>• Adding brand-new sections or custom logic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Update Validity Rule */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="bg-brand-soft/40 rounded-2xl p-4 sm:p-5 border border-brand/20 text-center">
            <p className="text-xs text-navy/80 leading-relaxed">
              <strong>All updates are valid across your active 1-year service window.</strong> One batch of related adjustments equals one update request. Unused updates do not carry forward into the following renewal year.
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {TRUST_BADGES.map((badge) => (
            <div key={badge.title} className="text-center p-4 bg-white rounded-2xl border border-navy/5 shadow-xs">
              <badge.icon className="text-brand mx-auto mb-2" size={20} />
              <p className="text-xs font-bold text-navy">{badge.title}</p>
              <p className="text-[11px] text-navy/60 mt-0.5">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Custom Inquiry Prompt */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-navy/5 shadow-xs text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              <div className="w-10 h-10 bg-brand-soft text-brand rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-navy">
                  Unsure which plan fits your café best?
                </p>
                <p className="text-xs text-navy/60">
                  Send us your current menu sheet or PDF and we'll advise on the best fit.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-brand hover:text-brand-dark font-bold text-xs sm:text-sm whitespace-nowrap transition-colors group cursor-pointer"
            >
              <span>Talk to us</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}