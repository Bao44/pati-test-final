"use client";

import { TextAlignJustify, X } from "lucide-react"; // Import thêm X
import ShopDropdown from "../ui/ShopDropdown";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function HeaderNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* DESKTOP NAV */}
      <nav className="hidden lg:flex items-center gap-10 max-xl:gap-4 text-[17px] text-[#50000b] max-xl:text-sm font-semibold max-xl:font-black text-brand-dark-red whitespace-nowrap">
        <ShopDropdown />
        <span className="cursor-pointer hover:underline">Science</span>
        <span className="cursor-pointer hover:underline">
          The Beckham Stack
        </span>
        <span className="cursor-pointer hover:underline">
          Welcome from David
        </span>
      </nav>

      {/* MOBILE MENU TRIGGER */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="cursor-pointer p-1 hover:opacity-80 transition-opacity flex items-center justify-center w-10 h-10"
        >
          {/* Đổi icon dựa trên trạng thái mở/đóng */}
          {isMobileMenuOpen ? (
            <X size={34} strokeWidth={1.5} className="text-brand-red" />
          ) : (
            <TextAlignJustify
              size={34}
              strokeWidth={1.5}
              className="text-brand-red"
            />
          )}
        </button>
      </div>

      {/* SIDEBAR COMPONENT */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
}
