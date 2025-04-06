(function () {
  console.log("[HL Loader] highlevel.js loaded ✅");

  setTimeout(function () {
    const pathname = window.location.pathname;
    console.log("[HL Loader] Current path:", pathname);

    const match = pathname.match(/\/v2\/location\/([a-zA-Z0-9]+)/);
    const subaccountId = match ? match[1] : null;

    if (subaccountId) {
      console.log("[HL Loader] Subaccount ID detected:", subaccountId);

      const scriptUrl = `https://cdn.jsdelivr.net/gh/realtycandydev/subaccounts/${subaccountId}.js?bust=1`;
      console.log("[HL Loader] Attempting to load:", scriptUrl);

      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      script.onload = () => console.log("✅ Subaccount script loaded!");
      script.onerror = () => console.error("❌ Failed to load subaccount script.");
      document.head.appendChild(script);
    } else {
      console.warn("❌ Could not extract subaccount ID.");
    }
  }, 1000);
})();
