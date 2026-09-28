/**
 * Public base URL of the site, used for canonical URLs, the sitemap, robots.txt and structured data.
 *
 * Defaults to canonical production domain: https://www.fixerland.com
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  return "https://www.fixerland.com";
}
