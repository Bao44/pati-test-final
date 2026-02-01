"use client";

interface ExpertVideoItem {
  video: string;
  poster: string;
  avatar: string;
  nickname: string;
  name: string;
  followers: string;
  description?: string;
}

export function ExpertVideoCard({ item }: { item: ExpertVideoItem }) {
  return (
    <div className="w-75 sm:w-87.5 xl:w-100 shrink-0 flex flex-col items-center justify-between">
      <div className="relative rounded-2xl overflow-hidden bg-[#f6eded] w-full aspect-9/14 flex flex-col shadow-sm">
        <div className="flex items-center gap-2 h-14 shrink-0 bg-[#f5eaea] p-3 z-10 relative">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex items-center gap-1 ml-2">
            <p className="text-sm sm:text-md text-[#50000b] font-semibold">
              {item.nickname}
            </p>
            <p className="text-sm sm:text-md font-semibold text-[#50000b]">
              ({item.followers})
            </p>
          </div>
        </div>

        <div className="flex-1 w-full h-full relative bg-black">
          <video
            src={item.video}
            poster={item.poster}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-4 bg-[#f6eded] rounded-xl py-3 px-4 sm:px-8 w-full min-h-25 flex items-center justify-start">
        <p className="text-[16px] sm:text-[18px] font-medium text-[#5a0010] font-['ABC Arizona Flare'] leading-tight">
          {item.name} <br />
          <span className="opacity-80 text-sm sm:text-base">
            {item.description}
          </span>
        </p>
      </div>
    </div>
  );
}
