import React from 'react';

const Sidebar = ({ activeTab, onTabChange, menuCount = 0 }) => {
  const navItems = [
    { id: 'menus', label: 'Menus', count: menuCount, icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )},
    { id: 'templates', label: 'Templates', badge: 'V2', icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />
      </svg>
    )},
    { id: 'settings', label: 'Settings', icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )},
  ];

  return (
    <aside className="w-64 bg-[#0B1120] border-r border-[#1E293B] flex flex-col justify-between flex-shrink-0 h-screen sticky top-0">
      <div>
        {/* Brand Block */}
        <div className="h-16 px-6 flex items-center gap-3 border-b border-[#1E293B]">
          <div className="w-8 h-8 rounded-lg bg-[#0D9488] flex items-center justify-center font-bold text-white shadow-sm shadow-[#0D9488]/30">
            H
          </div>
          <div>
            <span className="text-sm font-bold text-[#F8FAFC] tracking-tight block">
              Horizon Menu
            </span>
            <span className="text-[10px] font-mono text-[#0D9488] uppercase tracking-wider block">
              Workspace V1
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-[#1E293B] text-[#F8FAFC]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111827]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-[#0D9488]' : 'text-[#94A3B8]'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>

                {item.count !== undefined && (
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#0F172A] text-[#94A3B8] border border-[#1E293B]">
                    {item.count}
                  </span>
                )}

                {item.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#0D9488]/15 text-[#0D9488] border border-[#0D9488]/30">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Environment Tag */}
      <div className="p-4 border-t border-[#1E293B]">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0F172A] border border-[#1E293B]">
          <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
          <span className="text-[11px] font-mono text-[#94A3B8]">
            Local Environment
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;