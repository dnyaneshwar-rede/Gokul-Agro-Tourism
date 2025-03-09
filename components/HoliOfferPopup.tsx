"use client";

import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Extracting static constants outside the component for clarity
const WHATSAPP_NUMBER = "919423121863";
const WHATSAPP_MESSAGE = "Hi, I would like to book a package for the Holi Celebration!";
const ENCODED_MESSAGE = encodeURIComponent(WHATSAPP_MESSAGE);

export default function HoliOfferPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Open the popup after a short delay
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog 
        as="div" 
        className="fixed inset-0 z-50 overflow-y-auto" 
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center relative">
          {/* Dim Overlay for text contrast */}
          <div className="absolute inset-0 bg-black opacity-50 z-0" aria-hidden="true" />

          {/* Centering trick */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          {/* Modal Panel */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative inline-block w-full max-w-md p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white bg-opacity-90 rounded-2xl shadow-2xl z-10">
              <button
                type="button"
                aria-label="Close modal"
                className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 focus:outline-none"
                onClick={closeModal}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="text-center">
                <h3 className="text-3xl font-extrabold text-red-600 drop-shadow-lg">
                  Holi Celebration!
                </h3>
                <p className="mt-4 text-lg text-gray-800">
                  Embrace the festive spirit of Bollywood! Enjoy a vibrant <span className="font-bold">20% discount</span> on all bookings. Let the colors and music set the stage for an unforgettable celebration.
                </p>
                <div className="mt-6">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${ENCODED_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-md bg-gradient-to-r from-red-500 to-yellow-500 py-3 text-lg font-bold text-white hover:from-red-600 hover:to-yellow-600 transition-colors"
                  >
                    Book Now via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
