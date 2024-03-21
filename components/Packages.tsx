import React from "react";
import Link from "next/link";
import Image from "next/image"
import PackageCard from "./PackageCard";
import SpecialOffer from "./SpecialOffer";

const Packages = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen md:p-16 bg-blue-100 rounded-xl lg:my-16 lg:px-20" id="packages">
      <h1 className="pt-20 pb-10 text-4xl md:text-5xl font-bold uppercase text-center leading-normal tracking-wided">Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-3 px-3 item-center ">
        <PackageCard />
        <SpecialOffer />
        </div>
    </div>
  );
};

export default Packages;
