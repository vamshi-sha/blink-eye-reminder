chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "startReminder") {
    chrome.storage.local.set({ reminderActive: true }, () => {
      chrome.alarms.clearAll(() => {
        chrome.alarms.create("blinkReminder", { delayInMinutes: 1, periodInMinutes: 1 });
        sendResponse({ started: true });
      });
    });
    return true;
  }

  if (msg.action === "stopReminder") {
    chrome.storage.local.set({ reminderActive: false }, () => {
      chrome.alarms.clearAll(() => {
        sendResponse({ stopped: true });
      });
    });
    return true;
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "blinkReminder") {
    chrome.storage.local.get("reminderActive", (data) => {
      if (data.reminderActive) {
        chrome.windows.create({
          url: "video.html",
          type: "popup",
          width: 310,
          height: 310,
          focused: true
        });
      }
    });
  }
}); 