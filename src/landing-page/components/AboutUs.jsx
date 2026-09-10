import React from 'react';
import { Sparkles, Heart, Coffee, ShieldCheck } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 md:py-28 bg-warm-bg relative overflow-hidden border-t border-navy/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-soft/60 text-brand-dark px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6 border border-brand/20 shadow-xs">
          <Heart size={14} className="text-brand fill-brand/20" />
          <span>Our Mission</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-6 tracking-tight leading-tight">
          Built to make digital menus <span className="text-brand">simple</span>.
        </h2>

        {/* Narrative Copy */}
        <div className="space-y-4 text-base sm:text-lg text-navy/75 leading-relaxed max-w-2xl mx-auto">
          <p>
            Horizon Menu started with a simple observation: local cafés and restaurants are stuck between flimsy paper menus that cost money every time a price changes, and over-complicated software that forces customers to download an app or register.
          </p>
          <p className="text-sm sm:text-base text-navy/65">
            We build and maintain clean, fast, mobile-friendly menus that diners actually enjoy opening. No corporate bloat, no monthly subscription surprises—just a digital menu that works effortlessly for your counters and tables.
          </p>
        </div>

        {/* Values Trio */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-navy/10 text-left">
          <div className="bg-white p-5 rounded-2xl border border-navy/5 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-brand-soft text-brand flex items-center justify-center mb-3">
              <Coffee size={18} />
            </div>
            <h3 className="text-sm font-bold text-navy mb-1">Café-First</h3>
            <p className="text-xs text-navy/60 leading-relaxed">
              Designed around real dining room workflows and mobile browsing habits.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-navy/5 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-brand-soft text-brand flex items-center justify-center mb-3">
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-sm font-bold text-navy mb-1">Hands-Off Setup</h3>
            <p className="text-xs text-navy/60 leading-relaxed">
              You send your items; we design, host, and maintain your live digital presence.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-navy/5 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-brand-soft text-brand flex items-center justify-center mb-3">
              <Sparkles size={18} />
            </div>
            <h3 className="text-sm font-bold text-navy mb-1">Zero Lock-In</h3>
            <p className="text-xs text-navy/60 leading-relaxed">
              Transparent yearly pricing with no hidden hosting fees or app install requirements.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}