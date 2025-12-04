# ⭐ LeetCode Problem Tracker – Chrome Extension

A clean and lightweight Chrome Extension (Manifest V3) that lets you **bookmark LeetCode problems**, sync them across all devices, and quickly revisit them from a popup menu.

---

## 🚀 Features

- 🔖 Bookmark any LeetCode problem with one click  
- 🔄 Syncs across all devices using `chrome.storage.sync`  
- 🧩 Injected UI that appears directly on LeetCode problem pages  
- 📘 Popup that displays all saved problems  
- 🗑️ Delete saved problems anytime  
- ⚡ Built with Manifest V3 (Service Worker + Content Scripts)  
- 🎯 Perfect for interview prep & tracking your problem-solving journey  

---

## 📸 Screenshots

| LeetCode Page UI | 
|------------------|
| <img width="1909" height="982" alt="image" src="https://github.com/user-attachments/assets/1ee831d8-81e9-41d1-8867-f2c2bb014e69" />
|Popup Menu |
|-----------|
| <img width="1905" height="974" alt="image" src="https://github.com/user-attachments/assets/0bf20dc1-2265-4528-9f64-efa1a34f1e35" />

---

## 🏗️ Tech Stack & Concepts

### **🔹 Manifest V3**
- Background scripts replaced by service workers  
- Better performance & security  
- No inline JavaScript  
- Strict permission handling  

### **🔹 Content Scripts**
- Injects custom UI into LeetCode problem pages  
- Reads problem title & URL  
- Saves bookmark on click  

### **🔹 Service Worker (background.js)**
- Handles lifecycle of the extension  
- Communicates between popup & content scripts  

### **🔹 chrome.storage.sync**
- Stores problem bookmarks online  
- Automatically syncs across all Chrome browsers linked with the same Google account  

### **🔹 Web Accessible Resources**
- Ensures icons load inside the webpage UI  

---

## 📁 Folder Structure


