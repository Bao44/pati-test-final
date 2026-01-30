"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import clsx from "clsx";

const CURRENCIES = [
  { country: "Australia", code: "AUD", symbol: "$" },
  { country: "Belgium", code: "EUR", symbol: "€" },
  { country: "Canada", code: "CAD", symbol: "$" },
  { country: "France", code: "EUR", symbol: "€" },
  { country: "Germany", code: "EUR", symbol: "€" },
  { country: "United States", code: "USD", symbol: "$" },
  { country: "United Kingdom", code: "GBP", symbol: "£" },
  { country: "Japan", code: "JPY", symbol: "¥" },
  { country: "Switzerland", code: "CHF", symbol: "CHF" },
  { country: "India", code: "INR", symbol: "₹" },
  { country: "Brazil", code: "BRL", symbol: "R$" },
  { country: "South Africa", code: "ZAR", symbol: "R" },
];

interface CurrencyDropdownProps {
  direction?: "up" | "down";
  className?: string;
}

export default function CurrencyDropdown({
  direction = "down",
  className,
}: CurrencyDropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("USD");
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

  const filtered = CURRENCIES.filter((c) =>
    c.country.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div ref={ref} className={clsx("relative inline-block", className)}>
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 font-semibold hover:underline"
      >
        {selected}
        <ChevronDown
          size={14}
          strokeWidth={3}
          className={clsx(
            "transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {/* DROPDOWN CONTENT */}
      {open && (
        <div
          className={clsx(
            "absolute right-0 w-64 bg-white text-(--color-brand-dark) shadow-xl z-50 border border-gray-200",
            direction === "up" ? "bottom-full mb-2 left-0" : "top-full mt-3",
          )}
          
        >
          {/* SEARCH INPUT */}
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <input
                placeholder="SEARCH"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-200 px-3 py-2 pr-9 text-sm outline-none placeholder:text-gray-400 font-medium"
                autoFocus
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:opacity-70"
                >
                  <X size={16} strokeWidth={2.5} />
                </button>
              )}
            </div>
          </div>

          {/* CURRENCY LIST */}
          <div className="max-h-64 overflow-y-auto custom-scrollbar">
            {filtered.map((item) => (
              <button
                key={item.country}
                onClick={() => {
                  setSelected(item.code);
                  setOpen(false);
                }}
                className="group flex w-full items-center justify-between px-4 py-3 text-sm font-semibold hover:bg-[#fdfaf8] hover:text-[#a40011] transition-colors border-b border-gray-50 last:border-none"
              >
                <span className="uppercase">{item.country}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">
                  {item.code} {item.symbol}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
