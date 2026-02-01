"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/data";

export default function MobileFooterAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="sm:hidden">
      {FOOTER_LINKS.map((col, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={i} className="border-b border-[#ff9693]/50">
            {/* HEADER */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-4"
            >
              <span className="text-[#ff9693] font-semibold uppercase text-2xl">
                {col.title}
              </span>

              {isOpen ? (
                <Minus size={24} className="text-[#ff9693]" />
              ) : (
                <Plus size={24} className="text-[#ff9693]" />
              )}
            </button>

            {/* CONTENT */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-60 pb-4" : "max-h-0"
              }`}
            >
              <ul className="grid grid-cols-2 space-y-2 text-sm text-[#ff9693]">
                {col.links.map((link, j) => (
                  <li
                    key={j}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
