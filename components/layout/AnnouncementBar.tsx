import { ChevronDown } from "lucide-react";
import CurrencyDropdown from "../ui/CurrencyDropdown";

export default function AnnouncementBar() {
  return (
    <div className="top-0 bg-(--color-brand-primary) text-white text-xs md:text-sm">
      <div className="mx-auto flex max-w-full items-center justify-between px-14 max-sm:px-4 pt-2 pb-3">
        <div className="mx-auto tracking-wide font-semibold max-sm:text-center max-sm:text-[15px]">
          2026 STARTS NOW:{" "}
          <span className="max-sm:block">
            35% OFF - FEEL LIKE YOURSELF AGAIN
          </span>
        </div>
        <div className="hidden md:block">
          <CurrencyDropdown />
        </div>
      </div>
    </div>
  );
}
