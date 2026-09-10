import React from 'react';

const QuestBoardHero = ({ business }) => {
  const {
    name = "ALCHEMIST'S CODEX",
    tagline = 'Restorative potions, dragonfire hearth roasts & enchanted rations',
    description = 'Welcome to the Guild Hall. Every dish prepared by our alchemists bestows potent party buffs, stamina recovery, and flavor enchantments. Inspect your inventory below.',
    rating = 4.9,
    businessType = 'Guild Hall Tavern & Alchemical Lab',
    location = 'Wayfarer District, Stall 35',
  } = business || {};

  const scrollToInventory = () => {
    const el = document.getElementById('menu-root');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-[#0B0D13] text-[#F3F4F6] font-mono overflow-hidden">
      {/* Mystic Alchemical Light Cones */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#A855F7]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-24 right-1/4 w-80 h-80 bg-[#F59E0B]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-6">
        {/* Parchment Bounty Board Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#F59E0B]/30 pb-3 text-[10px] sm:text-xs text-[#FDE68A]/70">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#F59E0B] text-black font-black uppercase">
              ACTIVE QUEST
            </span>
            <span>TAVERN BANQUET EXPEDITION</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">{businessType}</span>
            {rating && <span className="text-[#F59E0B] font-black">★ {rating} GUILD RANK</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Quest Lore */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181D2A] border border-[#F59E0B]/30 text-xs font-bold text-[#FDE68A]">
              <span>📜 NOTICE // ALL ADVENTURERS CLEARED FOR DINE-IN</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02] text-white">
              {name}
            </h1>

            {tagline && (
              <p className="text-sm sm:text-base text-[#F59E0B] font-bold">
                &gt; "{tagline}"
              </p>
            )}

            {description && (
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl font-sans font-light">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToInventory}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0B0D13] font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#F59E0B]/20"
              >
                Inspect Inventory Pouches ↓
              </button>
              {location && (
                <div className="px-4 py-2.5 rounded-xl bg-[#151924] border border-white/10 text-xs text-zinc-300">
                  🗺 {location}
                </div>
              )}
            </div>
          </div>

          {/* Right Legendary Bounty Card */}
          <div className="lg:col-span-5">
            <div className="relative p-3 rounded-2xl bg-gradient-to-b from-[#1E2333] to-[#121622] border-2 border-[#F59E0B] shadow-2xl shadow-[#F59E0B]/10">
              {/* Wax Seal Ribbon */}
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded bg-[#B91C1C] text-white text-[9px] font-black uppercase tracking-widest border border-amber-300 shadow-md">
                ✦ GUILD MASTER'S PICK
              </div>

              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#A855F7] font-black uppercase tracking-widest text-[10px]">
                    [LEGENDARY FEAST TIER]
                  </span>
                  <span className="text-[#FDE68A] font-black">🪙 680 GP</span>
                </div>

                <div className="relative h-44 sm:h-48 rounded-xl overflow-hidden bg-black/60 border border-white/10">
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                    <span className="text-5xl mb-2">🍗</span>
                    <span className="text-xs font-black text-white uppercase tracking-wider">
                      Charred Wyrmwing Roast
                    </span>
                    <span className="text-[10px] text-zinc-400 mt-1">
                      Slow-cooked over dragonwood coals
                    </span>
                  </div>
                </div>

                {/* Stat Buff Preview */}
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded-lg bg-black/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                    <span>🛡️</span>
                    <span>+45 Stamina Buff</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
                    <span>🔥</span>
                    <span>Fire Res. 30m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestBoardHero;