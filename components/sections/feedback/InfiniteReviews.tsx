import { REVIEWS } from "@/lib/data";
import { ReviewCard } from "./_components/ReviewCard";
// import ReviewCard from "./_components/ReviewCard";

export default function InfiniteReviews() {
  return (
    <section className="bg-[#f9f2ed] pt-20 pb-15 overflow-hidden">
      {/* TITLE */}
      <div className="text-center mb-12 px-4">
        <p className="text-[40px] max-sm:text-[30px] font-medium text-[#50000b]">
          10,000+ 5 Star Reviews
        </p>
        <p className="mt-5 text-[15px] text-[#50000b] max-w-xl mx-auto">
          These are actual IM8 verified customers that have seen successful
          health outcomes with the consistent use of IM8 Daily Ultimate
          Essentials.
        </p>
      </div>

      {/* SCROLLER */}
      <div className="relative">
        <div
          className="
            flex
            gap-6
            w-max
            animate-scroll
            hover:[animation-play-state:paused]
          "
        >
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <p className="mt-12 text-center text-lg text-[#50000b]">
        <b>11,825 Reviews</b> | Average Rating: 4.8/5
      </p>
    </section>
  );
}
