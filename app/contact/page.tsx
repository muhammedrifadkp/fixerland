import type { Metadata } from "next";
import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { BUSINESS_INFO, IMAGES } from "@/lib/constants";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";
import { PageBanner } from "@/components/PageBanner";
import { BookingForm } from "@/components/BookingForm";
import { InstagramIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact & Book a Repair",
  description:
    "Book a phone repair or contact Fixerland in Kasaragod. Call +91 98950 18803, message us on WhatsApp, or visit us at New Bus Stand Building.",
  alternates: {
    canonical: "/contact",
  },
};

const CHANNELS = [
  {
    icon: Phone,
    label: "Call Us",
    value: BUSINESS_INFO.phoneDisplay,
    href: BUSINESS_INFO.phoneTel,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with our team",
    href: getQuickWhatsAppUrl(),
    external: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: BUSINESS_INFO.instagramHandle,
    href: BUSINESS_INFO.instagramUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" crumb="Contact Us" image={IMAGES.chargers} />

      {/* Quick channels */}
      <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(20,27,61,0.12)] transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <c.icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase tracking-wider text-muted">{c.label}</span>
                <span className="block text-lg font-bold text-navy">{c.value}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Booking + store */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div id="booking" className="lg:col-span-7">
            <h2 className="section-title">
              Book Your <strong>Repair</strong>
            </h2>
            <p className="mt-3 text-[17px] text-muted">
              Fill in a few details and we&apos;ll confirm your visit on WhatsApp.
            </p>
            <div className="mt-8 rounded-3xl border border-mist bg-white p-6 shadow-[0_20px_60px_rgba(20,27,61,0.06)] sm:p-8">
              <BookingForm />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="pattern-lines rounded-3xl bg-navy p-8 text-white">
              <h2 className="text-2xl font-bold">Our Store — Kasaragod</h2>
              <ul className="mt-6 space-y-5 text-[15px]">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="leading-relaxed text-white/85">{BUSINESS_INFO.address.fullFormatted}</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <a href={BUSINESS_INFO.phoneTel} className="font-bold hover:text-brand">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </li>
              </ul>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-8"
              >
                <Navigation className="h-5 w-5" /> Get Directions
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-mist">
              <iframe
                title="Fixerland location on Google Maps"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                className="h-80 w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
