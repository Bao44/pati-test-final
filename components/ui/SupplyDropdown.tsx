"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const OPTIONS = [
  {
    id: "90",
    title: "90-Day Supply",
    label: "90-Day Supply (Save 30%)",
    sub: "$2.61 USD / serving",
  },
  {
    id: "30",
    title: "30-Day Supply",
    label: "30-Day Supply (Save 20%)",
    sub: "$2.97 USD / serving",
  },
];

export default function SupplyDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(OPTIONS[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-md">
      {/* BUTTON */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-2xl border border-(--color-brand-dark) px-5 py-1 text-left transition"
      >
        <div>
          <div className="text-md font-bold text-(--color-brand-dark)">
            {selected.label}
          </div>
          <div className="text-sm font-semibold text-(--color-brand-darker)">
            {selected.sub}
          </div>
        </div>

        <span
          className={clsx("ml-4 transition-transform", open && "rotate-180")}
        >
          <ChevronDown color="var(--color-brand-dark)" />
        </span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute left-0 right-0 bottom-full mb-2 z-20 overflow-hidden rounded-2xl border border-(--color-brand-dark) bg-white shadow-lg">
          {OPTIONS.map((opt, index) => (
            <button
              key={opt.id}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className={`flex w-full flex-col px-5 py-3 text-left hover:bg-[#fff7f5]
      ${index !== 0 ? "border-t border-(--color-border-light)" : ""}`}
            >
              <span className="text-[17px] font-semibold text-(--color-brand-dark)">
                {opt.title}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
