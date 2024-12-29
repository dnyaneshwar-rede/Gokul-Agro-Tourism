"use client";
import React from "react";
import type { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Map from "@/components/Footer/Map";
import Faq from "@/components/FAQ/Faq";
import ImageGallary from "@/components/ImageGallary";
import Activity from "@/components/Activity";
import Video from "@/components/Video";
import YoutubeVideo from "@/components/YoutubeVideo";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <Hero />
      <Video />
      <YoutubeVideo />
      <Activity />
      <About />
      <Packages />
      <ImageGallary />
      <Faq />
      <Map />
    </main>
  );
}
