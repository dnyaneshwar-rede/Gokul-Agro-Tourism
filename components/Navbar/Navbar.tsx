import React from "react";
import Image from "next/image";
import { navLinks } from "@/constants";
import Link from "next/link";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 px-6 py-1  justify-between items-center fixed w-full z-20 top-2 start-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="https://gokulagrotourism.co.in/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Gokul Agro Toyrism Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Gokul Agro Tourism
          </span>
        </a>

        <div className="flex items-center md:flex">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Now
          </button>
          {/* Consider using a dropdown for navigation links on smaller screens */}
        </div>

        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-block items-center p-2 ml-4 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
        <div className="flex flex-col p-4 md:flex-row md:space-x-8 rtl:space-x-reverse">
          {navLinks.map((navlink) => (
            <Link
              key={navlink.value}
              href={navlink.route}
              className="flex items-center px-4 py-1 text-sm font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              {navlink.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
