import { Layers, MapPin, Search, Wrench } from "lucide-react";
import { HIGHLIGHTS } from "@/lib/constants";
import { TrustStats } from "@/components/TrustStats";

const ICONS = { Search, Wrench, Layers, MapPin };

export function WhyFixerland() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mx-auto max-w-3xl text-center">
          <strong>Fixerland</strong> is Kasaragod&apos;s trusted mobile repair &amp; gadget shop
        </h2>

        {/* Red highlight band */}
        <div className="pattern-lines relative mt-14 overflow-hidden rounded-[28px] bg-brand px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-normal leading-tight text-white sm:text-4xl">
                Do you know
                <br />
                <strong className="font-bold">why people choose Fixerland?</strong>
              </h3>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {HIGHLIGHTS.map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <li
                    key={item.title}
                    className="flex gap-4 rounded-2xl bg-white/12 p-5 text-white ring-1 ring-white/25 backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-lg font-bold">{item.title}</span>
                      <span className="mt-1 block text-[15px] leading-relaxed text-white/85">{item.description}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <TrustStats />
        </div>
      </div>
    </section>
  );
}
