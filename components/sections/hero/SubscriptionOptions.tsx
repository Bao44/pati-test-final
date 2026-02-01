"use client";

import { useState } from "react";
import clsx from "clsx";
import {
  Check,
  Truck,
  Gift,
  GraduationCap,
  DollarSign,
  Users,
  PauseCircle,
  CheckCircle2,
} from "lucide-react";
import OctagonRadio from "@/components/ui/OctagonRadio";
import { toast } from "react-toastify";

type PlanType = "90day" | "30day";

export default function SubscriptionOptions() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("90day");

  return (
    <div className="flex flex-col gap-3 mt-2">
      {/* HEADER */}
      <p className="font-bold text-[#50000b] text-base sm:text-lg">
        2. Subscribe & Save:
      </p>

      <div className="flex flex-col gap-4">
        {/* CARD 1 */}
        <div className="relative pt-3">
          <div
            className={`absolute top-0 left-4 z-10 bg-[#fec63f] text-[#50000b] text-[10px] font-semibold uppercase px-3 py-1 rounded-full shadow-sm tracking-wider
                ${selectedPlan === "90day" ? "" : "opacity-70"}
            `}
          >
            New Year Offer
          </div>
          <div
            className={`absolute top-0 right-4 z-10 bg-red-600 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-sm tracking-wider
                ${selectedPlan === "90day" ? "" : "opacity-70"}
            `}
          >
            Best Value
          </div>

          <button
            onClick={() => setSelectedPlan("90day")}
            className={clsx(
              "w-full text-left relative rounded-2xl border transition-all duration-200 overflow-hidden",
              selectedPlan === "90day"
                ? "border-[#a40011] bg-[linear-gradient(145deg,rgba(255,255,255,0.98)_0%,rgba(245,234,234,0.95)_50%,rgba(255,245,245,0.92)_100%)] shadow-md"
                : "border-[#e5e7eb] bg-white hover:border-gray-300",
            )}
          >
            <div className="p-4 sm:p-5 pt-6">
              {/* HEADER ROW */}
              <div className="flex justify-between items-start gap-3 mb-3 border-b border-[#a40011]/10 pb-3">
                <div className="flex gap-2">
                  {/* Custom Octagon Radio */}
                  <div className="mt-1 shrink-0">
                    <OctagonRadio selected={selectedPlan === "90day"} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-md xl:text-xl font-semibold text-[#50000b]">
                        90-Day Supply
                      </span>
                      <span className="text-[#16a34a] font-semibold text-sm xl:text-lg">
                        (Save 22%)
                      </span>
                    </div>
                    <p className="text-xs xl:text-sm text-[#50000b] font-semibold max-xl:font-bold mt-1">
                      Billed $235.00 USD every 12 weeks
                    </p>
                  </div>
                </div>

                {/* PRICE COLUMN */}
                <div className="text-right shrink-0">
                  <div className="flex flex-col items-end">
                    <span className="text-lg max-xl:text-sm font-bold text-[#50000b]">
                      $87
                      <span className="text-sm text-[#a40011]/50 font-bold line-through ml-1">
                        $112
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#50000b]">
                        /mo
                      </span>
                    </span>
                    <span className="text-[11px] font-bold text-[#50000b] opacity-70 uppercase tracking-wide">
                      $2.61 USD / Serving
                    </span>
                  </div>
                </div>
              </div>

              {/* FEATURES LIST */}
              <ul className="space-y-1 pl-2">
                <FeatureItem
                  icon={"🎓"}
                  text="Exclusive Access to 90 Day IM8 Transformation Program (see below)"
                />
                <FeatureItem
                  icon={"💰"}
                  text="Maximum savings - lowest price per serving"
                />
                <FeatureItem icon={"👦"} text="Share with family and friends" />
                <FeatureItem
                  icon={"🎁"}
                  text="Free Daily Ultimate Mixer (US$18)"
                />
                <FeatureItem
                  icon={"🚚"}
                  text="Free Shipping to US, UK, CA, and most of EU and APAC"
                />
                <FeatureItem icon={"⏸️"} text="Cancel or pause anytime" />
                <FeatureItem
                  icon={"🎁"}
                  text="Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)"
                />
              </ul>
            </div>
          </button>
        </div>

        {/* CARD 2 */}
        <button
          onClick={() => setSelectedPlan("30day")}
          className={clsx(
            "w-full text-left relative rounded-2xl border transition-all duration-200",
            selectedPlan === "30day"
              ? "border-[#a40011] bg-[linear-gradient(145deg,rgba(255,255,255,0.98)_0%,rgba(245,234,234,0.95)_50%,rgba(255,245,245,0.92)_100%)] shadow-md"
              : "border-[#e5e7eb] bg-white hover:border-gray-300",
          )}
        >
          <div className="p-3 sm:p-4">
            {/* HEADER ROW */}
            <div className="flex justify-between items-start gap-3 mb-3 border-b border-[#a40011]/10 pb-3">
              <div className="flex gap-3">
                <div className="mt-1 shrink-0">
                  <OctagonRadio selected={selectedPlan === "30day"} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-md xl:text-xl font-semibold text-[#50000b]">
                      30-Day Supply
                    </span>
                    <span className="text-[#16a34a] font-semibold text-sm xl:text-lg">
                      (Save 12%)
                    </span>
                  </div>
                  <p className="text-xs xl:text-sm text-[#50000b] font-semibold max-xl:font-bold mt-1">
                    Billed $99.00 USD every 4 weeks
                  </p>
                </div>
              </div>

              {/* PRICE COLUMN */}
              <div className="text-right shrink-0">
                <div className="flex flex-col items-end">
                  <span className="text-lg max-xl:text-sm font-bold text-[#50000b]">
                    $99
                    <span className="text-sm text-[#a40011]/50 font-bold line-through ml-1">
                      $112
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#50000b]">
                      /mo
                    </span>
                  </span>
                  <span className="text-[11px] font-bold text-[#50000b] opacity-70 uppercase tracking-wide">
                    $3.30 USD / Serving
                  </span>
                </div>
              </div>
            </div>

            {/* FEATURES LIST */}
            <ul className="space-y-2 pl-2">
              <FeatureItem
                icon={
                  <Check size={14} className="text-[#a40011]" strokeWidth={4} />
                }
                text="30-day money back guarantee"
              />
              <FeatureItem
                icon={
                  <Check size={14} className="text-[#a40011]" strokeWidth={4} />
                }
                text="Cancel or pause anytime"
              />
              <FeatureItem
                icon={
                  <Check size={14} className="text-[#a40011]" strokeWidth={4} />
                }
                text="Free Shipping to US, UK, CA, and most of EU and APAC"
              />
              <FeatureItem
                icon={
                  <Check size={14} className="text-[#a40011]" strokeWidth={4} />
                }
                text="Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)"
              />
            </ul>
          </div>
        </button>
      </div>

      {/* ONE TIME PURCHASE LINK */}
      <div className="text-center">
        <button className="text-sm font-bold text-[#50000b] underline underline-offset-4 decoration-[#50000b]/40 hover:opacity-80">
          One Time Purchase $112
        </button>
      </div>

      {/* DYNAMIC ACTION BUTTON */}
      <button
        onClick={() =>
          toast.success("Handle successfully", { autoClose: 1000 })
        }
        className="
          w-full
          rounded-full
          bg-[#a40011] hover:bg-[#8a000e]
          py-4 px-4
          text-white
          font-bold
          text-xs sm:text-[14px] tracking-wider uppercase
          transition-transform active:scale-[0.99] shadow-lg
          mt-4
        "
      >
        {selectedPlan === "90day"
          ? "START MY 90-DAY TRANSFORMATION PROGRAM—$78.33 USD/MO"
          : "ADD TO CART—$99 USD/MO"}
      </button>

      {/* GREEN DISCOUNT BOX */}
      {selectedPlan === "90day" && (
        <div className="bg-[#dcfce7] border border-[#16a34a] rounded-xl p-3 flex items-center sm:items-center gap-3">
          <div className="bg-[#16a34a] rounded-full p-1 shrink-0 mt-0.5 sm:mt-0">
            <Check size={12} className="text-white" strokeWidth={4} />
          </div>
          <p className="text-sm font-bold text-[#14532d]">
            New Year discount{" "}
            <span className="font-semibold text-[#15803d]">
              automatically applied at checkout
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-start gap-3 text-[13px] xl:text-sm text-[#50000b] font-semibold leading-snug">
      <span className="mt-0.5 shrink-0 text-[#d97706]">{icon}</span>
      <span className="max-xl:font-bold">{text}</span>
    </li>
  );
}
