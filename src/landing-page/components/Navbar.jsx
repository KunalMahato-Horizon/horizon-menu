import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, QrCode, ArrowRight, LayoutGrid } from 'lucide-react';

const NAV_LINKS = [
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Apply glassmorphism border/shadow once scrolled past 20px
        setIsScrolled(currentScrollY > 20);

        // Always show navbar at the very top of the page
        if (currentScrollY < 60) {
          setIsVisible(true);
        } 
        // Hide on downward scroll, reveal on upward scroll
        else if (currentScrollY > lastScrollY.current + 5) {
          if (!isOpen) {
            setIsVisible(false);
          }
        } else if (currentScrollY < lastScrollY.current - 5) {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock background scrolling while mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible || isOpen ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled || isOpen
          ? 'bg-warm-bg/90 backdrop-blur-md shadow-xs border-b border-navy/5'
          : 'bg-warm-bg/60 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={handleLinkClick}
            className="flex items-center gap-2.5 group focus:outline-hidden"
            aria-label="Horizon Menu Home"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 bg-brand rounded-xl flex items-center justify-center text-white shadow-sm shadow-brand/25 transition-transform group-hover:scale-105">
              <QrCode size={20} className="md:w-5 md:h-5" />
            </div>
            <span className="text-lg md:text-xl font-black text-navy tracking-tight">
              Horizon<span className="text-brand">Menu</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-navy/70 hover:text-brand transition-colors relative py-1 group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full rounded-full" />
            </a>

            <a
              href="#features"
              className="text-sm font-semibold text-navy/70 hover:text-brand transition-colors relative py-1 group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full rounded-full" />
            </a>

            {/* Featured Templates Pill */}
            <a
              href="/templates"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-bold rounded-xl transition-all text-brand bg-brand-soft/70 border border-brand/20 hover:bg-brand-soft hover:border-brand/40 hover:shadow-xs group"
            >
              <LayoutGrid size={15} className="group-hover:scale-110 transition-transform" />
              <span>Templates</span>
            </a>

            <a
              href="#pricing"
              className="text-sm font-semibold text-navy/70 hover:text-brand transition-colors relative py-1 group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full rounded-full" />
            </a>

            <a
              href="#faq"
              className="text-sm font-semibold text-navy/70 hover:text-brand transition-colors relative py-1 group"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full rounded-full" />
            </a>

            {/* Desktop CTA */}
            <a 
              href="#pricing"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-sm font-bold text-white bg-brand hover:bg-brand-dark rounded-xl shadow-xs hover:shadow-sm transition-all active:scale-98"
            >
              <span>Get Your Menu</span>
              <ArrowRight size={15} />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-navy hover:bg-navy/5 transition-colors focus:outline-hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-3 border-t border-navy/5 flex flex-col gap-1.5">
            {/* Templates Highlight on Mobile */}
            <a
              href="#templates"
              onClick={handleLinkClick}
              className="inline-flex items-center gap-2 text-sm font-bold px-3.5 py-2.5 rounded-xl transition-colors text-brand bg-brand-soft/70 border border-brand/20"
            >
              <LayoutGrid size={16} />
              <span>Explore Templates</span>
            </a>

            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-semibold text-navy/80 hover:text-brand hover:bg-brand-soft/30 px-3.5 py-2 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile CTA */}
            <div className="pt-2 mt-1">
              <a
                href="#pricing"
                onClick={handleLinkClick}
                className="w-full py-2.5 text-center text-sm font-bold inline-flex items-center justify-center gap-1.5 text-white bg-brand hover:bg-brand-dark rounded-xl shadow-xs transition-colors"
              >
                <span>Get Your Menu</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;