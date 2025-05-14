chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (sender.tab && "shopifyDetected" in message) {
    const iconPath = {
      48: message.shopifyDetected
        ? "icons/shopify48x48.png"
        : "icons/not-shopify48x48.png",
    };

    chrome.action.setIcon(
      {
        tabId: sender.tab.id,
        path: iconPath,
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        }
      }
    );
  }
});
