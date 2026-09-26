"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { BRANDS, PREFERRED_TIMES, REPAIR_TYPES, SERVICES_LIST } from "@/lib/constants";
import { getBookingWhatsAppUrl, type BookingDetails } from "@/lib/whatsapp";

const inputClass =
  "w-full rounded-xl border border-mist bg-mist-light px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20";

const labelClass = "mb-1.5 block text-sm font-bold text-navy";

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-mist pt-6 first:border-t-0 first:pt-0">
      <legend className="float-left mb-4 flex w-full items-center gap-3 text-lg font-bold text-navy">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm text-white">{n}</span>
        {title}
      </legend>
      <div className="clear-both grid gap-4 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

const EMPTY: BookingDetails = {
  service: SERVICES_LIST[0].title,
  brand: "",
  model: "",
  issue: "",
  date: "",
  time: "",
  name: "",
  phone: "",
  notes: "",
};

export function BookingForm() {
  const [form, setForm] = useState<BookingDetails>(EMPTY);
  const [sent, setSent] = useState(false);

  const set = (key: keyof BookingDetails) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setSent(false);
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getBookingWhatsAppUrl(form), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const isRepair = form.service === SERVICES_LIST[0].title || form.service === SERVICES_LIST[1].title;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Step n={1} title="Choose Service">
        <div className="sm:col-span-2">
          <label htmlFor="bk-service" className={labelClass}>
            Service *
          </label>
          <select id="bk-service" required value={form.service} onChange={set("service")} className={inputClass}>
            {SERVICES_LIST.map((s) => (
              <option key={s.id}>{s.title}</option>
            ))}
          </select>
        </div>
      </Step>

      <Step n={2} title="Your Device">
        <div>
          <label htmlFor="bk-brand" className={labelClass}>
            Brand *
          </label>
          <select id="bk-brand" required value={form.brand} onChange={set("brand")} className={inputClass}>
            <option value="" disabled>
              Select brand
            </option>
            {BRANDS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bk-model" className={labelClass}>
            Model
          </label>
          <input
            id="bk-model"
            value={form.model}
            onChange={set("model")}
            placeholder="e.g. iPhone 13, Galaxy A54"
            className={inputClass}
          />
        </div>
        {isRepair && (
          <div className="sm:col-span-2">
            <label htmlFor="bk-issue" className={labelClass}>
              What&apos;s the problem?
            </label>
            <select id="bk-issue" value={form.issue} onChange={set("issue")} className={inputClass}>
              <option value="">Not sure / Other</option>
              {REPAIR_TYPES.map((t) => (
                <option key={t.id}>{t.title}</option>
              ))}
            </select>
          </div>
        )}
      </Step>

      <Step n={3} title="Preferred Visit">
        <div>
          <label htmlFor="bk-date" className={labelClass}>
            Date
          </label>
          <input
            id="bk-date"
            type="date"
            value={form.date}
            onChange={set("date")}
            onFocus={(e) => {
              e.currentTarget.min = new Date().toISOString().slice(0, 10);
            }}
            className={inputClass}
          />
        </div>
        <div>
          <span className={labelClass} id="bk-time-label">
            Time
          </span>
          <div role="radiogroup" aria-labelledby="bk-time-label" className="grid grid-cols-3 gap-2">
            {PREFERRED_TIMES.map((t) => (
              <label
                key={t}
                className={`cursor-pointer rounded-xl border py-3 text-center text-sm font-bold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/40 ${
                  form.time === t ? "border-brand bg-brand text-white" : "border-mist bg-mist-light text-navy hover:border-brand"
                }`}
              >
                <input type="radio" name="time" value={t} checked={form.time === t} onChange={set("time")} className="sr-only" />
                {t}
              </label>
            ))}
          </div>
        </div>
      </Step>

      <Step n={4} title="Contact Info">
        <div>
          <label htmlFor="bk-name" className={labelClass}>
            Your Name *
          </label>
          <input id="bk-name" required autoComplete="name" value={form.name} onChange={set("name")} className={inputClass} />
        </div>
        <div>
          <label htmlFor="bk-phone" className={labelClass}>
            Phone Number *
          </label>
          <input
            id="bk-phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+\s\-]{10,15}"
            title="Enter a valid phone number"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="bk-notes" className={labelClass}>
            Anything else?
          </label>
          <textarea
            id="bk-notes"
            rows={3}
            value={form.notes}
            onChange={set("notes")}
            placeholder="Describe the issue or the accessory you're looking for"
            className={`${inputClass} resize-none`}
          />
        </div>
      </Step>

      <button type="submit" className="btn btn-primary w-full !py-4 text-base">
        <Send className="h-5 w-5" /> Confirm via WhatsApp
      </button>
      <p className="text-center text-sm text-muted">
        This opens WhatsApp with your details filled in. We&apos;ll reply to confirm your visit.
      </p>

      {sent && (
        <p role="status" className="flex items-center gap-2 rounded-xl bg-green-50 p-4 text-sm font-bold text-green-700">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          WhatsApp opened with your booking details. Just press send!
        </p>
      )}
    </form>
  );
}
