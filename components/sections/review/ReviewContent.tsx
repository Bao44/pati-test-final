import { REVIEWS_VIDEOS } from "@/lib/data";
import ReviewCard from "./ReviewCard";
import { Star } from "lucide-react";

export default function ReviewContent() {
  return (
    <div
      className="py-12 sm:py-16 md:py-20 lg:py-26"
      style={{
        backgroundImage:
          "url('https://im8health.com/cdn/shop/files/testimonials.png?v=1727769423&width=1512')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>

      {/* Header */}
      <div className="flex flex-row items-center gap-2 sm:gap-4 justify-center px-4">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3 w-3 sm:h-4 sm:w-4 text-[#a3001b]"
              fill="#a3001b"
            />
          ))}
        </div>
        <p className="uppercase font-bold text-xs sm:text-sm text-[#50000b]">
          feel the difference
        </p>
      </div>

      <p className="text-[40px] sm:text-4xl md:text-[52px] text-[#50000b] text-center px-4 pt-4 sm:pt-6 font-serif">
        What Our IM8 Ambassadors Are Saying
      </p>

      {/* MARQUEE */}
      <div className="w-full overflow-hidden pt-12 max-sm:pt-8">
        <div className="flex w-max marquee">
          {/* LẦN 1 */}
          {REVIEWS_VIDEOS.map((review) => (
            <ReviewCard key={`a-${review.id}`} review={review} />
          ))}

          {/* LẦN 2 */}
          {REVIEWS_VIDEOS.map((review) => (
            <ReviewCard key={`b-${review.id}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
