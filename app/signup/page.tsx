"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ ADMIN EMAILS (MULTIPLE ALLOWED)
  const ADMIN_EMAILS = [
    "admin@gmail.com",
    "sy8837971@gmail.com"
  ];

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // ⭐ ADMIN CHECK
    const role = ADMIN_EMAILS.includes(email.toLowerCase())
      ? "admin"
      : "user";

    const user = {
      name,
      email,
      password,
      role,
    };

    console.log("Saving user:", user); // ✅ DEBUG LINE

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");

    router.push("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Sign Up
        </button>

      </div>
    </div>
  );
}