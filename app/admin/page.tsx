"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("bookings");

    if (data) {
      setBookings(JSON.parse(data));
    }
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found</p>
      ) : (
        bookings.map((booking, index) => (
          <div
            key={index}
            className="bg-white shadow-md border p-5 mb-4 rounded-lg"
          >
            <p><b>Booking ID:</b> {booking.bookingId}</p>
            <p><b>Name:</b> {booking.name}</p>
            <p><b>Email:</b> {booking.email}</p>
            <p><b>Phone:</b> {booking.phone}</p>
            <p><b>Package:</b> {booking.packageName}</p>
            <p><b>Adults:</b> {booking.adults}</p>
            <p><b>Children:</b> {booking.children}</p>
            <p><b>Total Amount:</b> ₹{booking.totalPrice}</p>
            <p><b>Date:</b> {booking.date}</p>
          </div>
        ))
      )}

    </div>
  );
}