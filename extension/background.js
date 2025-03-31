chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "connect") {
      sendResponse({
        success: true,
        accounts: ["0x123...abc"],
        network: "ethereum"
      });
    }
    return true; // Keep message port open
  });