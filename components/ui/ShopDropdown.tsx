"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Im8GoldStandard from "./Im8GoldStandard";
import { IMAGE_BANNERS } from "@/lib/data";

export default function ShopDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* TRIGGER */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer flex items-center gap-1 font-semibold text-md max-xl:font-black text-brand-dark-red"
      >
        Shop
        <ChevronDown
          size={14}
          strokeWidth={3}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* MEGA MENU */}
      <div
        className={clsx(
          "absolute -left-14 top-full",
          "w-screen max-w-108.25 max-xl:translate-x-10 -translate-x-1/2 z-50",
          "transition-all duration-300 ease-in-out",

          // 3. Logic ẩn hiện Dropdown
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",

          // Cầu nối giữ hover
          "before:absolute before:-top-4 before:left-0 before:h-4 before:w-full before:content-['']",
        )}
      >
        <div className="relative bg-white">
          {/* SCROLL AREA */}
          <div className="max-h-[90vh] overflow-y-auto px-6 pb-6 pt-10">
            <div className="grid grid-cols-1 gap-4">
              <Im8GoldStandard />
              {IMAGE_BANNERS.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className="
  rounded-xl
  cursor-pointer
  border-3 border-transparent
  hover:border-[#a40011]
"
                  width={600}
                  height={241}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
