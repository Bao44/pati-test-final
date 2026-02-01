import { Plus } from "lucide-react";

type ScienceItem = {
  id: number;
  name: string;
  title: string;
  image: string;
};

export default function ScienceCard({ item }: { item: ScienceItem }) {
  return (
    <div className="bg-[#fdf2f2] rounded-xl sm:rounded-2xl p-0 flex flex-col sm:flex-row h-auto sm:h-59 overflow-hidden duration-300 cursor-pointer">
      <div className="relative w-full h-56 sm:h-full sm:w-40 md:w-48 lg:w-36 xl:w-52.75 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-top"
        />

        <button className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 group cursor-pointer w-10 h-10 sm:w-12 sm:h-12 items-center justify-center max-sm:flex hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 text-[#50000b] fill-white/70"
            >
              <path
                d="M12 0 L20.5 3.5 L24 12 L20.5 20.5 L12 24 L3.5 20.5 L0 12 L3.5 3.5 Z"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Plus
              className="text-[#50000b] relative z-10"
              size={24}
              strokeWidth={1.5}
            />
          </div>
        </button>
      </div>

      {/* Cột thông tin bên phải */}
      <div className="flex-1 py-4 sm:py-6 pl-4 xl:pl-8 pr-4 flex flex-col relative justify-start bg-linear-to-r from-white to-transparent max-sm:bg-white">
        <div>
          <p className="text-[#50000b] text-base xl:text-[17px] mb-2 font-bold">
            {item.name}
          </p>
          <p className="text-[#50000b] text-[13px] xl:text-base max-w-60 leading-relaxed line-clamp-3 pr-2">
            {item.title}
          </p>
        </div>

        {/* Nút cộng (+) */}
        <button className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 group cursor-pointer w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center max-sm:hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 text-[#50000b] fill-transparent"
            >
              <path
                d="M12 0 L20.5 3.5 L24 12 L20.5 20.5 L12 24 L3.5 20.5 L0 12 L3.5 3.5 Z"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Plus
              className="text-[#50000b] relative z-10"
              size={24}
              strokeWidth={1.5}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
