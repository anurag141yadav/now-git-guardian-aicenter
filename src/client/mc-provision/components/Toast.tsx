import React from "react";

interface Props {
  message: string | null;
  onDismiss: () => void;
}

export default function Toast({ message, onDismiss }: Props) {
  if (!message) return null;
  return (
    <div className="mc-toast" role="alert">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="7.5" x2="12" y2="13" />
        <line x1="12" y1="16.5" x2="12" y2="16.5" />
      </svg>
      <span className="mc-toast-text">{message}</span>
      <button className="mc-toast-close" onClick={onDismiss} aria-label="Dismiss">&#10005;</button>
    </div>
  );
}
