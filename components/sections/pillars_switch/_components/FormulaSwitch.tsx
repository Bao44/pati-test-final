"use client";

type Mode = "organ" | "cellular";

export default function FormulaSwitch({
  value,
  onChange,
}: {
  value: Mode;
  onChange: (mode: Mode) => void;
}) {
  return (
    <div className="flex justify-center">
      <div className="relative flex w-105 h-14 max-sm:h-11 rounded-full bg-white shadow-md p-1">
        {/* ACTIVE PILL */}
        <div
          className={`
            absolute top-1 left-1 h-12 max-sm:h-9 w-1/2 rounded-full
            transition-all duration-300 ease-out
            ${
              value === "organ"
                ? "translate-x-0 bg-linear-to-r from-[#50000b] to-[#a40011]"
                : "translate-x-full bg-[linear-gradient(145deg,#E78D2D_0%,#3A0000_70%,#3A0000_100%)]"
            }
          `}
        />

        <button
          onClick={() => onChange("organ")}
          className={`
            relative z-10 w-1/2 rounded-full text-sm max-sm:text-xs font-semibold
            transition-colors
            ${value === "organ" ? "text-white" : "text-[#7a0010]"}
          `}
        >
          Daily Ultimate Essentials
        </button>

        <button
          onClick={() => onChange("cellular")}
          className={`
            relative z-10 w-1/2 rounded-full text-sm max-sm:text-xs font-semibold
            transition-colors
            ${value === "cellular" ? "text-white" : "text-[#7a0010]"}
          `}
        >
          Daily Ultimate Longevity
        </button>
      </div>
    </div>
  );
}
