import { STATS } from "@/lib/constants";

export function TrustStats({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex flex-col items-center text-center ${
            i > 0 ? `md:border-l ${dark ? "md:border-white/15" : "md:border-navy/10"}` : ""
          }`}
        >
          <dt className={`order-2 mt-2 text-sm font-bold uppercase tracking-wider ${dark ? "text-white/75" : "text-muted"}`}>
            {stat.label}
          </dt>
          <dd className={`order-1 text-5xl font-bold lg:text-6xl ${dark ? "text-white" : "text-navy"}`}>
            {stat.value}
            <span className="text-brand">{stat.suffix}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
