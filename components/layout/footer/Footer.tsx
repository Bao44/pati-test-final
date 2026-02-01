"use client";

import { FOOTER_LINKS } from "@/lib/data";
import MobileFooterAccordion from "./MobileFooterAccordion";
import { toast } from "react-toastify";

export default function Footer() {
  return (
    <footer className="bg-[#50000b] text-[#ff9693] sm:pt-16 md:pt-20 lg:pt-24 pb-15">
      <div className="relative w-full h-127.5 overflow-hidden sm:hidden flex flex-col justify-center items-center text-center px-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://im8health.com/cdn/shop/videos/c/vp/fbf49de132784b63b1209cf9f32ce77d/fbf49de132784b63b1209cf9f32ce77d.HD-720p-2.1Mbps-33478040.mp4?v=0"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] z-0" />

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-sm mx-auto">
          <p className="text-[38px] leading-[1.1] font-medium text-[#50000b] mb-8 font-serif">
            Join the community for exclusive wellness insights
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full rounded-full border border-[#50000b] px-6 py-3.5 text-sm font-bold text-[#50000b] placeholder:text-[#50000b] bg-white outline-none uppercase tracking-wide shadow-sm"
            />

            <button
              onClick={() =>
                toast.success("Handle successfully", { autoClose: 1000 })
              }
              type="button"
              className="w-full rounded-full bg-[#9d0015] hover:bg-[#7a0010] transition-colors px-6 py-3.5 text-sm font-bold text-white uppercase tracking-wide shadow-sm"
            >
              JOIN NOW
            </button>
          </form>

          <p className="text-[12px] text-[#50000b] font-medium mt-4 leading-snug">
            *By joining, you'll receive our wellness insights and
            <br /> can unsubscribe anytime.
          </p>
        </div>
      </div>

      <div className="max-w-375 mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        {/* TOP LINKS */}
        <div className="hidden sm:grid grid-cols-3 lg:grid-cols-8 xl:grid-cols-7 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
          {FOOTER_LINKS.map((col, i) => (
            <div key={i} className="max-lg:order-last">
              <p className="text-[17px] font-bold text-[#ff9693] mb-4 uppercase">
                {col.title}
              </p>
              <ul className="space-y-3 text-sm">
                {col.links.map((link, j) => (
                  <li
                    key={j}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="sm:col-span-5 lg:col-span-3 xl:col-span-2 max-lg:order-first max-lg:px-50 max-lg:text-center">
            <div className="max-lg:border-none xl:border-t-0 xl:border-l border-white/30 pt-6 sm:pt-0 sm:pl-6 lg:pl-10">
              <p className="text-sm max-lg:text-[17px] font-bold text-[#ff9693] mb-3 sm:mb-4 uppercase">
                Join the community for exclusive wellness insights
              </p>

              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base md:text-md font-semibold text-[#50000b] mb-3 sm:mb-4 outline-none bg-white placeholder:text-[#50000b] placeholder:opacity-100"
              />

              <button
                onClick={() =>
                  toast.success("Handle successfully", { autoClose: 1000 })
                }
                className="w-full bg-[#b00016] hover:bg-[#9d1b1f] transition text-white text-sm sm:text-base md:text-md font-semibold py-2.5 sm:py-3 px-4 sm:px-5 rounded-full"
              >
                JOIN NOW
              </button>

              <p className="text-[10px] sm:text-[11px] md:text-[12px] mt-3 sm:mt-4">
                *By joining, you'll receive our wellness insights and can
                unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <MobileFooterAccordion />

        {/* BIG LOGO */}
        <div className="relative flex justify-center items-center my-12 sm:my-16 md:my-20 lg:my-24">
          <img
            src="https://im8health.com/cdn/shop/files/IM8_Logo-R_Pink.svg?v=1729137155&width=900"
            alt="IM8 Logo"
            className="w-full max-w-350"
          />
        </div>

        {/* BOTTOM */}
        <div className="text-left text-[10px] sm:text-xs -mt-6 sm:-mt-8 md:-mt-10">
          <p className="text-[#f2c6c3] max-sm:text-[#ff9693] pb-6 sm:pb-8 md:pb-10 text-center sm:text-left">
            © 2026 IM8® · Privacy Policy · Terms of Service
          </p>

          <div className="border border-[#f2c6c3] p-3 sm:p-3.75 lg:mx-20 max-lg:mx-30 max-sm:mx-0 xl:mx-auto max-w-full sm:max-w-260 mx-auto">
            <p className="text-xs sm:text-sm md:text-[16px] text-center font-bold text-[#ff9693] leading-relaxed">
              *These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease.
            </p>
          </div>
          <p className="text-center mt-3 text-[13px] ">
            **Free Welcome Kit available for new subscribers only.
          </p>
        </div>
      </div>
    </footer>
  );
}
