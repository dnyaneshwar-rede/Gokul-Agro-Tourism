"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();

  // ✅ get login function from AuthContext
  const { login } = useAuth();

  const redirect = params.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUser = localStorage.getItem("user");

    // ❌ no account
    if (!savedUser) {
      alert("No account found. Please Sign Up first.");
      router.push("/register");
      return;
    }

    const user = JSON.parse(savedUser);

    // ✅ check credentials
    if (user.email === email && user.password === password) {

      // ✅ LOGIN THROUGH CONTEXT
      login({
        name: user.name,
        email: user.email,
      });

      alert("Login Successful ✅");

      // ✅ redirect back (checkout or home)
      router.push(redirect);

    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Login
        </button>

        {/* REGISTER LINK */}
        <p className="text-center mt-4">
          New user?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}