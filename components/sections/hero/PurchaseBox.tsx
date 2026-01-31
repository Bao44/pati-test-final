"use client";

import { useState } from "react";
import clsx from "clsx";
import SubscriptionOptions from "./SubscriptionOptions";

type FormatType = "jar" | "sachet";

export default function PurchaseBox() {
  const [selectedFormat, setSelectedFormat] = useState<FormatType>("jar");

  return (
    <div className="flex flex-col gap-3">
      {/* HEADER */}
      <p className="font-bold text-[#50000b] text-base sm:text-lg">
        1. Select Format:
      </p>

      {/* FORMAT GRID */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="relative">
          <span
            className={clsx(
              "absolute -top-2.5 left-1/2 xl:-translate-x-1 -translate-x-1/5 z-10",
              "bg-[#d5001c] text-white font-bold uppercase",
              "px-2 py-0.5 rounded-full shadow-sm tracking-wide whitespace-nowrap",
              "text-[8px] sm:text-[9px] sm:px-3 sm:py-1",
              selectedFormat === "jar" ? "opacity-100" : "opacity-100",
            )}
          >
            Most Popular
          </span>

          <button
            onClick={() => setSelectedFormat("jar")}
            className={clsx(
              "relative flex w-full items-stretch overflow-hidden rounded-xl border transition-all duration-200 text-left h-full",
              selectedFormat === "jar"
                ? "border-[#50000b] bg-[#fdf2f2] ring-1 ring-[#50000b]"
                : "border-[#e5e7eb] bg-white hover:border-gray-300",
            )}
          >
            {/* Left Image Section */}
            <div className="w-[35%] sm:w-[30%] shrink-0 flex items-center justify-center bg-transparent">
              <img
                src="https://im8health.com/cdn/shop/files/UX-Input_1.jpg?v=8068906590217553853"
                alt="Forever Jar"
                className="w-full h-auto object-contain mix-blend-multiply p-1 xl:p-0"
              />
            </div>

            {/* Right Content Section */}
            <div className="flex-1 p-2 sm:p-4 flex flex-col justify-center">
              <p className="text-[15px] xl:text-lg font-bold text-[#50000b] leading-tight mb-0.5 sm:mb-1">
                Forever Jar
              </p>
              <p className="text-[10px] sm:text-[11px] font-bold text-[#50000b] opacity-80 leading-tight">
                (354g) $2.61 USD / serving
              </p>
            </div>
          </button>
        </div>

        {/* OPTION 2: SACHETS */}
        <div className="relative">
          <button
            onClick={() => setSelectedFormat("sachet")}
            className={clsx(
              "relative flex w-full items-stretch overflow-hidden rounded-xl border transition-all duration-200 text-left h-full",
              selectedFormat === "sachet"
                ? "border-[#50000b] bg-[#fdf2f2] ring-1 ring-[#50000b]"
                : "border-[#d8d3cf] bg-white hover:border-gray-300",
            )}
          >
            {/* Left Image Section */}
            <div className="w-[35%] sm:w-[30%] shrink-0 flex items-center justify-center bg-transparent">
              <img
                src="https://im8health.com/cdn/shop/files/UX-Input_2.jpg?v=4366596284312861834"
                alt="Single-Serve Sachets"
                className="w-full h-auto object-contain mix-blend-multiply p-1 xl:p-0"
              />
            </div>

            {/* Right Content Section */}
            <div className="flex-1 p-2 sm:p-4 flex flex-col justify-center">
              <p className="text-[15px] xl:text-lg font-bold text-[#50000b] leading-tight mb-0.5 sm:mb-1">
                Single-Serve Sachets
              </p>
              <p className="text-[10px] sm:text-[11px] font-bold text-[#50000b] opacity-80 leading-tight">
                (354g) $2.91 USD / serving
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* 2. Subscribe & Save: */}
      <SubscriptionOptions />
    </div>
  );
}
