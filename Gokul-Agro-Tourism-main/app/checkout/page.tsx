"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState, useMemo } from "react";
import { packages } from "@/constants/packages";
import { Package } from "@/types";

export default function CheckoutPage() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  /* ===============================
     ✅ LOGIN PROTECTION
  =============================== */
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push(
        `/login?redirect=${window.location.pathname + window.location.search}`
      );
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  /* ===============================
     ✅ GET SELECTED PACKAGE
  =============================== */
  const packageId = searchParams.get("package");

  useEffect(() => {
    if (!user) {
      router.push(`/login?redirect=/checkout?package=${packageId}`);
    }
  }, [user, router, packageId]);

  const selectedPackage: Package | undefined = packages.find(
    (pkg: Package) => pkg.id === packageId
  );

  /* ===============================
     ✅ FORM STATES
  =============================== */
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  /* ===============================
     ✅ PRICE CALCULATION
  =============================== */
  const totalPrice = useMemo(() => {
    if (!selectedPackage) return 0;

    return (
      adults * selectedPackage.basePrice +
      children * selectedPackage.childPrice
    );
  }, [adults, children, selectedPackage]);

  /* ===============================
     ✅ PHONE VALIDATION
  =============================== */
  const handlePhoneChange = (value: string) => {
    // allow only numbers
    const numbersOnly = value.replace(/\D/g, "");

    // max 10 digits
    if (numbersOnly.length <= 10) {
      setPhone(numbersOnly);
    }
  };

  /* ===============================
     ✅ WAIT WHILE AUTH CHECKING
  =============================== */
  if (checkingAuth) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Checking login...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-10 text-center text-lg">
        Redirecting to login...
      </div>
    );
  }

  if (!selectedPackage) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Package not found
      </div>
    );
  }

  /* ===============================
     ✅ UI
  =============================== */
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Checkout
        </h1>

        {/* Selected Package */}
        <div className="mb-6">
          <p className="text-lg font-semibold">Selected Package:</p>
          <p className="text-green-600 font-bold text-xl">
            {selectedPackage.name}
          </p>
        </div>

        {/* Adults */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Number of Adults
          </label>
          <input
            type="number"
            min={1}
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Children */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">
            Number of Children
          </label>
          <input
            type="number"
            min={0}
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Traveller Details */}
        <h2 className="text-xl font-semibold mb-3">
          Traveller Details
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-2 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number (10 digits)"
          className="w-full border p-2 rounded mb-6"
          value={phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
        />

        {/* Total Price */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-lg font-semibold">Total Amount:</p>
          <p className="text-2xl font-bold text-green-600">
            ₹ {totalPrice}
          </p>
        </div>

        {/* PAYMENT BUTTON */}
        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          onClick={() => {
            if (!name || !email || !phone) {
              alert("Please fill all traveller details");
              return;
            }

            if (phone.length !== 10) {
              alert("Phone number must be 10 digits");
              return;
            }

            const booking = {
              bookingId: "BK" + Date.now(),
              packageName: selectedPackage.name,
              adults,
              children,
              totalPrice,
              name,
              email,
              phone,
              date: new Date().toLocaleString(),
            };

            // ✅ SAVE TEMP BOOKING
            localStorage.setItem(
              "pendingBooking",
              JSON.stringify(booking)
            );

            // ✅ GO TO PAYMENT PAGE
            router.push("/payment");
          }}
        >
          Proceed to Payment
        </button>

      </div>
    </div>
  );
}