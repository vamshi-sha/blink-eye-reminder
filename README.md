# 👁️ Blink Eye Reminder (Chrome Extension)

Do you forget to blink while working long hours on your computer?
**Blink Eye Reminder** is a lightweight Chrome extension that helps you **take micro eye breaks** by showing a short popup video reminder every few minutes.

## ✨ Features

* 🕐 Reminds you to **blink every 5 minutes** (customizable in code).
* 🎥 Plays a **short video popup** as a gentle reminder.
* 🎛️ Simple **Start / Stop** buttons in extension popup.
* ⚡ Works fully offline (no internet required).
* 🖼️ Add your own video file if you prefer a different reminder.

---

## 📂 Project Structure & File Explanations

blink-eye-reminder/
│── background.js   → Service worker, handles alarms & reminders
│── manifest.json   → Extension manifest (v3) with permissions & metadata
│── popup.html      → UI for extension popup (start/stop buttons)
│── popup.js        → Logic for popup controls, sends messages to background.js
│── video.html      → Popup window showing the reminder video
│── video.js        → Autoplays video & closes window after a few seconds
│── video.mp4       → Short reminder video (accessible via video.html)
│── README.md       → Project documentation
│── LICENSE         → Open-source license (MIT recommended)
│── .gitignore      → Ignore unnecessary system files

---

## 🚀 How It Works

1. When you click **Start Reminder**, `popup.js` sends a message to `background.js`.
2. The background script sets a **Chrome alarm** to repeat every 5 minutes.
3. When the alarm triggers, `background.js` opens a **popup window** with `video.html`.
4. `video.js` autoplays `video.mp4` and closes the popup after 6 seconds.
5. Clicking **Stop Reminder** cancels the alarms.

---

## 🖥️ Installation & Usage

### 🔹 Install the Extension

1. Clone this repo:
   git clone [https://github.com/vamshi_sha/blink-eye-reminder.git]
   cd blink-eye-reminder
optional ,you can change the video file ,change it with your favorite eye blink video and just name it as "video"
2. Open Chrome and go to:
   chrome://extensions/

3. Enable **Developer Mode** (toggle at top right).

4. Click **Load unpacked** → Select the project folder.

### 🔹 Run

* Open the extension popup and click **Start Reminder** ✅
* Every 5 minutes, a popup video will remind you to blink 👀
* Click **Stop Reminder** to turn it off.

---

## 🖼️ Screenshots & Demo
| ![Video](## 🎥 Demo Video
https://github.com/vamshi_sha/blink-extension/blob/main/assets/wynk.mp4
) 

👉 You can also record a short demo GIF and place it in `assets/demo.gif`:
![Demo](assets/demo.gif)

---

## ⚙️ Tech Stack

* **Chrome Extension (Manifest v3)**
* Chrome APIs: `alarms`, `windows`, `storage`
* HTML5 / CSS / JavaScript

---

## 🛠️ Future Enhancements

* ⏱️ User-configurable timer interval (instead of fixed 5 min).
* 🎵 Add sound along with video reminder.
* 🌐 Sync settings across devices with `chrome.storage.sync`.
* 📊 Show stats (total reminders, average blink rate).

## 📝 License

MIT License © 2025 \[Your Name]

