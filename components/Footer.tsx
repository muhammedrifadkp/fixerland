import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS, SERVICES_LIST } from "@/lib/constants";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";
import { InstagramIcon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-white pb-24 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" aria-label={`${BUSINESS_INFO.displayName} home`} className="inline-block">
              <Logo />
            </Link>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              {BUSINESS_INFO.displayName} is a mobile phone repair shop in Kasaragod offering phone repairs,
              device diagnostics, accessories and affordable gadgets — all under one roof.
            </p>
            <div className="flex gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-brand"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={getQuickWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-brand"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.phoneTel}
                aria-label="Call"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-brand"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-lg font-bold text-navy">Company</h2>
            <ul className="space-y-2.5 text-[15px]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h2 className="mb-4 text-lg font-bold text-navy">Services</h2>
            <ul className="space-y-2.5 text-[15px]">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="text-muted transition-colors hover:text-brand">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="lg:col-span-3">
            <h2 className="mb-4 text-lg font-bold text-navy">Visit Us</h2>
            <ul className="space-y-4 text-[15px] text-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  {BUSINESS_INFO.address.fullFormatted}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <a href={BUSINESS_INFO.phoneTel} className="font-bold text-navy hover:text-brand">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-white/80 sm:flex-row sm:px-6 lg:px-8">
          <p>© {BUSINESS_INFO.displayName}, Kasaragod. All rights reserved.</p>
          <p>{BUSINESS_INFO.address.building}, Kasaragod</p>
        </div>
      </div>
    </footer>
  );
}
