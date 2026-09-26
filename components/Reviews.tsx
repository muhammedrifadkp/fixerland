import { ExternalLink } from "lucide-react";
import { BUSINESS_INFO, TESTIMONIALS } from "@/lib/constants";
import { GoogleIcon } from "@/components/Icons";
import { ReviewList, Stars } from "@/components/ReviewList";

export function Reviews() {
  const total = BUSINESS_INFO.googleReviewCount;
  // Every review on the listing is 5★ (rating 5.0).
  const distribution = [5, 4, 3, 2, 1].map((stars) => ({ stars, count: stars === 5 ? total : 0 }));

  return (
    <section id="reviews" className="overflow-hidden bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Google Reviews</span>
          <h2 className="section-title mt-3">
            What our <strong>customers say</strong>
          </h2>
          <p className="mt-4 text-[17px] text-muted">Real reviews from real customers in Kasaragod.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Rating summary */}
          <div className="min-w-0 lg:col-span-4">
            <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(20,27,61,0.08)] lg:sticky lg:top-28">
              <div className="flex items-center gap-2.5">
                <GoogleIcon className="h-7 w-7" />
                <span className="text-lg font-bold text-navy">Google Reviews</span>
              </div>

              <div className="mt-6 flex items-end gap-4">
                <span className="text-7xl font-bold leading-none text-navy">
                  {BUSINESS_INFO.googleRating.toFixed(1)}
                </span>
                <span className="pb-1">
                  <Stars count={Math.round(BUSINESS_INFO.googleRating)} className="h-5 w-5" />
                  <span className="mt-1 block text-sm text-muted">Based on {total} reviews</span>
                </span>
              </div>

              <ul className="mt-6 space-y-2" aria-label="Rating breakdown">
                {distribution.map((row) => (
                  <li key={row.stars} className="flex items-center gap-3 text-sm">
                    <span className="w-3 font-bold text-navy">{row.stars}</span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-mist-light">
                      <span
                        className="block h-full rounded-full bg-amber-400"
                        style={{ width: `${(row.count / total) * 100}%` }}
                      />
                    </span>
                    <span className="w-6 text-right text-muted">{row.count}</span>
                  </li>
                ))}
              </ul>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-8 w-full"
              >
                Read all reviews on Google <ExternalLink className="h-4 w-4" />
              </a>
              <p className="mt-3 text-center text-sm text-muted">Visited us? We&apos;d love your feedback too.</p>
            </div>
          </div>

          {/* Review cards */}
          <div className="min-w-0 lg:col-span-8">
            <ReviewList reviews={TESTIMONIALS} />
          </div>
        </div>
      </div>
    </section>
  );
}
