import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import TrendingShowcase from "../components/TrendingShowcase";
import MenuSection from "../components/MenuSection";
import Footer from "../components/Footer";
import CounterOrderTray from "../components/CounterOrderTray";

import becafe from "../data/becafe";
import menu, { trendingItems } from "../data/menu";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [underHundredOnly, setUnderHundredOnly] = useState(false);
  const [orderSlip, setOrderSlip] = useState([]);

  // -----------------------------------------
  // Browser Tab Title & Favicon
  // -----------------------------------------
  useEffect(() => {
    // Update browser tab title
    document.title = `${becafe.name} | Digital Menu`;

    // Find existing favicon
    let faviconLink = document.querySelector(
      'link[rel="icon"]'
    );

    // Create favicon link if it doesn't exist
    if (!faviconLink) {
      faviconLink = document.createElement("link");
      faviconLink.rel = "icon";
      document.head.appendChild(faviconLink);
    }

    // Set client-specific favicon
    faviconLink.href = becafe.favicon;
  }, []);

  // -----------------------------------------
  // Add Item to Counter Slip
  // -----------------------------------------
  const handleAddItem = (item) => {
    setOrderSlip((prev) => [...prev, item]);
  };

  const handleRemoveItem = (indexToRemove) => {
    setOrderSlip((prev) =>
      prev.filter((_, idx) => idx !== indexToRemove)
    );
  };

  const handleClearSlip = () => setOrderSlip([]);

  // -----------------------------------------
  // Category Nav Select Handler
  // -----------------------------------------
  const handleSelectCategory = useCallback(
    (catId, isUserClick = false) => {
      setActiveCategory(catId);
    },
    []
  );

  // -----------------------------------------
  // Multi-Condition Live Filter Engine
  // -----------------------------------------
  const filteredCategories = useMemo(() => {
    const q = search.trim().toLowerCase();

    return menu
      .map((cat) => {
        const filteredSubs = cat.subcategories
          .map((sub) => {
            const filteredItems = sub.items.filter((item) => {
              // 1. Text Search Filter
              const matchesSearch =
                !q || item.name.toLowerCase().includes(q);

              // 2. Budget Filter (Under ₹100)
              let matchesBudget = true;

              if (underHundredOnly) {
                const minPrice =
                  item.price.single ??
                  Math.min(...Object.values(item.price));

                matchesBudget = minPrice <= 100;
              }

              return matchesSearch && matchesBudget;
            });

            return {
              ...sub,
              items: filteredItems,
            };
          })
          .filter((sub) => sub.items.length > 0);

        return {
          ...cat,
          subcategories: filteredSubs,
        };
      })
      .filter((cat) => cat.subcategories.length > 0);
  }, [search, underHundredOnly]);

  return (
    <div
      id="menu-root"
      className="min-h-screen bg-[#F6EEDF] bg-[radial-gradient(#3E221115_1px,transparent_1px)] [background-size:14px_14px] text-[#231F20] antialiased selection:bg-[#F2B828] selection:text-[#2C1A11] pb-24"
    >
      <Header business={becafe} />

      {/* Sticky Auto-Active Category Nav */}
      <CategoryNav
        categories={menu}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Live Filter & Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          {/* Instant Search Bar with Clear Button */}
          <div className="relative w-full sm:max-w-md">
            <input
              type="text"
              placeholder="Search Kadak Chai, Frappes, Waffles, Momos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm font-sans font-medium rounded-full bg-white border-2 border-[#3E2211]/20 text-[#231F20] placeholder-[#8C7262] focus:outline-none focus:border-[#F2B828] shadow-xs transition-colors"
            />

            <span className="absolute left-3.5 top-3 text-stone-400 text-xs">
              🔍
            </span>

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3.5 top-2.5 text-stone-400 hover:text-stone-700 text-sm font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Highway Filter Pills */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() =>
                setUnderHundredOnly(!underHundredOnly)
              }
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans font-black uppercase tracking-wider transition-all duration-200 border-2 ${
                underHundredOnly
                  ? "bg-[#F2B828] border-[#F2B828] text-[#2C1A11] shadow-sm"
                  : "bg-white border-[#3E2211]/20 text-[#231F20] hover:border-[#3E2211]"
              }`}
            >
              <span>⚡</span>
              <span>Under ₹100</span>
            </button>

            {(search || underHundredOnly) && (
              <button
                onClick={() => {
                  setSearch("");
                  setUnderHundredOnly(false);
                }}
                className="px-3 py-2 rounded-full text-xs font-mono text-[#8C7262] hover:text-[#231F20] underline"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Trending Showcase */}
        {!search.trim() && !underHundredOnly && (
          <TrendingShowcase
            items={trendingItems}
            onAddItem={handleAddItem}
          />
        )}

        {/* Menu Categories with SubCategory Cards */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <MenuSection
              key={cat.id}
              category={cat}
              onAddItem={handleAddItem}
            />
          ))
        ) : (
          <div className="text-center py-16 bg-[#3E2211] text-white rounded-2xl p-6 border-2 border-[#52301B]">
            <p className="text-lg font-serif font-bold text-[#F2B828]">
              No menu items found
            </p>

            <p className="text-xs text-stone-300 mt-1">
              Try adjusting your search or clearing the
              "Under ₹100" budget filter.
            </p>
          </div>
        )}
      </main>

      <Footer business={becafe} />

      {/* Live Highway Counter Slip */}
      <CounterOrderTray
        items={orderSlip}
        onRemoveItem={handleRemoveItem}
        onClear={handleClearSlip}
      />
    </div>
  );
};

export default Menu;