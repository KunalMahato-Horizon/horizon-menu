import React, { useState, useEffect } from 'react';
import { 
  QrCode, 
  Phone, 
  Mail, 
  ArrowUp, 
  ChevronRight, 
  MessageCircle, 
  Heart, 
  Sparkles 
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Templates', href: '#templates' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'What’s Included', href: '#included' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy text-white relative overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-10 w-80 h-80 bg-brand-soft/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Column 1: Brand & Purpose */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center text-white shadow-xs">
                  <QrCode size={20} />
                </div>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Horizon<span className="text-brand-soft">Menu</span>
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                We build and maintain fast, mobile-friendly QR digital menus for local cafés, bakeries, and restaurants. No apps, zero setup friction, and no paper reprint costs.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-medium">
                <Sparkles size={13} className="text-brand" />
                <span>Hosting, QR & updates included</span>
              </div>
            </div>

            {/* Column 2: Quick Navigation */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
                Navigation
              </h3>
              <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-400 hover:text-brand-soft transition-colors inline-flex items-center gap-1 group"
                    >
                      <ChevronRight size={12} className="text-slate-600 group-hover:text-brand-soft transition-colors" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Direct Actions */}
            <div className="lg:col-span-4 bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10 space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white mb-1">
                  Want a menu for your café?
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Message us directly to ask a question or request a free sample preview with your actual dishes.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                {/* WhatsApp Action */}
                <a
                  href="https://wa.me/919431796346?text=Hi%2C%20I%20am%20interested%20in%20a%20Horizon%20Menu%20for%20my%20caf%C3%A9."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-dark text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Direct Phone Call */}
                <a
                  href="tel:+919431796346"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs transition-colors border border-white/10"
                >
                  <Phone size={14} className="text-brand-soft" />
                  <span>+91 94317 96346</span>
                </a>

                {/* Direct Email */}
                <a
                  href="mailto:Horizonhub666@gmail.com"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs transition-colors border border-white/10 truncate"
                >
                  <Mail size={14} className="text-brand-soft shrink-0" />
                  <span className="truncate">Horizonhub666@gmail.com</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © {currentYear} Horizon Menu. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-center">
            <span>Built for modern cafés & food businesses</span>
            <Heart size={12} className="text-rose-500 fill-rose-500" />
          </p>
        </div>

      </div>

      {/* Floating Scroll to Top (Smoothly reveals past 400px scroll) */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-10 h-10 bg-brand hover:bg-brand-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-40 border border-white/10 cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top of page"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
}