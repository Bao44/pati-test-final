import { PRODUCTS } from "@/lib/data";

export default function PremiumCoreNutrition() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white max-sm:px-3">
      <div className="max-w-357.25 mx-auto px-2 sm:px-6">
        {/* Header */}
        <div className="text-left mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium text-[#5a0010] mb-3 sm:mb-4">
            Premium Core Nutrition
          </h2>

          <div className="flex flex-col xl:flex-row justify-start gap-3 sm:gap-4 xl:gap-6 text-[13px] sm:text-[16px] text-[#7a2a2a]">
            <div className="flex items-center gap-2">
              <img
                src="https://im8health.com/cdn/shop/t/121/assets/featured_check_icon.svg"
                alt=""
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span>
                <strong>30-Day</strong> money back guarantee.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://im8health.com/cdn/shop/t/121/assets/featured_check_icon.svg"
                alt=""
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span>
                <strong>Update</strong> or <strong>cancel</strong> anytime
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://im8health.com/cdn/shop/t/121/assets/featured_check_icon.svg"
                alt=""
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span>
                <strong>Free shipping</strong> for all subscriptions
              </span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group overflow-hidden">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                {/* Badge */}
                {product.badge && (
                  <div
                    className="
                      absolute top-2 sm:top-4 right-2 sm:right-4
                      w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                      bg-[#9d1b1f]
                      flex items-center justify-center
                      text-white text-[10px] sm:text-[11px] md:text-[12px] font-bold uppercase
                      text-center leading-tight
                      z-30 shadow-md
                      max-w-16
                    "
                    style={{
                      clipPath:
                        "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
                    }}
                  >
                    {product.badge}
                  </div>
                )}

                {/* Base image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    w-full h-auto object-cover
                    transition-opacity duration-500
                    group-hover:opacity-0 cursor-pointer
                  "
                />

                {/* Hover image */}
                <img
                  src={product.hoverImage}
                  alt={product.title}
                  className="
                    absolute inset-0 w-full h-full object-cover
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 cursor-pointer
                  "
                />
                <button
                  className="
                      absolute bottom-2 sm:bottom-4 right-2 sm:right-4
                      bg-white/70 text-[#50000b]
                      text-[11px] sm:text-[12px] md:text-[13px] font-bold
                      px-4 sm:px-5 md:px-6 py-2 sm:py-2.75 rounded-[100px] shadow
                      opacity-0 translate-y-2
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300
                      border border-[#50000b] uppercase
                      hover:bg-[#50000b] hover:text-white
                      max-xl:hidden block
                    "
                >
                  Add to cart
                </button>

                <button
                  className="
                      absolute bottom-2 sm:bottom-4 right-2 sm:right-4
                      bg-white/70 text-[#50000b]
                      text-[11px] sm:text-[12px] md:text-[13px] font-bold
                      px-4 sm:px-5 md:px-6 py-2 sm:py-2.75 rounded-[100px] shadow
                      border border-[#50000b] uppercase
                      hover:bg-[#50000b] hover:text-white
                      max-lg:block max-sm:hidden hidden 
                    "
                >
                  Add to cart
                </button>
              </div>

              {/* Content */}
              <div className="pt-4 sm:pt-6 gap-2">
                {product.tag && (
                  <span
                    className={`inline-block mb-2
                            text-[10px] sm:text-[11px] font-semibold tracking-wide
                            text-white uppercase
                            px-3 sm:px-4 py-1 sm:py-1.5 rounded-full cursor-pointer
                            ${product.id === "essentials" ? "bg-[#a40011]" : "bg-linear-to-r from-[#a40011] to-[#f18a1a]"}
                            `}
                  >
                    {product.tag}
                  </span>
                )}
                <p className="text-xl sm:text-2xl font-semibold text-[#5a0010] leading-snug">
                  {product.title}
                  <br />
                  {product.subtitle}
                </p>
                <div>
                  <p className="text-xs sm:text-sm md:text-[14px] text-[#5a0010] mt-2 sm:mt-3">
                    {product.description}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm md:text-[14px] font-bold text-[#5a0010]">
                    {product.price}
                  </p>
                </div>

                <div className="hidden max-sm:block mt-4">
                  {/* Button Desktop */}
                  <button className="bg-[#a40011] hover:bg-[#50000b] text-white text-md font-bold py-2.5 w-full rounded-full transition-colors uppercase tracking-wide">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
