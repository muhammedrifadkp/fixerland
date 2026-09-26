import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUSINESS_INFO, IMAGES } from "@/lib/constants";

export function Story() {
  return (
    <section className="overflow-hidden bg-white pb-20 md:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="pattern-dots absolute -left-6 -top-6 h-40 w-40 rounded-3xl" aria-hidden />
          <div className="absolute -bottom-5 -right-5 h-2/3 w-2/3 rounded-[28px] bg-brand" aria-hidden />
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[28px] shadow-2xl">
            <Image
              src={IMAGES.story}
              alt="Fixerland Sales and Service storefront in Kasaragod"
              fill
              sizes="(min-width: 1024px) 512px, 448px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="section-title mt-3">
            Your neighbourhood
            <br />
            <strong>mobile repair shop</strong>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            {BUSINESS_INFO.displayName} is a local mobile phone repair shop at {BUSINESS_INFO.address.building},
            Kasaragod. We help people get their phones working again — whether it&apos;s a cracked screen, a tired
            battery or a charging problem — and we stock the accessories and gadgets that keep them protected.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Our approach is simple: check the device properly, explain the problem honestly, and fix it with care.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-brand transition-all hover:gap-3"
          >
            Learn more <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
