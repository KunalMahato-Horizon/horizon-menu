import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Eye, 
  X,
  CheckCircle2,
  Paintbrush,
  LayoutGrid
} from 'lucide-react';
import templatesData from '../../templates/data/templatesData';

const TemplateShowcase = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalTemplate, setActiveModalTemplate] = useState(null);

  // Use only first 6 templates from templatesData
  const templates = templatesData.templates.slice(0, 6);
  const filterCategories = templatesData.filterCategories;

  const filteredTemplates = selectedFilter === 'all' 
    ? templates 
    : templates.filter(t => t.category === selectedFilter);

  const handleTemplateClick = (template) => {
    if (template.available) {
      window.location.href = template.route;
    } else {
      setActiveModalTemplate(template);
    }
  };

  return (
    <section id="templates" className="py-20 md:py-28 bg-gradient-to-b from-white via-horizon-50/20 to-white relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 right-0 w-[450px] h-[450px] bg-horizon-100/50 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-horizon-100 text-horizon-800 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 border border-horizon-200/80 shadow-2xs">
            <Sparkles size={14} className="text-horizon-600" />
            <span>{templates.length} Ready-to-Use Menu Styles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Choose Your <span className="gradient-text">Menu Style</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Pick a layout that fits your venue's atmosphere. We customize it with your logo, brand colors, food photos, and live catalogue.
          </p>

          {/* View All Templates Button */}
          <button
            onClick={() => window.location.href = '/templates'}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
          >
            <LayoutGrid size={16} />
            <span>View All Templates</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Quick Filter Bar */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 [scrollbar-width:none]">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedFilter === cat.id
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Template Cards Grid with Live Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
          {filteredTemplates.map((template) => (
            <div 
              key={template.id}
              onClick={() => handleTemplateClick(template)}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-horizon-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Live Preview - Fixed height with overflow hidden to show top */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-slate-50 to-gray-100 border-b border-slate-100 relative flex items-start justify-center min-h-[250px] max-h-[250px] overflow-hidden">
                <div className="w-full max-w-[220px] transition-transform duration-300 group-hover:scale-[1.03] origin-top">
                  {template.preview?.renderCard() || (
                    <div className="w-full h-[200px] flex items-center justify-center text-gray-400">
                      Preview coming soon
                    </div>
                  )}
                </div>

                {/* Gradient fade at bottom to indicate more content */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none"></div>

                {/* Live Badge */}
                {template.available && (
                  <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1 z-10">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    LIVE
                  </div>
                )}

                {/* Action Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTemplateClick(template);
                  }}
                  className="absolute bottom-3 right-4 bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-slate-900 hover:text-white transition-colors z-10"
                >
                  {template.available ? (
                    <>
                      <ArrowRight size={13} />
                      <span>View Live</span>
                    </>
                  ) : (
                    <>
                      <Eye size={13} />
                      <span>Inspect</span>
                    </>
                  )}
                </button>
              </div>

              {/* Bottom Card Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-horizon-700 transition-colors">
                      {template.name}
                    </h3>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      T{template.number}
                    </span>
                  </div>

                  <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md border mb-2 ${template.badgeClass}`}>
                    Best for: {template.bestFor}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {template.tagline}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTemplateClick(template);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-horizon-600 hover:text-horizon-700 transition-colors group/link"
                  >
                    {template.available ? (
                      <>
                        <span>View Full Demo</span>
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </>
                    ) : (
                      <span>Coming Soon</span>
                    )}
                  </button>
                  <span className={`text-[11px] font-medium ${template.available ? 'text-emerald-600' : 'text-slate-400'}`}>
                    {template.available ? '● Live' : 'In Development'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Templates Button - Bottom */}
        <div className="text-center mb-16">
          <button
            onClick={() => window.location.href = '/templates'}
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white text-base font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
          >
            <LayoutGrid size={18} />
            <span>Explore All Templates</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Bespoke Assurance Strip */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl shadow-slate-900/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs text-horizon-300 font-semibold border border-white/10">
                <Paintbrush size={13} />
                <span>100% Brand Tailored</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Need a bespoke design for your café?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Choose any template as a starting point and we will match your exact brand fonts, color tones, food categories, and photography. Custom layouts can also be built from scratch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-horizon-50 transition-colors shadow-sm"
              >
                <span>Pick a Style & Get Started</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* FULL-SIZE PREVIEW MODAL */}
      {activeModalTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {activeModalTemplate.name}
                </h3>
                <p className="text-xs text-slate-500">{activeModalTemplate.tagline}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalTemplate(null)}
                className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
                aria-label="Close preview"
              >
                <X size={16} />
              </button>
            </div>

            {/* Preview Display - Shows full preview with scroll */}
            <div className="p-6 bg-gradient-to-br from-slate-50 to-gray-100 flex items-start justify-center max-h-[60vh] overflow-y-auto">
              <div className="w-full max-w-[250px]">
                {activeModalTemplate.preview?.renderCard()}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-white">
              <button
                onClick={() => {
                  setActiveModalTemplate(null);
                  window.location.href = activeModalTemplate.route;
                }}
                className="w-full py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>View Live Template</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default TemplateShowcase;