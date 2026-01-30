"use client";

import { toast } from "react-toastify";
import SupplyDropdown from "../ui/SupplyDropdown";

export default function StickyProductBar() {
  return (
    <div className="fixed bottom-0 z-20 w-full border-t border-gray-300 bg-linear-to-r from-red-50 via-red-50 to-white">
      <div
        className="
          mx-auto flex h-24 max-sm:h-17 items-center justify-between
          gap-3
          px-4
          sm:px-6
          xl:px-65
        "
      >
        {/* LEFT – IMAGE + TITLE (DESKTOP ONLY) */}
        <div className="max-lg:hidden flex items-center gap-3 min-w-0">
          <img
            src="https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel01.jpg?v=1761040602&width=500"
            alt=""
            width={90}
            height={90}
            className="rounded-xl shrink-0"
          />

          <div className="min-w-0 text-[#50000b]">
            <div className="text-sm lg:text-lg font-bold line-clamp-1">
              Daily Ultimate Essentials: All-in-One Supplement
            </div>
            <div className="text-sm lg:text-lg font-semibold">(Forever Jar)</div>
          </div>
        </div>

        {/* RIGHT – DROPDOWN + BUTTON (ALWAYS ROW) */}
        <div className="flex w-full items-center gap-3 xl:w-auto">
          {/* DROPDOWN */}
          <div className="flex-1 xl:w-[320px]">
            <SupplyDropdown />
          </div>

          {/* BUTTON */}
          <button
            onClick={() =>
              toast.success("Handle successfully", { autoClose: 1000 })
            }
            className="
              shrink-0
              whitespace-nowrap
              rounded-full
              bg-(--color-brand-dark)
              px-6 py-4 max-sm:py-3
              text-sm font-bold text-white
              transition hover:opacity-90
            "
          >
            <span className="hidden md:inline">
              ADD TO CART - $78.33 USD/MO
            </span>
            <span className="md:hidden">ADD</span>
          </button>
        </div>
      </div>
    </div>
  );
}
