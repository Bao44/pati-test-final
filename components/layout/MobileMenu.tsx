"use client";

import { useEffect } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Im8GoldStandard from "../ui/Im8GoldStandard";
import { IMAGE_BANNERS } from "@/lib/data";
import CurrencyDropdown from "../ui/CurrencyDropdown";

const TEXT_LINKS = [
  "Welcome from David",
  "About Us",
  "Science",
  "Ingredients",
  "Quality and Standards",
  "IM8 Inner Circle",
  "FAQs",
  "The Healthspan Blog",
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const HEADER_OFFSET = "top-[96px]";
  const MENU_HEIGHT = "h-[calc(100vh-96px)]";

  return (
    <>
      {/* OVERLAY */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 z-30 transition-opacity duration-300",
          HEADER_OFFSET,
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={onClose}
      />

      {/* SIDEBAR CONTAINER */}
      <div
        className={clsx(
          "fixed left-0 w-full max-w-100 bg-[#fdfaf8] z-30 shadow-xl transition-transform duration-300 ease-in-out flex flex-col border-t border-gray-100",
          HEADER_OFFSET,
          MENU_HEIGHT,
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-5 space-y-3">
            <Im8GoldStandard />

            {/* Danh sách ảnh Banners */}
            <div className="space-y-3">
              {IMAGE_BANNERS.map((src, index) => (
                <div key={index} className="overflow-hidden">
                  <img
                    src={src}
                    alt="Menu Banner"
                    className="w-full h-auto object-cover cursor-pointer rounded-xl border-3 border-transparent hover:border-[#a40011]"
                  />
                </div>
              ))}
            </div>

            {/* Danh sách Text Links */}
            <div className="-mt-2">
              {TEXT_LINKS.map((link) => (
                <div
                  key={link}
                  className="py-3 border-b border-[#a40011] text-[#50000b] font-bold text-[14px] cursor-pointer hover:underline font-sans flex justify-between items-center"
                >
                  {link}
                </div>
              ))}
            </div>

            {/* Currency Selector */}
            <div className="py-1 flex items-center gap-1 text-[#50000b] font-semibold text-[14px] cursor-pointer hover:underline">
              <CurrencyDropdown direction="up" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
