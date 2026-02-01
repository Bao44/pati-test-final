"use client";

import { useState } from "react";
import clsx from "clsx";
import FormulaSwitch from "./_components/FormulaSwitch";
import {
  ArrowRight,
  Check,
  Braces,
  ShieldPlus,
  HeartPulse,
  TableRowsSplit,
  VectorSquare,
  IndianRupee,
  Antenna,
  Sunset,
  Waves,
  LocateFixed,
  Hourglass,
} from "lucide-react";

const MODES = {
  organ: {
    header: "Comprehensive Body Support",
    label: "Daily Ultimate Essentials",
    title: "9 Major Organ Systems",
    subtitle:
      "One serving delivers comprehensive support for your entire body, replacing multiple supplements with a single, powerful formula.",
    bg: "bg-organ",
    color: "bg-linear-to-r from-[#50000b] to-[#a40011]",
    cards: [
      {
        number: "01",
        icon: Braces,
        title: "Digestive Support",
        short: "Digestive",
        component: "Prebiotics, Probiotics, Postbiotics, Enzymes",
        desc: "A complete 4-tier digestive support system featuring 10 Billion CFU of probiotics and clinically proven enzymes to optimize nutrient absorption and gut health.",
      },
      {
        number: "02",
        icon: ShieldPlus,
        title: "Immune Support",
        short: "Immune",
        component: "Vit C, D, Zinc, Mushrooms",
        desc: "Fortifies your body's natural defenses with high-potency Vitamin C (1000% DV), Zinc, and a specialized mushroom complex including Reishi and Chaga.",
      },
      {
        number: "03",
        icon: HeartPulse,
        title: "Cardiovascular Support",
        short: "Cardiovascular",
        component: "COQ10, NITRATES, POTASSIUM",
        desc: "Supports heart health and circulation with natural nitrates from beetroot, CoQ10 for cellular energy, and potassium for healthy blood pressure levels.",
      },
      {
        number: "04",
        icon: TableRowsSplit,
        title: "Muscular Support",
        short: "Muscular",
        component: "Aminos, MSM, Electrolytes",
        desc: "Accelerates recovery and maintains muscle function with a full spectrum of amino acids, MSM for joint comfort, and essential electrolytes.",
      },
      {
        number: "05",
        icon: Antenna,
        title: "Skeletal Support",
        short: "Skeletal",
        component: "Calcium, Vit D, K2, Boron",
        desc: "Builds and maintains strong bones with bioavailable Calcium, Vitamin D3 from vegan lichen, and Vitamin K2 to direct calcium to where it's needed.",
      },
      {
        number: "06",
        icon: Waves,
        title: "Skin, Hair & Nail Support",
        short: "Integumentary",
        component: "MSM, Vit C, E, Biotin, Silica",
        desc: "Promotes radiant skin, hair, and nails through collagen-supporting Vitamin C, Biotin, and MSM to combat oxidative stress.",
      },
      {
        number: "07",
        icon: Sunset,
        title: "Nervous System Support",
        short: "Nervous",
        component: "B-Vitamins, Magnesium, Adaptogens",
        desc: "Calms the mind and supports cognitive function with a complete B-Complex (including Methylcobalamin) and stress-adapting herbs like Reishi & Ashwagandha.",
      },
      {
        number: "08",
        icon: VectorSquare,
        title: "Endocrine Support",
        short: "Endocrine",
        component: "Adaptogens, Vit D, Chromium",
        desc: "Balances hormones and metabolism with targeted adaptogens and Chromium to support healthy blood sugar levels already within normal range.",
      },
      {
        number: "09",
        icon: IndianRupee,
        title: "Urinary Support",
        short: "Urinary",
        component: "Hydra Electrolytes Complex",
        desc: "Optimizes fluid balance and kidney function with a precision hydration complex featuring Potassium Citrate and Magnesium Glycinate.",
      },
    ],
  },

  cellular: {
    header: "Advanced Cellular Science",
    label: "Daily Ultimate Longevity",
    title: "Cellular Health Redefined",
    subtitle:
      "A breakthrough formula targeting the 12 hallmarks of aging to help you live better, longer.",
    bg: "bg-cellular",
    color: "bg-[linear-gradient(145deg,#3A0000_0%,#3A0000_30%,#E78D2D_100%)]",
    cards: [
      {
        number: "01",
        icon: LocateFixed,
        title: "Cellular Cleansing Support",
        short: "Activates Cellular Cleansing",
        component: "Autophagy Activation",
        desc: "Activates the body's natural cellular cleanup process (autophagy) to remove damaged components and improve cellular efficiency.",
      },
      {
        number: "02",
        icon: LocateFixed,
        title: "Cellular Renewal Support",
        short: "Promotes Cellular Renewal",
        component: "Regeneration Support",
        desc: "Promotes the regeneration of healthy cells and tissues, supporting the body's ability to repair and maintain itself over time.",
      },
      {
        number: "03",
        icon: Hourglass,
        title: "Cellular Aging Support",
        short: "Shows Cellular Aging",
        component: "Telomere Support",
        desc: "Targets the biological mechanisms of aging to help slow down cellular degradation and maintain youthful function.",
      },
      {
        number: "04",
        icon: LocateFixed,
        title: "Youthful Aging Support",
        short: "Aids Youthful Aging",
        component: "Resilience & Vitality",
        desc: "Supports overall vitality and resilience, helping you maintain energy, focus, and physical capability as you age.",
      },
    ],
  },
};

