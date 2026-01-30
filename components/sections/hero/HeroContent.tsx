import { Star } from "lucide-react";
import ResultsCard from "./ResultsCard";
import PurchaseBox from "./PurchaseBox";

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-6 text-brand-slate-dark">
      {/* Reviews Rating */}
      <div className="flex items-center gap-2 text-sm font-semibold">
        <div className="flex text-brand-red">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <span className="text-brand-dark-red font-bold">4.8</span>
        <span className="text-gray-600 font-normal">from 11,825 Reviews</span>
      </div>

      {/* Title */}
      <div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-brand-dark-red mb-4">
          Daily Ultimate Essentials: <br />
          All-in-One Supplement
        </h1>

        {/* Description */}
        <p className="text-[17px] text-gray-700 leading-relaxed max-w-lg">
          Engineered for peak absorption, this comprehensive formula replaces
          the need for 16 daily supplements with 92 nutrient-rich ingredients in
          one delicious drink.*
        </p>
      </div>

      {/* Results Card (Green Box) */}
      <ResultsCard />

      {/* Purchase / Select Format */}
      <PurchaseBox />

      {/* Results Card (Green Box) */}
      <ResultsCard />

      {/* Purchase / Select Format */}
      <PurchaseBox />

      {/* Results Card (Green Box) */}
      <ResultsCard />

      {/* Purchase / Select Format */}
      <PurchaseBox />

      {/* Results Card (Green Box) */}
      <ResultsCard />

      {/* Purchase / Select Format */}
      <PurchaseBox />

      {/* Results Card (Green Box) */}
      <ResultsCard />

      {/* Purchase / Select Format */}
      <PurchaseBox />
    </div>
  );
}
