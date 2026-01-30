export default function AnnouncementBar() {
  return (
    <div
      className="
        sticky top-0 z-50
        bg-[var(--color-brand-primary)]
        text-white
        text-xs
        md:text-sm
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1280px]
          items-center
          justify-between
          px-4
          py-2
        "
      >
        <div className="mx-auto tracking-wide">
          2026 STARTS NOW: <strong>35% OFF</strong> — FEEL LIKE YOURSELF AGAIN
        </div>

        <div className="hidden md:block text-xs">USD ▾</div>
      </div>
    </div>
  );
}
