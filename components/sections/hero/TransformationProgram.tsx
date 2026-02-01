"use client";

import { GraduationCap, ChevronRight, Check } from "lucide-react";
import { IMAGE_TRANSFORMATION } from "@/lib/data";
import { toast } from "react-toastify";

export default function TransformationProgram() {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto">
        {/* CARD CONTAINER */}
        <div className="bg-[linear-gradient(171deg,rgb(255,239,214)_6.83%,rgba(255,238,219,0.5)_135.82%)] rounded-2xl border-2 border-[#bf9c74] py-6 px-4 md:p-6 text-center shadow-sm relative overflow-hidden">
          {/* HEADER SECTION */}
          <div className="flex flex-col items-center gap-4 mb-4">
            {/* BADGE */}
            <button className="inline-flex items-center gap-1.5 bg-[linear-gradient(90deg,rgb(238,184,122)_0%,rgb(223,206,137)_100%)] px-4 py-3 max-sm:py-2 rounded-full">
              <GraduationCap size={14} className="text-[#50000b]" />
              <span className="text-[10px] sm:text-xs font-bold text-[#50000b] uppercase tracking-wider">
                90-Day Members Only
              </span>
            </button>

            {/* TITLES */}
            <p className="max-lg:text-[26px] max-sm:text-lg text-[28px] font-medium text-[#50000b] leading-tight">
              90-Day IM8 Transformation Program
            </p>
            <p className="text-sm max-lg:text-[12px] max-sm:text-[10px] max-lg:font-bold font-medium text-[#50000b] max-sm:-mt-3">
              Exclusive access to quarterly masterclasses with our world-class
              Medical and Performance Experts
            </p>
          </div>

          {/* EXPERTS GRID */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-lg:mb-3">
            {IMAGE_TRANSFORMATION.map((expert, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 transform transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer"
              >
                {/* Image Frame */}
                <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-[#bf9c74] shadow-sm">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover rounded-lg"
                    width={167}
                    height={167}
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <p className="text-[13px] max-sm:text-[11px] font-bold text-[#50000b]">
                    {expert.name}
                  </p>
                  <p className="text-[11px] max-sm:text-[8px] text-[#50000b]/80 font-medium leading-snug px-1">
                    {expert.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER SECTION */}
          <div className="border-t border-[#50000b]/10 pt-4 flex flex-col items-center gap-6">
            <p className="text-[12px] max-sm:text-[10px] font-bold text-[#50000b] max-w-2xl leading-relaxed">
              Get personalized guidance, exclusive content, and direct access to
              leading experts in health optimization, performance, and
              longevity.
            </p>

            {/* CTA BUTTON */}
            <button
              onClick={() =>
                toast.success("Handle successfully", { autoClose: 1000 })
              }
              className="w-full bg-[linear-gradient(90deg,rgb(238,184,122)_0%,rgb(223,206,137)_100%)] hover:opacity-90 transition-opacity text-[#50000b] text-xs font-black uppercase py-4 px-8 max-lg:px-2 rounded-xl flex items-center justify-center shadow-md gap-2"
            >
              Learn More About The Program
              <ChevronRight size={16} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
      {/* DISCOUNT BOX */}
      <div className="bg-[linear-gradient(135deg,rgb(240,249,244)_0%,rgb(232,245,236)_100%)] border border-[#16a34a] rounded-xl p-3 flex items-center sm:items-center gap-3">
        <div className="bg-[#16a34a] rounded-full p-2 shrink-0 mt-0.5 sm:mt-0">
          <Check size={14} className="text-white" strokeWidth={6} />
        </div>
        <div>
          <p className="max-md:text-sm font-bold text-[#50000b] text-xl">
            30-Day 100% Money Back Guarantee
          </p>
          <p className="max-md:text-[13px] text-[#50000b] text-sm">
            We're so confident you'll love it, take a full 30 days to decide
          </p>
        </div>
      </div>

      {/* Pay */}

      <div className="text-center flex justify-center items-center -mt-3 text-[#50000b] text-sm max-lg:text-[10px]">
        <strong>Pay with HSA/FSA</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          className="mx-1"
        >
          <path
            d="M9.42359 3.96507C8.52032 3.96507 7.78809 4.69731 7.78809 5.60058C7.78809 6.50385 8.52032 7.23608 9.42359 7.23608C10.3269 7.23608 11.0591 6.50385 11.0591 5.60058C11.0582 4.69762 10.3265 3.96595 9.42359 3.96507Z"
            stroke="#50000B"
          />
          <path
            d="M8.97401 10.1572L4.25241 15.0868C3.12222 13.9971 2.36465 12.5785 2.08768 11.0331C2.03484 10.7432 1.99865 10.4505 1.97928 10.1564L8.97401 10.1572ZM2.03348 8.64283C2.48571 5.42538 4.94758 2.85911 8.14351 2.27377C8.59471 2.19119 9.05252 2.14959 9.51121 2.14943C13.2631 2.15708 16.4367 4.92644 16.9523 8.64283H2.03348ZM13.5322 16.044C11.0621 17.6042 7.91341 17.5985 5.44875 16.0297L9.48332 11.8174L13.5322 16.044ZM17.0113 10.1572C16.9261 11.5224 16.4701 12.8386 15.6923 13.9638C15.4084 14.3737 15.0851 14.755 14.727 15.102L9.99102 10.1604L17.0113 10.1572ZM14.6409 2.24189C10.5327 -0.597452 4.90056 0.431274 2.0613 4.53948C-0.778042 8.64777 0.250684 14.2799 4.35889 17.1192C8.46503 19.957 14.0939 18.931 16.9347 14.827C19.7715 10.7172 18.7453 5.08648 14.6409 2.24189Z"
            fill="#50000B"
          />
        </svg>
        <p>
          Save an average of 30% <u className="font-bold"> Learn more</u>
        </p>
      </div>
    </>
  );
}
