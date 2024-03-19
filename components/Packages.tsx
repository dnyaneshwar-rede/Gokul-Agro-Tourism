import React from "react";
import PackageCard from "./PackageCard";

const packageData = {
  title: "Package 3",
  price: 1800,
  description: "Short Description",
  schedule: [
    "4:00 PM - Arrival & Check-in",
    "4:00 PM - 5:00 PM - Welcome & Refreshments (Tea & Snacks)",
    "5:00 PM - 7:00 PM - Limited BBQ (Veg / Non-Veg)",
    "7:00 PM Onwards - Unlimited Dinner (Veg / Non-Veg)",
    "Next Day",
    "8:00 AM - 10:00 AM - Breakfast",
    "10:00 AM - 11:00 AM - Music System & Group Dance with Campfire",
  ],
};

const Packages = () => {
  return (
    <section className="px-6 py-8 bg-slate-200">
      <h2 className="text-6xl font-semibold">Packages</h2>
      <div className="py-6 flex justify-center items-center ">
        
      </div>
    </section>
  );
};

export default Packages;
