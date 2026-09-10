
const templatesData = {
  filterCategories: [
    { id: 'all', label: 'All Templates', desc: 'Browse entire collection' },
    { id: 'cafe', label: 'Café & Coffee', desc: 'Specialty roasters & bakeries' },
    { id: 'restaurant', label: 'Restaurant & Dining', desc: 'Bistros, bars & pizzerias' },
    { id: 'premium', label: 'Premium & Fine Dining', desc: 'Heritage, restobars & lounge' },
    { id: 'dark', label: 'Dark & Bold', desc: 'Cocktail bars & low-light' },
  ],

  templates: [
    {
      id: 'modern-warm',
      category: 'cafe',
      number: '01',
      name: 'Modern Warm',
      tagline: 'Clean layouts with a warm café accent',
      bestFor: 'Modern Cafés & Casual Restaurants',
      accentColor: 'border-amber-300',
      badgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
      route: '/menu/cafe-nova/template-1',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-white p-3.5 flex flex-col justify-between font-sans">
            <div>
              <div className="text-center pb-2 mb-2 border-b border-slate-100">
                <div className="w-7 h-7 mx-auto mb-1 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[8px] font-black">
                  CN
                </div>
                <h4 className="text-[11px] font-extrabold tracking-tight text-slate-900">
                  Café Nova
                </h4>
                <p className="text-[6.5px] text-slate-500 mt-0.5">
                  Fresh coffee & good food
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-1.5 text-[6px] text-slate-500">
                  <span className="text-amber-500 font-bold">★ 4.8</span>
                  <span>•</span>
                  <span>Café</span>
                  <span>•</span>
                  <span>Downtown</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-[7px] font-bold text-slate-900 uppercase tracking-widest">
                  Coffee
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <div className="text-[8px] font-semibold text-slate-800">
                      Cappuccino
                    </div>
                    <div className="text-[6.5px] text-slate-400">
                      Espresso, steamed milk
                    </div>
                  </div>
                  <span className="text-[8px] font-bold text-slate-900">
                    ₹180
                  </span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <div className="text-[8px] font-semibold text-slate-800">
                      Caramel Latte
                    </div>
                    <div className="text-[6.5px] text-slate-400">
                      Smooth caramel & espresso
                    </div>
                  </div>
                  <span className="text-[8px] font-bold text-slate-900">
                    ₹210
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-1.5 border-t border-slate-100 flex justify-between items-center text-[6.5px] text-slate-400">
              <span>Freshly prepared</span>
              <span className="font-semibold text-amber-600">
                View Menu
              </span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'cafe-warm',
      category: 'cafe',
      number: '02',
      name: 'Cafe Warm',
      tagline: 'Warm tones & cozy café atmosphere',
      bestFor: 'Cafés, Bakeries & Coffee Shops',
      accentColor: 'border-amber-300',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-200',
      route: '/menu/cafe-nova/template-2',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#FAF7F2] p-3.5 flex flex-col justify-between font-sans">
            <div>
              <div className="text-center pb-2 mb-2">
                <span className="text-[7px] font-semibold tracking-widest text-amber-700 uppercase">
                  Cafe & Roastery
                </span>
                <h4 className="text-[12px] font-black text-amber-950 font-serif">
                  The Copper Kettle
                </h4>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <span className="w-5 h-px bg-amber-300" />
                  <span className="text-[7px] text-amber-500">✦</span>
                  <span className="w-5 h-px bg-amber-300" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-[7px] font-bold text-amber-800 uppercase tracking-widest">
                  Coffee & Brews
                </div>
                <div className="flex justify-between items-baseline text-[9.5px] text-amber-950">
                  <span className="font-semibold">Signature Latte</span>
                  <span className="font-bold">₹180</span>
                </div>
                <div className="flex justify-between items-baseline text-[9.5px] text-amber-950">
                  <span className="font-semibold">Classic Cappuccino</span>
                  <span className="font-bold">₹160</span>
                </div>
              </div>
            </div>
            <div className="pt-1.5 border-t border-amber-200 flex justify-between items-center text-[7px] text-stone-500">
              <span>Freshly Brewed</span>
              <span className="font-semibold text-amber-800">Open Now</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'modern',
      category: 'cafe',
      number: '03',
      name: 'Modern Compact',
      tagline: 'Bold structure & effortless browsing',
      bestFor: 'Modern Cafés, Restaurants & Food Spots',
      accentColor: 'border-neutral-300',
      badgeClass: 'bg-neutral-100 text-neutral-800 border-neutral-200',
      route: '/menu/cafe-nova/template-3',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-white p-3.5 flex flex-col font-sans">
            <div className="flex items-center gap-2 pb-2 border-b border-neutral-200">
              <div className="w-7 h-7 rounded-lg bg-neutral-900 flex items-center justify-center text-[7px] font-bold text-white">
                CN
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[9.5px] font-bold text-neutral-900 truncate">
                  Café Nova
                </h4>
                <span className="text-[6.5px] text-neutral-500">
                  Modern Café
                </span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[6px] font-semibold">
                ● Open
              </span>
            </div>
            <div className="mt-3 mb-2 pb-2 border-b border-neutral-200">
              <div className="flex items-center gap-1.5">
                <span className="text-[7px] font-bold text-neutral-900 uppercase tracking-wider">
                  Coffee
                </span>
                <span className="text-[6px] bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded-full">
                  4 items
                </span>
              </div>
              <div className="w-7 h-0.5 bg-neutral-900 mt-1.5" />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center p-2 rounded-lg border border-neutral-200">
                <span className="text-[8px] font-semibold text-neutral-900">
                  Signature Latte
                </span>
                <span className="text-[8px] font-bold text-neutral-900">
                  ₹180
                </span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg border border-neutral-200">
                <span className="text-[8px] font-semibold text-neutral-900">
                  Cold Brew
                </span>
                <span className="text-[8px] font-bold text-neutral-900">
                  ₹160
                </span>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 'editorial',
      category: 'restaurant',
      number: '04',
      name: 'Editorial Luxe',
      tagline: 'A refined dining experience with an elegant visual rhythm',
      bestFor: 'Fine Dining, Premium Restaurants & Lounges',
      accentColor: 'border-amber-300',
      badgeClass: 'bg-stone-100 text-stone-800 border-stone-200',
      route: '/menu/cafe-nova/template-4',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-stone-50 p-3.5 flex flex-col font-serif">
            <div className="text-center mb-3">
              <div className="text-[6px] tracking-[0.25em] uppercase text-stone-400 mb-1">
                Fine Dining & Lounge
              </div>
              <h4 className="text-[13px] font-bold tracking-wide text-stone-900">
                L'Oasis
              </h4>
              <div className="flex items-center justify-center gap-2 mt-1.5">
                <span className="w-8 h-px bg-stone-300" />
                <span className="text-[7px] text-amber-500">✦</span>
                <span className="w-8 h-px bg-stone-300" />
              </div>
            </div>
            <div className="space-y-2 flex-1">
              <div className="text-center">
                <span className="text-[7px] uppercase tracking-widest text-stone-400">
                  Signature
                </span>
              </div>
              <div className="flex justify-between items-baseline border-b border-stone-200 pb-1">
                <span className="text-[9px] font-semibold text-stone-800">
                  Truffle Risotto
                </span>
                <span className="text-[9px] font-semibold text-stone-900">
                  ₹680
                </span>
              </div>
              <div className="flex justify-between items-baseline border-b border-stone-200 pb-1">
                <span className="text-[9px] font-semibold text-stone-800">
                  Herb Crusted Salmon
                </span>
                <span className="text-[9px] font-semibold text-stone-900">
                  ₹820
                </span>
              </div>
              <div className="flex justify-between items-baseline border-b border-stone-200 pb-1">
                <span className="text-[9px] font-semibold text-stone-800">
                  Dark Chocolate Tart
                </span>
                <span className="text-[9px] font-semibold text-stone-900">
                  ₹420
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-stone-200">
              <span className="text-[6px] uppercase tracking-widest text-stone-400">
                Curated Menu
              </span>
              <span className="text-[7px] text-amber-500">✦</span>
              <span className="text-[6px] uppercase tracking-widest text-stone-400">
                Chef's Selection
              </span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'fresh-modern',
      category: 'restaurant',
      number: '05',
      name: 'Fresh Modern',
      tagline: 'A vibrant, image-forward menu designed for modern casual dining',
      bestFor: 'Cafés, Casual Restaurants, Bakeries & Modern Food Spots',
      accentColor: 'border-emerald-300',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      route: '/menu/cafe-nova/template-5',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-white p-3.5 flex flex-col font-sans">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-[7px] font-black">
                  CN
                </div>
                <div>
                  <div className="text-[9px] font-black text-neutral-900">
                    Cafe Nova
                  </div>
                  <div className="text-[5px] font-semibold text-emerald-600">
                    Fresh & Artisanal
                  </div>
                </div>
              </div>
              <div className="px-2 py-1 rounded-md bg-neutral-900 text-white text-[5px] font-bold">
                DINE-IN MENU
              </div>
            </div>
            <div className="relative h-16 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 overflow-hidden mb-3">
              <div className="absolute inset-0 flex items-center justify-between px-3">
                <div>
                  <span className="text-[5px] uppercase tracking-widest text-emerald-700 font-bold">
                    Today's Pick
                  </span>
                  <div className="text-[10px] font-black text-neutral-900 mt-1">
                    Creamy Pasta
                  </div>
                  <div className="text-[6px] text-neutral-500">
                    Chef's special
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center text-2xl shadow-sm">
                  🍝
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-[5px] uppercase tracking-widest text-emerald-600 font-bold">
                  Explore
                </span>
                <h4 className="text-[12px] font-black text-neutral-900">
                  Main Course
                </h4>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500 text-[5px] font-bold">
                6 items
              </span>
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex gap-2 p-1.5 rounded-lg border border-gray-100">
                <div className="w-12 h-12 rounded-md bg-emerald-50 flex items-center justify-center text-lg">
                  🍝
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-1">
                    <span className="text-[8px] font-bold text-neutral-900">
                      Creamy Alfredo Pasta
                    </span>
                    <span className="text-[8px] font-bold text-emerald-600">
                      ₹320
                    </span>
                  </div>
                  <p className="text-[5px] text-neutral-500 mt-0.5 leading-tight">
                    Creamy sauce, herbs & parmesan
                  </p>
                  <span className="inline-block mt-1 px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[4px] font-bold">
                    Bestseller
                  </span>
                </div>
              </div>
              <div className="flex gap-2 p-1.5 rounded-lg border border-gray-100">
                <div className="w-12 h-12 rounded-md bg-emerald-50 flex items-center justify-center text-lg">
                  🥗
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-1">
                    <span className="text-[8px] font-bold text-neutral-900">
                      Garden Fresh Bowl
                    </span>
                    <span className="text-[8px] font-bold text-emerald-600">
                      ₹280
                    </span>
                  </div>
                  <p className="text-[5px] text-neutral-500 mt-0.5 leading-tight">
                    Seasonal greens & fresh vegetables
                  </p>
                  <span className="inline-block mt-1 px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[4px] font-bold">
                    Veg
                  </span>
                </div>
              </div>
              <div className="flex gap-2 p-1.5 rounded-lg border border-gray-100">
                <div className="w-12 h-12 rounded-md bg-emerald-50 flex items-center justify-center text-lg">
                  🍰
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-1">
                    <span className="text-[8px] font-bold text-neutral-900">
                      Chocolate Tart
                    </span>
                    <span className="text-[8px] font-bold text-emerald-600">
                      ₹190
                    </span>
                  </div>
                  <p className="text-[5px] text-neutral-500 mt-0.5 leading-tight">
                    Rich chocolate with a crisp crust
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 mt-2 border-t border-neutral-100">
              <span className="text-[5px] font-semibold text-neutral-400 uppercase tracking-widest">
                Freshly Prepared
              </span>
              <span className="text-[6px] font-bold text-emerald-600">
                ● Kitchen Live
              </span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'neon-noir',
      category: 'dark',
      number: '06',
      name: 'Neon Noir',
      tagline: 'A futuristic dark menu experience with atmospheric neon accents',
      bestFor: 'Modern Restaurants, Lounges, Bars, Night Cafés & Contemporary Dining',
      accentColor: 'border-purple-400',
      badgeClass: 'bg-purple-50 text-purple-800 border-purple-200',
      route: '/menu/cafe-nova/template-6',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-slate-950 p-3.5 flex flex-col font-sans text-slate-100">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-purple-500/20">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 blur-md opacity-40 rounded-lg" />
                  <div className="relative w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-[7px]">
                    CN
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-white tracking-tight">
                    L'Oasis
                  </div>
                  <div className="text-[5px] text-purple-400">
                    Fine Dining & Lounge
                  </div>
                </div>
              </div>
              <div className="px-2 py-1 rounded-md bg-purple-600 text-white text-[5px] font-bold shadow-[0_0_10px_rgba(147,51,234,0.35)]">
                MENU
              </div>
            </div>
            <div className="relative h-20 rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 border border-purple-500/20">
              <div className="absolute -top-8 -right-5 w-24 h-24 bg-purple-600/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-5 w-24 h-24 bg-fuchsia-600/20 rounded-full blur-2xl" />
              <div className="relative h-full flex items-center justify-between px-3">
                <div>
                  <span className="text-[5px] uppercase tracking-[0.2em] text-purple-400 font-bold">
                    Tonight's Selection
                  </span>
                  <div className="text-[11px] font-bold text-white mt-1">
                    Truffle Risotto
                  </div>
                  <div className="text-[6px] text-slate-400 mt-0.5">
                    Chef's signature dish
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500/30 blur-lg rounded-full" />
                  <div className="relative w-14 h-14 rounded-full border border-purple-400/40 bg-slate-900/80 flex items-center justify-center text-2xl">
                    🍽️
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end gap-2 mb-2">
              <div>
                <span className="text-[5px] uppercase tracking-widest text-purple-400">
                  01 / Course
                </span>
                <h4 className="text-[11px] font-bold text-white mt-0.5">
                  Signature
                </h4>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-500/40 to-transparent mb-1.5" />
              <span className="text-[5px] text-slate-500 mb-1.5">
                3 items
              </span>
            </div>
            <div className="space-y-1 flex-1">
              <div className="group flex items-center gap-2 p-1.5 rounded-lg border border-transparent bg-slate-900/40">
                <div className="w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-lg">
                  🍄
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-1">
                    <span className="text-[7px] font-bold text-white">
                      Truffle Risotto
                    </span>
                    <span className="text-[7px] font-bold text-purple-400">
                      ₹680
                    </span>
                  </div>
                  <p className="text-[5px] text-slate-500 mt-0.5 truncate">
                    Arborio rice, black truffle & parmesan
                  </p>
                  <span className="inline-block mt-1 px-1.5 py-0.5 rounded-full bg-purple-600/15 border border-purple-500/20 text-purple-300 text-[4px] font-medium">
                    Chef Special
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded-lg border border-transparent bg-slate-900/40">
                <div className="w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-lg">
                  🐟
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-1">
                    <span className="text-[7px] font-bold text-white">
                      Herb Crusted Salmon
                    </span>
                    <span className="text-[7px] font-bold text-purple-400">
                      ₹820
                    </span>
                  </div>
                  <p className="text-[5px] text-slate-500 mt-0.5 truncate">
                    Fresh salmon, herbs & seasonal greens
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded-lg border border-transparent bg-slate-900/40">
                <div className="w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-lg">
                  🍫
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-1">
                    <span className="text-[7px] font-bold text-white">
                      Dark Chocolate Tart
                    </span>
                    <span className="text-[7px] font-bold text-purple-400">
                      ₹420
                    </span>
                  </div>
                  <p className="text-[5px] text-slate-500 mt-0.5 truncate">
                    Dark chocolate, hazelnut & sea salt
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between pt-2 mt-2 border-t border-purple-500/20">
              <span className="text-[5px] uppercase tracking-widest text-slate-500">
                Curated Tonight
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.9)]" />
                <span className="text-[5px] font-bold text-purple-400">
                  KITCHEN LIVE
                </span>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 'minimal-editorial',
      category: 'restaurant',
      number: '07',
      name: 'Minimal Editorial',
      tagline: 'A clean print-inspired menu with refined typography and editorial food photography',
      bestFor: 'Modern Restaurants, Cafés, Bistrots & Boutique Dining',
      accentColor: 'border-stone-300',
      badgeClass: 'bg-stone-100 text-stone-800 border-stone-200',
      route: '/menu/cafe-nova/template-7',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-white p-3.5 flex flex-col font-serif">
            <div className="text-center mb-3">
              <div className="text-[6px] tracking-[0.2em] uppercase text-stone-400 mb-1">
                Modern Bistro
              </div>
              <h4 className="text-[15px] font-normal tracking-tight text-stone-900">
                L'Oasis
              </h4>
              <p className="text-[7px] text-stone-500 mt-1">
                Fine Dining & Lounge
              </p>
            </div>
            <div className="h-20 bg-stone-100 overflow-hidden mb-3">
              <div className="w-full h-full bg-gradient-to-br from-stone-200 via-stone-100 to-stone-300 flex items-center justify-center">
                <span className="text-[8px] uppercase tracking-[0.2em] text-stone-500">
                  Editorial Dish
                </span>
              </div>
            </div>
            <div className="flex items-baseline justify-between border-b border-stone-900 pb-1.5 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[6px] font-mono tracking-widest text-stone-400">
                  [01]
                </span>
                <span className="text-[9px] uppercase tracking-wide text-stone-900">
                  Signature
                </span>
              </div>
              <span className="text-[6px] font-mono tracking-widest text-stone-400 uppercase">
                03 Items
              </span>
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex items-baseline gap-1">
                <span className="text-[8px] font-semibold text-stone-800 whitespace-nowrap">
                  Truffle Risotto
                </span>
                <span className="flex-1 border-b border-dotted border-stone-300 mb-1" />
                <span className="text-[8px] font-mono text-stone-900">
                  ₹680
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[8px] font-semibold text-stone-800 whitespace-nowrap">
                  Herb Crusted Salmon
                </span>
                <span className="flex-1 border-b border-dotted border-stone-300 mb-1" />
                <span className="text-[8px] font-mono text-stone-900">
                  ₹820
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[8px] font-semibold text-stone-800 whitespace-nowrap">
                  Dark Chocolate Tart
                </span>
                <span className="flex-1 border-b border-dotted border-stone-300 mb-1" />
                <span className="text-[8px] font-mono text-stone-900">
                  ₹420
                </span>
              </div>
            </div>
            <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
              <span className="text-[6px] font-mono tracking-widest text-stone-400 uppercase">
                Seasonal Selection
              </span>
              <span className="text-[6px] text-stone-400">
                L'Oasis
              </span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'terra',
      category: 'cafe',
      number: '08',
      name: 'Terra',
      tagline: 'A warm, handcrafted dining experience inspired by Mediterranean kitchens',
      bestFor: 'Mediterranean, Italian, Organic & Farm-to-Table Restaurants',
      accentColor: 'border-[#B85C38]',
      badgeClass: 'bg-[#F7F1E5] text-[#B85C38] border-[#D8C9AD]',
      route: '/menu/cafe-nova/template-8',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#F7F1E5] p-3.5 flex flex-col font-sans">
            <div className="text-center pb-2 mb-2">
              <span className="text-[7px] font-semibold tracking-widest text-[#526044] uppercase">
                Mediterranean Kitchen
              </span>
              <h4 className="text-[12px] font-serif font-bold text-[#30382A] tracking-wide">
                Casa Oliva
              </h4>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <span className="w-5 h-px bg-[#D8C9AD]" />
                <span className="text-[7px] text-[#B85C38]">🫒</span>
                <span className="w-5 h-px bg-[#D8C9AD]" />
              </div>
            </div>
            <div className="space-y-2 flex-1">
              <div className="text-[7px] font-bold text-[#526044] uppercase tracking-widest text-center">
                Antipasti
              </div>
              <div className="flex justify-between items-baseline text-[9.5px]">
                <span className="font-serif font-semibold text-[#30382A]">Burrata</span>
                <span className="font-sans font-bold text-[#30382A]">₹420</span>
              </div>
              <div className="flex justify-between items-baseline text-[9.5px]">
                <span className="font-serif font-semibold text-[#30382A]">Bruschetta</span>
                <span className="font-sans font-bold text-[#30382A]">₹280</span>
              </div>
              <div className="flex justify-between items-baseline text-[9.5px]">
                <span className="font-serif font-semibold text-[#30382A]">Truffle Pasta</span>
                <span className="font-sans font-bold text-[#B85C38]">₹680</span>
              </div>
            </div>
            <div className="pt-1.5 border-t border-[#D8C9AD]/50 flex justify-between items-center text-[6.5px] text-[#817A6B]">
              <span>Fresh • Local • Handmade</span>
              <span className="font-semibold text-[#526044]">View Menu</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'urban-mono',
      category: 'restaurant',
      number: '09',
      name: 'Urban Mono',
      tagline: 'A bold, monochrome street-food aesthetic with huge typography',
      bestFor: 'Burgers, Pizza, Street Food, Cloud Kitchens & Modern Cafés',
      accentColor: 'border-[#FF4D00]',
      badgeClass: 'bg-black text-white border-black/20',
      route: '/menu/cafe-nova/template-9',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#F5F5F0] p-3.5 flex flex-col font-sans">
            <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-black">
              <div className="flex items-center gap-1.5">
                <span className="text-[6px] font-mono font-bold text-black/40">09/</span>
                <span className="text-[10px] font-black text-black uppercase tracking-tight">Café Nova</span>
              </div>
              <span className="text-[6px] font-black text-black/40 uppercase">Menu</span>
            </div>
            <div className="text-center py-2 mb-2">
              <div className="text-[18px] font-black text-black uppercase leading-none tracking-tighter">
                Eat. Drink.
              </div>
              <div className="text-[18px] font-black text-black/30 uppercase leading-none tracking-tighter">
                Repeat.
              </div>
            </div>
            <div className="h-16 bg-black rounded-lg mb-2 flex items-center justify-center">
              <span className="text-2xl">🍔</span>
            </div>
            <div className="flex items-center justify-between border-b-2 border-black pb-1.5 mb-2">
              <span className="text-[8px] font-black text-black uppercase">Burgers</span>
              <span className="text-[6px] font-mono font-bold text-black/40">03</span>
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-black text-black uppercase">Classic Burger</span>
                <span className="text-[8px] font-black text-black">₹320</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-black text-black uppercase">Smoked Chicken</span>
                <span className="text-[8px] font-black text-black">₹380</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-black text-black uppercase">Truffle Burger</span>
                <span className="text-[8px] font-black text-[#FF4D00]">₹450</span>
              </div>
            </div>
            <div className="pt-1.5 border-t border-black/20 flex justify-between items-center">
              <span className="text-[5px] font-black text-black/40 uppercase">Scan • Browse • Enjoy</span>
              <span className="w-3 h-3 bg-[#FF4D00] rounded-sm"></span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'signature',
      category: 'restaurant',
      number: '10',
      name: 'Signature',
      tagline: 'A premium, editorial menu with refined hospitality aesthetics',
      bestFor: 'Fine Dining, Premium Restaurants, Lounges & Modern Hospitality',
      accentColor: 'border-[#B88746]',
      badgeClass: 'bg-[#F8F6F1] text-[#B88746] border-[#E5E0D5]',
      route: '/menu/cafe-nova/template-10',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#F8F6F1] p-3.5 flex flex-col font-sans">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E0D5]">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#EFECE6] border border-[#E5E0D5] flex items-center justify-center text-[7px]">
                  🍽️
                </span>
                <span className="text-[9px] font-serif font-bold text-[#2C2A24]">L'Artisan</span>
              </div>
              <span className="text-[6px] font-semibold uppercase tracking-wider text-[#8A8578]">Fine Dining</span>
            </div>
            <div className="text-center py-2 mb-2">
              <div className="text-[14px] font-serif font-bold text-[#2C2A24] tracking-tight">L'Artisan</div>
              <div className="text-[7px] text-[#8A8578] italic">"Good food. Good mood."</div>
              <div className="flex items-center justify-center gap-1.5 mt-1.5">
                <span className="text-[#B88746] text-[6px]">★</span>
                <span className="text-[7px] font-semibold text-[#2C2A24]">4.9</span>
                <span className="text-[#D5D0C5]">•</span>
                <span className="text-[7px] text-[#6C675B]">Downtown</span>
              </div>
            </div>
            <div className="h-16 bg-gradient-to-br from-[#EFECE6] to-[#E5E0D5] rounded-lg mb-2 flex items-center justify-center">
              <span className="text-2xl">🍽️</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-[#E5E0D5] pb-1.5 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[6px] font-mono font-bold text-[#B88746]">01</span>
                <span className="text-[8px] font-serif font-bold text-[#2C2A24] uppercase">Starters</span>
              </div>
              <span className="text-[6px] text-[#8A8578]">3 items</span>
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex justify-between items-baseline">
                <span className="text-[7px] font-serif font-semibold text-[#2C2A24]">Burrata Salad</span>
                <span className="text-[7px] font-serif font-semibold text-[#2C2A24]">₹420</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[7px] font-serif font-semibold text-[#2C2A24]">Truffle Fries</span>
                <span className="text-[7px] font-serif font-semibold text-[#2C2A24]">₹320</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[7px] font-serif font-semibold text-[#2C2A24]">Herb Crusted Salmon</span>
                <span className="text-[7px] font-serif font-semibold text-[#B88746]">₹820</span>
              </div>
            </div>
            <div className="pt-1.5 border-t border-[#E5E0D5] flex justify-between items-center">
              <span className="text-[5px] uppercase tracking-wider text-[#8A8578]">Curated Kitchen</span>
              <span className="w-2 h-2 bg-[#B88746] rotate-45"></span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'nocturne-atelier',
      category: 'dark',
      number: '11',
      name: 'Nocturne Atelier',
      tagline: 'Dark luxury glassmorphism with ambient gold glows',
      bestFor: 'Cocktail Bars, Speakeasies, Lounge Bars & Late-Night Dining',
      accentColor: 'border-[#E2B855]',
      badgeClass: 'bg-[#12141C] text-[#E2B855] border-white/10',
      route: '/menu/cafe-nova/template-11',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#0A0B10] p-3.5 flex flex-col justify-between font-sans text-white">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-lg bg-[#E2B855]/20 border border-[#E2B855]/40 flex items-center justify-center text-[7px] font-bold text-[#E2B855]">
                    NA
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-white tracking-tight">Nocturne</div>
                    <div className="text-[5px] text-[#E2B855] font-mono">Atelier</div>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[5px] font-mono">
                  ● Live
                </span>
              </div>

              {/* Showcase Banner */}
              <div className="relative h-14 rounded-xl bg-[#12141C] border border-white/10 p-2 mb-2 flex items-center justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#E2B855]/10 blur-xl rounded-full pointer-events-none" />
                <div>
                  <span className="text-[5px] uppercase tracking-widest text-[#E2B855] font-mono font-bold">
                    Signature Drop
                  </span>
                  <div className="text-[9.5px] font-bold text-white mt-0.5">
                    Smoked Negroni
                  </div>
                </div>
                <span className="text-xl">🍸</span>
              </div>

              {/* Menu Section */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[7px] font-mono text-white/50 border-b border-white/5 pb-1">
                  <span className="text-[#E2B855] font-bold">[01] CRAFT COCKTAILS</span>
                  <span>3 items</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-[#12141C]/80 border border-white/5">
                  <div>
                    <div className="text-[7.5px] font-bold text-white">Truffle Infused Old Fashioned</div>
                    <div className="text-[5.5px] text-white/40">Bourbon, black truffle essence</div>
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#E2B855]">₹650</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-[#12141C]/80 border border-white/5">
                  <div>
                    <div className="text-[7.5px] font-bold text-white">Yuzu Botanical Spritz</div>
                    <div className="text-[5.5px] text-white/40">Clarified citrus, botanical gin</div>
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#E2B855]">₹520</span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between items-center text-[6px] font-mono text-white/40">
              <span>SCAN • TASTE</span>
              <span className="text-[#E2B855]">NOCTURNE</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'kyoto-botanica',
      category: 'restaurant',
      number: '12',
      name: 'Kyoto Botanica',
      tagline: 'Japandi calm with organic stone, matcha tones & table-first layout',
      bestFor: 'Asian Dining, Tea Lounges, Japanese Bistros & Farm-to-Table spots',
      accentColor: 'border-[#4A5844]',
      badgeClass: 'bg-[#E8E4DC] text-[#4A5844] border-[#DDD7CC]',
      route: '/menu/cafe-nova/template-12',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#F3F1EC] p-3 flex flex-col justify-between font-sans text-[#1F211D]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#E2DDD3]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-[#4A5844] text-[#F3F1EC] flex items-center justify-center text-[7px] font-bold">
                    KB
                  </div>
                  <span className="text-[9px] font-serif font-bold text-[#1F211D]">Komorebi</span>
                </div>
                <span className="text-[5px] font-mono uppercase text-[#4A5844] font-semibold bg-[#E8E4DC] px-1 py-0.5 rounded">
                  Dine-In
                </span>
              </div>

              {/* Dish Showcase */}
              <div className="p-1.5 rounded-lg bg-[#E8E4DC] mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[5px] font-mono text-[#4A5844] font-bold uppercase block">Seasonal Robata</span>
                  <span className="text-[8px] font-serif font-bold text-[#1F211D]">Charred Miso Eggplant</span>
                </div>
                <span className="text-base">🍆</span>
              </div>

              {/* Item Row */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded bg-white border border-[#E2DDD3]">
                  <span className="text-[7.5px] font-serif font-bold text-[#1F211D]">Matcha Soba Bowl</span>
                  <span className="text-[8px] font-serif font-bold text-[#4A5844]">₹380</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded bg-white border border-[#E2DDD3]">
                  <span className="text-[7.5px] font-serif font-bold text-[#1F211D]">Binchotan Yakitori</span>
                  <span className="text-[8px] font-serif font-bold text-[#4A5844]">₹450</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-[#E2DDD3] flex justify-between text-[6px] font-mono text-[#78746B]">
              <span>TABLE CARTE</span>
              <span className="text-[#4A5844] font-bold">KOMOREBI</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'riviera-azure',
      category: 'restaurant',
      number: '13',
      name: 'Riviera Azure',
      tagline: 'Sunlit Mediterranean coastal dining with bold cobalt and terracotta accents',
      bestFor: 'Seafood Bistros, Trattorias, Beach Clubs & Coastal Dining',
      accentColor: 'border-[#0E3A73]',
      badgeClass: 'bg-[#EBF2FA] text-[#0E3A73] border-[#D0E0F2]',
      route: '/menu/cafe-nova/template-13',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#FBF9F4] p-3 flex flex-col justify-between font-sans text-[#0E3A73]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#E4DCD0]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-[#0E3A73] text-[#FBF9F4] flex items-center justify-center text-[7px] font-black">
                    RS
                  </div>
                  <span className="text-[9px] font-serif font-black text-[#0E3A73]">Riviera Sol</span>
                </div>
                <span className="text-[5px] font-mono uppercase text-[#D95338] font-bold bg-[#D95338]/10 px-1 py-0.5 rounded">
                  Dine-In
                </span>
              </div>

              {/* Catch Banner */}
              <div className="p-1.5 rounded-lg bg-[#0E3A73] text-[#FBF9F4] mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[5px] font-mono text-[#D95338] font-bold uppercase block">Today's Catch</span>
                  <span className="text-[8px] font-serif font-black">Pan-Seared Sea Bass</span>
                </div>
                <span className="text-base">🐟</span>
              </div>

              {/* Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-white border border-[#E4DCD0]">
                  <span className="text-[7.5px] font-serif font-black text-[#0E3A73]">Linguine Vongole</span>
                  <span className="text-[8px] font-mono font-bold text-[#D95338]">₹680</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-white border border-[#E4DCD0]">
                  <span className="text-[7.5px] font-serif font-black text-[#0E3A73]">Sicilian Lemon Spritz</span>
                  <span className="text-[8px] font-mono font-bold text-[#D95338]">₹340</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-[#E4DCD0] flex justify-between text-[6px] font-mono text-[#0E3A73]/70">
              <span>COASTAL TABLE</span>
              <span className="font-bold text-[#D95338]">RIVIERA</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'brasserie-saint-germain',
      category: 'premium',
      number: '14',
      name: 'Brasserie Saint-Germain',
      tagline: 'Vintage Parisian brasserie with imperial green, parchment & gold leaf styling',
      bestFor: 'French Bistros, Wine Bars, Heritage Bakeries & Fine European Dining',
      accentColor: 'border-[#C5A059]',
      badgeClass: 'bg-[#EFE9DB] text-[#0E261C] border-[#D8CEBA]',
      route: '/menu/cafe-nova/template-14',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#F8F5EE] p-3 flex flex-col justify-between font-serif text-[#0E261C]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#D8CEBA]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-xs bg-[#0E261C] text-[#C5A059] flex items-center justify-center text-[7px] font-bold">
                    SG
                  </div>
                  <span className="text-[9px] font-bold text-[#0E261C]">Saint-Germain</span>
                </div>
                <span className="text-[5px] font-mono uppercase text-[#C5A059] bg-[#0E261C] px-1 py-0.5 rounded-xs font-bold">
                  En Salle
                </span>
              </div>

              {/* Dish Feature */}
              <div className="p-1.5 rounded-xs bg-[#0E261C] text-[#F8F5EE] mb-2 flex items-center justify-between border border-[#C5A059]/40">
                <div>
                  <span className="text-[5px] font-mono text-[#C5A059] uppercase block font-bold">Plat Signature</span>
                  <span className="text-[8px] font-bold text-white">Canard Confit Rôti</span>
                </div>
                <span className="text-base">🍷</span>
              </div>

              {/* Menu Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-xs bg-[#FAF7F0] border border-[#D8CEBA]">
                  <span className="text-[7.5px] font-bold text-[#0E261C]">Soupe à l'Oignon Gratinée</span>
                  <span className="text-[8px] font-bold text-[#0E261C]">₹420</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-xs bg-[#FAF7F0] border border-[#D8CEBA]">
                  <span className="text-[7.5px] font-bold text-[#0E261C]">Steak Frites Béarnaise</span>
                  <span className="text-[8px] font-bold text-[#C5A059]">₹890</span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-1.5 border-t border-[#D8CEBA] flex justify-between text-[6px] font-mono text-[#787263]">
              <span>SERVICE CONTINU</span>
              <span className="font-bold text-[#0E261C]">PARIS 1924</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'pop-brutalist',
      category: 'restaurant',
      number: '15',
      name: 'Pop Brutalist',
      tagline: 'High-contrast neo-brutalist diner with hard drop-shadows & acid lemon accents',
      bestFor: 'Smash Burger Joints, Craft Bakeries, Modern Diners & Street Eateries',
      accentColor: 'border-[#18181B]',
      badgeClass: 'bg-[#FFE500] text-[#18181B] border-[#18181B]',
      route: '/menu/cafe-nova/template-15',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#FBF8F1] p-3 flex flex-col justify-between font-sans text-[#18181B] border-2 border-[#18181B]">
            <div>
              {/* Mini Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b-2 border-[#18181B]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-[#18181B] text-[#FFE500] flex items-center justify-center text-[7px] font-black">
                    ⚡
                  </div>
                  <span className="text-[9px] font-black uppercase text-[#18181B]">SUPER DUPER</span>
                </div>
                <span className="text-[5px] font-mono uppercase bg-[#A7F3D0] border border-[#18181B] px-1 py-0.5 rounded font-black">
                  Table 04
                </span>
              </div>

              {/* Banner Box */}
              <div className="p-1.5 rounded-lg bg-[#FFE500] border-2 border-[#18181B] mb-2 flex items-center justify-between shadow-[2px_2px_0px_0px_#18181B]">
                <div>
                  <span className="text-[5px] font-mono font-black text-[#FF5733] uppercase block">HOT HIT</span>
                  <span className="text-[8px] font-black uppercase">Double Smashed Patty</span>
                </div>
                <span className="text-base">🍔</span>
              </div>

              {/* Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-white border-2 border-[#18181B] shadow-[2px_2px_0px_0px_#18181B]">
                  <span className="text-[7.5px] font-black uppercase text-[#18181B]">Truffle Mayo Fries</span>
                  <span className="text-[7.5px] font-mono font-black px-1.5 bg-[#FFE500] border border-[#18181B] rounded">₹240</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-white border-2 border-[#18181B] shadow-[2px_2px_0px_0px_#18181B]">
                  <span className="text-[7.5px] font-black uppercase text-[#18181B]">Salted Caramel Shake</span>
                  <span className="text-[7.5px] font-mono font-black px-1.5 bg-[#FFE500] border border-[#18181B] rounded">₹280</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t-2 border-[#18181B] flex justify-between text-[6px] font-mono font-black">
              <span>POP CARTE</span>
              <span className="bg-[#18181B] text-white px-1 rounded">BRUTALIST</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'daily-gazette',
      category: 'restaurant',
      number: '16',
      name: 'The Daily Gazette',
      tagline: 'Vintage broadsheet newsprint press with classifieds & double-rule framing',
      bestFor: 'Heritage Bakehouses, Craft Gastropubs, Historic Diners & Coffee Press Rooms',
      accentColor: 'border-[#1A1A1A]',
      badgeClass: 'bg-[#F5F2EB] text-[#1A1A1A] border-[#1A1A1A]',
      route: '/menu/cafe-nova/template-16',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#F5F2EB] p-3 flex flex-col justify-between font-serif text-[#1A1A1A] border-2 border-[#1A1A1A]">
            <div>
              {/* Broadsheet Masthead */}
              <div className="border-b border-[#1A1A1A] pb-1 mb-2 text-center">
                <span className="text-[5px] font-mono tracking-widest text-[#991B1B] font-bold block uppercase">
                  Table Edition • Dispatch No. 16
                </span>
                <h4 className="text-[12px] font-black uppercase tracking-tight">The Gazette</h4>
              </div>

              {/* Classifieds Lead */}
              <div className="p-1 border border-[#1A1A1A] bg-white mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[5px] font-mono text-[#991B1B] uppercase font-bold block">Front Page Dish</span>
                  <span className="text-[8px] font-bold">Hearth-Roasted Sourdough</span>
                </div>
                <span className="text-base">🍞</span>
              </div>

              {/* Classified Rows */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline border-b border-dotted border-[#1A1A1A]/40 pb-0.5">
                  <span className="text-[7.5px] font-bold">Smoked Brisket Sandwich</span>
                  <span className="text-[8px] font-mono font-bold">₹420</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-dotted border-[#1A1A1A]/40 pb-0.5">
                  <span className="text-[7.5px] font-bold">Cinnamon Morning Knot</span>
                  <span className="text-[8px] font-mono font-bold">₹180</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1 border-t border-[#1A1A1A] flex justify-between text-[6px] font-mono">
              <span>PRINTED DAILY</span>
              <span className="text-[#991B1B] font-bold">CIRCULATION FREE</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'solarium-desert-modern',
      category: 'restaurant',
      number: '17',
      name: 'Solarium Desert Modern',
      tagline: 'Palm Springs mid-century modern with travertine sand, arched frames & terracotta hearth',
      bestFor: 'Modern Cantinas, Wood-Fired Grills, Agave Bars & Desert Cafés',
      accentColor: 'border-[#D96B43]',
      badgeClass: 'bg-[#EFE8DC] text-[#1F2B20] border-[#E5DDD0]',
      route: '/menu/cafe-nova/template-17',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#F9F6F0] p-3 flex flex-col justify-between font-serif text-[#1F2B20]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#E5DDD0]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#1F2B20] text-[#E8A948] flex items-center justify-center text-[7px]">
                    ✺
                  </div>
                  <span className="text-[9px] font-bold text-[#1F2B20]">Paloma</span>
                </div>
                <span className="text-[5px] font-mono uppercase text-[#D96B43] bg-[#D96B43]/10 px-1.5 py-0.5 rounded-full font-bold">
                  Table Plated
                </span>
              </div>

              {/* Arched Hero Card */}
              <div className="p-1.5 rounded-t-2xl rounded-b-lg bg-[#EFE8DC] border border-[#E5DDD0] mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[5px] font-mono text-[#D96B43] uppercase font-bold block">Hearth Pick</span>
                  <span className="text-[8px] font-bold">Charred Guajillo Ribs</span>
                </div>
                <span className="text-base">🌵</span>
              </div>

              {/* Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-xl bg-white border border-[#E5DDD0]">
                  <span className="text-[7.5px] font-bold text-[#1F2B20]">Baja Sea Bass Tacos</span>
                  <span className="text-[8px] font-mono font-bold text-[#D96B43]">₹480</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-xl bg-white border border-[#E5DDD0]">
                  <span className="text-[7.5px] font-bold text-[#1F2B20]">Smoked Agave Spritz</span>
                  <span className="text-[8px] font-mono font-bold text-[#D96B43]">₹360</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-[#E5DDD0] flex justify-between text-[6px] font-mono text-[#788078]">
              <span>PALM SPRINGS MODERN</span>
              <span className="text-[#D96B43] font-bold">✦ SOLARIUM</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'hifi-vinyl-kissa',
      category: 'restaurant',
      number: '18',
      name: 'The Hi-Fi Kissa',
      tagline: '70s acoustic vinyl lounge with turntable grooves, gatefold sleeves & tracklist menus',
      bestFor: 'Listening Bars, Jazz Kissaten, Craft Cocktail Rooms & Audiophile Cafés',
      accentColor: 'border-[#D9822B]',
      badgeClass: 'bg-[#EDE5D6] text-[#19181A] border-[#E0D5C3]',
      route: '/menu/cafe-nova/template-18',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#FAF5EC] p-3 flex flex-col justify-between font-serif text-[#19181A]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#E3DAC9]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#19181A] text-[#D9822B] flex items-center justify-center text-[7px] font-bold">
                    ●
                  </div>
                  <span className="text-[9px] font-black text-[#19181A]">Hi-Fi Kissa</span>
                </div>
                <span className="text-[5px] font-mono uppercase text-[#D9822B] bg-[#D9822B]/10 px-1 py-0.5 rounded font-bold">
                  33 RPM
                </span>
              </div>

              {/* Record Sleeve Card */}
              <div className="p-1.5 rounded-lg bg-[#19181A] text-[#FAF5EC] mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[5px] font-mono text-[#D9822B] uppercase font-bold block">Heavy Rotation</span>
                  <span className="text-[8px] font-black">Yuzu Glazed Pork Belly</span>
                </div>
                <span className="text-base">📻</span>
              </div>

              {/* Track Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-white border border-[#E3DAC9]">
                  <span className="text-[7.5px] font-bold text-[#19181A]">TRK 01: Siphon Cold Brew</span>
                  <span className="text-[8px] font-mono font-black text-[#D9822B]">₹260</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-white border border-[#E3DAC9]">
                  <span className="text-[7.5px] font-bold text-[#19181A]">TRK 02: Matcha Basque Cake</span>
                  <span className="text-[8px] font-mono font-black text-[#D9822B]">₹340</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-[#E3DAC9] flex justify-between text-[6px] font-mono text-[#757169]">
              <span>MASTER STEREO</span>
              <span className="text-[#D9822B] font-bold">SIDE A</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'bento-kitchen-os',
      category: 'restaurant',
      number: '19',
      name: 'Bento Kitchen OS',
      tagline: 'Neo-digital slate with asymmetric bento tiles, telemetry stats & live table telemetry',
      bestFor: 'Modern Tapas, Experimental Gastrolabs, Cloud Kitchen Dockets & Craft Beer Stations',
      accentColor: 'border-[#D4FF00]',
      badgeClass: 'bg-[#121620] text-[#D4FF00] border-white/10',
      route: '/menu/cafe-nova/template-19',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#0A0C10] p-3 flex flex-col justify-between font-mono text-white border border-white/10">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-[#D4FF00] text-[#0A0C10] flex items-center justify-center text-[7px] font-black">
                    ■
                  </div>
                  <span className="text-[9px] font-black text-white">BENTO OS</span>
                </div>
                <span className="text-[5px] uppercase bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30 px-1 py-0.5 rounded font-bold">
                  SYS.LIVE
                </span>
              </div>

              {/* Bento Tile Preview */}
              <div className="p-2 rounded-xl bg-[#121620] border border-white/10 mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[5px] text-[#D4FF00] uppercase font-bold block">SPEC // 01</span>
                  <span className="text-[8px] font-bold text-white">Charred King Oyster</span>
                </div>
                <span className="text-[7.5px] px-1.5 py-0.5 rounded bg-white/[0.06] text-[#D4FF00] font-black">₹390</span>
              </div>

              {/* Sub Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-[#121620] border border-white/5">
                  <span className="text-[7px] text-white/80">Fermented Chili Dumplings</span>
                  <span className="text-[7.5px] font-bold text-white">₹320</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-[#121620] border border-white/5">
                  <span className="text-[7px] text-white/80">Cold Brew Botanist</span>
                  <span className="text-[7.5px] font-bold text-white">₹240</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between text-[6px] text-white/40">
              <span>DOCK TERMINAL</span>
              <span className="text-[#D4FF00] font-bold">V19 ACTIVE</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'pasticceria-cinema',
      category: 'cafe',
      number: '20',
      name: 'Pasticceria Cinema',
      tagline: 'Wes Anderson-inspired retro pasticceria with powder rose, mint & cinema marquee styling',
      bestFor: 'Artisan Gelaterias, French Patisseries, Retro Brunch Cafés & Sweet Boutiques',
      accentColor: 'border-[#F5CAD2]',
      badgeClass: 'bg-[#F5CAD2] text-[#3D141E] border-[#3D141E]',
      route: '/menu/cafe-nova/template-20',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#FDFBF7] p-3 flex flex-col justify-between font-serif text-[#3D141E] border-2 border-[#3D141E]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b-2 border-[#3D141E]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#F5CAD2] border border-[#3D141E] text-[#3D141E] flex items-center justify-center text-[7px] font-black">
                    🧁
                  </div>
                  <span className="text-[9px] font-black text-[#3D141E]">Pasticceria</span>
                </div>
                <span className="text-[5px] font-mono uppercase bg-[#CFE7DA] border border-[#3D141E] px-1 py-0.5 rounded-full font-bold">
                  En Salle
                </span>
              </div>

              {/* Marquee Card */}
              <div className="p-1.5 rounded-xl bg-[#F5CAD2] border border-[#3D141E] mb-2 flex items-center justify-between shadow-[2px_2px_0px_#3D141E]">
                <div>
                  <span className="text-[5px] font-mono uppercase font-bold block text-[#3D141E]/70">Création Maison</span>
                  <span className="text-[8px] font-black">Pistachio Mille-Feuille</span>
                </div>
                <span className="text-base">🍰</span>
              </div>

              {/* Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-white border border-[#3D141E]">
                  <span className="text-[7.5px] font-black text-[#3D141E]">Brioche au Chocolat</span>
                  <span className="text-[8px] font-serif font-black text-[#3D141E]">₹240</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-white border border-[#3D141E]">
                  <span className="text-[7.5px] font-black text-[#3D141E]">Affogato Al Pistacchio</span>
                  <span className="text-[8px] font-serif font-black text-[#3D141E]">₹290</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-[#3D141E] flex justify-between text-[6px] font-mono text-[#3D141E]/70">
              <span>MILANO 1965</span>
              <span className="text-[#3D141E] font-bold">PASTICCERIA</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'herbier-botanical',
      category: 'restaurant',
      number: '21',
      name: "L'Herbier Botanical",
      tagline: 'Naturalist herbarium with aged vellum, wild elderberry & botanical specimen folios',
      bestFor: 'Farm-to-Table Kitchens, Organic Tea Lounges, Botanical Cocktail Rooms & Foraged Bistros',
      accentColor: 'border-[#1E2721]',
      badgeClass: 'bg-[#EDE6D6] text-[#1E2721] border-[#DBD4C0]',
      route: '/menu/cafe-nova/template-21',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#F6F3EB] p-3 flex flex-col justify-between font-serif text-[#1E2721] border border-[#DBD4C0]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#DBD4C0]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-[#1E2721] text-[#C4923C] flex items-center justify-center text-[7px]">
                    🌿
                  </div>
                  <span className="text-[9px] font-bold text-[#1E2721]">L'Herbier</span>
                </div>
                <span className="text-[5px] font-mono uppercase bg-[#EDE6D6] text-[#1E2721] border border-[#DBD4C0] px-1 py-0.5 rounded font-bold">
                  Folio 01
                </span>
              </div>

              {/* Specimen Slide */}
              <div className="p-1.5 rounded-lg bg-[#EDE6D6] border border-[#DBD4C0] mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[5px] font-mono text-[#964F33] font-bold uppercase block">Wild Specimen</span>
                  <span className="text-[8px] font-bold">Morel & Thyme Broth</span>
                </div>
                <span className="text-base">🍄</span>
              </div>

              {/* Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-md bg-white border border-[#DBD4C0]">
                  <span className="text-[7.5px] font-bold text-[#1E2721]">Wild Foraged Salad</span>
                  <span className="text-[8px] font-mono font-bold text-[#964F33]">₹340</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-md bg-white border border-[#DBD4C0]">
                  <span className="text-[7.5px] font-bold text-[#1E2721]">Juniper Smoked Trout</span>
                  <span className="text-[8px] font-mono font-bold text-[#964F33]">₹580</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-[#DBD4C0] flex justify-between text-[6px] font-mono text-[#6A726A]">
              <span>FLORA & FUNGI</span>
              <span className="text-[#1E2721] font-bold">CONSERVATORY</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'atelier-monolith',
      category: 'restaurant',
      number: '22',
      name: 'Atelier Monolith',
      tagline: 'Swiss high-design lookbook with interactive expandable line-item ledgers',
      bestFor: 'Modernist Kitchens, Art Gallery Bistros, Contemporary Wine Bars & Tasting Rooms',
      accentColor: 'border-[#0047FF]',
      badgeClass: 'bg-[#0F0F11] text-white border-black/10',
      route: '/menu/cafe-nova/template-22',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#F7F7F8] p-3 flex flex-col justify-between font-mono text-[#0F0F11] border border-black/10">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-black/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-[#0F0F11] text-white flex items-center justify-center text-[7px] font-black">
                    M
                  </div>
                  <span className="text-[9px] font-black uppercase">MONOLITH</span>
                </div>
                <span className="text-[5px] bg-[#0047FF] text-white px-1 py-0.5 rounded font-bold">
                  LEDGER
                </span>
              </div>

              {/* Ledger Row Preview */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-md bg-white border border-black/10">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[6px] text-black/30">01.01</span>
                    <span className="text-[7.5px] font-bold">Smoked Duck Breast</span>
                  </div>
                  <span className="text-[7.5px] font-black">₹580</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-md bg-white border border-black/10">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[6px] text-black/30">01.02</span>
                    <span className="text-[7.5px] font-bold">Charred Leek Tart</span>
                  </div>
                  <span className="text-[7.5px] font-black">₹420</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-md bg-white border border-black/10">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[6px] text-black/30">01.03</span>
                    <span className="text-[7.5px] font-bold">Cold Brew Siphon</span>
                  </div>
                  <span className="text-[7.5px] font-black">₹260</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-black/10 flex justify-between text-[6px] text-black/40">
              <span>SWISS ARCHITECTURE</span>
              <span className="text-[#0047FF] font-black">LINE LEDGER</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'vault-obsidian',
      category: 'dark',
      number: '23',
      name: 'Vault Obsidian',
      tagline: 'Michelin speakeasy cellar with bottom floating thumb-dock, flavor spectrum & pairing matrix',
      bestFor: 'Tasting Rooms, Speakeasies, Chef’s Tables & High-End Cocktail Lounges',
      accentColor: 'border-[#DFB76C]',
      badgeClass: 'bg-[#11131B] text-[#DFB76C] border-white/10',
      route: '/menu/cafe-nova/template-23',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#090A0F] p-3 flex flex-col justify-between font-mono text-white border border-white/10">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-[#DFB76C] text-[#090A0F] flex items-center justify-center text-[7px] font-black">
                    V
                  </div>
                  <span className="text-[9px] font-black text-white">OBSIDIAN</span>
                </div>
                <span className="text-[5px] uppercase bg-[#DFB76C]/10 text-[#DFB76C] border border-[#DFB76C]/30 px-1 py-0.5 rounded font-bold">
                  ACT 01
                </span>
              </div>

              {/* Dish with Flavor & Pairing */}
              <div className="p-2 rounded-xl bg-[#11131B] border border-white/10 mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[7.5px] font-bold text-white">Binchotan Smoked Wagyu</span>
                  <span className="text-[7.5px] text-[#DFB76C] font-black">₹980</span>
                </div>
                <div className="flex gap-1 text-[5px] text-white/50 mb-1">
                  <span className="bg-white/5 px-1 py-0.2 rounded">Oak Smoked</span>
                  <span className="bg-white/5 px-1 py-0.2 rounded">Truffle Umami</span>
                </div>
                <span className="text-[5.5px] text-[#DFB76C] italic block">Pair: Pinot Noir 2019</span>
              </div>
            </div>

            {/* Bottom Thumb Dock Preview */}
            <div className="p-1 rounded-full bg-black/80 border border-white/20 flex justify-center gap-1 text-[5px]">
              <span className="px-2 py-0.5 rounded-full bg-[#DFB76C] text-black font-bold">ALL</span>
              <span className="px-2 py-0.5 rounded-full text-white/60">ACT 01</span>
              <span className="px-2 py-0.5 rounded-full text-white/60">ACT 02</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'shinjuku-yatai',
      category: 'restaurant',
      number: '24',
      name: 'Shinjuku Yatai',
      tagline: 'Tokyo midnight izakaya with charred cedarwood, red paper lanterns & wooden Kifuda slats',
      bestFor: 'Yakitori Stalls, Late-Night Izakayas, Ramen Bars & Japanese Robata Counters',
      accentColor: 'border-[#E63946]',
      badgeClass: 'bg-[#18161A] text-[#E63946] border-white/10',
      route: '/menu/cafe-nova/template-24',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#121113] p-3 flex flex-col justify-between font-serif text-white border border-white/10">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-[#E63946] text-white flex items-center justify-center text-[7px] font-black">
                    鳥
                  </div>
                  <span className="text-[9px] font-bold text-white">Torii Yatai</span>
                </div>
                <span className="text-[5px] font-mono uppercase bg-[#E63946]/20 text-[#FF6B6B] border border-[#E63946]/40 px-1 py-0.5 rounded font-bold">
                  夜市 Live
                </span>
              </div>

              {/* Skewer Card */}
              <div className="p-1.5 rounded-xl bg-[#18161A] border border-white/10 mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[5px] font-mono text-[#E63946] uppercase font-bold block">炭火 Yakitori</span>
                  <span className="text-[8px] font-bold">Tare Glazed Tsukune</span>
                </div>
                <span className="text-base">🍢</span>
              </div>

              {/* Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-[#18161A] border border-white/5">
                  <span className="text-[7.5px] font-bold text-white">Negima Chicken Skewer</span>
                  <span className="text-[8px] font-mono font-bold text-[#E9C46A]">₹280</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-[#18161A] border border-white/5">
                  <span className="text-[7.5px] font-bold text-white">Crispy Pork Gyoza</span>
                  <span className="text-[8px] font-mono font-bold text-[#E9C46A]">₹320</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between text-[6px] font-mono text-white/50">
              <span>SHINJUKU ALLEY</span>
              <span className="text-[#E63946] font-bold">🏮 IZAKAYA</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'fjord-frost',
      category: 'restaurant',
      number: '25',
      name: 'Fjord & Frost',
      tagline: 'Nordic glacial hearth with cold-cured cuts, birch embers & arctic smörgåsbord',
      bestFor: 'Nordic Smokehouses, Seafood Bars, Modern Arctic Bistros & Alpine Lodges',
      accentColor: 'border-[#38BDF8]',
      badgeClass: 'bg-[#0B192C] text-[#38BDF8] border-[#38BDF8]/40',
      route: '/menu/cafe-nova/template-25',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#F0F4F8] p-3 flex flex-col justify-between font-serif text-[#0B192C] border border-[#CBD5E1]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#CBD5E1]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-[#0B192C] text-[#38BDF8] flex items-center justify-center text-[7px] font-bold">
                    ᚠ
                  </div>
                  <span className="text-[9px] font-bold text-[#0B192C]">Fjord & Frost</span>
                </div>
                <span className="text-[5px] font-mono uppercase bg-[#0B192C] text-[#38BDF8] px-1 py-0.5 rounded font-bold">
                  64°N
                </span>
              </div>

              {/* Smörgåsbord Card */}
              <div className="p-1.5 rounded-xl bg-white border border-[#CBD5E1] mb-2 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[5px] font-mono text-[#0284C7] uppercase font-bold block">Cold Smoked</span>
                  <span className="text-[8px] font-bold">Sea-Salted Gravlax</span>
                </div>
                <span className="text-base">🐟</span>
              </div>

              {/* Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-white border border-[#E2E8F0]">
                  <span className="text-[7.5px] font-bold text-[#0B192C]">Birch-Roasted Venison</span>
                  <span className="text-[8px] font-mono font-bold text-[#0284C7]">₹620</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-white border border-[#E2E8F0]">
                  <span className="text-[7.5px] font-bold text-[#0B192C]">Lingonberry Rye Tart</span>
                  <span className="text-[8px] font-mono font-bold text-[#0284C7]">₹280</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-[#CBD5E1] flex justify-between text-[6px] font-mono text-slate-500">
              <span>ARCTIC HARBOR</span>
              <span className="text-[#0284C7] font-bold">SMÖRGÅSBORD</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'cyanotype-blueprint',
      category: 'restaurant',
      number: '26',
      name: 'Cyanotype Blueprint',
      tagline: 'Technical engineering blueprint with drafting grid, CAD crosshairs & schematic component breakouts',
      bestFor: 'Culinary Labs, Molecular Gastronomy, Craft Cocktail Studios & Industrial Micro-Roasters',
      accentColor: 'border-[#00F0FF]',
      badgeClass: 'bg-[#071324] text-[#00F0FF] border-[#00F0FF]/30',
      route: '/menu/cafe-nova/template-26',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#0A192F] p-3 flex flex-col justify-between font-mono text-white border border-[#00F0FF]/30">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#00F0FF]/20">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/40 flex items-center justify-center text-[7px] font-black">
                    ⌖
                  </div>
                  <span className="text-[9px] font-black uppercase text-[#F0F4F8]">BLUEPRINT</span>
                </div>
                <span className="text-[5px] bg-[#00F0FF]/20 text-[#00F0FF] px-1 py-0.5 rounded font-bold">
                  REV. C
                </span>
              </div>

              {/* Schematic Box */}
              <div className="p-1.5 rounded bg-[#071324] border border-[#00F0FF]/20 mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[5px] text-[#48CAE4] uppercase block font-bold">SPEC // 01.01</span>
                  <span className="text-[8px] font-bold text-white">Cold-Pressed Truffle Infusion</span>
                </div>
                <span className="text-[7.5px] px-1.5 py-0.5 rounded bg-[#0A192F] text-[#00F0FF] border border-[#00F0FF]/40 font-bold">₹460</span>
              </div>

              {/* Components */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded bg-[#071324] border border-[#00F0FF]/10">
                  <span className="text-[7px] text-[#8DA9C4]">Smoked Charcoal Brioche</span>
                  <span className="text-[7.5px] font-bold text-[#00F0FF]">₹290</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded bg-[#071324] border border-[#00F0FF]/10">
                  <span className="text-[7px] text-[#8DA9C4]">Clarified Yuzu Highball</span>
                  <span className="text-[7.5px] font-bold text-[#00F0FF]">₹380</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-[#00F0FF]/20 flex justify-between text-[6px] text-[#8DA9C4]">
              <span>SCALE 1:1</span>
              <span className="text-[#00F0FF] font-bold">CAD DWG 26</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'split-pane-stage',
      category: 'restaurant',
      number: '27',
      name: 'The Split-Pane Stage',
      tagline: 'Dual-pane interactive master-detail kiosk with pinned live inspection stage',
      bestFor: 'Modern Tasting Rooms, Chef Counters, Interactive Table Tablets & High-Design Bistros',
      accentColor: 'border-[#FF3B00]',
      badgeClass: 'bg-[#1A1A1A] text-[#FAF8F5] border-[#1A1A1A]',
      route: '/menu/cafe-nova/template-27',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#FAF8F5] p-2.5 flex flex-col justify-between font-mono text-[#1A1A1A] border border-[#1A1A1A]/20">
            <div>
              <div className="flex justify-between items-center pb-1 mb-1.5 border-b border-[#1A1A1A]/10 text-[6px]">
                <span className="font-bold">STUDIO RAW</span>
                <span className="text-[#FF3B00]">STAGE // 27</span>
              </div>

              <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                <div className="bg-[#1A1A1A] text-white p-1 rounded-lg flex flex-col justify-between h-14">
                  <span className="text-[5px] text-[#FF3B00]">STAGE VIEW</span>
                  <span className="text-[6.5px] font-bold">Smoked Wagyu</span>
                  <span className="text-[5px] text-white/50">₹980</span>
                </div>
                <div className="space-y-0.5">
                  <div className="bg-white p-1 rounded border border-[#1A1A1A]/15 text-[6px]">Wagyu Cut</div>
                  <div className="bg-white p-1 rounded border border-[#1A1A1A]/15 text-[6px]">Charred Leek</div>
                  <div className="bg-white p-1 rounded border border-[#1A1A1A]/15 text-[6px]">Truffle Mash</div>
                </div>
              </div>
            </div>

            <div className="pt-1 border-t border-[#1A1A1A]/10 flex justify-between text-[5px] text-[#1A1A1A]/50">
              <span>MASTER-DETAIL</span>
              <span className="text-[#FF3B00] font-bold">LIVE STAGE</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'pocket-feed-drawer',
      category: 'restaurant',
      number: '28',
      name: 'Pocket Feed & Drawer',
      tagline: 'Mobile-first app layout with Instagram story highlights, horizontal snap decks & bottom sheet modal',
      bestFor: 'Mobile QR Menus, Fast-Casual Dining, Streetwear Cafés & Modern Night Spots',
      accentColor: 'border-[#FF5E00]',
      badgeClass: 'bg-[#FF5E00] text-black border-[#FF5E00]',
      route: '/menu/cafe-nova/template-28',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#0A0C10] p-2.5 flex flex-col justify-between font-mono text-white border border-white/10">
            <div>
              {/* Header */}
              <div className="flex justify-between items-center pb-1 border-b border-white/10 text-[6px]">
                <span className="text-[#FF5E00] font-bold">POCKET // APP</span>
                <span className="text-white/50">TABLE 04</span>
              </div>

              {/* Story circles */}
              <div className="flex gap-1 py-1.5 border-b border-white/5 overflow-hidden">
                <div className="w-5 h-5 rounded-full border border-[#FF5E00] bg-white/10 shrink-0" />
                <div className="w-5 h-5 rounded-full border border-[#FF5E00] bg-white/10 shrink-0" />
                <div className="w-5 h-5 rounded-full border border-[#FF5E00] bg-white/10 shrink-0" />
              </div>

              {/* Snap Card Mock */}
              <div className="pt-1.5 flex gap-1.5">
                <div className="w-14 h-14 rounded-lg bg-[#141721] border border-white/10 p-1 flex flex-col justify-between text-[5px]">
                  <span className="font-bold truncate">Truffle Burger</span>
                  <span className="text-[#FF5E00] font-bold">₹420</span>
                </div>
                <div className="w-14 h-14 rounded-lg bg-[#141721] border border-white/10 p-1 flex flex-col justify-between text-[5px]">
                  <span className="font-bold truncate">Crispy Fries</span>
                  <span className="text-[#FF5E00] font-bold">₹180</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar Mock */}
            <div className="p-1 rounded-full bg-white/10 flex justify-between text-[5px] px-2 text-white/70">
              <span>FILTERS</span>
              <span className="text-[#FF5E00] font-bold">JUMP ▾</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'chroma-avant-garde',
      category: 'restaurant',
      number: '29',
      name: 'Chroma Avant-Garde',
      tagline: 'Liquid chrome & iridescent exhibition lab with fully responsive 1-to-3 column gallery scaling',
      bestFor: 'High-Fashion Concept Cafés, Streetwear Eateries, Avant-Garde Dessert Labs & Seoul-Style Bistros',
      accentColor: 'border-[#00F5D4]',
      badgeClass: 'bg-[#0E1015] text-[#00F5D4] border-white/10',
      route: '/menu/cafe-nova/template-29',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#060709] p-3 flex flex-col justify-between font-mono text-white border border-white/10">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-[#00F5D4] to-[#F72585] text-black flex items-center justify-center text-[7px] font-black">
                    ◈
                  </div>
                  <span className="text-[9px] font-black uppercase">CHROMA</span>
                </div>
                <span className="text-[5px] bg-[#00F5D4]/20 text-[#00F5D4] px-1 py-0.5 rounded font-bold">
                  LAB 29
                </span>
              </div>

              {/* Holographic Card Mock */}
              <div className="p-2 rounded-xl bg-[#0E1015] border border-white/10 mb-2 flex items-center justify-between">
                <div>
                  <span className="text-[5px] text-[#00F5D4] uppercase font-bold block">SCULPT // 01</span>
                  <span className="text-[8px] font-bold text-white">Black Sesame Monolith</span>
                </div>
                <span className="text-[7.5px] px-1.5 py-0.5 rounded bg-white text-black font-black">₹480</span>
              </div>

              {/* Sub Items */}
              <div className="space-y-1">
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-[#0E1015] border border-white/5">
                  <span className="text-[7px] text-zinc-400">Matcha Geode Tart</span>
                  <span className="text-[7.5px] font-bold text-white">₹380</span>
                </div>
                <div className="flex justify-between items-center p-1.5 rounded-lg bg-[#0E1015] border border-white/5">
                  <span className="text-[7px] text-zinc-400">Yuzu Nitrogen Cold Drop</span>
                  <span className="text-[7.5px] font-bold text-white">₹320</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between text-[6px] text-zinc-500">
              <span>RESPONSIVE EXHIBIT</span>
              <span className="text-[#00F5D4] font-bold">CHROMA 29</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'linear-course-stepper',
      category: 'restaurant',
      number: '30',
      name: 'Linear Course Stepper',
      tagline: 'Course-by-course sequential flight on mobile with panoramic banquet gallery on desktop',
      bestFor: 'Tasting Menus, Banquet Dining, Multi-Course Omakase & Chef Tables',
      accentColor: 'border-[#FF5722]',
      badgeClass: 'bg-[#FF5722] text-black border-[#FF5722]',
      route: '/menu/cafe-nova/template-30',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#0A0C10] p-2.5 flex flex-col justify-between font-mono text-white border border-white/10">
            <div>
              {/* Header */}
              <div className="flex justify-between items-center pb-1 border-b border-white/10 text-[6px]">
                <span className="text-[#FF5722] font-bold">COURSE 01</span>
                <span className="text-white/50">STEP 1/5</span>
              </div>

              {/* Stepper Dots */}
              <div className="flex gap-1 py-1.5 border-b border-white/5">
                <span className="w-4 h-1 rounded bg-[#FF5722]" />
                <span className="w-4 h-1 rounded bg-white/20" />
                <span className="w-4 h-1 rounded bg-white/20" />
                <span className="w-4 h-1 rounded bg-white/20" />
              </div>

              {/* Course Plate Mock */}
              <div className="pt-2 space-y-1">
                <div className="p-1.5 rounded-lg bg-[#14161F] border border-white/10 flex justify-between text-[6px]">
                  <span className="font-bold">Heirloom Crudo</span>
                  <span className="text-[#FF5722] font-bold">₹490</span>
                </div>
                <div className="p-1.5 rounded-lg bg-[#14161F] border border-white/10 flex justify-between text-[6px]">
                  <span className="font-bold">Charred Leek Bisque</span>
                  <span className="text-[#FF5722] font-bold">₹380</span>
                </div>
              </div>
            </div>

            {/* Floating Stepper Control Mock */}
            <div className="p-1 rounded-full bg-[#14161F] border border-white/20 flex justify-between text-[5px] px-2">
              <span className="text-white/40">PREV</span>
              <span className="text-[#FF5722] font-bold">NEXT COURSE →</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'transit-line',
      category: 'restaurant',
      number: '31',
      name: 'The Transit Line',
      tagline: 'Underground municipal transit route with continuous vertical subway rails & station stop nodes',
      bestFor: 'Modern Taprooms, Food Halls, Fast-Casual Transit Hubs & Street Concourse Dining',
      accentColor: 'border-[#FF3344]',
      badgeClass: 'bg-[#161922] text-[#00D26A] border-white/10',
      route: '/menu/cafe-nova/template-31',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#0C0E14] p-3 flex flex-col justify-between font-mono text-white border border-white/10">
            <div>
              {/* Top Line HUD */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-md bg-[#FF3344] flex items-center justify-center text-[7px] font-black text-white">
                    ●
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider">TRANSIT 31</span>
                </div>
                <span className="text-[5px] bg-[#00D26A]/20 text-[#00D26A] px-1 py-0.5 rounded font-bold">
                  PLATFORM 04
                </span>
              </div>

              {/* Continuous Track Simulation */}
              <div className="relative pl-3 space-y-1.5">
                <div className="absolute left-[5px] top-1 bottom-1 w-0.5 bg-[#FF3344] rounded-full" />
                
                <div className="relative flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full border-2 border-[#FF3344] bg-[#0C0E14] z-10" />
                  <div className="flex-1 p-1 rounded bg-[#161922] border border-white/10 flex justify-between text-[6px]">
                    <span className="font-bold">Charred Pork Skewer</span>
                    <span className="text-[#00D26A] font-bold">₹340</span>
                  </div>
                </div>

                <div className="relative flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full border-2 border-[#FF3344] bg-[#0C0E14] z-10" />
                  <div className="flex-1 p-1 rounded bg-[#161922] border border-white/10 flex justify-between text-[6px]">
                    <span className="font-bold">Smoked Dashi Bowl</span>
                    <span className="text-[#00D26A] font-bold">₹420</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between text-[6px] text-white/50">
              <span>METRO CONCOURSE</span>
              <span className="text-[#FF3344] font-bold">ROUTE 31</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'mystic-arcana',
      category: 'restaurant',
      number: '32',
      name: 'The Mystic Arcana',
      tagline: 'Celestial tarot parlor with interactive 3D flip cards, culinary divinations & oracle dish draw',
      bestFor: 'Mystic Speakeasies, Alchemy Cocktail Lounges, Astrological Dining & Midnight Salons',
      accentColor: 'border-[#E5C06E]',
      badgeClass: 'bg-[#0D0F1D] text-[#E5C06E] border-[#E5C06E]/40',
      route: '/menu/cafe-nova/template-32',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#080911] p-3 flex flex-col justify-between font-serif text-white border border-[#E5C06E]/30">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#E5C06E]/20 text-[6px]">
                <span className="text-[#E5C06E] font-bold">ARCANA 32</span>
                <span className="text-zinc-400 font-mono">✦ TABLE III</span>
              </div>

              {/* 3D Card Mock */}
              <div className="p-2 rounded-xl bg-[#0D0F1D] border border-[#E5C06E]/40 mb-2 flex flex-col items-center text-center">
                <span className="text-[5px] font-mono text-[#E5C06E] uppercase">ARCANUM IX</span>
                <span className="text-base my-0.5">🌱</span>
                <span className="text-[7.5px] font-bold text-white uppercase">Truffled Morel Arcana</span>
                <span className="text-[7px] font-mono text-[#E5C06E] font-black mt-1">₹520</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-[#E5C06E]/20 flex justify-between text-[6px] font-mono text-zinc-500">
              <span>3D FLIP CARTE</span>
              <span className="text-[#E5C06E] font-bold">ORACLE DRAW</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'noir-contact-sheet',
      category: 'dark',
      number: '33',
      name: 'Noir 35mm Contact Sheet',
      tagline: 'Analog darkroom proof sheet with film sprockets, optical exposure specs & red safelight mode',
      bestFor: 'Culinary Labs, Cinematography Cafés, Film Lounges & Late-Night Charcoal Kitchens',
      accentColor: 'border-[#FFC72C]',
      badgeClass: 'bg-[#14171F] text-[#FFC72C] border-white/10',
      route: '/menu/cafe-nova/template-33',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#0A0B0E] p-3 flex flex-col justify-between font-mono text-white border border-white/15">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10 text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-[#FFC72C] text-black font-black flex items-center justify-center text-[5px]">
                    35
                  </span>
                  <span className="font-black text-white">NOIR 400</span>
                </div>
                <span className="text-[#FFC72C]">EXP. 33</span>
              </div>

              {/* Film Frame Preview */}
              <div className="p-1.5 rounded-lg bg-[#14171F] border border-white/10 mb-1.5">
                <div className="flex justify-between items-center text-[5px] text-white/50 mb-0.5">
                  <span>FRAME ▸ 01A</span>
                  <span className="text-[#FFC72C] font-bold">₹540</span>
                </div>
                <span className="text-[7.5px] font-bold text-white block truncate uppercase">
                  Charcoal Smoked Duck
                </span>
                <span className="text-[5px] text-white/40 block">ƒ/1.8 • 1/250s</span>
              </div>
            </div>

            {/* Sprocket Holes Footer Preview */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between items-center text-[5px] text-white/40">
              <span>KODAK SAFETY FILM</span>
              <div className="flex gap-0.5">
                <span className="w-1.5 h-1 rounded-[1px] bg-white/20" />
                <span className="w-1.5 h-1 rounded-[1px] bg-white/20" />
                <span className="w-1.5 h-1 rounded-[1px] bg-white/20" />
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 'classified-dossier',
      category: 'restaurant',
      number: '34',
      name: 'The Classified Dossier',
      tagline: 'Cold War espionage file with manila folder tabs, paperclipped evidence & interactive redacted ink',
      bestFor: 'Themed Speakeasies, Mystery Diners, Retro Lounges & Experiential Chef Tables',
      accentColor: 'border-[#B91C1C]',
      badgeClass: 'bg-[#F5EFE1] text-[#1A1A1A] border-[#1A1A1A]',
      route: '/menu/cafe-nova/template-34',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#ECE3CE] p-3 flex flex-col justify-between font-mono text-[#1A1A1A] border-2 border-[#1A1A1A]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#1A1A1A] text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-[#B91C1C] text-white font-black flex items-center justify-center text-[5px]">
                    TOP
                  </span>
                  <span className="font-black uppercase">DOSSIER 34</span>
                </div>
                <span className="text-[#B91C1C] font-bold">LEVEL 5</span>
              </div>

              {/* Dossier Card Mock */}
              <div className="p-1.5 rounded bg-[#F5EFE1] border border-[#1A1A1A] mb-1.5 shadow-[2px_2px_0px_0px_#1A1A1A]">
                <div className="flex justify-between items-center text-[5px] mb-0.5">
                  <span className="bg-[#1A1A1A] text-white px-1 rounded">ASSET #01</span>
                  <span className="font-bold">₹580</span>
                </div>
                <span className="text-[7.5px] font-black block truncate uppercase">
                  Charcoal Smoked Brisket
                </span>
                <div className="flex gap-1 mt-0.5">
                  <span className="bg-[#1A1A1A] text-[#1A1A1A] text-[5px] px-1 rounded">██████</span>
                  <span className="text-[5px] text-[#B91C1C] font-bold">[REDACTED]</span>
                </div>
              </div>
            </div>

            {/* Footer Preview */}
            <div className="pt-1.5 border-t border-[#1A1A1A] flex justify-between items-center text-[5px]">
              <span>CONFIDENTIAL</span>
              <span className="text-[#B91C1C] font-bold">DECLASSIFIED</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'alchemists-codex',
      category: 'restaurant',
      number: '35',
      name: "The Alchemist's Codex",
      tagline: 'Tabletop RPG tavern & guild quest board with item rarity tiers, stat buffs & gold piece pricing',
      bestFor: 'Themed Taverns, Board Game Cafés, Mead Halls & Fantasy Cocktail Lounges',
      accentColor: 'border-[#F59E0B]',
      badgeClass: 'bg-[#151924] text-[#F59E0B] border-[#F59E0B]/40',
      route: '/menu/cafe-nova/template-35',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#0B0D13] p-3 flex flex-col justify-between font-mono text-white border border-[#F59E0B]/30">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#F59E0B]/20 text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-[#F59E0B] text-black font-black flex items-center justify-center text-[5px]">
                    ⚔️
                  </span>
                  <span className="font-black text-[#FDE68A]">GUILD CODEX</span>
                </div>
                <span className="text-[#F59E0B] font-bold">LVL 35</span>
              </div>

              {/* Item Slot Mock */}
              <div className="p-1.5 rounded-lg bg-[#121622] border border-[#F59E0B] mb-1.5 shadow-md">
                <div className="flex justify-between items-center text-[5px] mb-0.5">
                  <span className="bg-[#F59E0B] text-black px-1 rounded font-black">LEGENDARY</span>
                  <span className="text-[#FDE68A] font-bold">🪙 480 GP</span>
                </div>
                <span className="text-[7.5px] font-bold text-white block truncate uppercase">
                  Wyrmwing Roast
                </span>
                <div className="flex gap-1 text-[5px] text-emerald-400 mt-0.5">
                  <span>+35 Stamina</span>
                  <span>+15 Spirit</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between items-center text-[5px] text-zinc-500">
              <span>TABLETOP RPG</span>
              <span className="text-[#F59E0B] font-bold">ACTIVE QUEST</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'shonen-graphic',
      category: 'restaurant',
      number: '36',
      name: 'Shonen Graphic',
      tagline: 'Manga & graphic novel halftone panels with action gutters, speech bubbles & onomatopoeia stamps',
      bestFor: 'Anime Theme Bistros, Manga Cafés, Street Food Dens & Pop-Culture Burger Bars',
      accentColor: 'border-black',
      badgeClass: 'bg-yellow-300 text-black border-black',
      route: '/menu/cafe-nova/template-36',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-white p-3 flex flex-col justify-between font-sans text-black border-3 border-black">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b-2 border-black text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-black text-white font-black flex items-center justify-center text-[5px]">
                    巻
                  </span>
                  <span className="font-black uppercase">SHONEN 36</span>
                </div>
                <span className="bg-yellow-300 border border-black px-1 font-bold">VOL. 36</span>
              </div>

              {/* Comic Panel Preview */}
              <div className="p-1.5 rounded bg-white border-2 border-black mb-1.5 shadow-[2px_2px_0px_0px_#000]">
                <div className="flex justify-between items-center text-[5px] mb-0.5">
                  <span className="bg-black text-white px-1 font-black">PANEL 01</span>
                  <span className="font-black bg-yellow-300 px-1 border border-black">₹380</span>
                </div>
                <span className="text-[7.5px] font-black block truncate uppercase">
                  Dragon Fire Ramen
                </span>
                <span className="text-[5.5px] font-mono text-black/60">ジュワ~ (SIZZLE!)</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t-2 border-black flex justify-between items-center text-[5px] font-mono">
              <span>CHAPTER 01</span>
              <span className="font-black bg-black text-white px-1">TO BE CONT. ➔</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'morning-dispatch',
      category: 'restaurant',
      number: '37',
      name: 'The Morning Dispatch',
      tagline: 'Vintage daily broadsheet newspaper with headline stories, datelines & clippable coupon borders',
      bestFor: 'Heritage Bistros, Historic Saloons, All-Day Breakfast Parlors & Roastery Cafés',
      accentColor: 'border-black',
      badgeClass: 'bg-[#F5EFEB] text-black border-black',
      route: '/menu/cafe-nova/template-37',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#F5EFEB] p-3 flex flex-col justify-between font-serif text-black border-2 border-black">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1 mb-2 border-b-2 border-black text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="font-black uppercase">DISPATCH 37</span>
                </div>
                <span className="font-mono text-black/60">VOL. XXXVII</span>
              </div>

              {/* News Item Mock */}
              <div className="p-1.5 bg-white border border-black mb-1.5 shadow-[2px_2px_0px_0px_#121212]">
                <div className="flex justify-between items-center text-[5px] font-mono mb-0.5">
                  <span className="bg-black text-white px-1 font-bold">DISPATCH #01</span>
                  <span className="font-black">₹460</span>
                </div>
                <span className="text-[7.5px] font-black block truncate uppercase">
                  Charred Wagyu Roast
                </span>
                <span className="text-[5px] font-sans text-black/70 block mt-0.5">
                  Dateline: Hearth Flame — Plated Fresh
                </span>
              </div>
            </div>

            {/* Footer Preview */}
            <div className="pt-1 border-t-2 border-black flex justify-between items-center text-[5px] font-mono">
              <span>DAILY EDITION</span>
              <span className="font-black text-[#8B0000]">HOT OFF PRESS</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'the-reel-feed',
      category: 'restaurant',
      number: '38',
      name: 'The Reel Feed',
      tagline: 'Mobile-native vertical snap reel with full-bleed viewports, floating thumb rail & jump directory',
      bestFor: 'Modern Street Food, Cloud Kitchens, Visual Cafés & Fast-Casual Tapas Lounges',
      accentColor: 'border-[#CCFF00]',
      badgeClass: 'bg-[#CCFF00] text-black border-[#CCFF00]',
      route: '/menu/cafe-nova/template-38',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-black p-2.5 flex flex-col justify-between font-mono text-white border border-white/20">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1 border-b border-white/10 text-[6px]">
                <span className="text-[#CCFF00] font-black uppercase">REEL 38</span>
                <span className="text-white/60">01 / 18</span>
              </div>

              {/* Full-Bleed Simulated Viewport Slide */}
              <div className="relative h-24 rounded-lg bg-zinc-900 border border-white/10 p-1.5 flex flex-col justify-end mt-1.5 overflow-hidden">
                <span className="text-[5px] text-[#CCFF00] uppercase font-bold">STARTERS</span>
                <span className="text-[7.5px] font-black text-white uppercase truncate">
                  Crispy Truffle Fries
                </span>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[7px] font-black text-white bg-[#CCFF00] text-black px-1 rounded">
                    ₹320
                  </span>
                  <span className="text-[5px] text-white/50">SWIPE UP ▾</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1 border-t border-white/10 flex justify-between items-center text-[5px]">
              <span>SNAP VIEWPORT</span>
              <span className="text-[#CCFF00] font-bold">100DVH REEL</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'elemental-matrix',
      category: 'restaurant',
      number: '39',
      name: 'The Elemental Matrix',
      tagline: 'Molecular gastronomy & periodic table of flavor with atomic symbols, mass pricing & valence modals',
      bestFor: 'Molecular Gastronomy Labs, Experimental Cocktail Studios, Modernist Bistros & Sensory Dining',
      accentColor: 'border-cyan-400',
      badgeClass: 'bg-[#0E121B] text-cyan-300 border-cyan-500/40',
      route: '/menu/cafe-nova/template-39',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#080A0F] p-3 flex flex-col justify-between font-mono text-white border border-cyan-500/30">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-cyan-500/20 text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-cyan-400 text-black font-black flex items-center justify-center text-[5px]">
                    ⚗️
                  </span>
                  <span className="font-black text-cyan-300">ELEMENT 39</span>
                </div>
                <span className="text-cyan-400 font-bold">PERIODIC</span>
              </div>

              {/* Atomic Block Mock */}
              <div className="p-1.5 rounded-lg bg-[#0D1017] border border-cyan-400 mb-1.5 text-center flex flex-col justify-between">
                <div className="flex justify-between text-[5px] text-white/50">
                  <span>01</span>
                  <span className="text-cyan-400">+2</span>
                </div>
                <span className="text-sm font-black text-cyan-300 block my-0.5">Wg</span>
                <span className="text-[6.5px] font-bold text-white uppercase truncate block">Wagyu Truffle</span>
                <span className="text-[5px] text-zinc-400 mt-0.5">MASS: ₹480</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between items-center text-[5px] text-zinc-500">
              <span>PERIODIC MATRIX</span>
              <span className="text-cyan-400 font-bold">VALENCE V39</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'thermal-receipt-roll',
      category: 'restaurant',
      number: '40',
      name: 'The Thermal Receipt Roll',
      tagline: 'Continuous thermal paper register roll with dot-matrix typography, serrated edges & barcode tail',
      bestFor: 'Modern Delis, Counter Bakeries, Street Sandwich Shops & Craft Burger Joints',
      accentColor: 'border-black',
      badgeClass: 'bg-[#FAF8F5] text-black border-black',
      route: '/menu/cafe-nova/template-40',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#111215] p-2 flex flex-col justify-center font-mono">
            <div className="bg-[#FAF8F5] p-2.5 text-[#18181B] shadow-md border-x border-black/10 flex flex-col justify-between h-full">
              <div>
                <div className="text-center border-b border-dashed border-black/30 pb-1 mb-1">
                  <span className="text-[5px] text-black/60 uppercase block">*** TAX INVOICE ***</span>
                  <span className="text-[8px] font-black uppercase text-black">NOVA RECEIPT</span>
                </div>

                <div className="space-y-0.5 text-[6px]">
                  <div className="flex justify-between font-bold">
                    <span>1x Pastrami Reuben</span>
                    <span>₹420.00</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>1x Salted Soft Pretzel</span>
                    <span>₹180.00</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-dashed border-black/30 pt-1 text-center">
                <span className="text-[5px] font-bold block">* 0440-2026 *</span>
                <span className="text-[5px] text-black/50">THANK YOU</span>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 'aeronaut-41',
      category: 'restaurant',
      number: '41',
      name: 'Aeronaut 41',
      tagline: 'Golden age aviation with split-flap departure boards, terminal gates & perforated boarding pass tickets',
      bestFor: 'Airport Lounges, Travel-Themed Bistros, Rooftop Sky Bars & First-Class Dining Clubs',
      accentColor: 'border-[#FF4B26]',
      badgeClass: 'bg-[#0F1C32] text-[#FF4B26] border-[#FF4B26]/30',
      route: '/menu/cafe-nova/template-41',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#0A1424] p-3 flex flex-col justify-between font-mono text-white border border-[#FF4B26]/30">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/10 text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-[#FF4B26] text-white font-black flex items-center justify-center text-[5px]">
                    ✈
                  </span>
                  <span className="font-black text-white">AERONAUT 41</span>
                </div>
                <span className="text-[#FFC72C] font-bold">SEAT 04A</span>
              </div>

              {/* Boarding Pass Ticket Mock */}
              <div className="p-1.5 rounded-lg bg-white text-[#0A1424] border border-white mb-1.5 flex justify-between items-center shadow-md">
                <div>
                  <div className="flex gap-1 text-[5px] text-zinc-500 font-bold">
                    <span>GATE 01</span>
                    <span>•</span>
                    <span className="text-[#FF4B26]">FIRST CLASS</span>
                  </div>
                  <span className="text-[7.5px] font-black uppercase block truncate">
                    Smoked Salmon Crudo
                  </span>
                  <span className="text-[5.5px] text-zinc-600">HEARTH ✈ TABLE</span>
                </div>
                <div className="border-l-2 border-dashed border-zinc-300 pl-1.5 text-right shrink-0">
                  <span className="text-[5px] text-zinc-400 block">SEAT 01A</span>
                  <span className="text-[7.5px] font-black text-[#FF4B26]">₹540</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between items-center text-[5px] text-zinc-500">
              <span>BOARDING PASS</span>
              <span className="text-[#FF4B26] font-bold">FLIGHT FL-041</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'maison-brasserie',
      category: 'restaurant',
      number: '42',
      name: 'Maison 42',
      tagline: 'Warm architectural brasserie & artisan café with balanced editorial typography and clean line item cards',
      bestFor: 'Modern Bistros, Artisan Roasteries, European Brasseries & Upscale All-Day Dining',
      accentColor: 'border-[#9E5A38]',
      badgeClass: 'bg-[#FAF9F5] text-[#1A1918] border-[#E8E5DF]',
      route: '/menu/cafe-nova/template-42',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#FAF9F5] p-3 flex flex-col justify-between font-serif text-[#1A1918] border border-[#E8E5DF]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#E8E5DF] text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-[#1A1918] text-white font-bold flex items-center justify-center text-[5px]">
                    M
                  </span>
                  <span className="font-bold text-[#1A1918]">MAISON 42</span>
                </div>
                <span className="text-[#9E5A38] font-sans font-bold">ALL-DAY</span>
              </div>

              {/* Dish Card Mock */}
              <div className="p-2 rounded-lg bg-white border border-[#E8E5DF] mb-1.5 flex justify-between items-center shadow-2xs">
                <div>
                  <span className="text-[7.5px] font-bold text-[#1A1918] block">Smoked Ricotta Brioche</span>
                  <span className="text-[5.5px] font-sans text-[#736E65]">Wild thyme & mountain honey</span>
                </div>
                <span className="text-[7px] font-bold font-serif text-[#1A1918]">₹340</span>
              </div>

              <div className="p-2 rounded-lg bg-white border border-[#E8E5DF] flex justify-between items-center shadow-2xs">
                <div>
                  <span className="text-[7.5px] font-bold text-[#1A1918] block">Cast Iron Flat Iron Steak</span>
                  <span className="text-[5.5px] font-sans text-[#736E65]">Shallot butter & charred greens</span>
                </div>
                <span className="text-[7px] font-bold font-serif text-[#1A1918]">₹680</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-[#E8E5DF] flex justify-between items-center text-[5px] font-sans text-[#736E65]">
              <span>CONTEMPORARY BRASSERIE</span>
              <span className="text-[#1A1918] font-bold">DINE-IN</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'mahamaya-bhog',
      category: 'restaurant',
      number: '43',
      name: 'Mahamaya 43',
      tagline: 'Durga Puja grand ekchala with divine trinetra eyes, ceremonial trishul, dhunachi smoke & alpona scrollwork',
      bestFor: 'Durga Puja Food Pandals, Bengali Heritage Bistros, Festival Banquets & Bengali Sweet Parlors',
      accentColor: 'border-[#B91C1C]',
      badgeClass: 'bg-[#B91C1C] text-white border-[#B91C1C]',
      route: '/menu/cafe-nova/template-43',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#FFFDF8] p-3 flex flex-col justify-between font-serif text-[#1F1917] border-2 border-[#B91C1C]">
            <div>
              {/* Top Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#B91C1C]/20 text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-3.5 h-3.5 rounded bg-[#B91C1C] text-[#FDE68A] font-bold flex items-center justify-center text-[6px]">
                    👁️
                  </span>
                  <span className="font-black text-[#7F1D1D]">MAHAMAYA 43</span>
                </div>
                <span className="text-[#B91C1C] font-sans font-bold">মা আসছেন</span>
              </div>

              {/* Kansa Card Mock */}
              <div className="p-2 rounded-xl bg-white border border-[#B91C1C]/30 mb-1.5 shadow-xs">
                <div className="flex justify-between items-center text-[5.5px] font-sans mb-0.5">
                  <span className="text-[#B91C1C] font-black">NIRAMISH BHOG</span>
                  <span className="font-bold text-[#7F1D1D]">₹380</span>
                </div>
                <span className="text-[7.5px] font-black uppercase text-[#1F1917] block truncate">
                  Khichuri Bhog Thali
                </span>
                <span className="text-[5.5px] font-sans text-[#78350F]">Labra, beguni & payesh</span>
              </div>

              <div className="p-2 rounded-xl bg-white border border-[#B91C1C]/30 shadow-xs">
                <div className="flex justify-between items-center text-[5.5px] font-sans mb-0.5">
                  <span className="text-[#7F1D1D] font-black">AMISH SPECIAL</span>
                  <span className="font-bold text-[#7F1D1D]">₹560</span>
                </div>
                <span className="text-[7.5px] font-black uppercase text-[#1F1917] block truncate">
                  Golbari Kosha Mangsho
                </span>
                <span className="text-[5.5px] font-sans text-[#78350F]">Slow-cooked mutton with luchi</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-[#B91C1C]/20 flex justify-between items-center text-[5px] font-sans text-[#78350F]">
              <span>SHUBHO SHARADIYA</span>
              <span className="text-[#B91C1C] font-bold">108 DEEPAM</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'siddhivinayak-bhoj',
      category: 'restaurant',
      number: '44',
      name: 'Siddhivinayak 44',
      tagline: 'Ganeshotsav mahaprasad mandap with sacred Ganesha silhouette, ukadiche modaks, dhol-tasha & marigold torans',
      bestFor: 'Ganesh Chaturthi Food Festivals, Maharashtrian Bhojnalayas, Pure Ghee Sweet Parlors & Festive Banquets',
      accentColor: 'border-[#F59E0B]',
      badgeClass: 'bg-[#EA580C] text-white border-[#F59E0B]',
      route: '/menu/cafe-nova/template-44',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#180407] p-3 flex flex-col justify-between font-serif text-white border-2 border-[#F59E0B]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#F59E0B]/30 text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-3.5 h-3.5 rounded bg-[#EA580C] text-white font-bold flex items-center justify-center text-[6px] border border-[#F59E0B]">
                    🐘
                  </span>
                  <span className="font-black text-[#FDE68A]">SIDDHIVINAYAK 44</span>
                </div>
                <span className="text-[#EA580C] bg-[#FDE68A] px-1 rounded font-sans font-bold">बाप्पा मोरया</span>
              </div>

              {/* Prasad Card Mock */}
              <div className="p-2 rounded-xl bg-[#2E0B10] border border-[#F59E0B]/40 mb-1.5 shadow-sm">
                <div className="flex justify-between items-center text-[5.5px] font-sans mb-0.5">
                  <span className="text-emerald-400 font-black">SATVIK NAIVEDYA</span>
                  <span className="font-bold text-[#FDE68A]">₹280</span>
                </div>
                <span className="text-[7.5px] font-black uppercase text-[#FDE68A] block truncate">
                  Ukadiche Modak (6 Pcs)
                </span>
                <span className="text-[5.5px] font-sans text-zinc-300">Steamed rice flour with fresh coconut & kesar</span>
              </div>

              <div className="p-2 rounded-xl bg-[#2E0B10] border border-[#F59E0B]/40 shadow-sm">
                <div className="flex justify-between items-center text-[5.5px] font-sans mb-0.5">
                  <span className="text-[#F59E0B] font-black">SHAHI THALI</span>
                  <span className="font-bold text-[#FDE68A]">₹520</span>
                </div>
                <span className="text-[7.5px] font-black uppercase text-[#FDE68A] block truncate">
                  Puran Poli Mahabhoj
                </span>
                <span className="text-[5.5px] font-sans text-zinc-300">Desi ghee, katachi amti & kothimbir vadi</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between items-center text-[5px] font-sans text-zinc-400">
              <span>GANESHOTSAV</span>
              <span className="text-[#F59E0B] font-bold">21 MODAK NAIVEDYA</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'deepotsav-hamper',
      category: 'restaurant',
      number: '45',
      name: 'Deepotsav 45',
      tagline: 'Nocturne Diwali feast with 24K gold foil jewel hampers, akash kandil lanterns & panch parva coursing',
      bestFor: 'Diwali Food Festivals, Royal Mughlai & Awadhi Feasts, Luxury Mithai Boutiques & Festive Banquets',
      accentColor: 'border-[#FFD700]',
      badgeClass: 'bg-[#0E132D] text-[#FFD700] border-[#FFD700]',
      route: '/menu/cafe-nova/template-45',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#060814] p-3 flex flex-col justify-between font-serif text-white border-2 border-[#FFD700]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#FFD700]/30 text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-3.5 h-3.5 rounded bg-[#1E1B4B] text-[#FFD700] font-bold flex items-center justify-center text-[6px] border border-[#FFD700]">
                    🪔
                  </span>
                  <span className="font-black text-[#FFD700]">DEEPOTSAV 45</span>
                </div>
                <span className="text-black bg-[#FFD700] px-1 rounded font-sans font-bold">शुभ दीपावली</span>
              </div>

              {/* Jewel Hamper Card Mock */}
              <div className="p-2 rounded-xl bg-[#0E132D] border border-[#FFD700]/40 mb-1.5 shadow-sm">
                <div className="flex justify-between items-center text-[5.5px] font-sans mb-0.5">
                  <span className="text-[#FFD700] font-black">24K GOLD MITHAI</span>
                  <span className="font-bold text-[#FFD700]">₹480</span>
                </div>
                <span className="text-[7.5px] font-black uppercase text-[#FFD700] block truncate">
                  Kaju Katli Ratna Box
                </span>
                <span className="text-[5.5px] font-sans text-zinc-300">Pure silver & gold varq with saffron</span>
              </div>

              <div className="p-2 rounded-xl bg-[#0E132D] border border-[#FFD700]/40 shadow-sm">
                <div className="flex justify-between items-center text-[5.5px] font-sans mb-0.5">
                  <span className="text-emerald-400 font-black">SHAHI DAWAT</span>
                  <span className="font-bold text-[#FFD700]">₹620</span>
                </div>
                <span className="text-[7.5px] font-black uppercase text-[#FFD700] block truncate">
                  Zafrani Dum Biryani
                </span>
                <span className="text-[5.5px] font-sans text-zinc-300">Clay pot seal with roasted cashews</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between items-center text-[5px] font-sans text-zinc-400">
              <span>PANCH PARVA</span>
              <span className="text-[#FFD700] font-bold">1008 DIYAS LIT</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'noel-chalet',
      category: 'restaurant',
      number: '46',
      name: 'Noël Chalet 46',
      tagline: 'Alpine winter chalet with evergreen fir garlands, jingle bells, frosted cards & sticky holiday control dock',
      bestFor: 'Christmas Banquets, Winter Pop-Up Diners, Alpine Bistros & Candlelit Holiday Lounges',
      accentColor: 'border-[#D4AF37]',
      badgeClass: 'bg-[#9E1B28] text-white border-[#D4AF37]',
      route: '/menu/cafe-nova/template-46',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#081A13] p-3 flex flex-col justify-between font-serif text-[#FBF9F4] border border-[#D4AF37]/35">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#D4AF37]/25 text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-3.5 h-3.5 rounded bg-[#143828] text-[#D4AF37] font-bold flex items-center justify-center text-[6px] border border-[#D4AF37]/40">
                    🔔
                  </span>
                  <span className="font-bold text-[#FBF9F4]">NOËL 46</span>
                </div>
                <span className="text-white bg-[#9E1B28] px-1 rounded font-sans font-bold">HOLIDAY</span>
              </div>

              {/* Dish Card Mock */}
              <div className="p-2 rounded-xl bg-[#0F2A1E] border border-[#D4AF37]/25 mb-1.5 shadow-xs">
                <div className="flex justify-between items-center text-[5.5px] font-sans mb-0.5">
                  <span className="text-white bg-[#9E1B28] px-1 rounded font-bold">ROAST FEAST</span>
                  <span className="font-bold text-[#D4AF37]">₹580</span>
                </div>
                <span className="text-[7.5px] font-bold text-[#FBF9F4] block truncate">
                  Honey Glazed Turkey Roast
                </span>
                <span className="text-[5.5px] font-sans text-zinc-300">Birch embers, potato puree & cranberry jus</span>
              </div>

              <div className="p-2 rounded-xl bg-[#0F2A1E] border border-[#D4AF37]/25 shadow-xs">
                <div className="flex justify-between items-center text-[5.5px] font-sans mb-0.5">
                  <span className="text-emerald-300 font-bold">VEGETARIAN</span>
                  <span className="font-bold text-[#D4AF37]">₹360</span>
                </div>
                <span className="text-[7.5px] font-bold text-[#FBF9F4] block truncate">
                  Wild Mushroom & Truffle Tart
                </span>
                <span className="text-[5.5px] font-sans text-zinc-300">Flaky pastry with winter thyme</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-white/5 flex justify-between items-center text-[5px] font-sans text-zinc-400">
              <span>YULETIDE HEARTH</span>
              <span className="text-[#D4AF37] font-bold">25 CHIMES</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'gantantra-republic',
      category: 'restaurant',
      number: '47',
      name: 'Gantantra 47',
      tagline: 'Sovereign Republic Day state banquet with Ashoka Chakra, Nandalal Bose borders & regional state tableaux',
      bestFor: 'Republic Day Food Festivals, Royal Indian Banquets, Awadhi & Mughlai Darbars & Heritage State Eateries',
      accentColor: 'border-[#38BDF8]',
      badgeClass: 'bg-[#FF671F] text-white border-[#38BDF8]',
      route: '/menu/cafe-nova/template-47',
      available: true,
      preview: {
        renderCard: () => (
          <div className="w-full h-full bg-[#070E1E] p-3 flex flex-col justify-between font-serif text-[#FDFBF7] border-2 border-[#38BDF8]/40">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#38BDF8]/30 text-[6px]">
                <div className="flex items-center gap-1">
                  <span className="w-3.5 h-3.5 rounded bg-[#0A1630] text-[#38BDF8] font-bold flex items-center justify-center text-[6px] border border-[#38BDF8]">
                    ☸
                  </span>
                  <span className="font-black text-[#FDFBF7]">GANTANTRA 47</span>
                </div>
                <span className="text-white bg-[#FF671F] px-1 rounded font-sans font-bold">२६ जनवरी</span>
              </div>

              {/* State Docket Mock */}
              <div className="p-2 rounded-xl bg-[#0B152D] border border-[#D4AF37]/30 mb-1.5 shadow-sm">
                <div className="flex justify-between items-center text-[5.5px] font-sans mb-0.5">
                  <span className="text-white bg-[#046A38] px-1 rounded font-bold">SHAKAHARI</span>
                  <span className="font-bold text-[#FDFBF7]">₹420</span>
                </div>
                <span className="text-[7.5px] font-bold text-[#FDFBF7] block truncate">
                  Dal Raisina (24hr Simmered)
                </span>
                <span className="text-[5.5px] font-sans text-zinc-400">Smoked charcoal embers & white butter</span>
              </div>

              <div className="p-2 rounded-xl bg-[#0B152D] border border-[#D4AF37]/30 shadow-sm">
                <div className="flex justify-between items-center text-[5.5px] font-sans mb-0.5">
                  <span className="text-white bg-[#FF671F] px-1 rounded font-bold">DARBAR FEAST</span>
                  <span className="font-bold text-[#FDFBF7]">₹640</span>
                </div>
                <span className="text-[7.5px] font-bold text-[#FDFBF7] block truncate">
                  Awadhi Zafrani Biryani
                </span>
                <span className="text-[5.5px] font-sans text-zinc-400">Clay seal with roasted almonds</span>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-1.5 border-t border-white/10 flex justify-between items-center text-[5px] font-sans text-zinc-400">
              <span>SATYAMEVA JAYATE</span>
              <span className="text-[#38BDF8] font-bold">21 GUN SALUTES</span>
            </div>
          </div>
        )
      }
    }
  ],
};

export default templatesData;