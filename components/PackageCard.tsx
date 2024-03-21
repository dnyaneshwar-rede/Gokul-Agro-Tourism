import React from "react";
import Link from "next/link";
import Image from "next/image";

const PackageCard = () => {
  return (
    <div className="min-w-[350px] px-2 py-4 rounded-lg border-2 border-slate-600 flex flex-col justify-start items-start gap-4">
      <span className="text-3xl font-bold">Shedule</span>
      <span className="text-xl font-semibold">700 Rs for Adult</span>
      <span className="text-xl font-semibold">400 Rs for Age (1-10)</span>
      <Link
        href="https://api.whatsapp.com/send?phone=919423121863"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full px-6 py-3 flex justify-start items-center gap-2 rounded-md bg-lime-400 hover:bg-lime-200 border border-gray-600"
      >
        <Image className="rounded-md"
          src="/assets/images/whatsapp.png"
          width={30}
          height={30}
          alt="whatsapp"
        />
        <span className="text-base font-semibold">Chat on WhatsApp</span>
      </Link>
      <ul className="flex flex-col justify-start items-start gap-2 text-base">
        <li>4:00 PM - Arrival & Check-in</li>
        <li>4:00 PM - 5:00 PM - Welcome & Refreshments (Tea & Snacks)</li>
        <li>5:00 PM - 7:00 PM - Limited BBQ (Veg / Non-Veg)</li>
        <li>7:00 PM Onwards - Unlimited Dinner (Veg / Non-Veg)</li>
        <li>
          <strong>Next Day</strong>
        </li>
        <li>8:00 AM - 10:00 AM - Breakfast</li>
        <li>10:00 AM - 11:00 AM - Music System & Group Dance with Campfire</li>
      </ul>
    </div>
  );
};

export default PackageCard;

