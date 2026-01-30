// components/product/ProductHero/PurchaseBox.tsx

export default function PurchaseBox() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-medium">1. Select Format</h3>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-[var(--color-brand-primary)] p-4">
          <p className="font-medium">Forever Jar</p>
          <p className="text-sm text-gray-600">$2.61 USD / serving</p>
        </div>

        <div className="rounded-xl border border-gray-300 p-4">
          <p className="font-medium">Single-Serve Sachets</p>
          <p className="text-sm text-gray-600">$2.91 USD / serving</p>
        </div>
      </div>

      <button
        className="
          mt-2
          rounded-full
          bg-[var(--gradient-brand-primary)]
          py-4
          text-white
          font-medium
        "
      >
        ADD TO CART – $78.33 USD
      </button>
    </div>
  );
}
