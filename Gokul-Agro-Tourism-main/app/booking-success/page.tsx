"use client";

import { useEffect, useState } from "react";

export default function BookingSuccess() {
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("latestBooking");
    if (saved) {
      setBooking(JSON.parse(saved));
    }
  }, []);

  if (!booking) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        No booking found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">

        <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
          ✅ Booking Confirmed!
        </h1>

        <div className="space-y-3 text-lg">
          <p><strong>Booking ID:</strong> {booking.bookingId}</p>
          <p><strong>Name:</strong> {booking.name}</p>
          <p><strong>Package:</strong> {booking.packageName}</p>
          <p><strong>Adults:</strong> {booking.adults}</p>
          <p><strong>Children:</strong> {booking.children}</p>
          <p><strong>Total Paid:</strong> ₹ {booking.totalPrice}</p>
          <p><strong>Date:</strong> {booking.date}</p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Back to Home
          </a>
        </div>

      </div>
    </div>
  );
}