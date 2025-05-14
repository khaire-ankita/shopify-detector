(function () {
  function detectShopify() {
    const isShopify =
      !!window.Shopify ||
      document.querySelector('script[src*="cdn.shopify.com"]');

    if (isShopify) {
      const banner = document.createElement("div");
      banner.id = "shopify-detector-banner";
      banner.textContent = "Built with Shopify";
      document.body.prepend(banner);
      chrome.runtime.sendMessage({ shopifyDetected: true });
    } else {
      chrome.runtime.sendMessage({ shopifyDetected: false });
    }
  }
  window.addEventListener("load", detectShopify);
})();
