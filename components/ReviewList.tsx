"use client";

import { useState } from "react";
import { CheckCheck, ChevronDown, Languages, Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/constants";
import { GoogleIcon } from "@/components/Icons";

const AVATAR_COLORS = ["bg-brand", "bg-navy", "bg-emerald-600", "bg-amber-500", "bg-sky-600", "bg-fuchsia-600"];

/** Reviews longer than this get clamped with a "Read more" toggle. */
const LONG_REVIEW = 160;

/** How many reviews to show on mobile before "Show all". Larger screens always show everything. */
const MOBILE_INITIAL = 4;

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Stars({ count, className = "h-4 w-4" }: { count: number; className?: string }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} ${i < count ? "fill-current" : "text-mist"}`} aria-hidden />
      ))}
    </span>
  );
}

function ReviewCard({ review, index }: { review: Testimonial; index: number }) {
  const isLong = review.text.length > LONG_REVIEW;
  const [expanded, setExpanded] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <figure className="group relative rounded-3xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,27,61,0.12)] sm:p-7">
      <Quote
        className="absolute right-5 top-5 h-9 w-9 text-brand/10 transition-colors group-hover:text-brand/20 sm:right-6 sm:top-6 sm:h-10 sm:w-10"
        aria-hidden
      />
      <Stars count={review.rating} />

      <blockquote
        className={`mt-4 text-[17px] leading-relaxed text-ink sm:text-lg ${isLong && !expanded ? "line-clamp-5" : ""}`}
      >
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {(isLong || review.translation) && (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline"
            >
              {expanded ? "Show less" : "Read more"}
              <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
          )}
          {review.translation && (
            <button
              type="button"
              onClick={() => setShowTranslation((v) => !v)}
              aria-expanded={showTranslation}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-brand"
            >
              <Languages className="h-4 w-4" />
              {showTranslation ? "Hide translation" : "See translation"}
            </button>
          )}
        </div>
      )}

      {review.translation && showTranslation && (
        <p className="mt-3 rounded-2xl bg-mist-light p-4 text-[15px] leading-relaxed text-muted">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-navy">In English</span>
          {review.translation}
        </p>
      )}

      <figcaption className="mt-5 flex items-center gap-3 border-t border-mist-light pt-4 sm:mt-6 sm:pt-5">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
            AVATAR_COLORS[index % AVATAR_COLORS.length]
          }`}
          aria-hidden
        >
          {initials(review.name)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate font-bold text-navy">{review.name}</span>
          <span className="flex items-center gap-1.5 text-sm text-muted">
            <GoogleIcon className="h-3.5 w-3.5" />
            {review.localGuide ? "Local Guide" : "Google review"}
          </span>
        </span>
        {review.ownerReplied && (
          <span
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand"
            title="Fixerland replied to this review"
          >
            <CheckCheck className="h-3.5 w-3.5" /> Replied
          </span>
        )}
      </figcaption>
    </figure>
  );
}

/**
 * Mobile: a single column where every card keeps its own height, with the first few shown and a
 * "Show all" button. Tablet/desktop: a two-column masonry layout showing every review.
 */
export function ReviewList({ reviews }: { reviews: Testimonial[] }) {
  const [showAll, setShowAll] = useState(false);
  const hiddenCount = reviews.length - MOBILE_INITIAL;

  return (
    <>
      <ul className="space-y-4 md:columns-2 md:gap-5 md:space-y-0">
        {reviews.map((review, i) => (
          <li
            key={review.name}
            className={`md:mb-5 md:break-inside-avoid ${!showAll && i >= MOBILE_INITIAL ? "hidden md:block" : ""}`}
          >
            <ReviewCard review={review} index={i} />
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          className="btn btn-outline mt-6 w-full bg-white md:hidden"
        >
          {showAll ? "Show fewer reviews" : `Show all ${reviews.length} reviews`}
          <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
        </button>
      )}
    </>
  );
}
