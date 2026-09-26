export const BUSINESS_INFO = {
  name: "FIXERLAND",
  displayName: "Fixerland",
  tagline: "Your Trusted Mobile Repair Partner in Kasaragod",
  type: "Mobile Phone Repair Shop",

  // Contact details
  phoneDisplay: "+91 98950 18803",
  phoneE164: "+919895018803",
  phoneTel: "tel:+919895018803",
  whatsappNumber: "919895018803",

  // Location
  location: "Kasaragod, Kerala",
  address: {
    building: "New Bus Stand Building",
    landmark: "Opposite IDBI Bank, Near Olive Cafe",
    city: "Kasaragod",
    state: "Kerala",
    pincode: "671124",
    country: "India",
    fullFormatted: "New Bus Stand Building, Opposite IDBI Bank, Near Olive Cafe, Kasaragod, Kerala 671124",
  },

  // Social & Maps
  instagramHandle: "@fixerland",
  instagramUrl: "https://instagram.com/fixerland",
  // Official FIXERLAND Google Business listing (place CID from the client's embed link).
  googleMapsUrl: "https://www.google.com/maps?cid=11663408227797229651",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.1280185799797!2d74.99230087483309!3d12.507672687766686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4830019726e6f%3A0xa1dcbffce038e053!2sFIXERLAND!5e0!3m2!1sen!2sin!4v1790450671962!5m2!1sen!2sin",

  // Social proof (publicly verified details — update when the Google listing changes)
  googleRating: 5.0,
  googleReviewCount: 33,

  // TODO: confirm opening hours with the client, then show them in Location + StructuredData.
  openingHours: null as string | null,
} as const;

/**
 * Real Fixerland photos live in /public/images (about 680px wide, portrait) — use them in cards and
 * half-width slots. Full-width slots (hero, banners) still use Unsplash stock photos until
 * high-resolution landscape shop photos are available.
 */
const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const IMAGES = {
  heroRepair: unsplash("photo-1550041473-d296a3a8a18a", 2000),
  heroParts: unsplash("photo-1746005514011-ea00280f3b6e", 2000),
  heroAccessories: unsplash("photo-1550029402-8280f657d8d1", 2000),
  story: "/images/storefront.webp",
  repairs: "/images/board-repair.webp",
  diagnostics: "/images/technician-thermal.webp",
  accessories: unsplash("photo-1565536421961-1f165e0c981e", 900),
  gadgets: unsplash("photo-1566793474285-2decf0fc182a", 900),
  booking: "/images/lab-workbench.webp",
  whatsapp: unsplash("photo-1566728595333-75a1d7cae961", 900),
  support: "/images/technician-testing.webp",
  banner: unsplash("photo-1746005847012-0c38b610a95a", 2000),
  store: unsplash("photo-1550041473-d296a3a8a18a", 2000),
  storefront: "/images/storefront.webp",
  lab: "/images/lab-workbench.webp",
  chargers: unsplash("photo-1573739022854-abceaeb585dc", 900),
} as const;

