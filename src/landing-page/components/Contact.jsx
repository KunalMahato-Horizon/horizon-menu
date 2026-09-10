import React from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail,
  ArrowRight, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';

const ASSURANCES = [
  'Test a live sample with your actual dishes before deciding',
  'Clear packages starting at ₹999 — hosting & setup included',
  'Zero obligation — chat freely and ask any questions'
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 w-80 h-80 bg-brand-soft/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-10 md:p-14 border border-white/10 shadow-2xl text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-brand-soft px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border border-white/15 shadow-xs">
            <Sparkles size={14} className="text-brand" />
            <span>Ready to Go Digital?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] mb-4 text-white">
            Want a Horizon Menu <br className="hidden sm:inline" />
            for your venue?
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-8">
            Have a question, want to see a live sample with your actual menu items, or ready to launch? Talk directly with us.
          </p>

          {/* Assurances */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left mb-10 max-w-2xl mx-auto">
            {ASSURANCES.map((text) => (
              <div 
                key={text} 
                className="bg-white/5 rounded-2xl p-3.5 border border-white/5 flex items-start gap-2.5"
              >
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium leading-snug">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/919431796346?text=Hi%2C%20I%20am%20interested%20in%20a%20Horizon%20Menu%20for%20my%20caf%C3%A9."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-dark text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-brand/25 transition-all duration-150 active:scale-98 group cursor-pointer"
            >
              <MessageCircle size={19} className="text-white" />
              <span>Chat on WhatsApp</span>
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+919431796346"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/15 transition-colors cursor-pointer"
            >
              <Phone size={17} className="text-brand-soft" />
              <span>Call Us</span>
            </a>

            {/* Email */}
            <a
              href="mailto:Horizonhub666@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/15 transition-colors cursor-pointer"
            >
              <Mail size={17} className="text-brand-soft" />
              <span>Email</span>
            </a>
          </div>

          {/* Contact Details Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 mt-8 pt-6 border-t border-white/10">
            <p>
              Phone: <a href="tel:+919431796346" className="font-semibold text-white hover:text-brand-soft transition-colors">+91 94317 96346</a>
            </p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p>
              Email: <a href="mailto:Horizonhub666@gmail.com" className="font-semibold text-white hover:text-brand-soft transition-colors">Horizonhub666@gmail.com</a>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}