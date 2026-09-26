import Link from "next/link";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

/** Red "book your repair" band used near the bottom of every page. */
export function ContactCTA() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:py-24 lg:px-8">
      <div className="pattern-lines relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-brand px-6 py-14 text-center sm:px-10 lg:py-20">
        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />
        <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-navy/15" aria-hidden />

        <div className="relative">
          <h2 className="text-4xl font-normal leading-tight text-white sm:text-5xl">
            Book Your Repair
            <br />
            <strong className="font-bold">at Fixerland</strong>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
            Professional care for your phone, just a message away.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/contact#booking" className="btn btn-white">
              <CalendarCheck className="h-5 w-5" /> Book a Repair
            </Link>
            <a href={getQuickWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
