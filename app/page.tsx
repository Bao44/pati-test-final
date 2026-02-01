import ProductHero from "@/components/sections/hero/ProductHero";
import ChatBot from "../components/chatbot/ChatBot";
import AnnouncementBar from "@/components/layout/header/AnnouncementBar";
import Header from "@/components/layout/header/Header";
import StickyProductBar from "@/components/layout/header/StickyProductBar";
import StickyProductBarHeader from "@/components/layout/header/StickyProductBarHeader";
import ClinicalProofSection from "@/components/sections/clinical_proof/ClinicalProofSection";
import InfiniteReviews from "@/components/sections/feedback/InfiniteReviews";
import ModeSwitchSection from "@/components/sections/mode_switch/ModeSwitchSection";
import Footer from "@/components/layout/footer/Footer";
import WhatInsideContent from "@/components/sections/what_inside/WhatInsideContent";
import HowToEnjoyContent from "@/components/sections/how_to_enjoy/HowToEnjoyContent";
import PricingBundleContent from "@/components/sections/pricing_bundle/PricingBundleContent";
import ReviewContent from "@/components/sections/review/ReviewContent";
import ScienceContent from "@/components/sections/science/ScienceContent";
import ComparisonTable from "@/components/sections/comparison/ComparisonTable";
import PremiumCoreNutrition from "@/components/sections/premium/PremiumCoreNutrition";
import FAQSection from "@/components/sections/faq/FAQSection";
import SavingsComparison from "@/components/sections/savings_comparison/SavingsComparison";
import IM8GoldStandard from "@/components/sections/IM8_gold_standard/IM8GoldStandard";
import TrustedExperts from "@/components/sections/expert_trust/ExpertTrustSection";
import PillarsSwitch from "@/components/sections/pillars_switch/PillarsSwitch";

export default function Home() {
  return (
    <div>
      <ChatBot />

      {/* Header */}
      <AnnouncementBar />
      <Header />
      <StickyProductBar />
      <StickyProductBarHeader />

      {/* Product Hero Section */}
      <ProductHero />

      {/* Clinical Proof Section */}
      <ClinicalProofSection />

      {/* Feedback */}
      <InfiniteReviews />

      {/* Switch Mode Section */}
      <ModeSwitchSection />

      {/* Savings Comparison */}
      {/* <SavingsComparison /> */}

      {/* IM8 Gold Standard */}
      <IM8GoldStandard />

      {/* Pillars Switch Section */}
      <PillarsSwitch />

      {/* Expert Trust Section */}
      <TrustedExperts />

      {/* What Inside */}
      <WhatInsideContent />

      {/* How To Enjoy */}
      <HowToEnjoyContent />

      {/* Pricing Bundle Content */}
      <PricingBundleContent />

      {/* Review Video */}
      <ReviewContent />

      {/* Science Content */}
      <ScienceContent />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Premium Core Nutrition Section */}
      <PremiumCoreNutrition />

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  );
}
