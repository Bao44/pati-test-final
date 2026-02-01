
type CardProps = {
    urlImg: string;
    urlVideo: string;
    content: string;
    step?: number;
};

export default function Card({ urlImg, urlVideo, content, step}: CardProps) {
    return (
        <div className="flex flex-col gap-3 sm:gap-4 leading-[28.8px] w-full">
            <video
                className="rounded-xl sm:rounded-2xl object-contain block w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                poster={urlImg}
            >
                <source src={urlVideo} type="video/mp4" />
            </video>

            <p className="text-left text-[#50000b] text-xl lg:text-[22px] leading-tight sm:leading-[25.92px] font-semibold tracking-[-0.48px]">
                Step {step}: {content}
            </p>
        </div>
    );
}