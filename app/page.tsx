import ProductHero from "@/components/sections/hero/ProductHero";
import ChatBot from "../components/chatbot/ChatBot";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import StickyProductBar from "@/components/layout/StickyProductBar";
import StickyProductBarHeader from "@/components/layout/StickyProductBarHeader";

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
    </div>
  );
}
