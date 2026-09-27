"use client";

import { useState } from "react";
import type { Review } from "@/content/reviews";

// Avatar colours picked from the name so each reviewer keeps the same colour.
const AVATAR_COLORS = ["#1a73e8", "#e8710a", "#188038", "#a142f4", "#d93025", "#12b5cb", "#f9ab00", "#5f6368"];
const CLAMP_AT = 220;

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function avatarColor(name: string) {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="review__stars" role="img" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className={index < rating ? "is-on" : undefined}>
          <path d="M12 2.5l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.5l-6 3.3 1.3-6.7-5-4.6 6.8-.8z" />
        </svg>
      ))}
    </span>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const long = review.quote.length > CLAMP_AT;

  return (
    <figure className="review">
      <figcaption className="review__head">
        <span
          className="review__avatar"
          style={review.photo ? { backgroundImage: `url(${review.photo})` } : { backgroundColor: avatarColor(review.name) }}
          aria-hidden="true"
        >
          {review.photo ? null : initials(review.name)}
        </span>
        <span className="review__who">
          <strong>{review.name}</strong>
          <small>
            {review.role}
            {review.company ? `, ${review.company}` : ""}
          </small>
        </span>
      </figcaption>

      <div className="review__meta">
        <Stars rating={review.rating} />
        <time dateTime={review.date}>{formatDate(review.date)}</time>
      </div>

      <blockquote className={`review__quote${long && !expanded ? " is-clamped" : ""}`}>{review.quote}</blockquote>
      {long ? (
        <button type="button" className="review__more" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </figure>
  );
}

// Grid for up to three reviews; a scrolling strip beyond that so every card stays readable.
export function ReviewList({ items }: { items: Review[] }) {
  if (items.length <= 3) {
    return (
      <ul className={`reviews-grid reviews-grid--${items.length}`}>
        {items.map((review, index) => (
          <li key={review.name + index}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="reviews__viewport">
      <div className="reviews__track">
        {[0, 1].map((copy) => (
          <div key={copy} className="reviews__clone" aria-hidden={copy === 1} inert={copy === 1}>
            {items.map((review, index) => (
              <ReviewCard key={`${copy}-${index}`} review={review} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
