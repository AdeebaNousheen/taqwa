"use client";

import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.js";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

  // =========================
  // STATES
  // =========================
  const [darkMode, setDarkMode] = useState(true);

  const [count, setCount] = useState(0);
  const [savedDhikr, setSavedDhikr] = useState(0);

  const [showCalendar, setShowCalendar] = useState(false);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [moodMessage, setMoodMessage] = useState("");

  const [streak, setStreak] = useState(7);

  const [profileName, setProfileName] = useState("Adeeba Nousheen");

  const [prayers, setPrayers] = useState({
    fajr: false,
    dhuhr: false,
    asr: false,
    maghrib: false,
    isha: false,
  });

  // =========================
  // REAL PRAYER API
  // =========================
  const [prayerTimes, setPrayerTimes] = useState({
    Fajr: "--",
    Dhuhr: "--",
    Asr: "--",
    Maghrib: "--",
    Isha: "--",
  });

  // =========================
  // PROFILE PHOTO
  // =========================
  const [profilePhoto, setProfilePhoto] = useState(null);

  // =========================
  // LOAD DATA
  // =========================
  useEffect(() => {

    const saved = localStorage.getItem("dailyDhikr");

    if (saved) {
      setSavedDhikr(saved);
    }

    const savedStreak = localStorage.getItem("salahStreak");

    if (savedStreak) {
      setStreak(Number(savedStreak));
    }

    // FETCH PRAYER API
    fetch(
      "https://api.aladhan.com/v1/timingsByCity?city=Hyderabad&country=India&method=2"
    )
      .then((res) => res.json())
      .then((data) => {

        const timings = data.data.timings;

        setPrayerTimes({
          Fajr: timings.Fajr,
          Dhuhr: timings.Dhuhr,
          Asr: timings.Asr,
          Maghrib: timings.Maghrib,
          Isha: timings.Isha,
        });

      });

  }, []);

  // =========================
  // SAVE DHIKR
  // =========================
  const saveDhikr = () => {

    localStorage.setItem("dailyDhikr", count);

    setSavedDhikr(count);

    alert("Today's Dhikr Saved 🤍");
  };

  // =========================
  // TOGGLE PRAYER
  // =========================
  const togglePrayer = (name) => {

    const updated = {
      ...prayers,
      [name]: !prayers[name],
    };

    setPrayers(updated);

    // MISSED PRAYER
    if (!updated[name]) {

      setTimeout(() => {

        alert(
          `⚠️ You missed ${name.toUpperCase()} prayer.\n\nPlease pray Qaza Salah and seek forgiveness from Allah 🤍`
        );

      }, 10000);

    }

    // STREAK
    const allDone = Object.values(updated).every(Boolean);

    if (allDone) {

      const newStreak = streak + 1;

      setStreak(newStreak);

      localStorage.setItem("salahStreak", newStreak);

      alert("🌙 All prayers completed today!");

    }
  };

  // =========================
