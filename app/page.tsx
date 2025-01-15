"use client";
import React from "react";
import type { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Map from "@/components/Footer/Map";
import Faq from "@/components/FAQ/Faq";
import ImageGallary from "@/components/ImageGallary";
import Activity from "@/components/Activity";
import Video from "@/components/Video";
import YoutubeVideo from "@/components/YoutubeVideo";
import ImageGallery from "@/components/ImageGallary";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/constants/packages";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <Hero />
      <Video />
      <YoutubeVideo  limit={3 }/>
      <Activity />
      <About />
      <div className="p-6 bg-white min-h-screen">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-green-500">Experience Farm Life</h1>
          <p className="text-xl text-gray-600">
            Choose your perfect agro-tourism package
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 " id="packages">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              package={pkg}

            />
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-white">
        <h1 className="text-4xl md:text-3xl font-semibold text-center my-8 text-sky-800">
          Image Gallery
        </h1>
        <div className="max-w-full mx-auto px-4">
          <ImageGallery />
        </div>
      </div>
     
      
      <Faq />
      <Map />
    </main>
  );
}
