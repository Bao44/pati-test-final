"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function HeaderActions() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-end gap-4">
      {/* NAV */}
      <div className="hidden lg:flex gap-10 max-xl:gap-4 max-xl:text-sm text-[17px] font-semibold max-xl:font-black text-[#50000b] whitespace-nowrap">
        <span className="cursor-pointer hover:underline">Reviews</span>
        <span className="cursor-pointer hover:underline">Ingredients</span>

        {/* DISCOVER DROPDOWN */}
        <div
          className="relative group"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {/* TRIGGER */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="group flex cursor-pointer items-center gap-1 font-semibold max-xl:font-black"
          >
            Discover
            <ChevronDown
              size={14}
              strokeWidth={3}
              className={`transition-transform group-hover:rotate-180 ${open ? "rotate-180" : ""}`}
            />
          </button>

          {/* DROPDOWN */}
          <div
            className={clsx(
              "absolute left-0 top-full mt-3 w-56 rounded-xl bg-white py-3 shadow-xl z-50",
              "transition-all duration-200 ease-in-out",
              open
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",
              "before:absolute before:-top-3 before:left-0 before:h-3 before:w-full before:content-['']",
            )}
          >
            {[
              "About Us",
              "Our Impact",
              "Quality and Standards",
              "The Healthspan Blog",
            ].map((item) => (
              <div
                onClick={() => setOpen(false)}
                key={item}
                className="
                  cursor-pointer
                  px-5 py-2
                  text-sm
                  font-semibold
                  text-[#50000b]
                  hover:underline
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ICONS */}
      <div className="flex items-center gap-3">
        {/* ACCOUNT ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M3 30C3 22.82 8.82 17 16 17C23.18 17 29 22.82 29 30"
            stroke="#50000B"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            d="M16 17C20.1421 17 23.5 13.6421 23.5 9.5C23.5 5.35786 20.1421 2 16 2C11.8579 2 8.5 5.35786 8.5 9.5C8.5 13.6421 11.8579 17 16 17Z"
            stroke="#50000B"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </svg>

        {/* CART ICON + BADGE */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M5.45011 5.45011L16 1.08232L26.5499 5.45011L30.9177 16L26.5499 26.5499L16 30.9177L5.45011 26.5499L1.08232 16L5.45011 5.45011Z"
              stroke="#50000B"
              strokeWidth="2"
            />
          </svg>

          {/* BADGE */}
          <span
            className="
              absolute top-1.25 right-1.5
              flex h-5 w-5
              items-center justify-center
              rounded-full
              text-sm
              font-bold
              text-[#50000b]
            "
          >
            1
          </span>
        </div>
      </div>
    </div>
  );
}
