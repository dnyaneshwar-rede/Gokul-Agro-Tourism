"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
export default function PaymentPage() {

  const [booking, setBooking] = useState<any>(null);

  /* =============================
     LOAD BOOKING DATA
  ============================= */
  useEffect(() => {
    const savedBooking = localStorage.getItem("latestBooking");

    if (savedBooking) {
      setBooking(JSON.parse(savedBooking));
    }
  }, []);

  if (!booking) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading booking...
      </div>
    );
  }

  /* =============================
     ✅ YOUR UPI DETAILS
  ============================= */

  const upiId = "64959401@ubin"; //  PUT YOUR REAL UPI HERE
  const merchantName = "GOKUL KRUSHI PARYATAN K";

  /* =============================
     ✅ DYNAMIC UPI LINK
     (Amount comes automatically)
  ============================= */

  const upiLink = `upi://pay?pa=${upiId}&pn=${merchantName}&am=${booking.totalPrice}&cu=INR`;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg text-center">

        <h1 className="text-2xl font-bold mb-4">
          Complete Your Payment
        </h1>

        <p className="mb-2 font-semibold">
          Package: {booking.packageName}
        </p>

        <p className="mb-6 text-green-600 text-xl font-bold">
          Amount: ₹{booking.totalPrice}
        </p>

        {/* ✅ DYNAMIC QR */}
        <QRCodeSVG value={upiLink} size={220} />

        <p className="mt-6 text-sm text-gray-600">
          Scan using any UPI app (GPay / PhonePe / Paytm)
        </p>

      </div>
    </div>
  );
}