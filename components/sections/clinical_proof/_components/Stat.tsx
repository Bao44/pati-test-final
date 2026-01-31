export function Stat({
  value,
  desc,
}: {
  title?: string;
  value: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <p className="text-5xl sm:text-6xl lg:text-[80px] mb-2 lg:mb-0">
        {value}
      </p>

      <div className="h-[1.5px] w-20 lg:w-40 bg-white mb-3" />

      <p className="text-sm sm:text-base lg:text-md text-white">
        {desc}
      </p>
    </div>
  );
}
