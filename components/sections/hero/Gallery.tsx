"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import clsx from "clsx";
import { IMAGE_HERO } from "@/lib/data";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { createPortal } from "react-dom";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const modalImageRef = useRef<HTMLImageElement>(null);

  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
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

  // Hàm này xử lý khi người dùng click vào dấu chấm -> Cuộn slider đến ảnh đó
  const handleDotClick = (index: number) => {
    setSelectedIndex(index);
    if (mobileSliderRef.current) {
      mobileSliderRef.current.scrollTo({
        left: index * mobileSliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Hàm này lắng nghe sự kiện cuộn của Slider để cập nhật dấu chấm active
  const handleMobileScroll = () => {
    if (mobileSliderRef.current) {
      const scrollLeft = mobileSliderRef.current.scrollLeft;
      const width = mobileSliderRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== selectedIndex) {
        setSelectedIndex(newIndex);
      }
    }
  };

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
            className="hidden md:flex md:flex-col xl:gap-5 gap-2 overflow-x-auto md:overflow-y-auto md:overflow-x-hidden no-scrollbar max-w-[calc(100vw-40px)] md:max-w-none max-h-100 xl:max-h-160 py-1 px-1 scroll-smooth"
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

          {/* MOBILE: Pagination Dots */}
          <div className="flex md:hidden gap-1 justify-center items-center w-full py-1 px-12 overflow-x-auto no-scrollbar touch-pan-x">
            {IMAGE_HERO.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className="w-6 h-6 flex items-center justify-center cursor-pointer"
              >
                <div
                  className={clsx(
                    "rounded-full transition-all duration-300 flex items-center justify-center",
                    selectedIndex === idx
                      ? "w-4 h-4 border border-[#50000b] bg-transparent" // Active
                      : "w-2.5 h-2.5 bg-[#fca5a5]", // Inactive
                  )}
                >
                  {selectedIndex === idx && (
                    <div className="w-2 h-2 bg-[#50000b] rounded-full" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN IMAGE DISPLAY */}
        <div className="flex-1 relative">
          {/* DESKTOP VIEW */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex rounded-2xl items-center justify-center bg-transparent"
          >
            <img
              src={IMAGE_HERO[selectedIndex]}
              alt="Product Main"
              className="w-full h-full object-contain rounded-2xl cursor-pointer duration-300"
              style={{ maxHeight: "600px" }}
            />
          </div>

          {/* MOBILE VIEW */}
          <div
            ref={mobileSliderRef}
            onScroll={handleMobileScroll}
            className="md:hidden flex w-full overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth items-center"
          >
            {IMAGE_HERO.map((img, idx) => (
              <div
                key={idx}
                className="w-full shrink-0 snap-center flex items-center justify-center h-full"
                onClick={() => setIsModalOpen(true)}
              >
                <img
                  src={img}
                  alt={`Slide ${idx}`}
                  className="w-full h-full object-contain rounded-xl"
                  draggable={false}
                />
              </div>
            ))}
          </div>
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
              className="absolute z-50 transition-colors cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="absolute inset-0 w-full h-full"
                >
                  <path
                    d="M5.45011 5.45011L16 1.08232L26.5499 5.45011L30.9177 16L26.5499 26.5499L16 30.9177L5.45011 26.5499L1.08232 16L5.45011 5.45011Z"
                    fill="white"
                    stroke="#50000B"
                    strokeWidth="0.5"
                  />
                </svg>

                <X
                  size={20}
                  strokeWidth={2}
                  className="relative z-10 text-[#50000b] group-hover:text-[#50000b] transition-colors"
                />
              </div>
            </button>

            {/* Ảnh Fullscreen */}
            <div className="relative w-[80%] h-[80%] max-sm:w-full max-sm:h-full flex items-center justify-center pointer-events-none animate-in zoom-in-95 duration-300">
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
