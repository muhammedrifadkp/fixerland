"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MessageCircle, Star } from "lucide-react";
import { BUSINESS_INFO, IMAGES, TESTIMONIALS } from "@/lib/constants";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";

const SLIDES = [
  {
    image: IMAGES.heroRepair,
    alt: "Technician repairing a smartphone",
    bold: "Repair",
    light: "Your Smartphone",
    text: "Screens, batteries, charging ports and more — fixed with care at New Bus Stand, Kasaragod.",
  },
  {
    image: IMAGES.heroParts,
    alt: "Disassembled phone with repair tools",
    bold: "Expert Care",
    light: "For Every Mobile",
    text: "We diagnose the real fault first and explain it clearly before any repair begins.",
  },
  {
    image: IMAGES.heroAccessories,
    alt: "Phone, smartwatch and headphones",
    bold: "Accessories",
    light: "& Smart Gadgets",
    text: "Cases, screen guards, chargers, audio gear and affordable gadgets — all in one place.",
  },
];

const INTERVAL_MS = 6500;
const featured = TESTIMONIALS[0];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [active, paused]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-ink pt-24 pb-28 md:min-h-[720px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          aria-hidden={i !== active}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === active ? "animate-hero-zoom" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div key={active} className="max-w-2xl animate-fade-up" aria-live="polite">
          <h1 className="text-white">
            <span className="block text-5xl font-bold sm:text-6xl lg:text-7xl">{SLIDES[active].bold}</span>
            <span className="mt-2 block text-4xl font-normal sm:text-5xl lg:text-6xl">{SLIDES[active].light}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{SLIDES[active].text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact#booking" className="btn btn-primary">
              <CalendarCheck className="h-5 w-5" />
              Book a Repair
            </Link>
            <a href={getQuickWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2 md:left-8 md:translate-x-0 lg:left-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-10 bg-brand" : "w-6 bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>

      {/* Featured Google review */}
      <a
        href="#reviews"
        className="absolute bottom-8 right-8 hidden max-w-sm items-start lg:right-24 gap-4 border-l-2 border-brand/80 pl-5 text-white md:flex"
      >
        <span className="text-6xl font-bold leading-[0.8] text-brand">“</span>
        <span>
          <span className="flex gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </span>
          <span className="mt-1.5 block text-[15px] leading-snug">{featured.text}</span>
          <span className="mt-1.5 block text-sm font-bold text-brand">
            {featured.name} · {BUSINESS_INFO.googleRating.toFixed(1)}★ on Google
          </span>
        </span>
      </a>
    </section>
  );
}
