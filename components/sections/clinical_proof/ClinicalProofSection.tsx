import { Stat } from "./_components/Stat";

export default function ClinicalProofSection() {
  return (
    <section className="relative min-h-screen py-12 lg:py-8 px-2 max-sm:px-0 overflow-visible text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://im8health.com/cdn/shop/files/clinical-studies-min.jpg?v=1724176766&width=1728"
          alt="Background Texture"
          className="w-full h-full lg:h-208.25 md:h-230.25 object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:p-20 grid gap-10 lg:gap-16 grid-cols-1 md:grid-cols-2">
        {/* LEFT: STATS */}
        <div className="order-last md:order-first max-sm:-mt-8">
          <p className="text-lg lg:text-xl font-serif font-semibold py-5 text-center lg:text-left">
            Daily Ultimate Essentials
          </p>
          {/* Mobile: gap-8, Desktop: gap-12 */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            <Stat
              value="95%"
              desc="Participants felt a noticeable boost in daily energy levels."
            />
            <Stat
              value="85%"
              desc="Felt less bloated and had improved digestion."
            />
            <Stat
              value="80%"
              desc="Participants reported getting better sleep."
            />
            <Stat
              value="70%"
              desc="Participants noticed sharper focus and improved mental clarity."
            />
          </div>

          <div className="sm:hidden mt-8 flex flex-col gap-4 w-full sm:max-w-sm mx-auto">
            <button
              className="
                rounded-full
                bg-[#50000b]
                px-6 py-3
                text-xs sm:text-sm font-bold
                text-white
                hover:bg-[#3f0008]
                uppercase tracking-wide
              "
            >
              View Third-Party Testing Results
            </button>

            <button
              className="
                rounded-full
                bg-[#ff9693]
                px-6 py-3
                text-xs sm:text-sm font-bold
                text-[#50000b]
                hover:bg-[#ff9b90]
                uppercase tracking-wide
              "
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex flex-col justify-center order-first md:order-last">
          <p className="text-[52px] max-xl:text-[48px] max-sm:text-[35px] font-serif leading-tight text-center">
            Clinically Proven.
            <br />
            More Energy.
            <br />A Healthier Gut.<sup>*</sup>
          </p>

          {/* NSF BADGE */}
          <div
            className="
              mt-6
              flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0
              rounded-2xl
              bg-[linear-gradient(105deg,rgb(254,249,231)_0%,rgb(254,243,199)_40%,rgb(253,230,138)_100%)]
              px-4 lg:px-2 py-4
              text-[#50000b]
              border-2 border-[#fbbf24]
            "
          >
            {/* Badge Icon Text */}
            <div className="flex items-center gap-1 w-full sm:w-auto justify-center sm:justify-start">
              <span className="text-3xl lg:text-4xl">🏆</span>
              <div>
                <p className="font-bold text-sm lg:text-[15px] text-[#44403c]">
                  NSF CERTIFIED FOR SPORT
                </p>
                <p className="text-xs lg:text-[13px] text-[#b45309]">
                  280+ Substances Tested
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-full sm:w-0.5 h-0.5 sm:h-13 bg-[linear-gradient(rgba(245,158,11,0.1)_0%,rgba(245,158,11,0.35)_50%,rgba(245,158,11,0.1)_100%)]" />
            <div className="sm:hidden block w-1/2 sm:w-0.5 h-0.5 sm:h-13 bg-[linear-gradient(rgba(245,158,11,0.1)_0%,rgba(245,158,11,0.35)_50%,rgba(245,158,11,0.1)_100%)]" />

            {/* Trusted By */}
            <div className="flex items-center gap-2 lg:gap-1 w-full sm:w-auto justify-center sm:justify-end">
              <p className="text-sm text-[#44403c] text-right">
                Trusted by <b className="text-[#b45309]">Aryna Sabalenka</b>
                <br />
                <span className="text-[#57534e] text-[12px] lg:text-[13px]">
                  {" "}
                  World No. 1 Tennis Player
                </span>
              </p>

              <img
                src="https://im8health.com/cdn/shop/files/media_arynasabalenka_2x_1.png?v=1750822572&width=150"
                alt=""
                className="h-12 w-12 lg:h-15 lg:w-15 rounded-full object-cover border-2 border-[#f59e0b]"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-sm text-center px-2 lg:px-0 leading-relaxed">
            Every ingredient is third-party tested and NSF Certified for Sport,
            ensuring it’s free from over 280 banned substances, heavy metals and
            contaminants. Trusted by athletes and sports leagues, including
            WADA, NFL, MLB, NHL, and PGA.
          </p>

          {/* CTA Desktop */}
          <div className="hidden sm:flex mt-8 flex-col gap-4 w-full sm:max-w-sm mx-auto">
            <button
              className="
                rounded-full
                bg-[#50000b]
                px-6 py-3
                text-xs sm:text-sm font-bold
                text-white
                hover:bg-[#3f0008]
                uppercase tracking-wide
              "
            >
              View Third-Party Testing Results
            </button>

            <button
              className="
                rounded-full
                bg-[#ff9693]
                px-6 py-3
                text-xs sm:text-sm font-bold
                text-[#50000b]
                hover:bg-[#ff9b90]
                uppercase tracking-wide
              "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* FOOTNOTE */}
      <p className="relative z-10 mx-auto px-6 lg:px-12 pb-8 text-[10px] lg:text-[12px] text-start lg:text-left">
        *Results Based on a 12-Week Randomized Controlled Clinical Trial
        Conducted by the San Francisco Research Institute. Please Click Here for{" "}
        <u>FULL</u> Details of the National Library of Medicine Trial.
      </p>
    </section>
  );
}
