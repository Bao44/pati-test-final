import { FOOTER_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#50000b] text-[#ff9693] pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-15">
      <div className="max-w-375 mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        {/* TOP LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 xl:grid-cols-7 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
          {FOOTER_LINKS.map((col, i) => (
            <div key={i}>
              <p className="text-xs sm:text-[17px] font-bold text-[#ff9693] mb-3 sm:mb-4 uppercase">
                {col.title}
              </p>
              <ul className="space-y-1.5 sm:space-y-3 text-xs sm:text-sm">
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
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-2">
            <div className="border-t sm:border-t-0 sm:border-l border-white/30 pt-6 sm:pt-0 sm:pl-6 lg:pl-10">
              <p className="text-xs sm:text-sm font-bold text-[#ff9693] mb-3 sm:mb-4 uppercase">
                Join the community for exclusive wellness insights
              </p>

              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base md:text-md font-semibold text-[#50000b] mb-3 sm:mb-4 outline-none bg-white placeholder:text-[#50000b] placeholder:opacity-100"
              />

              <button className="w-full bg-[#b00016] hover:bg-[#9d1b1f] transition text-white text-sm sm:text-base md:text-md font-semibold py-2.5 sm:py-3 px-4 sm:px-5 rounded-full">
                JOIN NOW
              </button>

              <p className="text-[10px] sm:text-[11px] md:text-[12px] mt-3 sm:mt-4">
                *By joining, you'll receive our wellness insights and can
                unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* BIG LOGO */}
        <div className="relative flex justify-center items-center my-12 sm:my-16 md:my-20 lg:my-24">
          <img
            src="https://im8health.com/cdn/shop/files/IM8_Logo-R_Pink.svg?v=1729137155&width=900"
            alt="IM8 Logo"
            className="w-full max-w-50 sm:max-w-70 md:max-w-[320px] lg:max-w-350"
          />
        </div>

        {/* BOTTOM */}
        <div className="text-left text-[10px] sm:text-xs -mt-6 sm:-mt-8 md:-mt-10">
          <p className="text-[#f2c6c3] pb-6 sm:pb-8 md:pb-10 text-center sm:text-left">
            © 2026 IM8® · Privacy Policy · Terms of Service
          </p>

          <div className="border border-[#f2c6c3] p-3 sm:p-3.75 lg:mx-20 xl:mx-auto max-w-full sm:max-w-260 mx-auto">
            <p className="text-xs sm:text-sm md:text-[18px] xl:text-[16px] text-center font-bold text-[#ff9693] leading-relaxed">
              *These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease.
            </p>
          </div>
          <p className="text-center mt-3 text-[13px]">**Free Welcome Kit available for new subscribers only.</p>
        </div>
      </div>
    </footer>
  );
}
