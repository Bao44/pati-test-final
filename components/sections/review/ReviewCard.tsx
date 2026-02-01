import { Star } from "lucide-react";

type Review = {
  avatarUrl: string;
  reviewerName: string;
  numberFollowers: string;
  imgReviewUrl: string;
  rating: number;
  reviewText: string;
  video?: string;
};

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl px-6 pb-8 pt-3 w-70 sm:w-75 md:w-[320px] shrink-0 flex flex-col shadow-sm select-none mx-2 sm:mx-3">
      {/* Header Card: Avatar & Name */}
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <img
          src={review.avatarUrl}
          alt={review.reviewerName}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-gray-200 shrink-0"
        />
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[#50000b] font-bold text-xs sm:text-sm block truncate">
            {review.reviewerName} ({review.numberFollowers})
          </span>
        </div>
      </div>

      {/* Main Image */}
      {/* Video Container */}
      <div className="w-full h-60 sm:h-68 md:h-74 mb-3 sm:mb-4 rounded-lg sm:rounded-xl overflow-hidden bg-gray-100 relative">
        <video
          className="w-full h-full object-cover block"
          autoPlay
          muted
          loop
          playsInline
          poster={review.imgReviewUrl}
        >
          <source src={review.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Stars */}
      <div className="flex mb-2 pt-2">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-3 sm:h-3 text-[#a3001b]"
            fill="#a3001b"
          />
        ))}
      </div>

      {/* Review Content */}
      <div className="grow">
        <p className="text-[#50000b] text-[20px] max-sm:text-lg leading-6 font-medium">
          {review.reviewText}
        </p>
      </div>
    </div>
  );
}
