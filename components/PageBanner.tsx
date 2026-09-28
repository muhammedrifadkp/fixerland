import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getSiteUrl } from "@/lib/site";

interface PageBannerProps {
  title: string;
  crumb: string;
  image: string;
}

/** Photo header used at the top of inner pages. */
export function PageBanner({ title, crumb, image }: PageBannerProps) {
  const siteUrl = getSiteUrl();
  const slug = crumb.toLowerCase().includes("about")
    ? "/about"
    : crumb.toLowerCase().includes("service")
    ? "/services"
    : crumb.toLowerCase().includes("contact")
    ? "/contact"
    : "/";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: crumb,
        item: `${siteUrl}${slug}`,
      },
    ],
  };

  return (
    <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-ink pb-14 pt-32 md:min-h-[400px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/75">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-bold text-brand">{crumb}</span>
        </nav>
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
