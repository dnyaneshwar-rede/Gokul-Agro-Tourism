"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import React from "react";
import LayoutGrid from "@/components/LayoutGrid";
import AboutUs from "@/components/AboutUs";
import Packages from "@/components/Packages";

export default function Home() {
  return (
    <>
      <main>
        
        <Hero />
        <AboutUs />
        <Packages/>
        <LayoutGrid />
      </main>
    </>
  );
}
