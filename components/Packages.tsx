import React from "react";

const Packages = () => {
  return (
    <div className="px-6 py-8 bg-slate-200" id="packages">
      <h1 className="text-left text-6xl max-sm:text-5xl font-bold">
        Packages
      </h1>
      <div className="flex sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
        <div className="flex-1 text-xl mt-14 rounded-xl border border-[#4E67E5]/25 bg-[#44ea78] p-10 w-full">
          <div className="text-[#4d66e5]">Package one</div>
          <div className="text-6xl my-5 font-light">700</div>
          <div>Short description</div>
          <button className="my-5 w-full text-white p-5 max-sm:p-2 rounded-3xl bg-[#4E67E5] text-xl max-sm:text-lg hover:bg-[#8a9dfc] transition-all">
            Purchase
          </button>
          <ul>
            <li>First feature</li>
            <li>Second feature</li>
          </ul>
        </div>
        <div className="flex-1 text-xl mt-14 rounded-xl border border-[#9966FF]/25 bg-[#7448d2] p-10 w-full">
          <div className="text-[#50eb47]">Package 2</div>
          <div className="text-6xl my-5 font-light">$1500</div>
          <div>Per Person</div>
          <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#9966FF] text-xl max-sm:text-lg hover:bg-[#4f89c7] transition-all">
            Purchase
          </button>
          <ul>
            <li>First Feature</li>
            <li>Second Feature</li>
            <li>Thired Feature</li>
          </ul>
        </div>
        <div className="flex-1 text-xl mt-14 rounded-xl border border-[#F7E16F]/25 bg-[#37a4a4] p-10 w-full">
          <div className="text-[#F7E16F]">Package 3</div>
          <div className="text-6xl my-5 font-light">$1800</div>
          <div>Short Description</div>
          <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#F7E16F] text-xl max-sm:text-lg hover:bg-[#fdf2bb] transition-all">
            Purchase
          </button>
          <ul>
            <li>4:00 PM - Arrival & Check-in</li>
            <li>4:00 PM - 5:00 PM - Welcome & Refreshments (Tea & Snacks)</li>
            <li>5:00 PM - 7:00 PM - Limited BBQ (Veg / Non-Veg)</li>
            <li>7:00 PM Onwards - Unlimited Dinner (Veg / Non-Veg)</li>
            <li>
              <strong>Next Day</strong>
            </li>
            <li>8:00 AM - 10:00 AM - Breakfast</li>
            <li>
              10:00 AM - 11:00 AM - Music System & Group Dance with Campfire
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Packages;
