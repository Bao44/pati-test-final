"use client";

import { SCIENTISTS } from "@/lib/data";
import ScienceCard from "./ScienceCard";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScienceModal from "./ScienceModal";

export type ScienceItem = {
  id: number;
  name: string;
  title: string;
  image: string;
  description?: string;
};

export default function ScienceContent() {
  const [selectedScientist, setSelectedScientist] =
    useState<ScienceItem | null>(null);

  return (
    <section
      style={{
        backgroundImage:
          "url(https://im8health.com/cdn/shop/files/scientists-min.jpg?v=1727597898&width=2048)",
      }}
      className="py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-357.25 mx-auto px-2 xl:px-6">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <p className="uppercase tracking-[2px] text-[10px] sm:text-xs font-semibold text-[#50000b] font-serif">
            DRIVEN BY SCIENCE
          </p>
          <p className="text-2xl sm:text-3xl md:text-[52px] font-normal text-[#50000b] leading-tight px-2">
            Meet The Brilliant Minds Behind IM8
          </p>
          <p className="text-[#50000b] text-xs sm:text-sm md:text-base px-4">
            An unparalleled collaboration between academia, medicine, and space
            science.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-6">
          {SCIENTISTS.map((scientist) => (
            <ScienceCard
              key={scientist.id}
              item={scientist}
              onOpenModal={() => setSelectedScientist(scientist)}
            />
          ))}
        </div>
      </div>

      {/* MODAL AREA */}
      <AnimatePresence>
        {selectedScientist && (
          <ScienceModal
            item={selectedScientist}
            onClose={() => setSelectedScientist(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
