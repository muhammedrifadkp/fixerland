import { BUSINESS_INFO } from "./constants";

export interface BookingDetails {
  name?: string;
  phone?: string;
  service?: string;
  brand?: string;
  model?: string;
  issue?: string;
  date?: string;
  time?: string;
  notes?: string;
}

function waLink(text: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds a pre-filled WhatsApp message from the booking form.
 */
export function getBookingWhatsAppUrl(details: BookingDetails): string {
  const rows: [string, string | undefined][] = [
    ["Name", details.name],
    ["Phone", details.phone],
    ["Service", details.service],
    ["Brand", details.brand],
    ["Model", details.model],
    ["Issue", details.issue],
    ["Preferred date", details.date],
    ["Preferred time", details.time],
    ["Notes", details.notes],
  ];

  let text = `Hello ${BUSINESS_INFO.displayName}, I'd like to book a visit.\n\n`;
  for (const [label, value] of rows) {
    if (value && value.trim()) text += `• *${label}:* ${value.trim()}\n`;
  }
  text += `\nPlease confirm. Thank you!`;

  return waLink(text);
}

/**
 * Simple quick WhatsApp URL for standard CTAs.
 */
export function getQuickWhatsAppUrl(topic?: string): string {
  return waLink(
    topic
      ? `Hello ${BUSINESS_INFO.displayName}, I would like to enquire about ${topic}.`
      : `Hello ${BUSINESS_INFO.displayName}, I would like to enquire about your mobile repair and gadget services.`
  );
}
