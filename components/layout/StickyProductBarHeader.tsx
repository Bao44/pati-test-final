"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function StickyProductBarHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hiện thanh nav khi cuộn xuống quá 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full z-50 bg-[#50000b] text-white shadow-md transition-transform duration-300 ease-in-out transform",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {/* Main Bar Content */}
      <div
        className={clsx(
          "mx-auto w-full flex items-center justify-between",
          // Padding Responsive:
          "px-4 py-3", // Mobile
          "sm:px-6 sm:py-3", // Tablet
          "xl:px-63.25 xl:pt-5.75 xl:pb-6",
        )}
      >
        {/* Logo */}
        <img
          src="https://config.gorgias.io/production/bgJ1Q6QWBR37vXKO/smooch_inside/avatar_team_pictures/30BVo7vVye47rvzm/bd3a6a0a-041b-431c-a4e7-bb0e08eb60da.png"
          alt=""
          width={135}
          height={35}
          className="hidden lg:block"
        />

        {/* Text Content */}
        <div
          className={clsx(
            "flex flex-col sm:flex-row items-center gap-1 sm:gap-2",
            "text-center sm:text-left",
            "w-full lg:w-auto",
          )}
        >
          <div className="text-[11px] sm:text-lg">
            <strong>2026 STARTS NOW: </strong>
            <span className="opacity-90">
              35% OFF — Feel Like Yourself Again
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="xl:block hidden">
          {/* Button Desktop */}
          <button className="bg-[#a40011] hover:bg-[#50000b] text-white text-md font-bold py-2.5 px-27 rounded-full transition-colors uppercase tracking-wide">
            Get Started
          </button>
        </div>

        {/* Button Mobile/Tablet */}
        <button
          className={clsx(
            "xl:hidden", // Ẩn trên desktop
            "bg-[#a40011] hover:bg-[#50000b] text-white",
            "text-[11px] sm:text-sm font-bold",
            "py-2 px-4 sm:px-6",
            "rounded-full whitespace-nowrap uppercase tracking-wide transition-colors",
            "ml-3",
          )}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
