// components/product/ProductHero/Gallery.tsx

export default function Gallery() {
  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="hidden md:flex flex-col gap-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="
              h-16 w-16
              rounded-xl
              border border-[var(--color-border-light)]
              bg-white
            "
          />
        ))}
      </div>

      {/* Main Image */}
      <div
        className="
          flex-1
          rounded-3xl
          bg-white
          p-6
          shadow-sm
        "
      >
        <div className="aspect-[4/5] w-full bg-red-100 rounded-2xl" />
      </div>
    </div>
  );
}
