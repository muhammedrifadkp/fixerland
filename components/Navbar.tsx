"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X, MessageCircle } from "lucide-react";
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import { getQuickWhatsAppUrl } from "@/lib/whatsapp";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = isScrolled || menuOpen;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-[0_4px_24px_rgba(20,27,61,0.08)] py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={`${BUSINESS_INFO.displayName} home`} onClick={closeMenu}>
          <Logo light={!solid} />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-[15px] font-bold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand after:transition-transform ${
                  active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                } ${solid ? "text-navy" : "text-white"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BUSINESS_INFO.phoneTel}
            className={`btn !px-4 !py-2.5 text-sm ${solid ? "btn-outline" : "btn-light"}`}
          >
            <Phone className="h-4 w-4" />
            {BUSINESS_INFO.phoneDisplay}
          </a>
          <Link href="/contact#booking" className="btn btn-primary !px-5 !py-2.5 text-sm">
            Book a Repair
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`lg:hidden rounded-full p-2.5 transition-colors ${
            solid ? "text-navy hover:bg-mist-light" : "text-white hover:bg-white/10"
          }`}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-mist bg-white px-4 pb-6 pt-2 sm:px-6">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`border-b border-mist-light py-3.5 text-base font-bold ${
                    active ? "text-brand" : "text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a href={BUSINESS_INFO.phoneTel} className="btn btn-outline text-sm">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={getQuickWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-sm"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link href="/contact#booking" onClick={closeMenu} className="btn btn-primary col-span-2 text-sm">
              Book a Repair
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
