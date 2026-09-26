/**
 * Public base URL of the site, used for canonical URLs, the sitemap, robots.txt and structured data.
 *
 * 1. NEXT_PUBLIC_SITE_URL — set this in Vercel once the custom domain is live (e.g. https://fixerland.in).
 * 2. VERCEL_PROJECT_PRODUCTION_URL — provided automatically by Vercel (e.g. fixerland.vercel.app).
 * 3. localhost for local development.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}