// AI ASSISTANT
// =========================
const handleAI = () => {

  const q = question.toLowerCase();

  // 5 PILLARS
  if (
    q.includes("5 pillars") ||
    q.includes("pillars of islam")
  ) {

    setAnswer(
      "🌙 The 5 Pillars of Islam are:\n\n1️⃣ Shahadah\n2️⃣ Salah\n3️⃣ Zakat\n4️⃣ Sawm (Fasting)\n5️⃣ Hajj 🤍"
    );

  }

  // ISLAM
  else if (q.includes("islam")) {

    setAnswer(
      "🤍 Islam means submission to Allah and living life according to His guidance."
    );

  }

  // ALLAH
  else if (q.includes("allah")) {

    setAnswer(
      "🤍 Allah is Ar-Rahman (Most Merciful) and Ar-Raheem (Most Compassionate)."
    );

  }

  // SALAH
  else if (
    q.includes("salah") ||
    q.includes("prayer")
  ) {

    setAnswer(
      "🕌 Salah brings peace, discipline and closeness to Allah 🌙"
    );

  }

  // QURAN
  else if (
    q.includes("quran") ||
    q.includes("surah")
  ) {

    setAnswer(
      "📖 The Quran is the complete guidance for humanity revealed by Allah."
    );

  }

  // PROPHET
  else if (
    q.includes("prophet") ||
    q.includes("muhammad")
  ) {

    setAnswer(
      "🤍 Prophet Muhammad ﷺ is the final messenger of Allah."
    );

  }

  // FASTING
  else if (
    q.includes("fasting") ||
    q.includes("roza") ||
    q.includes("ramadan")
  ) {

    setAnswer(
      "🌙 Fasting in Ramadan teaches patience, discipline and gratitude."
    );

  }

  // ZAKAT
  else if (q.includes("zakat")) {

    setAnswer(
      "💰 Zakat is charity given to help the needy and purify wealth."
    );

  }

  // HAJJ
  else if (q.includes("hajj")) {

    setAnswer(
      "🕋 Hajj is the sacred pilgrimage to Makkah performed once in a lifetime if able."
    );

  }

  // DHIKR
  else if (
    q.includes("dhikr") ||
    q.includes("zikr")
  ) {

    setAnswer(
      "📿 Dhikr means remembering Allah through phrases like SubhanAllah, Alhamdulillah and Allahu Akbar."
    );

  }

  // SABR
  else if (
    q.includes("sabr") ||
    q.includes("patience")
  ) {

    setAnswer(
      "🤍 Allah loves those who practice patience and trust Him during hardships."
    );

  }

  // DUA
  else if (
    q.includes("dua") ||
    q.includes("pray for me")
  ) {

    setAnswer(
      "🤲 Never stop making dua. Allah listens to every sincere prayer."
    );

  }

  // SAD
  else if (
    q.includes("sad") ||
    q.includes("depressed")
  ) {

    setAnswer(
      "🤍 Indeed, with hardship comes ease.\n\n📖 Surah Ash-Sharh 94:6"
    );

  }

  // ANGER
  else if (
    q.includes("angry") ||
    q.includes("anger")
  ) {

    setAnswer(
      "🌙 Control anger, stay silent and remember Allah."
    );

  }

  // SUCCESS
  else if (
    q.includes("success") ||
    q.includes("productive")
  ) {

    setAnswer(
      "🚀 Success comes with discipline, dua and trust in Allah."
    );

  }

  // JANNAH
  else if (
    q.includes("jannah") ||
    q.includes("paradise")
  ) {

    setAnswer(
      "🌴 Jannah is the eternal paradise prepared for the righteous believers."
    );

  }

  // DEFAULT
  else {

    setAnswer(
      "🤖 Islamic AI Assistant is learning daily.\n\nTry asking about Salah, Quran, Allah, Dhikr, Ramadan or Islamic guidance 🌙"
    );

  }

};
  // =========================
  // MOOD GUIDANCE
  // =========================
  const handleMood = (mood) => {

    if (mood === "sad") {

      setMoodMessage(
        "🤍 Indeed, with hardship comes ease.\n📿 Read Astaghfirullah 33 times"
      );
    }

    else if (mood === "stressed") {

      setMoodMessage(
        "🌙 Allah does not burden a soul beyond what it can bear.\n📿 Read SubhanAllah 33 times"
      );
    }

    else if (mood === "happy") {

      setMoodMessage(
        "✨ Remember Allah in times of ease.\n📿 Read Alhamdulillah 33 times"
      );
    }

    else if (mood === "angry") {

      setMoodMessage(
        "🤍 Control anger and remember Allah.\n📿 Read Auzubillah"
      );
    }

    else {

      setMoodMessage(
        "🤍 Allah is always near.\n📿 Read La ilaha illallah"
      );
    }
  };

  // =========================
  // DATES
  // =========================
  const today = new Date();

  const hijriDate =
    new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(today);

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = async () => {

    await signOut(auth);

    alert("Logged out successfully ✅");

    router.push("/");
  };

  return (

    <main
      className={
        darkMode
          ? "min-h-screen bg-black text-white"
          : "min-h-screen bg-gray-100 text-black"
      }
    >

      {/* NAVBAR */}
      <nav
        className={
          darkMode
            ? "flex justify-between items-center px-10 py-6 bg-black border-b border-gray-800"
            : "flex justify-between items-center px-10 py-6 bg-white border-b border-gray-300"
        }
      >

        <h1 className="text-4xl font-bold text-emerald-400">
          📿 Taqwa Dashboard
        </h1>

        <div className="flex gap-4">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-cyan-500 px-6 py-3 rounded-2xl text-white"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-6 py-3 rounded-2xl text-white"
          >
            Logout
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="text-center py-20">

        <h1 className="text-7xl font-bold text-emerald-400 mb-6">
          Assalamu Alaikum 🌙
        </h1>

        <p className="text-2xl">
          Stay focused on Salah, Quran & Productivity
        </p>

      </section>

      {/* PROFILE */}
      <section className="px-10 pb-24">

        <div
          className={
            darkMode
              ? "bg-gray-900 p-10 rounded-3xl"
              : "bg-white p-10 rounded-3xl shadow-xl text-black"
          }
        >

          <h2 className="text-5xl font-bold text-emerald-400 mb-8">
            👤 User Profile
          </h2>

          <div className="flex flex-col items-center">

            <img
              src={
                profilePhoto ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-cyan-400 object-cover"
            />

            <input
  type="text"
  value={profileName}
  onChange={(e) => setProfileName(e.target.value)}
  placeholder="Enter Your Name"
  className={
    darkMode
      ? "mt-6 bg-black text-cyan-400 text-3xl font-bold text-center border border-cyan-500 rounded-2xl px-4 py-3 outline-none"
      : "mt-6 bg-gray-100 text-cyan-500 text-3xl font-bold text-center border border-cyan-400 rounded-2xl px-4 py-3 outline-none"
  }
/>

            <p className="mt-2 text-xl">
              Muslim Productivity User 🌙
            </p>

            <input
              type="file"
              className="mt-6"
              onChange={(e) => {

                const file = e.target.files[0];

                if (file) {

                  setProfilePhoto(URL.createObjectURL(file));

                }

              }}
            />

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="px-10 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {/* PRAYER TIMES */}
          <div
            className={
              darkMode
                ? "bg-gray-900 p-8 rounded-3xl"
                : "bg-white p-8 rounded-3xl shadow-xl text-black"
            }
          >

            <h2 className="text-3xl font-bold text-emerald-400 mb-6">
              🕌 Prayer Times
            </h2>

            <div className="space-y-4 text-xl">

              <p>Fajr — {prayerTimes.Fajr}</p>
              <p>Dhuhr — {prayerTimes.Dhuhr}</p>
              <p>Asr — {prayerTimes.Asr}</p>
              <p>Maghrib — {prayerTimes.Maghrib}</p>
              <p>Isha — {prayerTimes.Isha}</p>

            </div>

            <button
              onClick={() => {

                Notification.requestPermission().then((permission) => {

                  if (permission === "granted") {

                    new Notification("🕌 Prayer Reminder", {
                      body: "It's time for Salah 🌙",
                    });

                  }

                });

              }}
              className="mt-8 bg-cyan-500 px-6 py-3 rounded-2xl text-white w-full"
            >
              🔔 Enable Notifications
            </button>

          </div>

          {/* DHIKR */}
          <div
            className={
              darkMode
                ? "bg-gray-900 p-8 rounded-3xl"
                : "bg-white p-8 rounded-3xl shadow-xl text-black"
            }
          >

            <h2 className="text-3xl font-bold text-emerald-400 mb-5">
              📿 Dhikr Counter
            </h2>

            <div className="text-7xl font-bold text-emerald-400 mb-6">
              {count}
            </div>

            <div className="flex gap-3">

              <button
                onClick={() => setCount(count + 1)}
                className="bg-emerald-500 px-6 py-3 rounded-2xl text-white"
              >
                +
              </button>

              <button
                onClick={() => setCount(count - 1)}
                className="bg-yellow-500 px-6 py-3 rounded-2xl text-black"
              >
                -
              </button>

              <button
                onClick={() => setCount(0)}
                className="bg-red-500 px-6 py-3 rounded-2xl text-white"
              >
                Reset
              </button>

            </div>

            <button
              onClick={saveDhikr}
              className="bg-cyan-500 mt-5 px-6 py-3 rounded-2xl w-full text-white"
            >
              Save Today
            </button>

            <div className="mt-6">

              <p className="text-xl">
                Saved Dhikr: {savedDhikr}
              </p>

            </div>

          </div>

          {/* SALAH STREAK */}
          <div
            className={
              darkMode
                ? "bg-gray-900 p-8 rounded-3xl"
                : "bg-white p-8 rounded-3xl shadow-xl text-black"
            }
          >

            <h2 className="text-3xl font-bold text-emerald-400 mb-5">
              🔥 Salah Streak
            </h2>

            <div className="text-6xl font-bold text-cyan-400 mb-6">
              {streak} Days
            </div>

            <div className="space-y-3">

              {Object.keys(prayers).map((prayer) => (

                <div
                  key={prayer}
                  className={
                    darkMode
                      ? "flex justify-between bg-black p-3 rounded-xl"
                      : "flex justify-between bg-gray-100 p-3 rounded-xl"
                  }
                >

                  <span className="capitalize">
                    {prayer}
                  </span>

                  <button
                    onClick={() => togglePrayer(prayer)}
                    className={
                      prayers[prayer]
                        ? "bg-emerald-500 px-4 py-2 rounded-xl"
                        : "bg-red-500 px-4 py-2 rounded-xl"
                    }
                  >
                    {prayers[prayer] ? "✅" : "❌"}
                  </button>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* AI */}
      <section className="px-10 pb-24">

        <div
          className={
            darkMode
              ? "bg-gray-900 p-10 rounded-3xl"
              : "bg-white p-10 rounded-3xl shadow-xl text-black"
          }
        >

          <h2 className="text-6xl text-center font-bold text-emerald-400 mb-10">
            🤖 Islamic AI Assistant
          </h2>

          <input
            type="text"
            placeholder="Ask Islamic question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={
              darkMode
                ? "w-full p-5 rounded-2xl bg-black border border-gray-700 text-white"
                : "w-full p-5 rounded-2xl bg-gray-100 border border-gray-300 text-black"
            }
          />

          <button
            onClick={handleAI}
            className="w-full mt-5 bg-emerald-500 p-5 rounded-2xl text-white"
          >
            Ask AI
          </button>

          <div
            className={
              darkMode
                ? "bg-black mt-6 p-6 rounded-2xl min-h-[120px]"
                : "bg-gray-100 mt-6 p-6 rounded-2xl min-h-[120px]"
            }
          >

            <p className="whitespace-pre-line">
              {answer || "AI response will appear here..."}
            </p>

          </div>

        </div>

      </section>

      {/* FULL QURAN READER */}
      <section className="px-10 pb-24">

        <div
          className={
            darkMode
              ? "bg-gray-900 p-10 rounded-3xl"
              : "bg-white p-10 rounded-3xl shadow-xl text-black"
          }
        >

          <h2 className="text-5xl font-bold text-center text-emerald-400 mb-10">
            📖 Full Quran Reader
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-3xl mb-4 text-cyan-400">
                Surah Al-Fatiha
              </h3>

              <audio controls className="w-full">
                <source
                  src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3"
                  type="audio/mp3"
                />
              </audio>
            </div>

            <div>
              <h3 className="text-3xl mb-4 text-cyan-400">
                Surah Yaseen
              </h3>

              <audio controls className="w-full">
                <source
                  src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/036.mp3"
                  type="audio/mp3"
                />
              </audio>
            </div>

            <div>
              <h3 className="text-3xl mb-4 text-cyan-400">
                Surah Ar-Rahman
              </h3>

              <audio controls className="w-full">
                <source
                  src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/055.mp3"
                  type="audio/mp3"
                />
              </audio>
            </div>

            <div>
              <h3 className="text-3xl mb-4 text-cyan-400">
                Surah Al-Mulk
              </h3>

              <audio controls className="w-full">
                <source
                  src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/067.mp3"
                  type="audio/mp3"
                />
              </audio>
            </div>

            <div>
              <h3 className="text-3xl mb-4 text-cyan-400">
                Surah Al-Ikhlas
              </h3>

              <audio controls className="w-full">
                <source
                  src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/112.mp3"
                  type="audio/mp3"
                />
              </audio>
            </div>

            <div>
              <h3 className="text-3xl mb-4 text-cyan-400">
                Surah Al-Falaq
              </h3>

              <audio controls className="w-full">
                <source
                  src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/113.mp3"
                  type="audio/mp3"
                />
              </audio>
            </div>

            <div>
              <h3 className="text-3xl mb-4 text-cyan-400">
                Surah An-Nas
              </h3>

              <audio controls className="w-full">
                <source
                  src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/114.mp3"
                  type="audio/mp3"
                />
              </audio>
            </div>

          </div>

        </div>

      </section>

      {/* MOOD GUIDANCE */}
      <section className="px-10 pb-24">

        <div
          className={
            darkMode
              ? "bg-gray-900 p-10 rounded-3xl"
              : "bg-white p-10 rounded-3xl shadow-xl text-black"
          }
        >

          <h2 className="text-5xl font-bold text-center text-emerald-400 mb-10">
            😊 Mood → Quran Guidance
          </h2>

          <div className="flex flex-wrap gap-4 justify-center mb-10">

            <button
              onClick={() => handleMood("sad")}
              className="bg-blue-500 px-6 py-3 rounded-2xl text-white"
            >
              😔 Sad
            </button>

            <button
              onClick={() => handleMood("stressed")}
              className="bg-red-500 px-6 py-3 rounded-2xl text-white"
            >
              😰 Stressed
            </button>

            <button
              onClick={() => handleMood("happy")}
              className="bg-yellow-500 px-6 py-3 rounded-2xl text-black"
            >
              😊 Happy
            </button>

            <button
              onClick={() => handleMood("lonely")}
              className="bg-purple-500 px-6 py-3 rounded-2xl text-white"
            >
              🥺 Lonely
            </button>

            <button
              onClick={() => handleMood("angry")}
              className="bg-orange-500 px-6 py-3 rounded-2xl text-white"
            >
              😡 Angry
            </button>

          </div>

          <div
            className={
              darkMode
                ? "bg-black p-6 rounded-2xl min-h-[170px]"
                : "bg-gray-100 p-6 rounded-2xl min-h-[170px]"
            }
          >

            <p className="whitespace-pre-line text-xl">
              {moodMessage || "Your guidance will appear here 🤍"}
            </p>

          </div>

        </div>

      </section>

      {/* ISLAMIC CALENDAR */}
      <section className="px-10 pb-24">

        <div
          onClick={() => setShowCalendar(true)}
          className={
            darkMode
              ? "bg-gray-900 p-10 rounded-3xl text-center cursor-pointer"
              : "bg-white p-10 rounded-3xl shadow-xl text-center cursor-pointer text-black"
          }
        >

          <h2 className="text-6xl font-bold text-emerald-400 mb-8">
            🌙 Islamic Calendar
          </h2>

          <p className="text-4xl mb-4">
            {today.toDateString()}
          </p>

          <p className="text-2xl text-cyan-400">
            {hijriDate}
          </p>

        </div>

      </section>

      {/* POPUP */}
      {showCalendar && (

        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

          <div
            className={
              darkMode
                ? "bg-gray-900 p-10 rounded-3xl w-[90%] max-w-2xl border border-emerald-500"
                : "bg-white p-10 rounded-3xl w-[90%] max-w-2xl border border-emerald-500 text-black"
            }
          >

            <h2 className="text-5xl text-center font-bold text-emerald-400 mb-8">
              🌙 Islamic Calendar
            </h2>

            <div className="text-center space-y-6">

              <div>

                <p className="text-3xl font-bold">
                  English Date
                </p>

                <p className="text-2xl text-cyan-400 mt-2">
                  {today.toDateString()}
                </p>

              </div>

              <div>

                <p className="text-3xl font-bold">
                  Hijri Date
                </p>

                <p className="text-2xl text-emerald-400 mt-2">
                  {hijriDate}
                </p>

              </div>

              <button
                onClick={() => setShowCalendar(false)}
                className="bg-red-500 px-8 py-3 rounded-2xl text-white"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

      {/* CONTACT */}
      <section className="px-10 pb-24">

        <div
          className={
            darkMode
              ? "bg-gray-900 p-10 rounded-3xl"
              : "bg-white p-10 rounded-3xl shadow-xl text-black"
          }
        >

          <h2 className="text-5xl font-bold text-emerald-400 mb-8">
            📞 Contact Information
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-xl">

            <div
              className={
                darkMode
                  ? "bg-black p-6 rounded-2xl"
                  : "bg-gray-100 p-6 rounded-2xl"
              }
            >

              <p className="text-gray-500 mb-2">
                Email
              </p>

              <p className="font-semibold text-cyan-400">
                support@taqwa.app
              </p>

            </div>

            <div
              className={
                darkMode
                  ? "bg-black p-6 rounded-2xl"
                  : "bg-gray-100 p-6 rounded-2xl"
              }
            >

              <p className="text-gray-500 mb-2">
                Instagram
              </p>

              <p className="font-semibold text-pink-400">
                @taqwa.app
              </p>

            </div>

            <div
              className={
                darkMode
                  ? "bg-black p-6 rounded-2xl"
                  : "bg-gray-100 p-6 rounded-2xl"
              }
            >

              <p className="text-gray-500 mb-2">
                Country
              </p>

              <p className="font-semibold text-emerald-400">
                India 🇮🇳
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}