export default function HeaderNav() {
  return (
    <nav className="hidden lg:flex items-center gap-6 text-sm">
      {["Shop", "Science", "The Beckham Stack", "Welcome from David"].map(
        (item) => (
          <div
            key={item}
            className="cursor-pointer hover:text-[var(--color-brand-primary)]"
          >
            {item}
          </div>
        ),
      )}
    </nav>
  );
}
