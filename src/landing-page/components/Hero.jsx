import React, { memo } from 'react';
import { 
  QrCode, 
  Smartphone, 
  ArrowRight, 
  Sparkles,
  Shield, 
  Palette,
  Coffee,
  Star,
  MapPin,
  Clock,
  ArrowDown
} from 'lucide-react';

const MENU_ITEMS = [
  {
    name: 'Café Latte',
    price: '₹180',
    emoji: '☕',
    category: 'Coffee',
    popular: true
  },
  {
    name: 'Butter Croissant',
    price: '₹150',
    emoji: '🥐',
    category: 'Bakery',
    popular: false
  },
  {
    name: 'Berry Cheesecake',
    price: '₹220',
    emoji: '🍰',
    category: 'Dessert',
    popular: true
  }
];

const HIGHLIGHTS = [
  { icon: Shield, text: 'No App Required' },
  { icon: Smartphone, text: 'Made for Mobile' },
  { icon: Palette, text: 'Choose Your Design' }
];

const CATEGORIES = ['All', 'Coffee', 'Bakery', 'Dessert'];

const Hero = () => {
  return (
    <section className="relative min-h-[92dvh] flex items-center justify-center bg-warm-bg overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Ambient background glows matched to warm teal palette */}
      <div className="absolute top-12 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-brand-soft/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-6 right-10 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-soft/60 text-brand-dark px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6 border border-brand/20 shadow-xs">
              <Sparkles size={14} className="text-brand animate-pulse" />
              <span>Introducing Horizon Menu</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy mb-6 tracking-tight leading-[1.1] max-w-xl">
              Your Menu.{' '}
              <span className="text-brand">One Scan Away.</span>
            </h1>
            
            {/* Body Copy */}
            <p className="text-base md:text-lg text-navy/70 mb-8 max-w-lg leading-relaxed font-normal">
              Create a beautiful digital QR menu for your restaurant or café. Give customers instant access to your menu from their phones—no app required.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto justify-center lg:justify-start">
              <a 
                href="#pricing" 
                className="group inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-bold text-white bg-brand hover:bg-brand-dark rounded-xl shadow-xs hover:shadow-sm transition-all active:scale-98"
              >
                <span>Get Your Menu</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#templates" 
                className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold text-navy/80 hover:text-navy bg-white hover:bg-navy/5 border border-navy/10 rounded-xl transition-all shadow-xs"
              >
                Explore Templates
              </a>
            </div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-md lg:max-w-none mt-10 pt-8 border-t border-navy/10">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <div 
                  key={text}
                  className="flex items-center justify-center lg:justify-start gap-2 bg-white/80 px-3.5 py-2.5 rounded-xl border border-navy/5 shadow-xs"
                >
                  <Icon className="text-brand shrink-0" size={16} />
                  <span className="text-xs md:text-sm text-navy/80 font-medium whitespace-nowrap">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Phone Mockup & Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] flex items-center justify-center">
              
              {/* Phone Hardware Mockup */}
              <div className="relative w-[270px] sm:w-[290px] z-10 sm:ml-4">
                <div className="bg-navy rounded-[2.8rem] p-2.5 shadow-2xl ring-4 ring-navy/20">
                  <div className="bg-white rounded-[2.2rem] overflow-hidden border border-slate-100">
                    
                    {/* Status Bar */}
                    <div className="bg-navy pt-2 pb-1.5 px-6 flex justify-between items-center text-white">
                      <span className="text-[10px] font-semibold tracking-tight">9:41</span>
                      <div className="w-16 h-3 bg-black rounded-full flex items-center justify-end px-1">
                        <div className="w-1 h-1 rounded-full bg-emerald-400" />
                      </div>
                      <div className="w-3.5 h-2 border border-slate-400 rounded-xs p-0.5 flex items-center">
                        <div className="h-full w-full bg-white rounded-xs" />
                      </div>
                    </div>
                    
                    {/* Phone Screen UI */}
                    <div className="p-3 bg-slate-50/70">
                      
                      {/* Venue Hero Card */}
                      <div className="relative h-22 bg-gradient-to-br from-brand to-brand-dark rounded-xl mb-2.5 overflow-hidden p-2.5 flex flex-col justify-between shadow-xs">
                        <div className="relative z-10 flex items-center gap-2">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-xs">
                            <Coffee className="w-4 h-4 text-brand-dark" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-xs leading-tight">Café Horizon</div>
                            <div className="text-brand-soft text-[9px]">Artisan Roasters & Bakery</div>
                          </div>
                        </div>
                        <div className="relative z-10 flex items-center justify-between text-white/90 text-[8px]">
                          <div className="flex items-center gap-1">
                            <Clock size={9} className="text-emerald-300" />
                            <span>Open Now</span>
                          </div>
                          <span className="font-semibold text-white/80">Table #04</span>
                        </div>
                      </div>
                      
                      {/* Interactive Category Chips */}
                      <div className="flex gap-1.5 mb-2.5 overflow-x-auto pb-0.5 scrollbar-none">
                        {CATEGORIES.map((cat, i) => (
                          <span 
                            key={cat}
                            className={`text-[9px] px-2.5 py-1 rounded-md font-semibold whitespace-nowrap transition-colors ${
                              i === 0 
                                ? 'bg-brand text-white shadow-xs' 
                                : 'bg-white text-navy/70 border border-slate-200'
                            }`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      
                      {/* Menu List */}
                      <div className="space-y-1.5">
                        {MENU_ITEMS.map((item) => (
                          <div key={item.name} className="bg-white rounded-lg p-2 flex items-center gap-2 border border-slate-100 shadow-xs">
                            <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-md flex items-center justify-center text-sm shrink-0">
                              {item.emoji}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1">
                                <span className="text-[10px] font-semibold text-navy truncate">
                                  {item.name}
                                </span>
                                {item.popular && (
                                  <Star className="w-2.5 h-2.5 text-accent-orange fill-accent-orange shrink-0" />
                                )}
                              </div>
                              <div className="text-[8px] text-slate-400 font-medium">{item.category}</div>
                            </div>
                            <div className="text-[10px] font-bold text-brand-dark whitespace-nowrap pr-0.5">
                              {item.price}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* In-Menu Footer */}
                      <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[8px] text-slate-400">
                        <div className="flex items-center gap-1 truncate max-w-[110px]">
                          <MapPin size={8} className="shrink-0" />
                          <span className="truncate">Main Boulevard, City</span>
                        </div>
                        <span className="text-brand font-semibold whitespace-nowrap">
                          Powered by Horizon
                        </span>
                      </div>
                    </div>

                    {/* Bottom Home Indicator bar */}
                    <div className="py-1 bg-white flex justify-center">
                      <div className="w-16 h-1 bg-slate-300 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge: QR Trigger */}
              <div className="absolute -left-2 sm:-left-6 top-8 sm:top-12 z-20">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-2.5 sm:p-3 border border-navy/5 text-center">
                  <div className="p-1.5 bg-warm-bg rounded-lg border border-navy/5 inline-block">
                    <QrCode className="w-8 h-8 sm:w-11 sm:h-11 text-navy" />
                  </div>
                  <p className="text-[10px] font-bold text-navy mt-1">Scan Me</p>
                  <p className="text-[8px] text-slate-400">Point camera</p>
                </div>
              </div>
              
              {/* Floating Badge: Rating */}
              <div className="absolute -right-2 sm:-right-5 top-16 bg-white/95 backdrop-blur-md rounded-xl shadow-md px-2.5 py-1.5 border border-navy/5 z-20">
                <div className="flex items-center gap-1">
                  <Star className="text-accent-orange w-3 h-3 fill-accent-orange" />
                  <span className="text-xs font-bold text-navy">4.9</span>
                </div>
                <div className="text-[8px] text-slate-400 font-medium">Customer Loved</div>
              </div>
              
              {/* Floating Badge: Instant Updates */}
              <div className="absolute -right-1 sm:-right-4 bottom-12 bg-white/95 backdrop-blur-md rounded-xl shadow-md px-2.5 py-1.5 border border-navy/5 z-20">
                <div className="flex items-center gap-1">
                  <span className="text-xs">⚡</span>
                  <span className="text-[9px] font-bold text-navy">Instant Sync</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* Mobile-Only Scroll Indicator */}
        <div className="md:hidden text-center mt-10">
          <a href="#about" className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-brand transition-colors">
            <span className="text-[10px] tracking-wide font-medium">Scroll to explore</span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);