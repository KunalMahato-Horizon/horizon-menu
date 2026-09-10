import React from 'react';

const Footer = ({ business }) => {
  const {
    name = 'SUPER DUPER',
    location = '',
    hours = [],
  } = business || {};

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="info" className="bg-[#18181B] text-[#FBF8F1] pt-12 pb-8 px-4 sm:px-6 border-t-3 border-[#18181B]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-[#27272A] border-2 border-[#3F3F46]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFE500] font-black block mb-2">
              TABLE DINE-IN INFO
            </span>
            <p className="text-xs text-[#D4D4D8] font-medium leading-relaxed">
              Order directly with your server. All smash burgers, sides, and baked treats are cooked fresh on spot.
            </p>
          </div>

          {/* Card 2 */}
          {hours && hours.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#27272A] border-2 border-[#3F3F46]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFE500] font-black block mb-2">
                SERVICE HOURS
              </span>
              <div className="space-y-1.5">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs font-mono">
                    <span className="text-[#A1A1AA]">{h.days}</span>
                    <span className="font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3 */}
          {location && (
            <div className="p-5 rounded-2xl bg-[#27272A] border-2 border-[#3F3F46]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFE500] font-black block mb-2">
                SPOT LOCATION
              </span>
              <p className="text-xs text-[#D4D4D8] font-medium leading-relaxed mb-2">
                {location}
              </p>
              <span className="text-[10px] font-mono text-[#A1A1AA] block">
                ⚡ Direct In-Store Dining
              </span>
            </div>
          )}
        </div>

        {/* Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#27272A] text-xs font-mono text-[#A1A1AA]">
          <p>© {new Date().getFullYear()} {name}. Built for fast mobile dining.</p>
          <button
            onClick={scrollToTop}
            className="px-4 py-1.5 rounded-xl bg-[#FFE500] text-[#18181B] font-black uppercase text-[10px] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;