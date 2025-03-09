"use client"

import React, { useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Map from "@/components/Footer/Map";
import Faq from "@/components/FAQ/Faq";
import ImageGallery from "@/components/ImageGallary";
import Activity from "@/components/Activity";
import Video from "@/components/Video";
import YoutubeVideo from "@/components/YoutubeVideo";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/constants/packages";
import HoliOfferPopup from "@/components/HoliOfferPopup";


export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const animationClass = entry.target.getAttribute("data-animation") || "";
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass, "opacity-100");
          } else {
            entry.target.classList.remove(animationClass);
            entry.target.classList.add("opacity-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Moved out of the return statement.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Gokul Agro Tourism</title>
        <meta
          name="description"
          content="Experience authentic farm life at Gokul Agro Tourism with exciting activities and eco-friendly stays."
        />
      </Head>

      {/* Holi Offer Popup */}
      <HoliOfferPopup />
      
      <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5 overflow-clip">
        <Hero />
        <Video />
        <YoutubeVideo limit={3} />
        <Activity />
        <About />

        {/* Packages Section */}
        <section className="p-6 bg-white min-h-screen">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-green-500">Experience Farm Life</h1>
            <p className="text-xl text-gray-600">Choose your perfect agro-tourism package</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12" id="packages">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="min-h-screen bg-white">
          <h1 className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent text-center py-6">
            Image Gallery
          </h1>
          <div className="max-w-full mx-auto px-4">
            <ImageGallery />
          </div>
        </section>

        <Faq />
        <Map />
       
      </main>
    </>
  );
}
