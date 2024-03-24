import React from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import Link from "next/link";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="max-sm:hidden z-50 w-full fixed px-6 py-2 md:px-8 md:py-4 lg:px-10 lg:py-5 flex justify-between items-center border-b-2 shadow-md bg-white">
      <div className="flex justify-start items-center gap-3">
        {navLinks.map((navlink) => {
          return (
            <Link
              href={navlink.route}
              key={navlink.value}
              className="text-xl font-medium hover:font-semibold py-2 mx-3 transition-all  hover:border-b-2 hover:border-b-slate-600"
            >
              {navlink.label}
            </Link>
          );
        })}
      </div>
      <div className="sm:hidden md:block">
        <Button
          label="+91 9922992299"
          imgPath="/assets/images/phone.svg"
          alt="phone"
        />
      </div>
    </nav>
  );
};

export default Navbar;
