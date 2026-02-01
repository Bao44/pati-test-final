import Card from "./Card";

export default function HowToEnjoyContent() {
  return (
    <div className="flex justify-center items-center pt-10 max-sm:pb-15 sm:py-10 md:py-14">
      <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-12.5 leading-[28.8px] w-full xl:px-63.25">
        {/* Title */}
        <p className="text-[#50000b] text-[44px] lg:text-[52px] font-normal leading-tight sm:leading-[57.2px] text-center">
          How to Enjoy
        </p>
        {/* Card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 pt-8 sm:pt-10 md:pt-14 gap-4 sm:gap-4 w-full">
          <Card
            urlImg="https://im8health.com/cdn/shop/files/preview_images/ce78e2bd331f47f79ac745c7ae51f01f.thumbnail.0000000000.jpg?v=1730081912"
            urlVideo="//im8health.com/cdn/shop/videos/c/vp/ce78e2bd331f47f79ac745c7ae51f01f/ce78e2bd331f47f79ac745c7ae51f01f.SD-480p-1.2Mbps-37195721.mp4?v=0"
            content="Scoop out one serving of Daily Ultimate Essentials"
            step={1}
          />
          <Card
            urlImg="https://im8health.com/cdn/shop/files/preview_images/c204aec03aad4763993ff1eda15f0501.thumbnail.0000000000.jpg?v=1730081950"
            urlVideo="//im8health.com/cdn/shop/videos/c/vp/c204aec03aad4763993ff1eda15f0501/c204aec03aad4763993ff1eda15f0501.SD-480p-1.2Mbps-37195734.mp4?v=0"
            content="Add 8 to 12oz of Water or Your Favorite Smoothie"
            step={2}
          />
          <Card
            urlImg="https://im8health.com/cdn/shop/files/preview_images/1f885d4f9245483d97e7efcfffb8a6be.thumbnail.0000000000.jpg?v=1729902934"
            urlVideo="//im8health.com/cdn/shop/videos/c/vp/1f885d4f9245483d97e7efcfffb8a6be/1f885d4f9245483d97e7efcfffb8a6be.SD-480p-1.2Mbps-37107501.mp4?v=0"
            content="Stir Well and Enjoy Daily"
            step={3}
          />
        </div>
      </div>
    </div>
  );
}
