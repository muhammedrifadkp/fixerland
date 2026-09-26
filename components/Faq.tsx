import { Plus } from "lucide-react";
import { FAQS } from "@/lib/constants";

export function Faq() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="section-title">
            <strong>FAQ</strong>
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Quick answers about our Kasaragod shop. Can&apos;t find what you need? Message us on WhatsApp.
          </p>
        </div>

        <div className="space-y-4 lg:col-span-8">
          {FAQS.map((faq, i) => (
            <details
              key={faq.q}
              open={i === 0}
              className="group rounded-[14px] bg-mist-light px-6 py-5 transition-colors open:bg-white open:shadow-[0_10px_40px_rgba(20,27,61,0.08)] open:ring-1 open:ring-mist"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-navy [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand transition-transform group-open:rotate-45 group-open:bg-brand group-open:text-white">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 pr-10 text-[15px] leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
