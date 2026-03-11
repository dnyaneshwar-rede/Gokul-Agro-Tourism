import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* About Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Gokula Agro Tourism</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Experience the beauty of rural life and agriculture. Join us for a unique agro-tourism experience in the heart of nature.
          </p>
          <div className="space-y-3">
            <p className="text-sm sm:text-base text-gray-600 flex items-center">
              <i className="fas fa-phone mr-3"></i> +91 9423121863
            </p>
            <p className="text-sm sm:text-base text-gray-600 flex items-center">
              <i className="fas fa-envelope mr-3"></i> gokulagrotourism@gmail.com
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <a href="/" className="text-sm sm:text-base text-gray-600 hover:text-orange-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm sm:text-base text-gray-600 hover:text-orange-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#packages" className="text-sm sm:text-base text-gray-600 hover:text-orange-400">
                Packages
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-sm sm:text-base text-gray-600 hover:text-orange-400">
                Gallery
              </a>
            </li>
            <li>
              <a href="/videos" className="text-sm sm:text-base text-gray-600 hover:text-orange-400">
                Videos
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Follow Us</h2>
          <div className="flex space-x-6 justify-start sm:justify-start lg:justify-start">
            <a
              href="#"
              className="text-gray-600 hover:text-orange-400 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={28} />
            </a>
            
  
            
            <a
              href="#"
              className="text-gray-600 hover:text-orange-400 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.youtube.com/@GokulAgroTourism"
              className="text-gray-600 hover:text-orange-400 transition duration-300"
              aria-label="YouTube"
            >
              <FaYoutube size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-green-500 mt-10 pt-6 text-center text-sm sm:text-base text-gray-400">
        &copy; 2023 Gokula Agro Tourism. All rights reserved. | Designed by{" "}
        <a href="https://api.whatsapp.com/send?phone=919689908994" className="text-blue-500 hover:text-blue-400">
          Dnyaneshwar
        </a>
      </div>
    </footer>
  );
};

export default Footer;
