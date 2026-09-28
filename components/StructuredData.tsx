import { BUSINESS_INFO } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site";

export function StructuredData() {
  const siteUrl = getSiteUrl();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MobilePhoneStore"],
    name: BUSINESS_INFO.displayName,
    url: `${siteUrl}/`,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/logo.png`,
    description:
      "Fixerland is a mobile phone repair shop in Kasaragod offering phone repairs, diagnostics, accessories and gadgets at New Bus Stand Building.",
    telephone: BUSINESS_INFO.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS_INFO.address.building}, ${BUSINESS_INFO.address.landmark}`,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.5076727,
      longitude: 74.9948758,
    },
    hasMap: BUSINESS_INFO.googleMapsUrl,
    sameAs: [BUSINESS_INFO.instagramUrl],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS_INFO.displayName,
    url: `${siteUrl}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
