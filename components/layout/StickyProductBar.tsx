import SupplyDropdown from "../ui/SupplyDropdown";

export default function StickyProductBar() {
  return (
    <div className="fixed bottom-0 z-10 w-full bg-linear-to-r from-red-50 via-red-50 to-white">
      <div className="mx-auto flex max-w-full h-26 items-center justify-between px-60 border-t border-gray-300">
        <div className="flex items-center gap-3">
          ,
          <img
            src="https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel01.jpg?v=1761040602&width=500"
            alt=""
            width={90}
            height={90}
            className="rounded-2xl"
          />
          <div className="text-lg font-bold text-[#50000b]">
            Daily Ultimate Essentials: All-in-One Supplement
            <div className="text-lg text-[#50000b] font-semibold">
              (Forever Jar)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <SupplyDropdown />
          <button
            className="
              rounded-full
              bg-red-600
              px-5
              py-2
              text-sm
              text-white
            "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
