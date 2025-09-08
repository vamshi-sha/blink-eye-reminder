document.getElementById("startBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "startReminder" }, (response) => {
    if (response.started) {
      alert("Blink reminder started!");
    }
  });
});

document.getElementById("stopBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "stopReminder" }, (response) => {
    if (response.stopped) {
      alert("Blink reminder stopped!");
    }
  });
});
