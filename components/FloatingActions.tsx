import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

/** Side-docked WhatsApp / Call buttons for desktop. Mobile uses MobileCTA instead. */
export function FloatingActions() {
  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1.5 lg:flex">
      <a
        href={getQuickWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-12 items-center gap-3 rounded-l-xl bg-navy pl-3.5 pr-3 text-white shadow-lg transition-all hover:bg-[#25d366]"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-32">
          WhatsApp
        </span>
      </a>
      <a
        href={BUSINESS_INFO.phoneTel}
        aria-label="Call Fixerland"
        className="group flex h-12 items-center gap-3 rounded-l-xl bg-brand pl-3.5 pr-3 text-white shadow-lg transition-all hover:bg-brand-dark"
      >
        <Phone className="h-5 w-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-32">
          Call Now
        </span>
      </a>
    </div>
  );
}
