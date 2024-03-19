"use client";
import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import LayoutGrid from "@/components/LayoutGrid";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Map from "@/components/Footer/Map";
export default function Home() {
  return (
      <main>
        <Hero />
        <About />
        <Packages/>
        <LayoutGrid  />
        <Map />
      </main>
  );
}
