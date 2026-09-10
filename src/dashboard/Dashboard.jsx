import React, { useState, useMemo } from 'react';
import MenuCard from './components/MenuCard';
import { initialMenus } from './data/menus';

const Dashboard = () => {
  const [menus, setMenus] = useState(initialMenus);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMenu, setNewMenu] = useState({ name: '', slug: '' });

  const safeMenus = Array.isArray(menus) ? menus : [];

  const filteredMenus = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return safeMenus;
    return safeMenus.filter((m) => {
      const name = m?.name?.toLowerCase() || '';
      const slug = m?.slug?.toLowerCase() || '';
      return name.includes(q) || slug.includes(q);
    });
  }, [safeMenus, searchQuery]);

  const handleCreateMenu = (e) => {
    e.preventDefault();
    if (!newMenu.name.trim()) return;

    const rawSlug = newMenu.slug.trim() || newMenu.name.trim();
    const slug = rawSlug
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const created = {
      id: slug,
      name: newMenu.name.trim(),
      slug: slug,
      status: 'published',
      path: `/menu/${slug}`,
      updatedAt: 'Just now',
    };

    setMenus((prev) => [created, ...(Array.isArray(prev) ? prev : [])]);
    setNewMenu({ name: '', slug: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#0F172A] font-sans antialiased selection:bg-[#CCFBF1] selection:text-[#0F766E]">
      {/* Top Navbar */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0D9488] text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-[#0D9488]/30">
              ☕
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-[#0F172A] tracking-tight">
                Horizon Menu
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#CCFBF1] text-[#0F766E] px-2 py-0.5 rounded-full">
                Portal
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] active:scale-98 text-white text-xs font-bold tracking-wide transition-all shadow-sm shadow-[#0D9488]/20"
          >
            <span className="text-sm leading-none">+</span>
            <span>New Menu</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Header Block & Counters */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
              Client Menus
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Active digital boards, live links, and QR routes.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-[#64748B] shadow-xs">
              Total: <strong className="text-[#0F172A]">{safeMenus.length}</strong>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#CCFBF1] text-[#0F766E] border border-[#CCFBF1] shadow-xs">
              Live: <strong className="text-[#0D9488]">{safeMenus.length}</strong>
            </span>
          </div>
        </div>

        {/* Search Input */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search by cafe name or slug..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 text-xs font-medium rounded-xl bg-white border border-slate-200/90 text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#CCFBF1] shadow-xs transition-all"
            />
            <span className="absolute left-3 top-2.5 text-[#64748B] text-xs">
              🔍
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-[#64748B] hover:text-[#0F172A] text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredMenus.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMenus.map((menu) => (
              <MenuCard key={menu?.id || menu?.slug} menu={menu} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center text-xl mx-auto mb-3">
              ☕
            </div>
            <h2 className="text-base font-bold text-[#0F172A]">No menus found</h2>
            <p className="text-xs text-[#64748B] mt-1 mb-4">
              {searchQuery ? `Nothing matches "${searchQuery}".` : "You haven't created any client menus yet."}
            </p>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-3.5 py-1.5 text-xs font-bold text-[#0D9488] hover:underline"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </main>

      {/* "New Menu" Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F172A]/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200/90 w-full max-w-md p-6 shadow-xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  Add Client Menu
                </h3>
                <p className="text-xs text-[#64748B]">
                  Enter the cafe name to spin up a new menu route.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 text-[#64748B] hover:text-[#0F172A] flex items-center justify-center text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateMenu} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                  Business / Menu Name
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="e.g. Roastery Coffee House"
                  value={newMenu.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    const autoSlug = name
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/^-+|-+$/g, '');
                    setNewMenu({ name, slug: autoSlug });
                  }}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FFFDF7] border border-slate-200 text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#CCFBF1]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                  URL Route
                </label>
                <div className="flex items-center rounded-xl bg-[#FFFDF7] border border-slate-200 px-3 py-2 text-xs font-mono text-[#64748B]">
                  <span>/menu/</span>
                  <input
                    type="text"
                    required
                    placeholder="roastery-coffee"
                    value={newMenu.slug}
                    onChange={(e) => setNewMenu({ ...newMenu, slug: e.target.value })}
                    className="bg-transparent text-[#0F172A] focus:outline-none flex-1 ml-1"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white transition-colors shadow-sm shadow-[#0D9488]/20"
                >
                  Create Menu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;