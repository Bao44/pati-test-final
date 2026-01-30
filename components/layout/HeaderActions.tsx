export default function HeaderActions() {
  return (
    <div className="flex items-center justify-end gap-4">
      <div className="hidden lg:flex gap-4 text-sm">
        <span>Reviews</span>
        <span>Ingredients</span>
        <span>Discover ▾</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-6 w-6 rounded-full border" />
        <div className="relative h-6 w-6 rounded-full border">
          <span
            className="
              absolute -right-2 -top-2
              flex h-4 w-4 items-center justify-center
              rounded-full
              bg-[var(--color-brand-primary)]
              text-[10px]
              text-white
            "
          >
            1
          </span>
        </div>
      </div>
    </div>
  );
}
