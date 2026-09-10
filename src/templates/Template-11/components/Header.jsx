import React, { useState, useEffect } from 'react';

const Header = ({ business }) => {
  const { name = 'Nocturne Atelier', logo = null } = business || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-[#12141C]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 py-3 px-5'
            : 'bg-transparent py-4 px-2'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E2B855] via-[#C99C36] to-[#916E1D] p-[1px] shadow-lg shadow-[#E2B855]/10 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0E1017] rounded-[11px] flex items-center justify-center text-white font-mono font-bold text-sm">
                {logo || name.charAt(0)}
              </div>
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#E2B855] transition-colors leading-none block">
                {name}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase mt-0.5 block">
                Digital Carte
              </span>
            </div>
          </button>

          {/* Live Status Pill & Section Jumps */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Kitchen Open</span>
            </div>

            <button
              onClick={() => scrollToSection('info')}
              className="px-4 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-medium tracking-wide transition-all"
            >
              Hours & Info
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;