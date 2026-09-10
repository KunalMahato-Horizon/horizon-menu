/**
 * HORIZON MENU - COMMON DATA STRUCTURE
 * 
 * This is the standard structure all templates will use.
 * Every template receives this same data structure.
 * 
 * IMPORTANT RULES:
 * 1. All fields are OPTIONAL except where noted
 * 2. Templates must handle missing data gracefully
 * 3. Never hardcode business-specific info in templates
 * 4. Keep this structure consistent across all 6 templates
 */

const menuDataStructure = {
  // BUSINESS INFORMATION (all optional except name)
  business: {
    name: "Café Nova",           // REQUIRED
    tagline: "Artisan Coffee",   // optional
    logo: "/logo.png",           // optional - can be URL or emoji
    rating: 4.8,                 // optional
    businessType: "Café & Bakery", // optional
    location: "Bokaro, Jharkhand", // optional
    phone: "+91 98765 43210",    // optional
    mapsUrl: "https://maps.google.com/?q=...", // optional
    instagram: "@cafenova",      // optional
  },

  // OPENING HOURS (optional - if missing, don't show hours section)
  hours: [
    { day: "Monday", open: "9:00 AM", close: "9:00 PM" },
    { day: "Tuesday", open: "9:00 AM", close: "9:00 PM" },
    // ... or can be grouped like:
    // { days: "Mon - Fri", time: "9:00 AM - 9:00 PM" }
  ],

  // MENU CATEGORIES
  categories: [
    {
      id: "coffee",              // REQUIRED - unique identifier
      name: "Coffee",            // REQUIRED - display name
      description: "Hot & cold coffee", // optional
      icon: "☕",                // optional - emoji or icon name
      
      // MENU ITEMS
      items: [
        {
          id: "cappuccino",      // REQUIRED - unique identifier
          name: "Cappuccino",    // REQUIRED
          description: "Rich espresso with steamed milk", // optional
          price: 140,            // REQUIRED - number (₹)
          image: "/images/cappuccino.jpg", // optional
          type: "veg",           // optional: "veg" | "non-veg" | null
          spicy: false,          // optional
          isAvailable: true,     // optional - defaults to true
          tags: ["Popular"],     // optional - array of strings
        }
      ]
    }
  ]
};

export default menuDataStructure;