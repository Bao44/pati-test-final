"use client";

import { MONTHLY_BREAKDOWN } from "@/lib/data";
import { toast } from "react-toastify";

export default function SavingsComparison() {
  return (
    <section className="relative bg-[#f5eaea] py-10 md:py-0 md:h-149.25 xl:h-175.75">
      <div className="relative md:px-5 xl:px-0 lg:max-w-375 mx-auto flex flex-col md:flex-row lg:flex-row md:items-start xl:items-center justify-center items-center h-full">
        {/* LEFT */}
        <div className="relative md:w-163.25 md:h-full lg:w-163.25 xl:h-full">
          <img
            className="hidden lg:block absolute w-full h-full opacity-30 object-cover"
            src="https://im8health.com/cdn/shop/files/desktop_comparison-pill_2x_0da77b74-6605-4244-8e13-4c0e828ceb71.png?v=1730719244&width=1296"
            alt=""
          />
          <div className="relative flex flex-col justify-center md:justify-start md:items-start items-center md:w-full h-full px-7 md:pt-15 md:pl-5 xl:pt-16 xl:pl-14">
            <h2 className="text-[32px] text-center md:text-left md:text-[40px] lg:text-[40px] leading-10 text-[#5a0010] font-['ABC Arizona Flare'] tracking-[-0.8px] max-w-87.5">
              Replaces <br className="md:hidden lg:hidden" /> 16 Supplements,{" "}
              <br className="hidden md:block" />
              Saving You <br className="hidden md:block xl:hidden" /> Money.
            </h2>

            <button className="hidden md:block bg-[#9d1b1f] text-white font-bold uppercase px-4.25 py-3.25 rounded-full mt-6 w-68 h-12 font-['Aeonik']">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* CENTER PRODUCT */}
        <div className="absolute z-10 top-30 md:left-80.75 md:top-12.5 xl:left-130.75 xl:top-18">
          <img
            src="https://im8health.com/cdn/shop/files/sachet-box.png?v=1761040602&width=838"
            alt="IM8 Product"
            className="w-27.5 h-41.25 md:w-60 md:h-88 xl:w-94.5 xl:h-136.25 drop-shadow-xl leading-[28.8px]"
          />
        </div>

        <div className="absolute py-2 right-2 top-34 md:top-65 md:left-50 xl:left-73 xl:top-78 z-10 w-32 h-32 md:w-52 md:h-52 xl:w-74 xl:h-74 rounded-full bg-[#5a0010] text-white flex flex-col items-center justify-evenly lg:justify-center text-center md:gap-2 xl:gap-4">
          <span className="text-[10px] md:text-[15px] xl:text-md xl:tracking-widest font-bold xl:font-semibold xl:mb-2">
            ANNUAL SAVINGS
          </span>
          <span className="text-[13px] md:text-[20px] xl:text-[32px] font-semibold">
            $2,532 – $3,000 <br />
            per year
          </span>
          <span className="text-[11px] md:text-[13px] xl:text-md xl:mt-1">
            when switching
            <br className="lg:hidden" /> to IM8
          </span>
        </div>

        {/* RIGHT */}
        <div className="relative md:pl-13 xl:pt-20 xl:pb-16 xl:pl-42 rounded-xl lg:w-186.75 h-full">
          <div className="flex flex-col items-center justify-center lg:items-start gap-2">
            <div className="hidden lg:block items-center w-full">
              <h3 className="text-[40px] font-medium text-[#5a0010] leading-10 text-center tracking-[-0.8px] font-['ABC Arizona Flare']">
                Monthly Breakdown
              </h3>
            </div>

            <div className="mx-5 px-5 py-7 pt-25 mt-22 md:mx-0 md:px-0 md:pt-0 md:mt-0 flex md:justify-start md:pl-22.5 justify-center lg:w-full md:border-none border border-black rounded-3xl">
              <div className="space-y-3 md:space-y-3.5 xl:space-y-4 md:w-70.5 md:pt-7.5 xl:pb-6.25 xl:pt-14 xl:pr-8.25 xl:w-108.5">
                {MONTHLY_BREAKDOWN.map((item, i) => (
                  <div
                    key={i}
                    className=" flex items-center justify-between text-[#5a0010] relative"
                  >
                    <div className="hidden lg:block h-0.5 bg-[#9d1b1f] absolute md:w-10 md:-left-10 xl:w-20 xl:-left-20" />
                    <div className="flex items-center gap-2 lg:gap-6">
                      <span className="hidden md:block w-2 h-2 rounded-full bg-[#9d1b1f]" />
                      <img
                        src="https://im8health.com/cdn/shop/t/121/assets/featured_check_icon.svg"
                        alt={item.label}
                        className="w-4 h-4 md:hidden"
                      />
                      <span className="pr-4 text-[15px] lg:text-md md:font-semibold font-['Aeonik'] leading-[21.6px]">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm lg:text-md font-['Aeonik'] leading-[21.6px] font-bold tracking-[0.32px] text-right text-[#9d1b1f] uppercase">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price compare */}
            <div className="mx-5 py-2 w-78 md:mx-0 md:py-0 lg:w-full items-center justify-center flex">
              <div className="w-full md:w-89 xl:w-108 border border-black rounded-3xl lg:rounded-xl overflow-hidden">
                <div className="flex justify-between lg:pr-7.5 px-6 py-4 md:px-5 md:py-3 bg-[#f6ebe4] lg:text-md text-[#5a0010] border-b border-black font-['Aeonik'] leading-[21.6px]">
                  <span>Your Traditional Supplements</span>
                  <span className="line-through font-bold leading-[21.6px] tracking-[0.32px] uppercase">
                    $298
                  </span>
                </div>
                <div className="flex justify-between lg:pr-7.5 px-6 py-4 md:px-5 md:py-3 font-bold text-[#50000b] bg-white">
                  <span className="text-sm">IM8 Daily Ultimate Essentials</span>
                  <span className="uppercase">$89</span>
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                toast.success("Handle successfully", { autoClose: 1000 })
              }
              className="lg:hidden bg-[#9d1b1f] text-white font-bold uppercase px-4.25 py-3.25 rounded-full mt-2 w-68 h-12 font-['Aeonik']"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
