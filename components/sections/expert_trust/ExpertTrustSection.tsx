"use client";

import { EXPERT_REVIEWS } from "@/lib/data";
import { ExpertVideoCard } from "./ExpertVideoCard";

import { useRef } from "react";
import { ReactNode } from "react";

function HorizontalScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    isDown = true;
    startX = e.pageX - ref.current.offsetLeft;
    scrollLeft = ref.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown = false;
  };

  const onMouseUp = () => {
    isDown = false;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 1.2; // tốc độ kéo
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={ref}
      className="
        flex gap-6
        overflow-x-auto
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        cursor-grab active:cursor-grabbing
    "
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}

export default function TrustedExperts() {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://im8health.com/cdn/shop/files/approvedby_bg.jpg?v=1727065114&width=2048)",
      }}
      className="py-10 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto px-10 max-sm:px-4">
        {/* Title */}
        <h2 className="text-center text-[52px] max-sm:text-[34px] font-light text-[#50000b] mb-14 font-['ABC Arizona Flare'] tracking-[-1px] leading-[57.2px]">
          Trusted by Physicians and Nutrition Experts
        </h2>

        {/* Horizontal scroll */}
        <HorizontalScroll>
          {EXPERT_REVIEWS.map((item) => (
            <ExpertVideoCard key={item.id} item={item} />
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
