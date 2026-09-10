import React from 'react';

const About = ({ business, story }) => {
  const {
    name = "Menu",
  } = business || {};

  // Use story data if available
  const storyData = story || {
    title: "Our Story",
    description: "Good coffee. Simple food. A place to stay a little longer.",
    image: null,
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gray-900"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                Our Story
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              {storyData.title || "Good coffee. Simple food."}
            </h2>

            {/* Description */}
            {storyData.description && (
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                {storyData.description}
              </p>
            )}

            {/* Additional text */}
            <p className="text-sm text-gray-500 leading-relaxed">
              We've been serving our neighborhood since day one. Every cup is crafted with care, 
              every dish made to order. Come in, slow down, and stay a while.
            </p>
          </div>

          {/* Image Side */}
          <div className="relative">
            {storyData.image ? (
              <div className="h-64 md:h-80 rounded-2xl overflow-hidden">
                <img 
                  src={storyData.image} 
                  alt={storyData.title || name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-6xl">☕</span>
              </div>
            )}
            
            {/* Decorative offset border */}
            <div className="absolute -bottom-3 -left-3 w-full h-full border-2 border-gray-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;