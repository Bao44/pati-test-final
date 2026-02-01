"use client";

import { FAQS } from "@/lib/data";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16 items-center bg-[#9d0010] text-white">
      {/* LEFT - FAQ */}
      <div className="px-4 sm:px-6 md:px-8 xl:pl-53 xl:pr-20 py-8 xl:py-10 justify-end max-sm:order-last max-sm:pt-4 max-sm:pb-12">
        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium mb-4 sm:mb-6 text-[#ff9693] max-sm:text-white max-sm:text-[52px]">
          FAQs
        </h2>

        <div>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="py-3 border-b border-white">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-start sm:items-center text-left gap-4"
                >
                  <span className="text-base lg:text-lg font-semibold flex-1">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-semibold shrink-0">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out
                    ${isOpen ? "max-h-125 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"}`}
                >
                  <div className="mt-2 sm:mt-3 mb-4 text-sm sm:text-base md:text-[15px] leading-relaxed text-white flex flex-col gap-2 sm:gap-3 transition-transform duration-300">
                    {faq.answer.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="mt-4 sm:mt-6 inline-flex items-center justify-center
            bg-[#50000b] max-sm:w-full
            px-6 sm:px-14 py-2.5 rounded-full text-lg font-semibold transition"
        >
          EXPLORE ALL FAQS
        </button>
      </div>

      {/* RIGHT - IMAGE */}
      <div className="relative h-64 sm:h-full max-sm:order-first">
        <img
          src="https://im8health.com/cdn/shop/files/Rectangle_98-min_2.jpg?v=1731857082"
          alt="IM8 Lifestyle"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
