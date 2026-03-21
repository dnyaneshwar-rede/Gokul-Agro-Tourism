import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* About Section */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-gray-800">
              Gokul Agro Tourism
            </h2>
            <p className="text-sm sm:text-base leading-7 text-gray-600">
              Experience the beauty of rural life and agriculture. Join us for a
              unique agro-tourism experience in the heart of nature.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+919423121863"
                className="flex items-center gap-3 text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors duration-300"
              >
                <FaPhoneAlt className="text-orange-400" />
                <span>+91 9423121863</span>
              </a>

              <a
                href="mailto:gokulagrotourism@gmail.com"
                className="flex items-center gap-3 text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors duration-300"
              >
                <FaEnvelope className="text-orange-400" />
                <span>gokulagrotourism@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-gray-800">Quick Links</h2>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "#about" },
                { name: "Packages", href: "#packages" },   
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-600 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-gray-800">Follow Us</h2>
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.youtube.com/@GokulAgroTourism"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-500 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-green-500 pt-6 text-center text-sm sm:text-base text-gray-500">
          © 2026 Gokul Agro Tourism. All rights reserved. | Designed by{" "}
          <a
            href="https://api.whatsapp.com/send?phone=919689908994"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-500 hover:text-blue-400 transition-colors duration-300"
          >
            Dnyaneshwar
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;