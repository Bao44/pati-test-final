"use client";

import { useState } from "react";
import clsx from "clsx";
import FormulaSwitch from "./_components/FormulaSwitch";
import {
  CheckCircle2,
  Braces,
  ShieldPlus,
  HeartPulse,
  TableRowsSplit,
  Antenna,
  LocateFixed,
  Zap,
  Sparkles,
  Hourglass,
  FlaskConical,
  Leaf,
  Dna,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const BOTTOM_FEATURES = {
  organ: [
    {
      icon: FlaskConical,
      title: "Superior Ingredient Forms",
      desc: "Bioactive Vitamins & Organic Minerals for maximum absorption.",
    },
    {
      icon: Leaf,
      title: "Clean Formulation",
      desc: "No Stevia (Uses Reb M), Allergen Free, Non-GMO, Vegan Friendly.",
    },
    {
      icon: Sparkles,
      title: "Branded Ingredients",
      desc: "Quatrefolic®, VegD3®, FloraSMART®, AstaPure®.",
    },
  ],
  cellular: [
    {
      icon: Zap,
      title: "Therapeutic Dosing",
      desc: "Clinically relevant doses of key longevity ingredients like NMN and Spermidine.",
    },
    {
      icon: Dna,
      title: "Synergistic Formulation",
      desc: "Ingredients selected to work together to amplify cellular repair and renewal.",
    },
    {
      icon: ShieldCheck,
      title: "Premium Purity",
      desc: "Rigorous testing for purity and potency, free from fillers and artificial additives.",
    },
  ],
};

const MODES = {
  organ: {
    header: "COMPREHENSIVE WELLNESS",
    title: "5 Pillars of Total Health",
    subtitle:
      "A holistic approach to wellness, addressing every dimension of your health with precision-formulated ingredients.",
    themeColor: "bg-linear-to-r from-[#a40011] to-[#50000b]",
    lightBg: "bg-[#fdf2f2]",
    color: "bg-linear-to-r from-[#50000b] to-[#a40011]",
    cards: [
      {
        number: "01",
        icon: Braces,
        title: "Comprehensive Nutritional Foundation",
        subtitle: "Completed Vitamin & Mineral Profile",
        benefits: null,
        ingredients: [
          "All essential vitamins (A, C, D, E, K1, K2, B-complex)",
          "Full mineral spectrum (12 essential)",
          "Vitamin C: 900mg (1000% DV) - Antioxidant Support",
          "Vitamin D3: 1200 IU - From Vegan Lichen",
          "Vitamin B12: 24mcg - Bioactive Methylcobalamin",
          "Bioactive Forms: Quatrefolic®️ & Methylcobalamin for Superior Absorption",
        ],
      },
      {
        number: "02",
        icon: ShieldPlus,
        title: "Superior Digestive Health Support",
        subtitle: "4-Tier Digestive System",
        benefits: null,
        ingredients: [
          "PREBIOTICS: Guar Fiber & Agave Inulin (Feeds beneficial bacteria)",
          "PROBIOTICS: 10 Billion CFU (Bacillus subtilis DE111® & Bacillus coagulans BC99®)",
          "POSTBIOTICS: Lactobacillus casei 327 (FloraSMART®) - Clinically Proven for Regularity",
          "DIGESTIVE ENZYMES: Complete Enzyme Complex (Amylase, Protease, Lipase, Cellulase)",
        ],
      },
      {
        number: "03",
        icon: HeartPulse,
        title: "Powerful Superfood & Antioxidant Complex",
        subtitle: "4,100MG Raw Superfoods Blend",
        benefits: null,
        ingredients: [
          "Organic Greens: Spinach, Beet Root, Carrot Root",
          "Antioxidant Fruits: Blueberry, Pomegranate, Cranberry, Acai",
          "Functional Herbs: Milk Thistle, Turmeric, Ginger, Elderberry",
          "Specialty: Sea Moss, Grape Seed Extract, Green Tea",
        ],
      },
      {
        number: "04",
        icon: TableRowsSplit,
        title: "Specialized Health Complexes",
        subtitle: "Targeted Support for Performance",
        benefits: null,
        ingredients: [
          "Advanced Hydration & Electrolyte (2,500mg): Hydra Electrolytes Complex",
          "Essential Amino Acid & Recovery (1,165mg): Amino & Renew Complex",
          "Adaptogenic & Mushroom Support (200mg): Ashwagandha, Reishi, Lion's Mane",
          "Heart Health Support (100mg): CoQ10, Cellular",
        ],
      },
      {
        number: "05",
        icon: Antenna,
        title: "Cell Rejuvenation Technology 8™",
        subtitle: "Proprietary Longevity Complex",
        benefits: null,
        ingredients: [
          "Spermidine",
          "Astaxanthin",
          "Trans-resveratrol",
          "Berberine",
          "Urolithin A",
          "Seaweed Extracts",
        ],
      },
    ],
  },
  cellular: {
    header: "ADVANCED LONGEVITY SCIENCE",
    title: "5 Pillars of Longevity",
    subtitle:
      "Cutting-edge science meets ancient wisdom to optimize your healthspan and support graceful aging.",
    themeColor:
      "bg-[linear-gradient(145deg,#E78D2D_0%,#3A0000_70%,#3A0000_100%)]",
    lightBg: "bg-[#fbf6f1]",
    color: "bg-[linear-gradient(145deg,#3A0000_0%,#3A0000_30%,#E78D2D_100%)]",
    cards: [
      {
        number: "01",
        icon: LocateFixed,
        title: "Cellular Foundation Builder",
        subtitle: "Essential Amino Acid Support",
        benefits:
          "Provides therapeutic dosages of two critical longevity amino acids that naturally decline with age, supporting cellular protection and longevity pathways.",
        ingredients: ["L-Glycine 3,000mg", "Taurine 2,000mg"],
      },
      {
        number: "02",
        icon: ShieldPlus,
        title: "Cellular Protection Activator",
        subtitle: "Senolytic Complex",
        benefits:
          "Triple senolytic complex that targets cellular senescence—one of the primary hallmarks of aging—through complementary compounds that eliminate 'zombie cells'.",
        ingredients: [
          "Trans-Resveratrol 250mg",
          "Quercetin Phytosome 250mg",
          "Fisetin 100mg",
        ],
      },
      {
        number: "03",
        icon: Zap,
        title: "NMN NAD+ Energy Booster",
        subtitle: "Mitochondrial Support",
        benefits:
          "Combines the most direct NAD+ precursor with a mitochondrial biogenesis promoter for comprehensive cellular energy support and DNA repair.",
        ingredients: ["NMN 300mg", "PQQ 10mg"],
      },
      {
        number: "04",
        icon: Sparkles,
        title: "Metabolic AMPK/SIRT1 Activator",
        subtitle: "Metabolic Switch",
        benefits:
          "Enhanced bioavailability and metabolic support combined with powerful antioxidant protection for optimal metabolic function and cellular stress resistance.",
        ingredients: ["Dihydroberberine 100mg", "Astaxanthin 6mg"],
      },
      {
        number: "05",
        icon: Hourglass,
        title: "Cellular Renewal Activator",
        subtitle: "Autophagy Support (3mg)",
        benefits:
          "Promotes autophagy—the cellular ‘cleaning’ process essential for healthy aging—removing damaged proteins and organelles for optimal cellular function.",
        ingredients: ["Spermidine 3mg"],
      },
    ],
  },
};

export default function PillarsSwitch() {
  const [mode, setMode] = useState<"organ" | "cellular">("organ");
  const [activeIndex, setActiveIndex] = useState(0);

  const data = MODES[mode];
  const activeCard = data.cards[activeIndex];
  const Icon = activeCard.icon;
  const bottomCards = BOTTOM_FEATURES[mode];

  const handleChangeMode = (m: "organ" | "cellular") => {
    setMode(m);
    setActiveIndex(0);
  };

  return (
    <section
      className={clsx(
        "transition-all duration-500 ease-in-out pb-20 sm:pb-24",
        "bg-cover bg-center bg-no-repeat",
      )}
      style={{
        width: "100%",
        backgroundImage:
          mode === "organ"
            ? "url('https://im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.44.31_PM.png?v=1766404140&width=1200')"
            : "url('https://im8health.com/cdn/shop/files/Screenshot_2025-12-22_at_7.45.28_PM.png?v=1766404140&width=1200')",
      }}
    >
      <div className="pt-20 sm:pt-30 px-4 sm:px-6 max-w-350 mx-auto">
        {/* SWITCH & HEADER */}
        <FormulaSwitch value={mode} onChange={handleChangeMode} />

        <div className="text-center mt-10 sm:mt-12 mb-10 sm:mb-16">
          <span
            className={clsx(
              "inline-block py-2.5 px-5 sm:py-3 sm:px-6 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[1px] uppercase text-white shadow-md mb-4 sm:mb-6",
              data.color,
            )}
          >
            {data.header}
          </span>

          <h2 className="text-[32px] sm:text-[42px] lg:text-[56px] leading-tight font-normal text-[#50000b] font-['ABC Arizona Flare'] px-2">
            {data.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#50000b]/80 max-w-2xl mx-auto px-2">
            {data.subtitle}
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 sm:gap-8 items-start mb-16 sm:mb-20">
          {/* LEFT COLUMN: PILLAR LIST */}
          <div className="flex flex-col gap-3 order-last lg:order-first">
            {data.cards.map((card, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={clsx(
                    "group relative w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between overflow-hidden hover:translate-x-1 sm:hover:translate-x-2",
                    isActive
                      ? clsx(
                          "text-white shadow-lg border-transparent scale-[1.01] sm:scale-[1.02]",
                          data.themeColor,
                        )
                      : "bg-white/80 backdrop-blur-sm text-[#50000b] border-white/40 hover:shadow-md",
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-18 bg-white rounded-r-full shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                  )}

                  <div className="flex items-center gap-3 sm:gap-4 pl-1 sm:pl-2">
                    <div
                      className={clsx(
                        "w-10 h-10 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center shrink-0",
                        isActive ? " bg-white/20" : "bg-[#50000b]/10",
                      )}
                    >
                      <card.icon
                        size={20}
                        className="sm:w-5.5 sm:h-5.5"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <p
                        className={clsx(
                          "text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-0.5",
                          isActive ? "text-white/60" : "text-[#50000b]/50",
                        )}
                      >
                        {card.number}
                      </p>
                      {/* Giới hạn độ rộng text để tránh vỡ layout trên mobile nhỏ */}
                      <p className="font-bold text-[14px] sm:text-[15px] leading-tight max-w-50 sm:max-w-55">
                        {card.title}
                      </p>
                      <p
                        className={clsx(
                          "text-[10px] sm:text-[11px] mt-1 hidden sm:block",
                          isActive ? "text-white/70" : "text-[#50000b]/60",
                        )}
                      >
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    size={18}
                    className={clsx(
                      "transition-transform duration-300 hidden sm:block",
                      isActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0",
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: DETAIL CARD */}
          <div
            className={clsx(
              "relative rounded-4xl sm:rounded-[40px] px-6 py-10 sm:px-13 sm:py-14 min-h-auto xl:min-h-125 flex flex-col justify-center",
              data.lightBg,
            )}
          >
            {/* Watermark Number responsive size */}
            <div className="absolute -top-6 sm:-top-10 right-0 text-[180px] sm:text-[280px] font-['ABC Arizona Flare'] leading-none text-[#50000b]/5 pointer-events-none select-none">
              {activeCard.number}
            </div>

            <div
              className={`absolute top-6 right-6 sm:top-13 sm:right-13 text-white text-[10px] sm:text-[12px] font-bold px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full uppercase tracking-widest
                ${mode === "organ" ? "bg-[#50000b]" : "bg-[#E78D2D]"}
              `}
            >
              Pillar {parseInt(activeCard.number)}
            </div>

            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-[#50000b]/10 flex items-center justify-center mb-6 sm:mb-8
                ${
                  mode === "organ"
                    ? "text-[#50000b] bg-[#50000b]/10"
                    : "text-[#E78D2D] bg-[#e78d2d26]"
                }
              `}
            >
              <Icon size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
            </div>

            <h3 className="text-[28px] sm:text-[40px] leading-[1.1] font-normal text-[#50000b] font-['ABC Arizona Flare'] mb-2 pr-20 sm:pr-0">
              {activeCard.title}
            </h3>

            <div className="flex items-center justify-start">
              <div className="h-0.5 w-12 bg-[#50000b]/20 my-3 sm:my-4" />
              <p className="text-[10px] sm:text-xs font-bold tracking-[2px] text-[#50000b]/60 uppercase px-3 sm:px-5">
                {activeCard.subtitle}
              </p>
            </div>

            <div className="h-px w-full bg-[#50000b]/10 my-4" />

            {activeCard.benefits && (
              <>
                <p className="text-[10px] sm:text-xs font-bold text-[#50000b] uppercase mb-3 sm:mb-4 tracking-wider">
                  Key Benefits
                </p>
                <div className="mb-6 sm:mb-8">
                  <p className="text-[14px] sm:text-[16px] text-[#50000b] leading-relaxed">
                    {activeCard.benefits}
                  </p>
                </div>
                <div className="h-px w-full bg-[#50000b]/10 my-4" />
              </>
            )}

            <div>
              <p className="text-[10px] sm:text-xs font-bold text-[#50000b] uppercase mb-3 sm:mb-4 tracking-wider">
                {mode === "organ" ? "Key Ingredients" : "Key Benefits"}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {activeCard.ingredients?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <CheckCircle2
                        size={16}
                        className={clsx(
                          "sm:w-4.5 sm:h-4.5",
                          mode === "organ"
                            ? "text-[#50000b]"
                            : "text-[#b45309]",
                        )}
                      />
                    </div>
                    <span className="text-[14px] sm:text-[15px] text-[#50000b] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {bottomCards.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] sm:rounded-3xl p-4 sm:p-8 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className={clsx(
                  "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 sm:mb-4",
                  mode === "organ"
                    ? "bg-[#fdf2f2] text-[#50000b]"
                    : "bg-[#fef7ec] text-[#b45309]",
                )}
              >
                <feat.icon
                  size={22}
                  className="sm:w-6 sm:h-6"
                  strokeWidth={1.5}
                />
              </div>
              <p className="text-[14px] sm:text-[16px] font-semibold text-[#50000b] mb-2">
                {feat.title}
              </p>
              <p className="text-[11px] sm:text-sm text-[#50000b]/70 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
