import HeaderActions from "./HeaderActions";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="relative z-40 bg-white">
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-4
        "
      >
        <div
          className="
            grid
            grid-cols-3
            items-center
            py-4
          "
        >
          {/* LEFT NAV */}
          <HeaderNav />

          {/* LOGO */}
          <div className="text-center">
            <span className="text-2xl font-medium tracking-widest">I·M·8</span>
          </div>

          {/* RIGHT ACTIONS */}
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}
