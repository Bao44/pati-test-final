"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

export default function ResultsCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        rounded-2xl
        border border-[#16a34a] 
        bg-[linear-gradient(135deg,rgb(240,249,244)_0%,rgb(232,245,236)_100%)]
        py-6 shadow-sm
        transition-all duration-300
      "
    >
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3 px-6">
        <p className="text-xl sm:text-2xl font-bold text-[#50000b]">
          Clinically Proven Results
        </p>
        <span className="rounded-full bg-[#15803d] px-3 py-1.5 text-[10px] sm:text-[11px] font-bold text-white tracking-wider uppercase shadow-sm whitespace-nowrap">
          90-Day Clinical Study
        </span>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-2 md:gap-x-4 mb-5 px-4">
        {[
          { icon: "⚡", value: "95%", label: "More energy" },
          { icon: "🦠", value: "85%", label: "Better gut health" },
          { icon: "😴", value: "80%", label: "Better sleep quality" },
          { icon: "🧠", value: "70%", label: "Sharper focus" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-1"
          >
            <div className="flex items-center justify-center gap-1">
              <div className="mb-1 text-2xl md:text-3xl">{item.icon}</div>
              <div className="text-2xl md:text-3xl text-[#16a34a] font-sans leading-none font-bold">
                {item.value}
              </div>
            </div>
            <div className="text-[11px] md:text-xs font-bold text-[#50000b] leading-tight px-1 whitespace-nowrap">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* DISCLAIMER */}
      <p className="text-[11px] text-gray-700 italic mb-4 font-medium opacity-80 px-6">
        *Based on 12-week randomized controlled trial by San Francisco Research
        Institute
      </p>

      {/* FOOTER SECTION*/}

      <div className="px-6 pt-4 border-t border-[#16a34a]/20 flex flex-col xl:flex-row justify-between items-end gap-4">
        {/* LEFT SIDE */}
        <div className="flex-1 w-full">
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-1 text-sm font-bold text-[#50000b] hover:opacity-80 transition-colors"
          >
            <span className="underline underline-offset-4 group-hover:opacity-90 decoration-[#50000b]/40">
              Why These Results Matter?
            </span>
            {isOpen ? (
              <ChevronUp size={16} strokeWidth={3} className="mt-0.5" />
            ) : (
              <ChevronDown size={16} strokeWidth={3} className="mt-0.5" />
            )}
          </button>

          {/* Expandable Content */}
          <div
            className={clsx(
              "grid transition-[grid-template-rows] duration-500 ease-in-out",
              isOpen
                ? "grid-rows-[1fr] mt-3 opacity-100"
                : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <p className="text-[13px] text-[#50000b]/80 leading-relaxed font-medium">
                Unlike most supplements with unverified claims, IM8 is backed by
                a 12-week randomized controlled clinical trial. Every ingredient
                is NSF Certified for Sport, verifying exact dosages and testing
                for 280+ banned substances — the same certification trusted by
                world-class athletes like Aryna Sabalenka, World No. 1 tennis
                player.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Badges */}
        <div className="flex gap-2 shrink-0 opacity-90 pt-2 xl:pt-0">
          <img
            src="https://im8health.com/cdn/shop/files/Vector_38d1c63f-d300-48b5-b6e6-084b0cf0086d.png?v=1764063546&width=100"
            alt="NSF Sport"
            width={33}
            height={50}
            className="object-contain"
          />
          <img
            src="https://im8health.com/cdn/shop/files/NSF_CONTENTS_CERTIFIED_White_Vert_2.png?v=1764063546&width=100"
            alt="Contents Certified"
            width={33}
            height={50}
            className="object-contain"
          />
          <img
            src="https://im8health.com/cdn/shop/files/b9a15702-8e60-441d-b1fd-ce12f6742dcb_svg.png?v=1764063545&width=100"
            alt="Non GMO"
            width={33}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
