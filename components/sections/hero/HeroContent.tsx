import { Star } from "lucide-react";
import ResultsCard from "./ResultsCard";
import PurchaseBox from "./PurchaseBox";
import TransformationProgram from "./TransformationProgram";
import ProductDetailsSection from "./ProductDetailsSection";

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-6 px-5">
      {/* Reviews Rating */}
      <div className="flex flex-col xl:flex-row xl:items-start gap-2 text-sm font-semibold">
        <div className="flex items-center gap-2">
          <div className="flex text-brand-red">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={16}
                fill="currentColor"
                strokeWidth={0}
                className="text-[#a40011]"
              />
            ))}
          </div>

          <strong className="text-[#50000b]">4.8 from 11,825 Reviews</strong>
        </div>

        <span className="text-[#6b4c3a] font-semibold">
          <span className="max-sm:hidden">|</span> 620k+ customer purchases |
          19M+ servings
        </span>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-4xl md:text-[40px] font-bold leading-[1.1] text-[#50000b] mb-4">
          Daily Ultimate Essentials: <br />
          All-in-One Supplement
        </h1>

        {/* Description */}
        <p className="text-[15px] text-[#50000b] font-semibold">
          Engineered for peak absorption, this comprehensive formula replaces
          the need for 16 daily supplements with 92 nutrient-rich ingredients in
          one delicious drink.*
        </p>
      </div>

      {/* Results Card */}
      <ResultsCard />

      {/* Purchase Button */}
      <PurchaseBox />

      {/* How to use Section */}
      <TransformationProgram />

      <ProductDetailsSection />
    </div>
  );
}
