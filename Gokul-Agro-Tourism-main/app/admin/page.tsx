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
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        bookings.map((booking, index) => (
          <div key={index} className="border p-4 mb-4 rounded">
            <p><b>Name:</b> {booking.name}</p>
            <p><b>Email:</b> {booking.email}</p>
            <p><b>Package:</b> {booking.packageName}</p>
            <p><b>Total:</b> ₹{booking.total}</p>
          </div>
        ))
      )}
    </div>
  );
}