import React, { useEffect, useState } from "react";
import "../mc-provision.css";
import { Badge, SessionData } from "./types";
import { getSession, addToWalletRequest, fetchProvTokenRequest, provisionGoogleRequest, getBadgesByEmail } from "./api";
import { invokeAppleWallet } from "./wallet";
import { detectPlatform } from "./usePlatform";
import ProfileHeader from "./components/ProfileHeader";
import PopupBanner from "./components/PopupBanner";
import ProvisioningOverlay from "./components/ProvisioningOverlay";
import BadgeCarousel from "./components/BadgeCarousel";
import Toast from "./components/Toast";
import BadgeSkeleton from "./components/BadgeSkeleton";

export default function App() {
  const [popupVisible, setPopupVisible] = useState(true);
  const [provisioning, setProvisioning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<SessionData | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const { isIOS, isAndroid, isMobile } = detectPlatform();

  useEffect(() => {
    loadSession();
    handleGoogleOAuthCallback();
  }, []);

  async function loadSession() {
    setLoading(true);
    try {
      const data = await getSession();
      setSession({ ...data, badges: data.badges || [], userName: data.userName || "" });
      setLoadError(null);
    } catch (e: any) {
      setLoadError(e.message || "Could not load your badges.");
    }
    setLoading(false);
  }

  async function refreshBadges() {
    if (!session) return;
    try {
      const data = await getBadgesByEmail(session.email);
      setSession({ ...data, badges: data.badges || [], userName: data.userName || "" });
    } catch (e) {
      /* keep the currently displayed badges if the refresh fails */
    }
  }

  async function handleGoogleOAuthCallback() {
    const code = sessionStorage.getItem("hid-google-auth-code");
    const badgeRaw = sessionStorage.getItem("hid-google-badge");
    if (!code || !badgeRaw) return;
    sessionStorage.removeItem("hid-google-auth-code");
    sessionStorage.removeItem("hid-google-badge");
    const badge: Badge = JSON.parse(badgeRaw);

    setProvisioning(true);
    const response = await provisionGoogleRequest(code, badge.identityId, badge.sourceId);
    setProvisioning(false);
    if (response.success && response.blob && response.blob.blob) {
      window.open("https://pay.google.com/gp/t/savecard/" + response.blob.blob + "?provisioning_source=web", "_blank");
      refreshBadges();
    } else {
      setToast("Something went wrong preparing your wallet pass. Please try again. (" + (response.error || "unknown error") + ")");
    }
  }

  function openGoogleOAuth(badge: Badge) {
    if (!session) return;
    sessionStorage.setItem("hid-google-badge", JSON.stringify(badge));
    const url =
      "https://accounts.google.com/o/oauth2/v2/auth" +
      "?client_id=" + encodeURIComponent(session.googleClientId) +
      "&redirect_uri=" + encodeURIComponent(session.googleRedirectUri) +
      "&response_type=code&scope=" + encodeURIComponent("openid email profile") +
      "&access_type=offline&state=" + encodeURIComponent(badge.id_str);
    window.location.href = url;
  }

  async function handleAddToWallet(badge: Badge) {
    if (badge.subType === "HID" && isIOS) {
      return handleHidApple(badge);
    }
    if (badge.subType === "HID" && isAndroid) {
      return openGoogleOAuth(badge);
    }
    const newTab = window.open("about:blank", "_blank");
    if (!newTab) {
      setPopupVisible(true);
      return;
    }
    setProvisioning(true);
    const response = await addToWalletRequest(badge.identityId, badge.sourceId);
    setProvisioning(false);
    const provLink = response.responseRequest && response.responseRequest.prov_link;
    if (provLink) {
      newTab.location.href = provLink;
    } else {
      newTab.close();
      setToast("Could not fetch provisioning link.");
    }
  }

  async function handleHidApple(badge: Badge) {
    if (!session) return;
    setProvisioning(true);
    const response = await fetchProvTokenRequest(badge.identityId, badge.sourceId);
    if (!response.issuanceToken || !response.provisioningToken) {
      setProvisioning(false);
      setToast("Provisioning tokens missing from server response.");
      return;
    }
    try {
      invokeAppleWallet(session.hidConfig, response.issuanceToken, response.provisioningToken, "addPasses", (result) => {
        if (result && result.status === "SUCCESS") {
          refreshBadges();
        } else {
          setToast("Apple Wallet provisioning did not complete successfully.");
        }
      });
      const hiddenBtn = document.getElementById("addPasses");
      hiddenBtn?.click();
    } catch (e: any) {
      setToast("Failed to initialize Apple Wallet (" + (e.message || "unknown error") + ")");
    }
    setProvisioning(false);
  }

  if (loading) {
    return <BadgeSkeleton />;
  }

  if (loadError || !session) {
    return (
      <div className="mc-page">
        <div className="mc-badge-container mc-error-state">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="7.5" x2="12" y2="13" />
            <line x1="12" y1="16.5" x2="12" y2="16.5" />
          </svg>
          <h3>Unable to load badges</h3>
          <p>{loadError || "No profile data was returned for your account."}</p>
          <button className="mc-retry" onClick={loadSession}>Try again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mc-page">
      <PopupBanner visible={popupVisible} onClose={() => setPopupVisible(false)} />
      <ProvisioningOverlay visible={provisioning} />
      <Toast message={toast} onDismiss={() => setToast(null)} />

      <ProfileHeader
        userName={session.userName}
        email={session.email}
        status={session.status}
        image={session.image}
        onLogOut={() => (window.location.href = "/logout.do?sysparm_goto_url=/esc")}
      />

      <div className="mc-badge-container">
        <div className="mc-badges-header">
          <h3>My Badges</h3>
          <p>View and manage badges</p>
        </div>
        <BadgeCarousel badges={session.badges} onAddToWallet={handleAddToWallet} />
      </div>

      {isIOS && <button id="addPasses" style={{ display: "none" }} type="button"></button>}
    </div>
  );
}
