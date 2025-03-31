window.addEventListener("message", (event) => {
    if (event.source !== window || !event.data.type?.startsWith("REACTCONNECT_")) 
      return;
  
    chrome.runtime.sendMessage(
      { action: event.data.action, data: event.data.data },
      (response) => {
        window.postMessage({ 
          type: "REACTCONNECT_RESPONSE", 
          ...response 
        }, "*");
      }
    );
  });