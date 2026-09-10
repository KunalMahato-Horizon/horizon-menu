import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const {
    name = "L'Artisan",
    logo = null,
    tagline = "Fine Dining & Bakery",
  } = business || {};

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('menu');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['menu', 'featured', 'info'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'menu', label: 'Menu' },
    { id: 'featured', label: 'Chef’s Specials' },
    { id: 'info', label: 'About & Hours' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-[#F8F6F1]/90 backdrop-blur-md shadow-sm border-b border-[#E5E0D5]/70 py-2.5'
          : 'bg-[#F8F6F1] py-4 md:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88746] rounded-lg p-1 -m-1"
          >
            {logo && (
              <span className="w-10 h-10 rounded-full bg-[#EFECE6] border border-[#E5E0D5] flex items-center justify-center text-xl shadow-xs group-hover:border-[#B88746]/50 transition-colors">
                {logo}
              </span>
            )}
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-serif font-bold text-[#2C2A24] tracking-tight group-hover:text-[#B88746] transition-colors leading-tight">
                {name}
              </span>
              {tagline && (
                <span
                  className={`text-[11px] text-[#8A8578] font-sans tracking-wide uppercase font-medium transition-all duration-300 origin-top ${
                    isScrolled
                      ? 'max-h-0 opacity-0 overflow-hidden'
                      : 'max-h-5 opacity-100 mt-0.5'
                  }`}
                >
                  {tagline}
                </span>
              )}
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#EFECE6]/60 p-1.5 rounded-full border border-[#E5E0D5]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88746] ${
                    isActive
                      ? 'bg-white text-[#2C2A24] shadow-xs'
                      : 'text-[#6C675B] hover:text-[#2C2A24] hover:bg-white/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EFECE6] text-[#2C2A24] border border-[#E5E0D5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88746]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-4 h-4 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'max-h-52 opacity-100 border-b border-[#E5E0D5] bg-[#F8F6F1]'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-[#2C2A24] rounded-lg hover:bg-[#EFECE6] transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-xs text-[#8A8578]">→</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;