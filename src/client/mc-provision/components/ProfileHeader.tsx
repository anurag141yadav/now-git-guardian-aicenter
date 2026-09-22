import React, { useState } from "react";

interface Props {
  userName: string;
  email: string;
  status: string;
  image?: string;
  onLogOut: () => void;
}

export default function ProfileHeader({ userName, email, status, image, onLogOut }: Props) {
  const [imageFailed, setImageFailed] = useState(false);
  const initial = (userName || "").trim().charAt(0).toUpperCase() || "?";
  const isActive = (status || "").toUpperCase() === "ACTIVE";
  const showImage = image && !imageFailed;

  return (
    <div className="mc-profile-container">
      {showImage ? (
        <img
          className="mc-profile-photo"
          src={"/sys_attachment.do?sys_id=" + image}
          alt=""
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="mc-profile-avatar" aria-hidden="true">{initial}</div>
      )}

      <div className="mc-profile-info">
        <h2>{userName}</h2>
        <p className="mc-email">{email}</p>
        <span className={"mc-status" + (isActive ? "" : " mc-status-muted")}>{status}</span>
      </div>

      <button className="mc-logout" title="Log out" aria-label="Log out" onClick={onLogOut}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </button>
    </div>
  );
}
