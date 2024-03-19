import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
