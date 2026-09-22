import React, { useRef, useState } from "react";
import { Badge } from "../types";
import BadgeCard from "./BadgeCard";

interface Props {
  badges: Badge[];
  onAddToWallet: (badge: Badge) => void;
}

export default function BadgeCarousel({ badges, onAddToWallet }: Props) {
  const [activeDot, setActiveDot] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const list = badges || [];

  // Cards are narrower than the track (a sliver of the next one peeks through to
  // signal swipeability), so a step is the card's own width plus the flex gap.
  function stepWidth(track: HTMLDivElement) {
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return track.offsetWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    return card.offsetWidth + gap;
  }

  function scrollToBadge(index: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * stepWidth(el), behavior: "smooth" });
    setActiveDot(index);
  }

  if (list.length === 0) {
    return (
      <div className="mc-badge-card-container">
        <div className="mc-badge-empty">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" opacity="0.65" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="2.5" />
            <circle cx="8.5" cy="11" r="2" />
            <path d="M5.5 16c.6-1.4 1.7-2.2 3-2.2s2.4.8 3 2.2" />
            <line x1="15" y1="10" x2="19" y2="10" />
            <line x1="15" y1="14" x2="19" y2="14" />
          </svg>
          <h3>No Badges Found</h3>
          <p className="mc-badge-empty-sub">You have no mobile credentials assigned to your account.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="mc-badge-card-container"
        ref={trackRef}
        onScroll={(e) => setActiveDot(Math.round(e.currentTarget.scrollLeft / stepWidth(e.currentTarget)))}
      >
        {list.map((badge) => (
          <BadgeCard key={badge.id_str} badge={badge} onAddToWallet={onAddToWallet} />
        ))}
      </div>

      {list.length > 1 && (
        <div className="mc-carousel-dots" role="tablist" aria-label="Badges">
          {list.map((badge, i) => (
            <button
              key={badge.id_str}
              type="button"
              role="tab"
              aria-selected={activeDot === i}
              aria-label={"Show badge " + (i + 1) + " of " + list.length}
              className={"mc-carousel-dot" + (activeDot === i ? " mc-carousel-dot-active" : "")}
              onClick={() => scrollToBadge(i)}
            />
          ))}
        </div>
      )}
    </>
  );
}
