import Gallery from "./Gallery";
import HeroContent from "./HeroContent";

export default function ProductHero() {
  return (
    <section
      className="
        relative
        bg-red-500
        py-12
        md:py-16
        lg:py-20
      "
    >
      <div className="mx-auto max-w-[1280px] px-4">
        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* LEFT: Gallery + Proof */}
          <Gallery />

          {/* RIGHT: Product Info + Purchase */}
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
