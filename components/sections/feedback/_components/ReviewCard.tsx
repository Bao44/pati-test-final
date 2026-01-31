import { Star } from "lucide-react";

export function ReviewCard({ text, author }: { text: string; author: string }) {
  return (
    <div
      className="
        flex flex-col
        w-100 max-sm:w-80
        rounded-xl
        bg-white
        p-6
        shadow
        transition-transform
        hover:-translate-y-1
        hover:shadow-lg
        duration-300
      "
    >
      {/* STARS */}
      <div className="flex gap-1 text-[#a40011] mb-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={20}
            fill="currentColor"
            strokeWidth={0}
            className="text-[#a40011]"
          />
        ))}
      </div>

      {/* TEXT */}
      <p className="text-md text-[#50000b] leading-relaxed flex-1">“{text}”</p>

      {/* AUTHOR */}
      <p className="mt-6 text-md font-bold text-[#50000b]">
        — {author}, Verified Customer
      </p>
    </div>
  );
}
