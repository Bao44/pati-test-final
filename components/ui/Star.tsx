import { cn } from "@/lib/utils";

interface PinkStarProps {
  type?: "solid" | "half" | "outline";
  size?: number;
  className?: string;
}

export default function Star({
  type = "solid",
  size = 32,
  className,
}: PinkStarProps) {
  const redColor = "#a40011";
  const emptyColor = "#E5E7EB";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={cn("inline-block shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="half-red-gradient">
          <stop offset="50%" stopColor={redColor} />
          <stop offset="50%" stopColor={emptyColor} />
        </linearGradient>
      </defs>

      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill={
          type === "solid"
            ? redColor
            : type === "half"
              ? "url(#half-pink-gradient)"
              : "none"
        }
        stroke={redColor}
        strokeWidth={type === "outline" ? "1" : "0"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
