// Listens for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("[Content Script] Received message:", request);

  if (request.action === "getSelection") {
    // Grab highlighted text
    const selectedText = window.getSelection().toString();
    console.log("[Content Script] Selected text:", selectedText);
    sendResponse({ text: selectedText });
  }
  return true;
});

// Log when content script is loaded
console.log("[Content Script] Loaded and ready");

// {
//   "type": "module",
//   "name": "backend",
//   "version": "1.0.0",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "description": "",
//   "dependencies": {
//     "cors": "^2.8.5",
//     "dotenv": "^17.2.2",
//     "express": "^5.1.0",
//     "node-fetch": "^3.3.2"
//   }
// }
