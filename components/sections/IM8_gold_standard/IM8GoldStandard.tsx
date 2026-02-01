"use client";

import { IM8_COMPARISON } from "@/lib/data";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const CheckIcon = ({ dark = false }) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center w-5.5 h-5.5 rounded-full ${
      dark ? "bg-[#1f3d33]" : "bg-[#9d1b1f]"
    }`}
  >
    <Check size={12} strokeWidth={3} color="#fff" />
  </span>
);

const XIcon = () => (
  <span className="inline-flex shrink-0 items-center justify-center w-5.5 h-5.5 rounded-full bg-[#8a948c]">
    <X size={12} strokeWidth={3} color="#fff" />
  </span>
);

export default function IM8GoldStandard() {
  const [expanded, setExpanded] = useState(false);

  const VISIBLE_COUNT = 10;
  const visibleRows = expanded
    ? IM8_COMPARISON
    : IM8_COMPARISON.slice(0, VISIBLE_COUNT);

  return (
    <section className="bg-[#efe5d8] px-4 sm:px-8 xl:px-12.5">
      <div className="max-w-5xl mx-auto py-16 sm:py-20 xl:py-26">
        <div className="w-full mx-auto text-center">
          {/* Title Responsive */}
          <h2 className="text-[40px] sm:text-[54px] font-light text-[#5a0010] mb-16 sm:mb-20 xl:mb-24 text-center font-['ABC Arizona Flare'] tracking-[-1px] leading-tight xl:leading-[52.7px]">
            IM8: The New Gold Standard
          </h2>

          {/* Table */}
          <div className="relative rounded-2xl overflow-visible border border-black bg-white shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-2 bg-[#5a0010] max-sm:pt-4 text-white text-xs sm:text-sm font-semibold rounded-tl-2xl rounded-tr-2xl">
              {/* Header Col 1 */}
              <div className="py-4 relative text-left pl-10 sm:pl-10 rounded-tl-2xl pr-8 sm:pr-0 ">
                Daily Ultimate Essentials
                <img
                  src="//im8health.com/cdn/shop/files/sachet-thumb.png?v=1761040601"
                  className="z-10 absolute -top-17.5 sm:-top-18.5 right-12 sm:-translate-x-1/2 w-14 h-auto sm:w-21.25 sm:h-28"
                  alt=""
                />
              </div>
              {/* Header Col 2 */}
              <div className="py-4 relative text-left pl-10 sm:pl-10 pr-8 sm:pr-0 ">
                Leading Greens Powder
                <img
                  src="//im8health.com/cdn/shop/files/179-_Converted_B_1.png?v=1730093105"
                  className="z-10 absolute -top-18 sm:-top-20 right-12 sm:-translate-x-1/2 w-14 h-auto sm:w-21.25 sm:h-28"
                  alt=""
                />
              </div>
            </div>

            {/* Rows */}
            {visibleRows.map((row, i) => {
              const isLast = i === visibleRows.length - 1;
              const showSeeMore =
                !expanded && IM8_COMPARISON.length > VISIBLE_COUNT;

              return (
                <div
                  key={i}
                  className={`grid grid-cols-2 text-xs sm:text-sm xl:text-md border-t border-black
            ${
              isLast && !showSeeMore
                ? "rounded-bl-2xl rounded-br-2xl overflow-hidden"
                : ""
            }`}
                >
                  {/* Left Column */}
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3 px-3 sm:px-6 xl:px-12 py-3 sm:py-4 bg-[#f6eded] text-[#5a0010] font-bold border-r border-black">
                    <div className="mt-0.5 sm:mt-0">
                      <CheckIcon />
                    </div>
                    <span className="text-left">{row.left}</span>
                  </div>

                  {/* Right Column */}
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3 px-3 sm:px-6 xl:px-12 py-3 sm:py-4 bg-[#bcc7b9] text-[#2b3b32] font-bold border-black border-l">
                    <div className="mt-0.5 sm:mt-0">
                      {row.rightOk ? <CheckIcon dark /> : <XIcon />}
                    </div>
                    <span className="text-left">{row.right}</span>
                  </div>
                </div>
              );
            })}

            {/* See more */}
            {IM8_COMPARISON.length > VISIBLE_COUNT && (
              <button
                onClick={() => setExpanded(!expanded)}
                className={`py-4 w-full text-sm sm:text-md font-semibold text-[#5a0010] bg-[#f6eded] border-t border-black rounded-bl-2xl rounded-br-2xl transition-colors ${
                  expanded ? "rounded-tl-none rounded-tr-none hidden" : ""
                }`}
              >
                See More
              </button>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={() =>
              toast.success("Handle successfully", { autoClose: 1000 })
            }
            className="max-sm:w-full mt-10 sm:mt-15.5 bg-[#a40011] text-white px-6 sm:px-8.25 py-3 sm:py-3.25 rounded-full font-bold hover:bg-[#5a0010] transition duration-300"
          >
            VIEW SUPPLEMENT FACTS
          </button>
        </div>
      </div>
    </section>
  );
}
