import { REPAIR_PROCESS_STEPS } from "@/lib/constants";

export function RepairProcess() {
  return (
    <section className="bg-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-3 text-[clamp(1.9rem,4vw,2.75rem)] font-normal leading-tight">
            Simple, <strong className="font-bold">transparent repairs</strong>
          </h2>
        </div>

        <div className="relative mt-14">
        <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-white/20 lg:block" aria-hidden />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {REPAIR_PROCESS_STEPS.map((item) => (
            <li key={item.step} className="relative text-center">
              <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-xl font-bold ring-8 ring-navy">
                {item.step}
              </span>
              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-white/75">{item.description}</p>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
