export default function Im8GoldStandard() {
  return (
    <div
      className="
    relative
    flex items-center justify-between rounded-2xl bg-[#f2c2a6]
    px-4 pt-4 pb-3
    cursor-pointer hover:outline-2 hover:outline-[#a40011]
  "
    >
      {/* LEFT BADGE */}
      <button
        className="
          rounded-xl
          bg-[#50000b]
          px-4 py-2
          text-lg
          max-lg:text-sm
          font-semibold
          text-white
          whitespace-nowrap
        "
      >
        <h3>IM8: The New Gold Standard</h3>
      </button>

      {/* RIGHT COMPARISON */}
      <div className="relative flex items-center gap-2 text-[11px] font-semibold text-[#50000b]">
        {/* IM8 */}
        <div className="flex flex-col items-center">
          <img
            src="https://im8health.com/cdn/shop/files/accelerated_btn_im8.webp?v=1752050274&width=62"
            alt="IM8"
            className="h-10 w-auto absolute -top-9"
          />

          <span className="mt-0.5 tracking-wide text-[--color-brand-primary]">
            I·M·8
          </span>
        </div>

        {/* VS */}
        <span
          className="
            flex h-5 w-5
            items-center justify-center
            rounded-full
            bg-[#50000b]
            text-[10px]
            font-bold
            text-white
          "
        >
          vs
        </span>

        {/* GREEN POWDERS */}
        <div className="flex flex-col items-center">
          <img
            src="https://im8health.com/cdn/shop/files/accelerated_btn_greens.webp?v=1752050270&width=62"
            alt="Green Powders"
            className="h-10 w-auto absolute -top-9"
          />

          <span className="mt-0.5 tracking-wide text-center text-[8px] text-green-700">
            Green <span className="block">Powders</span>
          </span>
        </div>
      </div>
    </div>
  );
}
