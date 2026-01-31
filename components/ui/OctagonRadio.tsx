import clsx from "clsx";

export default function OctagonRadio({ selected }: { selected: boolean }) {
  return (
    <div className="relative w-6 h-6 flex items-center justify-center">
      {/* Vẽ hình bát giác bằng SVG */}
      <svg
        viewBox="0 0 24 24"
        className={clsx(
          "w-full h-full transition-colors duration-200",
          selected
            // ? "text-[#a40011] fill-[#a40011]"
            ? "text-red-600 fill-red-600"
            : "text-[#a40011] fill-transparent",
        )}
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z" />
      </svg>

      {/* Dấu chấm trắng ở giữa khi active */}
      {selected && (
        <div className="absolute w-2 h-2 bg-white rounded-full shadow-sm" />
      )}
    </div>
  );
}
