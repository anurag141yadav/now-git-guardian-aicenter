import React from "react";
import { Badge, canProvision } from "../types";
import { detectPlatform } from "../usePlatform";

interface Props {
  badge: Badge;
  onAddToWallet: (badge: Badge) => void;
}

export default function BadgeCard({ badge, onAddToWallet }: Props) {
  const { isMobile, isAndroid, isIOS } = detectPlatform();
  const provisionable = canProvision(badge);

  if (provisionable) {
    const logo = badge.subType === "HID" ? "x_aleen_snguardian.hid_logo.svg" : "x_aleen_snguardian.wavelynx_logo.png";
    const label = badge.type === "WatchCredential" ? "Watch Credential" : "Mobile Credentials";
    const isWatchOnHid = badge.subType === "HID" && badge.type === "WatchCredential";
    return (
      <div className="mc-badge-card">
        <div className="mc-badge-request-top">
          <p className="mc-badge-request-title">Request {badge.subType === "HID" ? "HID" : "Wavelynx"} Wallet Pass</p>
        </div>
        <div className="mc-badge-request-bottom">
          <span className="mc-badge-request-type">{label}</span>
          <img src={logo} className="mc-badge-logo-img" />
        </div>
        {isMobile && isAndroid && !isWatchOnHid && (
          <button className="mc-wallet-button" onClick={() => onAddToWallet(badge)}>
            <img src="x_aleen_snguardian.add_to_gw.svg" />
          </button>
        )}
        {isMobile && isIOS && !isWatchOnHid && (
          <button className="mc-wallet-button" onClick={() => onAddToWallet(badge)}>
            <img src="x_aleen_snguardian.add_to_apple_wallet.svg" />
          </button>
        )}
      </div>
    );
  }

  const isActive = badge.intStatus === 0 && (badge.subType !== "HID" || badge.status === "PASS_ACTIVE");
  const isInactive = badge.intStatus === 9 || badge.intStatus === 3;

  return (
    <div className="mc-badge-card">
      <div className="mc-badge-standard-body">
        {badge.subType === "HID" && badge.mobileCredentialId && (
          <p className="mc-badge-id">Badge ID {badge.mobileCredentialId}</p>
        )}
        {badge.subType !== "HID" && badge.sourceId && <p className="mc-badge-id">Badge ID {badge.sourceId}</p>}
        <div className="mc-validity-container">
          <p><span>Valid From</span> <span>{badge.validFromDate}</span></p>
          <p><span>Valid To</span> <span>{badge.validToDate}</span></p>
        </div>
        {isActive && <div className="mc-credential-active">Active</div>}
        {isInactive && <div className="mc-credential-inactive">Inactive</div>}
        {badge.type === "WatchCredential" && <div className="mc-badge-type-tag">Watch Credential</div>}
      </div>
      <div className="mc-badge-request-bottom">
        <span className="mc-badge-request-type">Mobile Credentials</span>
        <img
          src={badge.subType === "HID" ? "x_aleen_snguardian.hid_logo.svg" : "x_aleen_snguardian.wavelynx_logo.png"}
          className="mc-badge-logo-img"
        />
      </div>
    </div>
  );
}
