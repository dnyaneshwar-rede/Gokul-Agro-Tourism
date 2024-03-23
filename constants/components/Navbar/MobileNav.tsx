"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import Button from "../Button";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="z-50 relative w-full px-2 py-4 sm:hidden border-b-2 shadow-lg">
      <div className="flex items-center justify-between">
        <Link href="/">
          {/* <Image
            src="/assets/images/logo-mobile.svg"
            height={35}
            width={70}
            alt="KoinX"
          /> */}
          <span className="text-3xl font-bold">Gokul</span>
        </Link>
        <div>
          {isMenuOpen ? (
            <Image
              src="/assets/images/close.svg"
              width={40}
              height={40}
              alt="menu"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          ) : (
            <Image
              src="/assets/images/menu.svg"
              width={40}
              height={40}
              alt="menu"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute left-0 mt-5 min-h-screen w-full bg-slate-900 px-4 py-2">
          <ul className="flex flex-col items-start justify-start space-y-2 text-white">
            {navLinks.map((navLink) => {
              return (
                <Link
                  key={navLink.value}
                  href={navLink.route}
                  className="w-full border-b border-white py-2"
                >
                  {navLink.label}
                </Link>
              );
            })}
            <div className="w-full rounded-lg border-none bg-[#1b4aef] px-6 py-2 font-semibold text-white">
              <Button
                label="+91 9922992299"
                imgPath="/assets/images/phone.svg"
                alt="phone"
              />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
