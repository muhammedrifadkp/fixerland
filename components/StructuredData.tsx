import { BUSINESS_INFO } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site";

export function StructuredData() {
  const siteUrl = getSiteUrl();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    name: BUSINESS_INFO.displayName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/logo.png`,
    description: "Mobile phone repair shop in Kasaragod offering phone repairs, diagnostics, accessories, and gadgets.",
    telephone: BUSINESS_INFO.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS_INFO.address.building}, ${BUSINESS_INFO.address.landmark}`,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: "IN",
    },
    // Matches the FIXERLAND Google Business listing.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.5076727,
      longitude: 74.9948758,
    },
    hasMap: BUSINESS_INFO.googleMapsUrl,
    sameAs: [BUSINESS_INFO.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
