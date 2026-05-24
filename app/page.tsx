"use client";

import Login from "./login";

export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur-lg z-50">

        <h1 className="text-3xl font-bold text-emerald-400">
          📿 Taqwa
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300 font-medium">

          <a href="#" className="hover:text-emerald-400 transition">
            Home
          </a>

          <a href="#features" className="hover:text-emerald-400 transition">
            Features
          </a>

          <a href="#prayer" className="hover:text-emerald-400 transition">
            Prayer
          </a>

          <a href="#ai" className="hover:text-emerald-400 transition">
            AI Assistant
          </a>

          <a href="#contact" className="hover:text-emerald-400 transition">
            Contact
          </a>

        </div>

      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 relative">

        <div className="absolute w-[500px] h-[500px] bg-emerald-500/20 blur-[150px] rounded-full"></div>

        <h1 className="text-7xl md:text-8xl font-bold text-emerald-400 mb-6 relative z-10">
          📿 Taqwa
        </h1>

        <p className="text-2xl max-w-4xl text-gray-300 leading-relaxed relative z-10">
          A modern Islamic productivity platform helping Muslims stay connected
          with Allah through Salah, Quran, Dhikr and Islamic AI guidance.
        </p>

        <div className="mt-10 flex gap-5 relative z-10">

          <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-2xl text-lg font-semibold transition">
            Start Journey
          </button>

          <button className="border border-gray-600 hover:border-emerald-400 px-8 py-4 rounded-2xl text-lg transition">
            Explore
          </button>

        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="px-10 pb-28">

        <h2 className="text-5xl font-bold text-center mb-14 text-emerald-400">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            ["📵", "Salah Shield"],
            ["🕌", "Prayer Reminder"],
            ["🤖", "Islamic AI"],
            ["📿", "Dhikr Counter"],
            ["🌙", "Focus Mode"],
            ["📖", "Quran Player"],
          ].map((item, i) => (

            <div
              key={i}
              className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-emerald-400 hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {item[0]} {item[1]}
              </h3>

              <p className="text-gray-400">
                Powerful Islamic productivity tools for your daily life.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* LOGIN */}
      <section className="px-10 pb-28">
        <Login />
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-gray-800 py-10 text-center text-gray-500"
      >

        <h2 className="text-2xl font-bold text-emerald-400 mb-3">
          📿 Taqwa
        </h2>

        <p>
          Built with faith, focus and modern technology 🌙
        </p>

      </footer>

    </main>

  );

}