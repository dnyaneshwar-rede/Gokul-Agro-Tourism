"use client";
import React from "react";
import Image from "next/image";
import Hero from "@/constants/components/Hero";
import About from "@/constants/components/About";
import Packages from "@/constants/components/Packages";
import Map from "@/constants/components/Footer/Map";
import Faq from "@/constants/components/FAQ/Faq";
import ImageGallary from "@/constants/components/ImageGallary";
import Activity from "@/constants/components/Activity";
import Video from "@/constants/components/Video";

export default function Home() {
  return (
    <main>
      <Hero />
      <Video />
      <Activity />
      <About />
      <Packages />
      <ImageGallary />
      <Faq />
      <Map />
    </main>
  );
}
