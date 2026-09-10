import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  X,
  Menu,
  QrCode,
  LayoutGrid,
  Filter,
  CheckCircle2,
} from 'lucide-react';
import templatesData from '../data/templatesData';

const TemplatesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get data from templatesData - use ALL templates
  const templates = templatesData.templates;
  const filterCategories = templatesData.filterCategories;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredTemplates = selectedFilter === 'all' 
    ? templates 
    : templates.filter(t => t.category === selectedFilter);

  const handleTemplateClick = (template) => {
    if (template.available) {
      window.location.href = template.route;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Top Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand Logo */}
            <a href="/" className="flex items-center gap-2.5 group" aria-label="Horizon Menu Home">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-horizon-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-horizon-600/20 transition-transform group-hover:scale-105">
                <QrCode size={20} className="md:w-5 md:h-5" />
              </div>
              <span className="text-lg md:text-xl font-black text-slate-900 tracking-tight">
                Horizon<span className="text-horizon-600">Menu</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-7">
                <a href="/#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-horizon-600 transition-colors">
                  How It Works
                </a>
                <a href="/templates" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-horizon-600 bg-horizon-50 border border-horizon-200 rounded-xl">
                  <LayoutGrid size={16} />
                  Templates
                </a>
                <a href="/#pricing" className="text-sm font-semibold text-slate-600 hover:text-horizon-600 transition-colors">
                  Pricing
                </a>
                <a href="/#faq" className="text-sm font-semibold text-slate-600 hover:text-horizon-600 transition-colors">
                  FAQ
                </a>
              </div>
              <a href="/#contact" className="btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold">
                Get Your Menu
                <ArrowRight size={15} />
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-slate-100">
              <div className="flex flex-col gap-2 pt-3">
                <a href="/#how-it-works" className="text-sm font-semibold text-slate-700 px-3.5 py-2.5 rounded-xl hover:bg-slate-50">
                  How It Works
                </a>
                <a href="/templates" className="inline-flex items-center gap-2 text-sm font-bold text-horizon-600 bg-horizon-50 border border-horizon-200 px-3.5 py-3 rounded-xl">
                  <LayoutGrid size={16} />
                  Templates
                </a>
                <a href="/#pricing" className="text-sm font-semibold text-slate-700 px-3.5 py-2.5 rounded-xl hover:bg-slate-50">
                  Pricing
                </a>
                <a href="/#faq" className="text-sm font-semibold text-slate-700 px-3.5 py-2.5 rounded-xl hover:bg-slate-50">
                  FAQ
                </a>
                <a href="/#contact" className="btn-primary w-full py-3 text-center text-sm font-bold mt-2">
                  Get Your Menu
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Page Body */}
      <div className="pt-16 md:pt-20">
        
        {/* Top Header Banner */}
        <section className="bg-gradient-to-b from-horizon-50/50 via-white to-white border-b border-slate-100 py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-horizon-100 text-horizon-800 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs">
                  <Sparkles size={14} className="text-horizon-600" />
                  <span>Design Studio Collection</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Choose Your <span className="gradient-text">Menu Template</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Responsive frontend layouts built specifically for QR code access. Instant load, zero apps needed.
                </p>
              </div>

              {/* Live Availability Badge */}
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs shrink-0 self-start md:self-auto">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{templates.length} Ready Layouts</div>
                  <div className="text-[11px] text-slate-500">Updated for 2026 Menus</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Horizontal Filter Pill Bar */}
        <div className="lg:hidden sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-slate-200 px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedFilter === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Sidebar Studio Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Sticky Left Sidebar Panel */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
              
              {/* Category Filter Group */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                    <Filter size={14} className="text-horizon-600" />
                    <span>Categories</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold">
                    {filteredTemplates.length} Found
                  </span>
                </div>

                <div className="space-y-1.5">
                  {filterCategories.map((cat) => {
                    const count = cat.id === 'all'
                      ? templates.length
                      : templates.filter(t => t.category === cat.id).length;
                    const isActive = selectedFilter === cat.id;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedFilter(cat.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                          isActive
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="min-w-0 pr-2">
                          <div className={`text-xs font-bold leading-none ${isActive ? 'text-white' : 'text-slate-900 group-hover:text-horizon-600'}`}>
                            {cat.label}
                          </div>
                          <div className={`text-[10px] mt-1 truncate ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                            {cat.desc}
                          </div>
                        </div>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shrink-0 ${
                          isActive 
                            ? 'bg-slate-800 text-white' 
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar Info Card */}
              <div className="bg-gradient-to-br from-horizon-50 to-white rounded-2xl border border-horizon-200/70 p-5 space-y-3">
                <div className="w-8 h-8 rounded-lg bg-horizon-600 text-white flex items-center justify-center font-black">
                  <QrCode size={16} />
                </div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  How It Works
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pick a template, upload your menu list & photos, and receive a permanent high-res QR code for your tables.
                </p>
                <div className="pt-2">
                  <a 
                    href="/#contact" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-horizon-600 hover:text-horizon-700"
                  >
                    <span>Request Custom Menu</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>

            </aside>

            {/* Right Main Grid Showcase - 3 columns */}
            <main className="lg:col-span-9 space-y-6">
              
              {/* Grid Header Info */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                  Showing {filteredTemplates.length} of {templates.length} Designs
                </div>
                {selectedFilter !== 'all' && (
                  <button 
                    onClick={() => setSelectedFilter('all')}
                    className="text-xs font-bold text-horizon-600 hover:underline"
                  >
                    Reset Filter
                  </button>
                )}
              </div>

              {/* Templates Grid - 3 columns on xl */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredTemplates.map((template) => (
                  <div 
                    key={template.id}
                    onClick={() => handleTemplateClick(template)}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-horizon-400 transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
                  >
                    {/* Phone Frame - Compact */}
                    <div className="p-4 bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 border-b border-slate-100 flex items-center justify-center relative min-h-[190px]">
                      <div className="w-[160px] h-[180px] bg-white p-1.5 rounded-xl border-2 border-slate-300/80 shadow-md group-hover:scale-105 group-hover:shadow-xl transition-all duration-500 ease-out relative overflow-hidden flex flex-col">
                        <div className="w-8 h-2 bg-slate-100 rounded-full mx-auto mb-1 shrink-0 flex items-center justify-center">
                          <div className="w-1 h-1 bg-slate-300 rounded-full" />
                        </div>
                        <div className="flex-1 w-full rounded-lg overflow-hidden">
                          {template.preview?.renderCard()}
                        </div>
                      </div>
                      
                      {template.available && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm border border-emerald-200 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                          Live
                        </div>
                      )}

                      <div className="absolute bottom-2 left-3 text-[9px] font-mono font-bold text-slate-400">
                        LAYOUT // 0{template.number}
                      </div>
                    </div>

                    {/* Template Info - Compact */}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-base font-black text-slate-900 group-hover:text-horizon-600 transition-colors">
                          {template.name}
                        </h3>
                        <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                          T{template.number}
                        </span>
                      </div>

                      <div className="mb-2">
                        <span className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded-md border ${template.badgeClass}`}>
                          {template.bestFor}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                        {template.tagline}
                      </p>

                      <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-horizon-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Preview
                          <ArrowRight size={12} />
                        </span>
                        <span className="text-[9px] font-mono text-slate-400">
                          QR Instant
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredTemplates.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-4xl mb-4">🔍</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">No templates found</h3>
                  <p className="text-sm text-slate-500 mb-4">Try a different category filter</p>
                  <button
                    onClick={() => setSelectedFilter('all')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    View All Templates
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}

            </main>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 bg-horizon-600 rounded-xl flex items-center justify-center">
                  <QrCode size={20} />
                </div>
                <span className="text-lg font-black">
                  Horizon<span className="text-horizon-400">Menu</span>
                </span>
              </div>
              <p className="text-sm text-slate-400">
                Beautiful digital menus for local cafés and restaurants.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <a href="/#how-it-works" className="text-sm text-slate-400 hover:text-white">How It Works</a>
                <a href="/templates" className="text-sm text-slate-400 hover:text-white">Templates</a>
                <a href="/#pricing" className="text-sm text-slate-400 hover:text-white">Pricing</a>
                <a href="/#faq" className="text-sm text-slate-400 hover:text-white">FAQ</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Templates</h3>
              <div className="flex flex-col gap-2">
                <a href="/menu/cafe-nova/template-1" className="text-sm text-slate-400 hover:text-white">Minimal Clean</a>
                <a href="/menu/cafe-nova/template-2" className="text-sm text-slate-400 hover:text-white">Café Warmth</a>
                <a href="/menu/cafe-nova/template-3" className="text-sm text-slate-400 hover:text-white">Modern Bistro</a>
                <a href="/menu/cafe-nova/template-7" className="text-sm text-slate-400 hover:text-white">Urban Café</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Get Started</h3>
              <a href="/#contact" className="btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold">
                Get Your Menu
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500">
              Made with <span className="text-horizon-400">Horizon Menu</span> • Scan • Browse • Enjoy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TemplatesPage;