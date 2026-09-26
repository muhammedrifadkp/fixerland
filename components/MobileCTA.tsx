import Link from "next/link";
import { CalendarCheck, MessageCircle, Navigation, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

const itemClass =
  "flex flex-col items-center justify-center gap-1 py-2 text-[11px] font-bold text-navy transition-colors active:bg-mist-light";

export function MobileCTA() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-mist bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(20,27,61,0.08)] backdrop-blur lg:hidden"
    >
      <a href={BUSINESS_INFO.phoneTel} className={itemClass}>
        <Phone className="h-5 w-5 text-brand" />
        Call
      </a>
      <a href={getQuickWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className={itemClass}>
        <MessageCircle className="h-5 w-5 text-[#25d366]" />
        WhatsApp
      </a>
      <Link href="/contact#booking" className={itemClass}>
        <CalendarCheck className="h-5 w-5 text-brand" />
        Booking
      </Link>
      <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={itemClass}>
        <Navigation className="h-5 w-5 text-navy" />
        Directions
      </a>
    </nav>
  );
}
