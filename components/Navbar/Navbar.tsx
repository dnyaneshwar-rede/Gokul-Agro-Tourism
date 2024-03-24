import React from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import Link from "next/link";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className=" z-50 w-full fixed px-6 py-2 flex justify-between items-center  bg-white">
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
      <div>
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
