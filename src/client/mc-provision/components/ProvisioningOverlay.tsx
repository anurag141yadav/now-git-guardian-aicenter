import React from "react";

export default function ProvisioningOverlay({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="mc-prov-overlay">
      <div className="mc-prov-box">
        <div className="mc-spinner mc-spinner-light"></div>
        <p className="mc-prov-label">Preparing wallet&hellip;</p>
      </div>
    </div>
  );
}