/** Real shop photos for the gallery. */
export const SHOP_GALLERY = [
  { src: "/images/storefront.webp", alt: "Fixerland Sales & Service storefront in Kasaragod", caption: "Our store" },
  { src: "/images/lab-workbench.webp", alt: "Repair workbench with microscope and iPhones", caption: "Repair workbench" },
  { src: "/images/technician-thermal.webp", alt: "Technician using a thermal camera to diagnose a phone", caption: "Thermal diagnostics" },
  { src: "/images/board-repair.webp", alt: "iPhone logic board held in front of the Fixerland screen", caption: "Board-level work" },
  { src: "/images/technician-testing.webp", alt: "Technician testing a repaired iPhone", caption: "Testing before handover" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
] as const;

export type ServiceIcon = "Wrench" | "Cpu" | "ShieldCheck" | "Smartphone";

export interface ServiceCategory {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: ServiceIcon;
  image: string;
  features: string[];
}

export const SERVICES_LIST: ServiceCategory[] = [
  {
    id: "phone-repairs",
    title: "Phone Repairs",
    short: "Screens, batteries, charging ports and more.",
    description:
      "From a cracked display to a battery that won't last the day, we troubleshoot hardware and software faults on smartphones of all major brands and work carefully to get your phone back to reliable use.",
    icon: "Wrench",
    image: IMAGES.repairs,
    features: ["Screen & Display Issues", "Battery & Power Problems", "Charging Port Faults", "Software & OS Troubleshooting"],
  },
  {
    id: "device-diagnostics",
    title: "Device Diagnostics",
    short: "Find the real fault before any repair.",
    description:
      "Not sure what's wrong? We inspect your device physically and technically to pinpoint the fault, then explain what needs fixing and whether a repair is worthwhile — before any work begins.",
    icon: "Cpu",
    image: IMAGES.diagnostics,
    features: ["Fault Identification", "Performance Assessment", "Hardware Check", "Repair Feasibility Advice"],
  },
  {
    id: "mobile-accessories",
    title: "Mobile Accessories",
    short: "Cases, screen guards, chargers and audio.",
    description:
      "Protect and power your phone with everyday accessories — covers, tempered glass, chargers, cables and audio gear. Tell us your model and we'll help you find the right fit.",
    icon: "ShieldCheck",
    image: IMAGES.accessories,
    features: ["Covers & Cases", "Tempered Glass & Screen Guards", "Chargers & Cables", "Earphones & Audio"],
  },
  {
    id: "gadgets-sales",
    title: "Gadgets & Sales",
    short: "Affordable phones, wearables and gadgets.",
    description:
      "Looking for something new? We offer budget-friendly mobile devices, smart wearables and practical tech gadgets, with honest advice on what suits your needs.",
    icon: "Smartphone",
    image: IMAGES.gadgets,
    features: ["Affordable Mobile Devices", "Smart Wearables", "Tech Gadgets", "Everyday Electronics"],
  },
];

/** Common faults — used by the booking form and the services page. */
export const REPAIR_TYPES = [
  { id: "screen", title: "Screen / Display", desc: "Cracked glass, touch not working, lines or black display." },
  { id: "battery", title: "Battery", desc: "Fast drain, swelling, or phone switching off on its own." },
  { id: "charging", title: "Charging Port", desc: "Loose connection, slow charging or not charging at all." },
  { id: "water", title: "Water Damage", desc: "Phone dropped in water or exposed to liquid." },
  { id: "camera", title: "Camera", desc: "Blurry photos, cracked lens or camera app not opening." },
  { id: "audio", title: "Speaker / Mic", desc: "No sound, low volume, or callers can't hear you." },
  { id: "software", title: "Software", desc: "Stuck on logo, boot loop, update errors or slowness." },
  { id: "dead", title: "Dead / No Power", desc: "Phone won't switch on or respond at all." },
] as const;

export const BRANDS = [
  "Apple iPhone",
  "Samsung",
  "OnePlus",
  "Xiaomi / Redmi / Poco",
  "Vivo / iQOO",
  "Oppo / Realme",
  "Google Pixel",
  "Other",
] as const;

export const PREFERRED_TIMES = ["Morning", "Afternoon", "Evening"] as const;

export const HIGHLIGHTS = [
  {
    title: "Diagnosis Before Repair",
    description: "We check your device and explain the fault first, so you know what's being fixed.",
    icon: "Search",
  },
  {
    title: "Careful Workmanship",
    description: "Every repair is handled carefully and core functions are tested before handover.",
    icon: "Wrench",
  },
  {
    title: "Repairs, Sales & Accessories",
    description: "A complete mobile solution under one roof — from repairs to protection and new gadgets.",
    icon: "Layers",
  },
  {
    title: "Easy to Find in Kasaragod",
    description: "New Bus Stand Building, opposite IDBI Bank and near Olive Cafe.",
    icon: "MapPin",
  },
] as const;

export const STATS = [
  { value: `${BUSINESS_INFO.googleRating.toFixed(1)}`, suffix: "★", label: "Google Rating" },
  { value: `${BUSINESS_INFO.googleReviewCount}`, suffix: "+", label: "Google Reviews" },
  { value: "4", suffix: "", label: "Service Categories" },
  { value: "All", suffix: "", label: "Major Brands" },
] as const;

export const REPAIR_PROCESS_STEPS = [
  {
    step: "01",
    title: "Bring Your Device",
    description: "Visit our shop at New Bus Stand Building, Kasaragod, or message us on WhatsApp first.",
  },
  {
    step: "02",
    title: "Get It Checked",
    description: "Our team inspects your phone to understand the issue clearly and explains the options.",
  },
  {
    step: "03",
    title: "Repair & Quality Check",
    description: "We fix your device carefully and test its core functions before handover.",
  },
  {
    step: "04",
    title: "Collect Your Device",
    description: "Pick up your phone ready to use, with advice on accessories to keep it protected.",
  },
] as const;

export const FAQS = [
  {
    q: "Where is Fixerland located?",
    a: `Fixerland is at ${BUSINESS_INFO.address.building}, ${BUSINESS_INFO.address.landmark}, ${BUSINESS_INFO.location}.`,
  },
  {
    q: "Which phones do you repair?",
    a: "We work on smartphones from all major brands, including Apple, Samsung, OnePlus, Xiaomi, Vivo, Oppo, Realme and Google Pixel.",
  },
  {
    q: "How can I check if my phone issue can be fixed?",
    a: "Bring your device to our Kasaragod shop, or send us your phone model and the problem on WhatsApp or by phone and we'll guide you.",
  },
  {
    q: "How long does a repair take?",
    a: "It depends on the fault and part availability. We'll tell you the expected time after checking your device.",
  },
  {
    q: "Do you sell accessories and gadgets?",
    a: "Yes. We stock mobile accessories such as cases, screen guards, chargers and earphones, as well as affordable gadgets. Message us your model to check availability.",
  },
] as const;

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  ownerReplied: boolean;
  localGuide?: boolean;
  /** English version for reviews written in Malayalam/Manglish. The original text is always shown. */
  translation?: string;
}

