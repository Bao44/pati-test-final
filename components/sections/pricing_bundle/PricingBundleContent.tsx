"use client";

import { toast } from "react-toastify";

export default function PricingBundleContent() {
  return (
    <section
      className="w-full pt-8 max-sm:pb-2 sm:py-12 lg:px-2 flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://im8health.com/cdn/shop/files/welcome-kit-bg.png?v=1731643818')",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-0 max-w-7xl w-full">
        {/* CỘT TRÁI: TEXT & BẢNG GIÁ */}
        <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-5 w-full lg:w-175">
          {/* Tiêu đề */}
          <p className="text-[#50000b] text-[28px] sm:text-3xl md:text-[40px] leading-tight font-['ABC_Arizona_Flare'] font-medium uppercase mb-2 sm:mb-4 max-xl:text-center">
            Get started with IM8 for <br className="hidden xl:block" /> daily
            ultimate nutrition
          </p>

          {/* HÌNH ẢNH SẢN PHẨM TABLET */}
          <div className="max-lg:flex justify-center lg:justify-end w-full lg:w-175 h-auto lg:h-118.75 hidden">
            <img
              src="https://im8health.com/cdn/shop/files/welcome-kit-sach.png?v=1761040602&width=1200"
              alt="IM8 Welcome Kit Bundle"
              className="w-full max-w-full lg:max-w-175 object-contain"
            />
          </div>

          {/* Bảng giá */}
          <div className="flex flex-col w-full text-[#50000b]">
            {/* Sản phẩm chính */}
            <div className="flex justify-between items-center py-2 sm:py-3 border-b border-[#160505]">
              <span className="font-bold text-base sm:text-lg">
                Daily Ultimate Essentials
              </span>
              <span className="font-bold text-base sm:text-lg">$89</span>
            </div>

            <div className="mt-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                First Time Purchase:
              </span>
            </div>

            {/* (Free) */}
            <div className="flex justify-between items-center py-2 gap-2">
              <span className="font-semibold text-sm sm:text-base md:text-lg flex-1">
                Signature Red Cup
              </span>
              <div className="flex gap-4 sm:gap-10 shrink-0">
                <span className="line-through text-gray-400 text-sm sm:text-base md:text-lg">
                  $28
                </span>
                <span className="font-bold text-sm sm:text-base md:text-lg">
                  Free
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center py-2 gap-2">
              <span className="font-semibold text-sm sm:text-base md:text-lg flex-1">
                Daily Ultimate Essentials Single-Serve Storage Box
              </span>
              <div className="flex gap-4 sm:gap-10 shrink-0">
                <span className="line-through text-gray-400 text-sm sm:text-base md:text-lg">
                  $8
                </span>
                <span className="font-bold text-sm sm:text-base md:text-lg">
                  Free
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center py-2 gap-2">
              <span className="font-semibold text-sm sm:text-base md:text-lg flex-1">
                5x Bonus Daily Ultimate Essentials Single-Serve Sachets
              </span>
              <div className="flex gap-4 sm:gap-10 shrink-0">
                <span className="line-through text-gray-400 text-sm sm:text-base md:text-lg">
                  $18
                </span>
                <span className="font-bold text-sm sm:text-base md:text-lg">
                  Free
                </span>
              </div>
            </div>

            {/* Dòng Tổng cộng */}
            <div className="flex justify-between items-center py-3 sm:py-4 text-xl border-t border-[#160505]">
              <span className="font-bold text-base sm:text-lg">Total</span>
              <div className="flex gap-4 sm:gap-10 items-center">
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-500">
                  Save $54
                </span>
                <span className="font-bold text-xl sm:text-2xl">$89</span>
              </div>
            </div>
          </div>

          {/* Nút CTA */}
          <button
            onClick={() =>
              toast.success("Handle successfully", { autoClose: 1000 })
            }
            className="w-full bg-[#a3001b] hover:bg-[#8a0016] text-white font-bold py-3 px-3.25 max-sm:px-0 rounded-full uppercase tracking-wider transition-colors shadow-lg text-sm sm:text-base whitespace-nowrap"
          >
            Get your free IM8 welcome kit now**
          </button>

          {/* Footer bảo hành */}
          <div className="flex flex-col lg:flex-row max-xl:mx-auto justify-center gap-3 sm:gap-4 text-sm sm:text-base text-black font-medium">
            <div className="flex items-center gap-2">
              <img
                src="https://im8health.com/cdn/shop/t/121/assets/featured_check_icon.svg"
                alt="Check Icon"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span>
                <b>30-Day</b> money back guarantee
              </span>
            </div>
            <div className="flex items-center gap-2  max-xl:mx-auto">
              <img
                src="https://im8health.com/cdn/shop/t/121/assets/featured_check_icon.svg"
                alt="Check Icon"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span>
                <b>Update</b> or <b>cancel</b> anytime
              </span>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: HÌNH ẢNH SẢN PHẨM */}
        <div className="flex justify-center lg:justify-end w-full lg:w-175 h-auto lg:h-118.75 max-lg:hidden">
          <img
            src="https://im8health.com/cdn/shop/files/welcome-kit-sach.png?v=1761040602&width=1200"
            alt="IM8 Welcome Kit Bundle"
            className="w-full max-w-full lg:max-w-175 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
