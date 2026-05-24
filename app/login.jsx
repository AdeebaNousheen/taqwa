"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // LOGIN
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const { signInWithEmailAndPassword } = await import("firebase/auth");
      const { auth } = await import("../firebase");

      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful ✅");

      router.push("/dashboard");

    } catch (error) {

      alert(error.message);

    }

  };

  // SIGNUP
  const handleSignup = async () => {

    try {

      const { createUserWithEmailAndPassword } = await import("firebase/auth");
      const { auth } = await import("../firebase");

      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account Created Successfully ✅");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="flex justify-center items-center py-20">

      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-10 rounded-3xl border border-gray-800 w-full max-w-md shadow-2xl"
      >

        <h2 className="text-4xl font-bold text-emerald-400 mb-8 text-center">
          🔐 Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-4 mb-5 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-emerald-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-4 mb-6 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-emerald-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 transition p-4 rounded-xl font-semibold text-lg mb-4"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleSignup}
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition p-4 rounded-xl font-semibold text-lg"
        >
          Create Account
        </button>

      </form>

    </div>

  );

}