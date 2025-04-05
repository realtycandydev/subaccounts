document.addEventListener('DOMContentLoaded', function () {
  console.log("[HL Debug] highlevel.js loaded ✅");

  const subaccountId = getSubaccountIdFromUrl();
  console.log("[HL Debug] Subaccount ID detected:", subaccountId);

  if (!subaccountId) {
    console.warn("[HL Debug] No subaccount ID found in URL. Script will not continue.");
    return;
  }

  const subScriptUrl = `https://wrapper.idxsecure.com/${subaccountId}.js`;
  console.log(`[HL Debug] Attempting to load subaccount script: ${subScriptUrl}`);

  const script = document.createElement('script');
  script.src = subScriptUrl;
  script.async = true;
  script.onload = () => {
    console.log(`[HL Debug] ✅ Loaded: ${subScriptUrl}`);
  };
  script.onerror = () => {
    console.error(`[HL Debug] ❌ Failed to load: ${subScriptUrl}`);
  };
  document.head.appendChild(script);

  // ---------- Helper ----------
  function getSubaccountIdFromUrl() {
    const match =
      window.location.pathname.match(/\/accounts\/([a-zA-Z0-9]+)/) ||
      window.location.pathname.match(/\/location\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  }
});
