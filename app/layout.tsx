import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gokul Agro Tourism",
  description: "Book your next picnic, enjoy, and have fun",
  keywords: [
    "gokul agro tourism",
    "gokul agri tourism",
    "gokul picnic center",
    "gokul agro tourism center and picnic center",
    "gokul agro tourism in jalna",
    "picnic spot in jalna",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}