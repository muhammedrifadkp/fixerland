import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO, IMAGES } from "@/lib/constants";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

const CARDS = [
  {
    title: ["Book Your", "Repair Visit"],
    text: "Tell us your phone and the problem, and pick a time that suits you.",
    cta: "Book a Repair",
    href: "/contact#booking",
    image: IMAGES.booking,
    external: false,
  },
  {
    title: ["Quick Help", "on WhatsApp"],
    text: "Send your model and issue — we'll reply with guidance and availability.",
    cta: "Chat on WhatsApp",
    href: getQuickWhatsAppUrl(),
    image: IMAGES.whatsapp,
    external: true,
  },
  {
    title: ["Talk to", "Our Team"],
    text: "Prefer to speak to someone? Give us a call and we'll help you out.",
    cta: "Call Now",
    href: BUSINESS_INFO.phoneTel,
    image: IMAGES.support,
    external: false,
  },
];

export function ActionCards() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="section-title">
              Expert Mobile
              <br />
              <strong>Repair Services</strong>
            </h2>
            <p className="mt-3 text-[17px] text-muted">Reliable phone repairs, right here in Kasaragod.</p>
          </div>
          <Link href="/services" className="btn btn-primary">
            View Services
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => {
            const linkProps = card.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <div
                key={card.cta}
                className="group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl p-7 text-white"
              >
                <Image
                  src={card.image}
                  alt={`${card.title.join(" ")} - Fixerland Kasaragod`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />
                <h3 className="text-3xl leading-tight">
                  {card.title[0]}
                  <br />
                  <strong>{card.title[1]}</strong>
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/85">{card.text}</p>
                <a href={card.href} {...linkProps} className="btn btn-primary mt-6 self-start">
                  {card.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
