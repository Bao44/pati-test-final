import HeaderActions from "./HeaderActions";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="relative bg-white">
      <div className="mx-auto max-w-350 px-4">
        <div className="grid grid-cols-3 items-center py-4 max-sm:py-2">
          {/* LEFT NAV */}
          <HeaderNav />

          {/* LOGO */}
          <div className="mx-auto">
            <img
              src="https://im8health.com/cdn/shop/files/Header-Logo-New.svg?v=1729066833&width=190"
              alt=""
              width={95}
              height={24}
              className="cursor-pointer"
            />
          </div>

          {/* RIGHT ACTIONS */}
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}
