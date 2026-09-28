import type { Metadata } from "next";
import Image from "next/image";
import { Check, Cpu, MessageCircle, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import { BUSINESS_INFO, IMAGES, REPAIR_TYPES, SERVICES_LIST } from "@/lib/constants";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";
import { PageBanner } from "@/components/PageBanner";
import { RepairProcess } from "@/components/RepairProcess";
import { Faq } from "@/components/Faq";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Mobile Phone Repair Services in Kasaragod | Fixerland",
  description:
    "Explore mobile phone repair, device diagnostics, accessories and gadget services at Fixerland in Kasaragod.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Mobile Phone Repair Services in Kasaragod | Fixerland",
    description:
      "Explore mobile phone repair, device diagnostics, accessories and gadget services at Fixerland in Kasaragod.",
    url: "/services",
    siteName: BUSINESS_INFO.displayName,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Fixerland logo" }],
  },
  twitter: {
    card: "summary",
    title: "Mobile Phone Repair Services in Kasaragod | Fixerland",
    description:
      "Explore mobile phone repair, device diagnostics, accessories and gadget services at Fixerland in Kasaragod.",
    images: ["/logo.png"],
  },
};

const ICONS = { Wrench, Cpu, ShieldCheck, Smartphone };

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" crumb="Services" image={IMAGES.heroParts} />

      {/* Intro */}
      <section className="bg-white pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="section-title">
            Every phone deserves
            <br />
            <strong>expert care</strong>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Phones get dropped, batteries wear out and ports get loose — it happens to everyone. Whatever the
            problem, we check your device properly, explain the options and fix it with care.
          </p>
        </div>
      </section>

      {/* Service rows */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 md:space-y-28 lg:px-8">
          {SERVICES_LIST.map((service, i) => {
            const Icon = ICONS[service.icon];
            const flip = i % 2 === 1;
            return (
              <article
                key={service.id}
                id={service.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                  <div
                    className={`absolute -bottom-5 h-2/3 w-2/3 rounded-[28px] ${
                      flip ? "-left-5 bg-mist" : "-right-5 bg-brand"
                    }`}
                    aria-hidden
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-xl">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Fixerland Kasaragod`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">{service.title}</h2>
                  <p className="mt-4 text-[17px] leading-relaxed text-muted">{service.description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[15px] font-bold text-navy">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={getQuickWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-8"
                  >
                    <MessageCircle className="h-5 w-5" /> Enquire Now
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Common repairs */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">
              Common <strong>problems we fix</strong>
            </h2>
            <p className="mt-4 text-[17px] text-muted">Not sure what&apos;s wrong? Bring it in and we&apos;ll check it.</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REPAIR_TYPES.map((type) => (
              <li
                key={type.id}
                className="rounded-2xl border-b-4 border-transparent bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-navy">{type.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{type.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RepairProcess />
      <Faq />
      <ContactCTA />
    </>
  );
}
