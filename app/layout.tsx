import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { FloatingActions } from "@/components/FloatingActions";
import { StructuredData } from "@/components/StructuredData";
import { BUSINESS_INFO } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
  display: "swap",
});

const defaultTitle = "Fixerland | Mobile Phone Repair Shop in Kasaragod";
const defaultDescription =
  "Fixerland is a mobile phone repair shop in Kasaragod offering phone repairs, diagnostics, accessories and gadgets at New Bus Stand Building.";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: defaultDescription,
  keywords: [
    "mobile repair shop in Kasaragod",
    "mobile phone repair Kasaragod",
    "phone repair Kasaragod",
    "mobile accessories Kasaragod",
    "mobile gadgets Kasaragod",
    "Fixerland Kasaragod",
    "New Bus Stand Kasaragod repair",
  ],
  authors: [{ name: BUSINESS_INFO.displayName }],
  creator: BUSINESS_INFO.displayName,
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: BUSINESS_INFO.displayName,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Fixerland logo" }],
  },
  twitter: {
    card: "summary",
    images: ["/logo.png"],
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ptSans.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen flex flex-col bg-white font-sans text-ink antialiased selection:bg-brand selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <MobileCTA />
      </body>
    </html>
  );
}
