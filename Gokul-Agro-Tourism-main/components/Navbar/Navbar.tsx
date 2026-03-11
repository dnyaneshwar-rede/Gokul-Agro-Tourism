"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { isAdminUser } from "@/utils/isAdmin";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const pathname = usePathname();

  // ✅ USER FROM AUTH CONTEXT
  const { user, logout } = useAuth();

  // ✅ CHECK ADMIN BY EMAIL
  useEffect(() => {
    if (user?.email) {
      setIsAdmin(isAdminUser(user.email));
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  const navLinks = [
    { name: "About", href: "/#about-us" },
    { name: "Packages", href: "/#packages" },
    { name: "Gallery", href: "/#photo-gallery" },
    { name: "FAQ", href: "/#faqs" },
    { name: "Location", href: "/#location" },
    { name: "Videos", href: "/videos" },
  ];

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith("/#")) {
      const sectionId = href.split("#")[1];

      if (pathname === "/") {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full z-50 top-0 border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Gokul Agro Tourism Logo"
              width={40}
              height={40}
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Gokul Agro Tourism
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

            {/* NAV LINKS */}
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("/#")) {
                      e.preventDefault();
                      handleNavigation(link.href);
                    }
                  }}
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* ✅ ADMIN PANEL (EMAIL BASED) */}
            {isAdmin && (
              <Link
                href="/admin"
                className="text-red-600 font-semibold hover:text-red-700 transition"
              >
                Admin Panel
              </Link>
            )}

            {/* AUTH SECTION */}
            <div className="flex items-center gap-4 ml-4">

              {!user ? (
                <>
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-green-600 font-medium"
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
                  >
                    Signup
                  </Link>
                </>
              ) : (
                <>
                  <span className="font-semibold text-green-700">
                    👋 {user.name}
                  </span>

                  <button
                    onClick={logout}
                    className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              )}

              {/* BOOK NOW */}
              <Link
                href="https://api.whatsapp.com/send?phone=919423121863"
                target="_blank"
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full"
              >
                Book Now
              </Link>

            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">

            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block px-4">
                {link.name}
              </Link>
            ))}

            {isAdmin && (
              <Link
                href="/admin"
                className="block px-4 text-red-600 font-semibold"
              >
                Admin Panel
              </Link>
            )}

            <div className="px-4 flex flex-col gap-3">

              {!user ? (
                <>
                  <Link href="/login" className="text-center border p-2 rounded">
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    className="text-center bg-green-600 text-white p-2 rounded"
                  >
                    Signup
                  </Link>
                </>
              ) : (
                <>
                  <span className="text-center font-semibold">
                    👋 {user.name}
                  </span>

                  <button
                    onClick={logout}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;