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

      <InfiniteReviews />

      <ModeSwitchSection />

      <Footer />
    </div>
  );
}
