"use client";

import Gallery from "./Gallery";
import HeroContent from "./HeroContent";

export default function ProductHero() {
  return (
    <section className="relative min-h-screen md:py-8 px-2 max-sm:px-0 overflow-visible">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://im8health.com/cdn/shop/files/Frame_1000004811-min.jpg?v=1727698766"
          alt="Background Texture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto max-w-350 px-1 max-sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6  xl:col-span-7 relative">
            <div className="sticky top-28 transition-all duration-300">
              <Gallery />
            </div>
          </div>

          <div className="md:col-span-6 xl:col-span-5">
            <HeroContent />
          </div>
        </div>
      </div>
    </section>
  );
}
