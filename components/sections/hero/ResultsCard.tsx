// components/product/ProductHero/ResultsCard.tsx

export default function ResultsCard() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[var(--color-green-primary)]
        bg-[var(--gradient-green-soft-1)]
        p-5
      "
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Clinically Proven Results</h3>
        <span className="rounded-full bg-green-600 px-3 py-1 text-xs text-white">
          90-DAY CLINICAL STUDY
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          ["⚡", "95%", "More energy"],
          ["🌱", "85%", "Better gut health"],
          ["😴", "80%", "Better sleep"],
          ["🧠", "70%", "Sharper focus"],
        ].map(([icon, value, label]) => (
          <div key={label} className="text-center">
            <div className="text-lg">{icon}</div>
            <div className="text-xl font-semibold text-green-700">
              {value}
            </div>
            <div className="text-xs text-gray-600">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
