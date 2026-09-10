import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const {
    name = "Menu",
    tagline = "",
    logo = null,
    phone = "",
  } = business || {};

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#F7F1E5]/95 backdrop-blur shadow-sm border-b border-[#D8C9AD]/50' 
        : 'bg-[#F7F1E5]'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            {logo && (
              <span className="text-2xl" aria-hidden="true">
                {logo}
              </span>
            )}
            <div>
              <h1 className="text-lg md:text-xl font-serif font-bold text-[#30382A] tracking-wide">
                {name}
              </h1>
              {tagline && (
                <p className="text-xs text-[#817A6B] font-sans">
                  {tagline}
                </p>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-sm font-medium text-[#526044] hover:text-[#B85C38] transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('info')}
              className="text-sm font-medium text-[#526044] hover:text-[#B85C38] transition-colors"
            >
              Info
            </button>
            {phone && (
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#526044] text-white text-sm font-semibold rounded-full hover:bg-[#30382A] transition-colors"
              >
                <span>Reserve</span>
              </a>
            )}
          </nav>

          {/* Mobile - just show logo */}
          <div className="md:hidden">
            {phone && (
              <a
                href={`tel:${phone}`}
                className="w-10 h-10 bg-[#526044] text-white rounded-full flex items-center justify-center"
                aria-label="Call"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;