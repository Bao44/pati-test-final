"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import clsx from "clsx";
import { IMAGE_HERO } from "@/lib/data";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { createPortal } from "react-dom";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const modalImageRef = useRef<HTMLImageElement>(null);
  const [buttonPos, setButtonPos] = useState({ top: 20, right: 20 });

  const scrollThumbnails = (direction: "up" | "down") => {
    if (scrollRef.current) {
      const scrollAmount = 100;
      scrollRef.current.scrollBy({
        top: direction === "down" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setCanScrollUp(scrollTop > 0);
      setCanScrollDown(scrollTop + clientHeight < scrollHeight - 1);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    setMounted(true); // Đánh dấu đã render xong phía client
    if (isModalOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isModalOpen]);

  // tính toán vị trí nút X
  const updateButtonPosition = () => {
    const img = modalImageRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();

    const offset = 20;

    const newTop = rect.top - offset;
    const newRight = window.innerWidth - rect.right - offset;

    setButtonPos({
      top: Math.max(10, newTop),
      right: Math.max(10, newRight),
    });
  };

  useLayoutEffect(() => {
    if (isModalOpen) {
      setTimeout(updateButtonPosition, 0);

      window.addEventListener("resize", updateButtonPosition);
      return () => window.removeEventListener("resize", updateButtonPosition);
    }
  }, [isModalOpen, selectedIndex]);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-2">
        {/* THUMBNAILS COLUMN */}
        <div className="relative flex flex-col items-center gap-2">
          {/* Button Up */}
          <button
            onClick={() => scrollThumbnails("up")}
            disabled={!canScrollUp}
            className={clsx(
              "hidden md:flex h-6 w-full items-center justify-center bg-white cursor-pointer",
              !canScrollUp && "opacity-0 pointer-events-none",
            )}
          >
            <ChevronUp size={16} />
          </button>

          {/* Scrollable Area */}
          <div
            ref={scrollRef}
            className="flex md:flex-col xl:gap-5 gap-2 overflow-x-auto md:overflow-y-auto md:overflow-x-hidden no-scrollbar max-w-[calc(100vw-40px)] md:max-w-none max-h-100 xl:max-h-160 py-1 px-1 scroll-smooth"
          >
            {IMAGE_HERO.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={clsx(
                  "relative shrink-0 rounded-xl transition-all duration-200 border overflow-hidden",
                  "h-16 w-16 xl:h-24 xl:w-24",
                  selectedIndex === idx
                    ? "border-[#a40011] ring-1 ring-[#a40011]"
                    : "border-transparent",
                )}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className="h-full w-full object-contain"
                />
              </button>
            ))}
          </div>

          {/* Button Down */}
          <button
            onClick={() => scrollThumbnails("down")}
            disabled={!canScrollDown}
            className={clsx(
              "hidden md:flex h-6 w-full items-center justify-center bg-white cursor-pointer",
              !canScrollDown && "opacity-0 pointer-events-none",
            )}
          >
            <ChevronDown size={16} />
          </button>
        </div>

        {/* MAIN IMAGE DISPLAY */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="rounded-2xl flex items-center justify-center h-full"
        >
          <img
            src={IMAGE_HERO[selectedIndex]}
            alt="Product Main"
            className="w-full h-full object-contain rounded-2xl cursor-pointer"
          />
        </div>
      </div>

      {mounted &&
        isModalOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 bg-white/10 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
            {/* Nút Đóng */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                top: `${buttonPos.top}px`,
                right: `${buttonPos.right}px`,
              }}
              className="absolute z-50 p-2 bg-white rounded-full border border-[#a40011] transition-colors cursor-pointer"
            >
              <X size={32} strokeWidth={2} className="text-[#a40011]" />
            </button>

            {/* Ảnh Fullscreen */}
            <div className="relative w-[80%] h-[80%] flex items-center justify-center pointer-events-none animate-in zoom-in-95 duration-300">
              <img
                ref={modalImageRef}
                src={IMAGE_HERO[selectedIndex]}
                alt="Product Fullscreen"
                onLoad={updateButtonPosition}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
