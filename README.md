# 📿 Taqwa — Islamic Productivity Web App

Taqwa is a modern Islamic productivity platform built with Next.js and Firebase.  
It helps Muslims stay connected with Allah through Salah, Quran, Dhikr, Islamic AI guidance and productivity tools 🌙

---

# 🌟 Features

✨ Firebase Authentication  
✨ Islamic AI Assistant  
✨ Real-time Prayer Times  
✨ Dhikr Counter  
✨ Salah Streak Tracker  
✨ Quran Audio Player  
✨ Islamic Calendar  
✨ Mood-based Islamic Guidance  
✨ Dark / Light Mode  
✨ User Profile Upload  

---

# 🖼️ Screenshots

---

## 🏠 Home Page

<img width="100%" src="./images/Taqwa.png" />

---

## 🔐 Login Page

<img width="100%" src="./images/login.png" />

---

## 👤 User Profile

<img width="100%" src="./images/dashboard.png" />

---

## 🕌 Prayer Times + Dhikr + Salah Streak

<img width="100%" src="./images/dikhr.png" />

---

## 🤖 Islamic AI Assistant

<img width="100%" src="./images/AI assistant.png" />

---

## 📖 Full Quran Reader

<img width="100%" src="./images/quran reader.png" />

---

## 😊 Mood → Quran Guidance

<img width="100%" src="./images/mood.png" />

---

## 🌙 Islamic Calendar

<img width="100%" src="./images/calendar.png" />

## ☀️Mode -> light/Dark Mode

<img width="100%" src="./images/mode.png"/>

---

# ✨ Features Explained

---

## 🔐 Firebase Authentication

Users can:
- Create accounts
- Login securely
- Logout safely

Firebase Authentication is used for user management.

---

## 🕌 Prayer Times

The app fetches real-time prayer timings using the Aladhan API.

Features:
- Fajr
- Dhuhr
- Asr
- Maghrib
- Isha
- Prayer notifications

---

## 📿 Dhikr Counter

Users can:
- Count dhikr
- Reset counter
- Save daily dhikr
- Store progress using localStorage

---

## 🔥 Salah Streak Tracker

Track daily prayer consistency.

Features:
- Prayer completion buttons
- Daily streak counter
- Motivation system

---

## 🤖 Islamic AI Assistant

Islamic assistant answers questions related to:
- Islam
- Salah
- Quran
- Allah
- Prophet Muhammad ﷺ
- 5 Pillars of Islam

---

## 📖 Full Quran Reader

Includes beautiful Quran audio recitations:
- Surah Al-Fatiha
- Surah Yaseen
- Surah Ar-Rahman
- Surah Al-Mulk
- Surah Al-Ikhlas
- Surah Al-Falaq
- Surah An-Nas

---

## 😊 Mood → Quran Guidance

Provides Islamic motivation depending on mood:
- Sad
- Happy
- Lonely
- Angry
- Stressed

---

## 🌙 Islamic Calendar

Shows:
- English Date
- Hijri Date
- Interactive popup calendar

---

# 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| Next.js | Frontend Framework |
| React.js | UI Development |
| Firebase | Authentication |
| Tailwind CSS | Styling |
| Aladhan API | Prayer Times |

---

# 🚀 Installation

Clone repository:

```bash
git clone https://github.com/YOUR_USERNAME/taqwa.git
```

Move into project:

```bash
cd taqwa
```

Install dependencies:

```bash
npm install
```

Run project:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 🔐 Firebase Setup

Create Firebase project and add config inside:

```bash
firebase.js
```

Example:

```javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);

export default app;
```

---

# 📂 Project Structure

```bash
app/
 ├── dashboard/
 │    └── page.jsx
 ├── login.jsx
 ├── page.tsx
 ├── globals.css
 └── layout.tsx
```

---

# 🌍 Future Improvements

- Real AI integration
- Quran translations
- Hadith section
- Ramadan Mode
- Daily Islamic quotes
- Cloud database storage
- Multi-language support

---

# 👩‍💻 Developer

### Adeeba Nousheen 🌙

Built with faith, focus and modern technology 🤍

---

# 🌙 Islamic Quote

> “Indeed, with hardship comes ease.”
> — Quran 94:6

---
