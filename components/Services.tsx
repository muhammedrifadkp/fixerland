import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_LIST } from "@/lib/constants";

export function Services() {
  return (
    <section id="services-section" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">
            Our <strong>Services</strong>
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            From phone repairs and diagnostics to accessories and gadgets, Fixerland takes care of your mobile needs
            in Kasaragod.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_LIST.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group relative isolate flex aspect-[380/420] flex-col justify-end overflow-hidden rounded-[20px] p-6 text-white shadow-lg"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="-z-10 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur transition-colors group-hover:bg-brand">
                <ArrowUpRight className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-1.5 text-[15px] text-white/80">{service.short}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
