"use client";

import { VIDEOS_HERO } from "@/lib/data";
import { useState } from "react";

const ACCORDION_ITEMS = [
  {
    id: "ingredients",
    title: "Ingredients",
    content: (
      <>
        <p>
          Our comprehensive formula combines 92 nutrient-rich ingredients to
          fuel your body with everything it needs for optimal health. Packed
          with essential vitamins, minerals, antioxidants, superfoods, greens,
          pre-pro-post-biotics and clinical dosages of CoQ10 and MSM.*
        </p>

        <a href="#" className="mt-1 inline-block underline font-semibold">
          View Supplement Facts
        </a>
      </>
    ),
  },
  {
    id: "tested",
    title: "Third-Party Tested",
    content: (
      <p>
        Every ingredient and dosage in IM8 is third-party tested. This
        guarantees that what you see on the label is what you get, so you know
        exactly what you’re putting into your body.
      </p>
    ),
  },
  {
    id: "enjoy",
    title: "How to Enjoy",
    content: (
      <ol className="list-decimal pl-5 space-y-1 text-[#50000b]">
        <li>Scoop out one serving (12 grams)</li>
        <li>
          Add 8–12 oz of cold water, juice, smoothie, or your favorite drink
          (Use less liquid for a stronger taste)
        </li>
        <li>Shake or blend well then enjoy</li>
      </ol>
    ),
  },
  {
    id: "taste",
    title: "Tasting Notes",
    content: (
      <p>
        Experience a delightful blend with earthy undertones, a subtle tartness,
        and a hint of chocolate, culminating in a smooth acai and mixed berries
        finish.
      </p>
    ),
  },
];

export default function ProductDetailsSection() {
  const [openId, setOpenId] = useState<string | null>("ingredients");

  return (
    <>
      <div className="-mt-4">
        {ACCORDION_ITEMS.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className="border-b border-[#50000b]">
              {/* HEADER */}
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="
                flex w-full items-center justify-between
                py-3
                text-left
                font-bold
                text-[#50000b]
              "
              >
                <span>{item.title}</span>
                <span className="text-[22px]">{isOpen ? "−" : "+"}</span>
              </button>

              {/* CONTENT */}
              <div
                className={`
                overflow-hidden
                transition-all
                duration-700
                ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
              `}
              >
                <div className="pb-5 text-[15px] text-[#50000b] space-y-3">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <AmbassadorSlider />
    </>
  );
}

function AmbassadorSlider() {
  return (
    <section className="pb-23 max-xl:pb-13">
      <p className="mb-5 font-semibold text-[#50000b] text-[20px] max-lg:text-[18px]">
        What our IM8 Ambassadors are saying
      </p>

      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide no-scrollbar">
        {VIDEOS_HERO.map((video) => (
          <div
            key={video.id}
            className="relative min-w-25 h-45 shrink-0 overflow-hidden rounded-xl bg-black cursor-pointer"
          >
            <img
              src={video.thumbnail}
              alt=""
              className="h-full w-full object-cover"
              width={100}
              height={180}
            />

            {/* PLAY ICON */}
            <div
              className="
                absolute inset-0
                flex items-center justify-center
              "
            >
              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-white/90
                "
              >
                ▶
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
