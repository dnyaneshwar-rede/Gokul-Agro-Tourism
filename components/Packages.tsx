import React from "react";
import Link from "next/link";
import Image from "next/image"
import PackageCard from "./PackageCard";

const Packages = () => {
  return (
    <div className="px-6 py-8 bg-slate-200" id="packages">
      <h1 className="text-left text-6xl max-sm:text-5xl font-bold">Packages</h1>
      <div className="py-8 flex gap-2">
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </div>
  );
};

export default Packages;