/**
 * Real Google reviews from the FIXERLAND Google Business listing, copied as written.
 * Only add genuine reviews here. Reviews cut off with "…" on Google show the visible part only.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rakesh K Rajeev",
    rating: 5,
    text: "Excellent place for iPhone servicing in Kasaragod! The staff at FIXERLAND is very polite, and they fixed my phone quickly. Highly recommended.",
    ownerReplied: false,
    localGuide: true,
  },
  {
    name: "Rahees Razz",
    rating: 5,
    text: "Ante mobile 16 pro dead ayrnnu njm kore mobile shpl kannichu but redy ayyila njn fixerlandil kannichu aviden nyt 2 mani vare orn ennik rdy akki thannu data vallare important ayrnnu data povathe clear akki avidathe friendend irkinne cherkkan nalla character ann ad pollathanne service enne avante chair ad irthi ann wrk cheydad thank you fixerland groups",
    translation:
      "My 16 Pro was dead. We showed it at many mobile shops but it couldn't be fixed. I brought it to Fixerland and they stayed until 2 AM to get it ready for me. My data was very important, and they fixed it without losing any data. The guy there has a really good character — great service, he even sat me in his chair while he worked on it. Thank you, Fixerland!",
    ownerReplied: true,
  },
  {
    name: "Musthafa M Patla",
    rating: 5,
    text: "Best service center in kasaragod. Best deal, Good staff's behavior, very friendly faithful intervention",
    ownerReplied: true,
  },
  { name: "Dhijin", rating: 5, text: "Good and genuine services for mobile, affordable service charge.", ownerReplied: true },
  { name: "Mithuna Mithunaprem", rating: 5, text: "The best service good behavior", ownerReplied: true },
  { name: "Kebeer Mc", rating: 5, text: "Best mobile service center kasaragod", ownerReplied: true },
  { name: "Muhammed Rafi", rating: 5, text: "Good behave good service 🤝🤝", ownerReplied: true },
  { name: "Mihad CM", rating: 5, text: "Best mobile service centre", ownerReplied: true },
  { name: "M Touch", rating: 5, text: "Best service ever", ownerReplied: true },
  { name: "Mijju", rating: 5, text: "Best service 👐", ownerReplied: true },
];

export interface Reel {
  id: string;
  src: string;
  poster: string;
  title: string;
  duration: string;
}

/** Short vertical videos from the shop (720×1280). Files live in /public/reels; posters in /public/reels/posters. */
const reel = (id: string, title: string, duration: string): Reel => ({
  id,
  src: `/reels/${id}.mp4`,
  poster: `/reels/posters/${id}.webp`,
  title,
  duration,
});

export const REELS: Reel[] = [
  reel("Video-1834", "Board-level iPhone repair", "0:53"),
  reel("Video-85340", "A repair from start to finish", "1:30"),
  reel("Video-29821", "iPhone Pro repaired & ready", "0:24"),
  reel("Video-46086", "Schematic-guided diagnosis", "0:30"),
  reel("Video-61554", "Display & board repair", "0:42"),
  reel("Video-88150", "Inside a logic board fix", "1:01"),
  reel("Video-95674", "Meet our technician", "0:35"),
];
