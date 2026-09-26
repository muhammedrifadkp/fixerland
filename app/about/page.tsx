import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, MessageSquareText, ShieldCheck, Target, Telescope } from "lucide-react";
import { BUSINESS_INFO, IMAGES } from "@/lib/constants";
import { PageBanner } from "@/components/PageBanner";
import { TrustStats } from "@/components/TrustStats";
import { ContactCTA } from "@/components/ContactCTA";
import { ShopGallery } from "@/components/ShopGallery";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Fixerland, a local mobile phone repair and gadget shop at New Bus Stand Building, Kasaragod, opposite IDBI Bank.",
  alternates: {
    canonical: "/about",
  },
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: ["Expertise You", "Can Trust"],
    text: "Hands-on experience with smartphones from all major brands, from simple fixes to tricky faults.",
  },
  {
    icon: HeartHandshake,
    title: ["Care You", "Can Experience"],
    text: "We treat every phone like our own — handled carefully, tested properly, returned ready to use.",
  },
  {
    icon: MessageSquareText,
    title: ["Advice That's", "Honest"],
    text: "We explain the fault and your options clearly, so you can decide what's right for you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" crumb="About Us" image={IMAGES.banner} />

      {/* Intro */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <span className="eyebrow">About {BUSINESS_INFO.displayName}</span>
            <h2 className="section-title mt-3">
              We get your phone
              <br />
              <strong>working again</strong>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted">
              {BUSINESS_INFO.displayName} is a mobile phone repair shop located at {BUSINESS_INFO.address.building},{" "}
              {BUSINESS_INFO.address.landmark}, Kasaragod. We provide smartphone repairs, device diagnostics,
              practical accessories and affordable gadgets for our local community.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Whether you walk in with a cracked screen or just need the right charger, our aim is the same: honest
              advice, careful work and a phone you can rely on.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -left-5 -top-5 h-2/3 w-2/3 rounded-[28px] bg-mist" aria-hidden />
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                src={IMAGES.lab}
                alt="Fixerland repair workbench with microscope and iPhones"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {VALUES.map((value) => (
            <div
              key={value.title.join(" ")}
              className="group rounded-3xl bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,27,61,0.12)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <value.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-2xl leading-tight text-navy">
                {value.title[0]}
                <br />
                <strong>{value.title[1]}</strong>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ShopGallery />

      {/* Mission & Vision */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="pattern-lines rounded-[28px] bg-navy p-8 text-white sm:p-12">
            <Target className="h-10 w-10 text-brand" />
            <h2 className="mt-6 text-4xl leading-tight">
              Our <strong>Mission</strong>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/85">
              To keep Kasaragod connected by making phone repairs simple, honest and dependable — diagnosing
              properly, fixing carefully and helping every customer leave with a device they can trust.
            </p>
          </div>
          <div className="pattern-lines rounded-[28px] bg-brand p-8 text-white sm:p-12">
            <Telescope className="h-10 w-10 text-white" />
            <h2 className="mt-6 text-4xl leading-tight">
              Our <strong>Vision</strong>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/90">
              To be the first place people in Kasaragod think of for mobile repairs, accessories and gadgets — known
              for transparency, quality work and a friendly, customer-first experience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustStats tone="dark" />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