export default function ModeSwitchSection() {
  const [mode, setMode] = useState<"organ" | "cellular">("organ");
  const [activeIndex, setActiveIndex] = useState(0);

  const data = MODES[mode];
  const activeCard = data.cards[activeIndex];
  const Icon = activeCard.icon;

  const handleChangeMode = (m: "organ" | "cellular") => {
    setMode(m);
    setActiveIndex(0);
  };

  return (
    <section
      className={clsx(
        "transition-colors duration-500",
        "pt-30 pb-40 px-6 max-lg:px-10 max-sm:px-3 max-sm:pt-10 max-sm:pb-15",
        data.bg,
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* SWITCH */}
        <FormulaSwitch value={mode} onChange={handleChangeMode} />

        {/* TITLE */}
        <div className="text-center mb-14 mt-18 max-sm:mt-10">
          <div className="max-sm:px-4">
            <button
              className={`text-xs max-sm:text-[13px] uppercase text-white py-3 px-6 max-sm:w-full rounded-full font-bold ${data.color}`}
            >
              {data.header}
            </button>
          </div>
          <p className="text-[56px] max-lg:text-[48px] max-sm:text-[24px] font-medium text-[#50000b] mt-6 max-sm:mt-4">
            {data.title}
          </p>
          <p className="mt-5 text-lg max-lg:text-[17px] max-sm:text-[15px] max-w-xl mx-auto text-[#50000b]">
            {data.subtitle}
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-13 items-start">
          {/* LEFT GRID */}
          <div
            className={clsx(
              "grid gap-4 max-lg:order-last",
              mode === "organ" ? "grid-cols-3" : "grid-cols-2",
            )}
          >
            {data.cards.map((card, i) => {
              const isActive = i === activeIndex;

              return (
                <button
                  key={card.title}
                  onClick={() => setActiveIndex(i)}
                  className={clsx(
                    `group relative rounded-[22px] px-10 py-8.5 max-sm:py-4.5 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 duration-300`,
                    isActive
                      ? mode === "organ"
                        ? "bg-linear-to-br from-[#a40011] to-[#50000b] text-white shadow-[0_20px_40px_rgba(164,0,17,0.35)]"
                        : "bg-[linear-gradient(145deg,#E78D2D_0%,#3A0000_70%)] text-white shadow-[0_20px_40px_rgba(231,141,45,0.35)]"
                      : "bg-[linear-gradient(145deg,rgba(255,255,255,0.98)_0%,rgba(245,234,234,0.95)_50%,rgba(255,245,245,0.92)_100%)] shadow-[0_30px_80px_rgba(231,141,45,0.25)] text-[#50000b] hover:shadow-md",
                  )}
                >
                  {/* number */}
                  <span
                    className={clsx(
                      "absolute top-2 left-3 text-[10px] font-bold",
                      isActive ? "text-white/70" : "text-[#50000b]/30",
                    )}
                  >
                    {card.number}
                  </span>
                  {/* ICON */}
                  {mode === "organ" ? (
                    <card.icon
                      size={36}
                      className={clsx(
                        i === activeIndex ? "text-white" : "text-[#50000b]",
                      )}
                    />
                  ) : (
                    <card.icon size={36} className="text-[#e78d2d]" />
                  )}

                  <p className="text-[13px] max-sm:text-[11px] font-semibold leading-tight mt-3 whitespace-nowrap">
                    {card.short}
                  </p>

                  {/* ARROW */}
                  <ArrowRight
                    size={13}
                    className={clsx(
                      `absolute bottom-4 right-4 max-sm:bottom-3 max-sm:right-2 transition-all duration-300`,
                      i === activeIndex
                        ? "opacity-100 translate-x-0 text-white"
                        : "opacity-0 -translate-x-1 text-[#50000b] group-hover:opacity-60 group-hover:translate-x-0",
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT DETAIL */}
          <div
            className={clsx(
              `relative rounded-[36px] 
              px-14 py-13 max-lg:px-10 max-lg:pt-12 max-sm:px-5 max-sm:pt-6 max-sm:pb-3
              min-h-102.5 max-lg:min-h-90 
              overflow-hidden transition-all duration-500 
              max-lg:order-first`,
              mode === "organ"
                ? "bg-linear-to-br from-white/98 via-[#f5eaea]/95 to-[#fff5f5]/92 shadow-[0_30px_80px_rgba(164,0,17,0.25)]"
                : "bg-[linear-gradient(145deg,rgba(255,255,255,0.98)_0%,rgba(245,234,234,0.95)_50%,rgba(255,245,245,0.92)_100%)] shadow-[0_30px_80px_rgba(231,141,45,0.25)]",
            )}
          >
            {/* watermark */}
            <div className="absolute right-23 bottom-25 opacity-[0.05] scale-[2.2]">
              <Icon size={100} className="text-[#50000b]" />
            </div>

            {/* header */}
            <div className="flex items-start gap-4 mb-6 max-sm:flex-col">
              <div
                className={clsx(
                  "relative h-19 w-19 max-sm:h-15 max-sm:w-15 rounded-3xl flex items-center justify-center shrink-0  border border-[#50000b]/10",
                  mode === "organ"
                    ? "bg-[#50000b]/10 text-[#50000b]"
                    : "bg-[#E78D2D]/15 text-[#E78D2D]",
                )}
              >
                <Icon size={28} />

                <span
                  className={clsx(
                    "absolute -top-2 -right-2 h-7 w-7 rounded-full text-xs font-bold flex items-center justify-center",
                    mode === "organ"
                      ? "bg-[#50000b] text-white"
                      : "bg-[#E78D2D] text-white",
                  )}
                >
                  {activeCard.number}
                </span>
              </div>

              <div className="px-3 max-sm:px-0">
                {/* TITLE */}
                <p className="text-[34px] max-sm:text-xl text-[#50000b] leading-tight font-semibold">
                  {activeCard.title}
                </p>

                {/* COMPONENT */}
                <div className="flex items-center mt-3 mb-6">
                  <div className="h-px w-8 bg-[#50000b]" />
                  <p className="px-3 text-[11px] max-sm:text-[12px] tracking-widest font-semibold uppercase text-[#50000b]">
                    {activeCard.component}
                  </p>
                </div>

                {/* DESCRIPTION */}
                <p className="max-w-xl text-[16px] max-sm:text-[13px] leading-relaxed text-[#a40011]">
                  {activeCard.desc}
                </p>

                {/* CTA */}
                <button
                  className={` mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#50000b]/10
                  px-6 py-3
                  text-sm
                  font-semibold
                  text-[#50000b]
                  transition
                  whitespace-nowrap
                  ${
                    mode === "organ"
                      ? "bg-[linear-gradient(135deg,rgba(80,0,11,0.04)_0%,rgba(0,0,0,0)_100%)]"
                      : "bg-[linear-gradient(135deg,rgba(231,141,45,0.08)_0%,rgba(0,0,0,0)_100%)]"
                  }
                  `}
                >
                  <div className="border-[#50000b] border-2 rounded-full p-1 shrink-0">
                    <Check
                      size={12}
                      className="text-[#50000b]"
                      strokeWidth={4}
                    />
                  </div>
                  Clinically Dosed Ingredients
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
