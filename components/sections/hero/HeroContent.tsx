import PurchaseBox from "./PurchaseBox";
import ResultsCard from "./ResultsCard";

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-6">
      {/* Rating */}
      <div className="flex items-center gap-2 text-sm text-gray-700">
        ⭐⭐⭐⭐⭐
        <span className="font-medium text-[var(--color-brand-primary)]">
          4.8
        </span>
        <span>from 11,825 Reviews</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
        Daily Ultimate Essentials:
        <br />
        All-in-One Supplement
      </h1>

      {/* Description */}
      <p className="max-w-xl text-base text-gray-700">
        Engineered for peak absorption, this comprehensive formula replaces the
        need for 16 daily supplements with 92 nutrient-rich ingredients in one
        delicious drink.*
      </p>

      <ResultsCard />

      <PurchaseBox />
    </div>
  );
}
