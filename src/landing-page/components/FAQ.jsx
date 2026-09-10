import React, { useState } from 'react';
import { 
  ChevronDown,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Coffee,
  Phone,
  Sparkles
} from 'lucide-react';

const FAQS = [
  {
    question: 'What is Horizon Menu?',
    answer: 'Horizon Menu is a QR-based digital menu tailored for cafés, bistros, and local restaurants. Guests scan your table QR code with their phone camera and instantly view your complete, formatted catalogue directly in their mobile browser.'
  },
  {
    question: 'Do customers need to download an app?',
    answer: 'No. Customers do not need to download an app or register. The menu opens immediately in their default mobile browser (Safari, Chrome, etc.) with zero friction.'
  },
  {
    question: 'Can I choose how my menu looks?',
    answer: 'Yes. You can select from any of our 6 pre-built design templates. We customize your selected style with your venue logo, brand color palette, photography, categories, and item descriptions.'
  },
  {
    question: 'Can I change my menu later?',
    answer: 'Yes. Whenever prices change, daily specials rotate, or dishes sell out, send us a quick message on WhatsApp and we update the live digital menu directly. Included updates are part of every plan.'
  },
  {
    question: 'How long does it take to create my menu?',
    answer: 'Once you send us your current menu (as a PDF, photo, or spreadsheet) and your logo, your live digital menu is typically ready and online within 24 to 48 hours.'
  },
  {
    question: 'Do I get a print-ready QR code?',
    answer: 'Yes. You receive high-resolution vector and image files of your custom QR code ready to print on table tents, counter stands, window stickers, or coasters.'
  },
  {
    question: 'Is hosting included?',
    answer: 'Yes. Fast cloud hosting, SSL security, and technical maintenance are completely included for the entire first year with every package.'
  },
  {
    question: 'What happens after the first year?',
    answer: 'From Year 2 onwards, simple renewal fees apply (₹499/year for Ready, ₹799/year for Plus and Custom). This covers continued cloud hosting, technical maintenance, and your ongoing quota of menu updates.'
  },
  {
    question: 'Can I request a custom design?',
    answer: 'Yes. With our Custom Menu plan (₹2,599), we build a completely bespoke layout tailored specifically to your venue’s unique identity and interior vibe.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-warm-bg relative overflow-hidden border-t border-navy/5">
      {/* Background Ambience */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 w-80 h-80 bg-brand-soft/40 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 bg-brand-soft/60 text-brand-dark px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 border border-brand/20 shadow-xs">
            <HelpCircle className="w-4 h-4 text-brand" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-4 tracking-tight leading-tight">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>
          
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed max-w-xl mx-auto">
            Everything you need to know about moving your menu to digital and keeping it maintained.
          </p>
        </div>
        
        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3 mb-16">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.question} 
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-brand/30 bg-white shadow-sm' 
                    : 'border-navy/5 bg-white/70 hover:bg-white hover:border-navy/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-sm sm:text-base pr-4 ${
                    isOpen ? 'text-brand-dark' : 'text-navy'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen 
                      ? 'bg-brand text-white rotate-180' 
                      : 'bg-warm-bg text-navy/50 border border-navy/10'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-navy/70 leading-relaxed text-xs sm:text-sm border-t border-navy/5 pt-3">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Still Have Questions Box */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-navy/5 shadow-xs space-y-4">
            <div className="w-12 h-12 bg-brand-soft text-brand rounded-2xl flex items-center justify-center mx-auto shadow-2xs">
              <Coffee className="w-6 h-6" />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-navy">
                Still have a specific question?
              </h3>
              <p className="text-xs sm:text-sm text-navy/60 max-w-md mx-auto leading-relaxed">
                Send us a message or call directly. We'll help you figure out the best setup for your dishes and counter flow.
              </p>
            </div>
            
            {/* Direct Contact Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a 
                href="https://wa.me/919431796346?text=Hi%2C%20I%20have%20a%20question%20about%20Horizon%20Menu%20for%20my%20caf%C3%A9."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-brand hover:bg-brand-dark rounded-xl shadow-xs transition-colors group cursor-pointer"
              >
                <MessageCircle size={17} />
                <span>Chat on WhatsApp</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a 
                href="tel:+919431796346"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-warm-bg hover:bg-navy/5 text-navy font-semibold px-5 py-3 rounded-xl border border-navy/10 text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <Phone size={15} className="text-brand" />
                <span>+91 94317 96346</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}