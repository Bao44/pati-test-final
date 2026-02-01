import { Check, X } from "lucide-react";
import { COMPARISON_ROWS } from "@/lib/data";

const CheckIcon = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#9d1b1f]">
    <Check size={12} strokeWidth={3} color="#fff" />
  </span>
);

const XIcon = () => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#e5e5e5]">
    <X size={12} strokeWidth={3} className="text-[#bdbdbd]" />
  </span>
);

export default function ComparisonTable() {
  return (
    <section className="py-12 sm:py-16 md:py-20 xl:pb-28 max-sm:pb-20 bg-[#fff8f8]">
      <div className="max-w-260 mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-[30px] lg:text-[40px] xl:text-[36px] font-medium uppercase tracking-wide text-[#5a0010] text-center">
            Upgrade to the Beckham Stack
          </h2>
          <span className="bg-[#9d1b1f] text-white px-4 py-2 rounded-lg text-base sm:text-lg font-normal whitespace-nowrap">
            Save $12/month
          </span>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl border border-[#eadfdb] overflow-x-auto">
          <table className="w-full border-collapse min-w-150 max-sm:min-w-75">
            {/* HEADER */}
            <thead>
              <tr className="bg-[#5a0010] text-white">
                <th className="w-1/3 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-left text-sm lg:text-md font-medium rounded-tl-xl">
                  Feature
                </th>

                <th className="w-1/3 text-center">
                  <div className="relative flex flex-col sm:flex-row items-center gap-1 sm:gap-0">
                    <img
                      src="//im8health.com/cdn/shop/files/ess-up.png?v=1760679753&width=300"
                      className="h-16 sm:h-20 md:h-22 mx-auto -mt-2 sm:-mt-3.5"
                      alt="Essentials"
                    />
                    <div className="text-xs sm:text-sm md:text-md font-medium text-center sm:text-left">
                      Daily Ultimate Essentials
                    </div>
                  </div>
                </th>

                <th className="w-1/3 text-center rounded-tr-xl">
                  <div className="relative flex flex-col sm:flex-row items-center gap-1 sm:gap-0">
                    <img
                      src="//im8health.com/cdn/shop/files/bstack-up.png?v=1760679754&width=300"
                      className="h-16 sm:h-20 md:h-22 mx-auto -mt-2 sm:-mt-3.5"
                      alt="Beckham Stack"
                    />
                    <div className="text-xs sm:text-sm md:text-md font-medium leading-tight text-center sm:text-left">
                      The Beckham Stack (Essentials + Longevity)
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="text-[#333]">
              {COMPARISON_ROWS.map((row, i) => {
                if (row.type === "sectionHeader") {
                  return (
                    <tr
                      key={i}
                      className="bg-[#fcf8f7] border-b border-[#efe7e3]"
                    >
                      <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-[13px] lg:text-[14px] font-bold uppercase text-[#50000b]">
                        {row.label}
                      </td>
                      <td className="text-center text-xs sm:text-[13px] lg:text-[14px] font-bold">
                        {row.leftLabel}
                      </td>
                      <td className="text-center text-xs sm:text-[13px] lg:text-[14px] font-bold">
                        {row.rightLabel}
                      </td>
                    </tr>
                  );
                }

                if (row.type === "category") {
                  return (
                    <tr key={i} className="bg-[#f6ece3]">
                      <td
                        colSpan={3}
                        className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-[14px] font-bold uppercase text-[#50000b]"
                      >
                        {row.label}
                      </td>
                    </tr>
                  );
                }

                if (row.type === "item") {
                  return (
                    <tr key={i} className="border-b border-[#efe7e3]">
                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-[13px] lg:text-[14px] font-bold">
                        {row.name}
                      </td>
                      <td className="text-center">
                        {row.basic ? <CheckIcon /> : <XIcon />}
                      </td>
                      <td className="text-center">
                        {row.stack ? <CheckIcon /> : <XIcon />}
                      </td>
                    </tr>
                  );
                }

                if (row.type === "summary") {
                  const isLast = i === COMPARISON_ROWS.length - 1;

                  return (
                    <tr
                      key={i}
                      className={`bg-[#fdf8f8] font-semibold border-b border-[#efe7e3] ${
                        isLast ? "last-summary-row" : ""
                      }`}
                    >
                      <td
                        className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-[13px] lg:text-[14px] text-[#50000b] font-bold ${isLast ? "rounded-bl-xl sm:rounded-bl-2xl" : ""}`}
                      >
                        {row.name}
                      </td>
                      <td className="text-center text-xs sm:text-[13px] lg:text-[14px] text-[#50000b]">
                        {row.basic}
                      </td>
                      <td
                        className={`text-center text-xs sm:text-[13px] lg:text-[14px] text-[#50000b] ${isLast ? "rounded-br-xl sm:rounded-br-2xl text-[#a40011] font-bold" : ""}`}
                      >
                        {row.stack}
                      </td>
                    </tr>
                  );
                }

                return null;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
