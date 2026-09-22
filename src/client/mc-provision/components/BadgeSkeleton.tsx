import React from "react";

export default function BadgeSkeleton() {
  return (
    <div className="mc-page">
      <div className="mc-profile-container">
        <div className="mc-skeleton mc-skeleton-avatar" />
        <div className="mc-profile-info">
          <div className="mc-skeleton mc-skeleton-line" style={{ width: "45%" }} />
          <div className="mc-skeleton mc-skeleton-line" style={{ width: "65%", height: 11 }} />
          <div className="mc-skeleton mc-skeleton-pill" />
        </div>
      </div>

      <div className="mc-badge-container">
        <div className="mc-badges-header">
          <div className="mc-skeleton mc-skeleton-line" style={{ width: "35%" }} />
          <div className="mc-skeleton mc-skeleton-line" style={{ width: "55%", height: 11 }} />
        </div>
        <div className="mc-skeleton mc-skeleton-card" />
      </div>
    </div>
  );
}
