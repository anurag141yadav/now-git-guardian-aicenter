import React from "react";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function PopupBanner({ visible, onClose }: Props) {
  if (!visible) return null;
  return (
    <div className="mc-popup-banner">
      <div className="mc-popup-banner-body">
        <span>&#9888;</span>
        <div className="mc-popup-text">
          <strong>Note</strong> Before proceeding:
          <br />
          1. Turn off <strong>Block Pop-ups</strong>
          <br />
          2. Turn off <strong>Prevent Cross-Site Tracking</strong>
        </div>
        <button className="mc-popup-close" onClick={onClose}>
          &#10005;
        </button>
      </div>
    </div>
  );
}
