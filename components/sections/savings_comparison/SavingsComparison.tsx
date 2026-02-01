import { MONTHLY_BREAKDOWN } from "@/lib/data";

export default function SavingsComparison() {
  return (
    <section className="relative bg-[#f5eaea] h-175.75">
      <div className=" relative max-w-375 mx-auto flex justify-center items-center h-full">
        {/* LEFT */}
        <div
          className="relative z-10 bg-cover bg-center before:absolute before:inset-0 before:bg-[#f5eaea]/70 before:content-[''] w-163.25 h-full"
          style={{
            backgroundImage:
              "url('https://im8health.com/cdn/shop/files/desktop_comparison-pill_2x_0da77b74-6605-4244-8e13-4c0e828ceb71.png?v=1730719244&width=1296')",
          }}
        >
          <div className="z-20 relative h-full pt-16 pl-14">
            <h2 className="text-[40px] leading-10 text-[#5a0010] font-['ABC Arizona Flare'] tracking-[-0.8px] max-w-87.5">
              Replaces 16 Supplements.
              <br />
              Saving You Money.
            </h2>

            <button className="bg-[#9d1b1f] text-white font-bold uppercase px-4.25 py-3.25 rounded-full mt-6 w-68 h-12">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* CENTER PRODUCT */}
        <div className="absolute z-20 left-130.75 top-18">
          <img
            src="https://im8health.com/cdn/shop/files/sachet-box.png?v=1761040602&width=838"
            alt="IM8 Product"
            className="w-94.5 h-136.25 drop-shadow-xl leading-[28.8px]"
          />
        </div>

        <div className="absolute left-73 top-78 z-30 w-74 h-74 rounded-full bg-[#5a0010] text-white flex flex-col items-center justify-center text-center gap-4">
          <span className="text-md tracking-widest font-semibold mb-2">
            ANNUAL SAVINGS
          </span>
          <span className="text-[32px] font-semibold">
            $2,532 – $3,000 <br />
            per year
          </span>
          <span className="text-sm mt-1 opacity-80">when switching to IM8</span>
        </div>

        {/* RIGHT */}
        <div className="relative z-10 pt-20 pb-16 pl-42 rounded-xl w-186.75 h-full">
          <div className="flex flex-col items-start">
            <div className="items-center w-full">
              <h3 className="text-[40px] font-medium text-[#5a0010] leading-10 text-center tracking-[-0.8px] font-['ABC Arizona Flare']">
                Monthly Breakdown
              </h3>
            </div>

            <div className="flex justify-center w-full">
              <ul className="space-y-4 pb-6.25 pt-14 pr-8.25 w-108.5">
                {MONTHLY_BREAKDOWN.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between text-[#5a0010] relative"
                  >
                    <div className="h-0.5 bg-[#9d1b1f] absolute w-20 -left-20 z-10" />
                    <div className="flex items-center gap-6">
                      <span className="w-2 h-2 rounded-full bg-[#9d1b1f]" />
                      <span className="text-md font-['Aeonik'] leading-[21.6px]">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-md font-['Aeonik'] leading-[21.6px] tracking-[0.32px] text-right text-[#5a0010] uppercase">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price compare */}
            <div className="w-full items-center justify-center flex">
              <div className="w-108 border border-black rounded-2xl overflow-hidden">
                <div className="flex justify-between px-6 py-3 bg-[#f5eaea] text-md text-[#5a0010] border-b border-black font-['Aeonik'] leading-[21.6px]">
                  <span>Your Traditional Supplements</span>
                  <span className="line-through font-bold leading-[21.6px] tracking-[0.32px] uppercase">
                    $298
                  </span>
                </div>
                <div className="flex justify-between px-6 py-3 font-bold text-[#50000b] bg-white">
                  <span>IM8 Daily Ultimate Essentials</span>
                  <span className="uppercase">$89</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
