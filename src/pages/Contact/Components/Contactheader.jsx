import React from "react";
import contact1 from "../../../assets/contact/contact1.jpg";

export default function ContactHeader() {
  return (
    <div className="w-full bg-white">
      {/* Header Image Section */}
      <div className="relative w-full h-[380px] md:h-[420px] lg:h-[460px]">
        {/* Background Image */}
        <img
          src={contact1}
          alt="night party"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
            Contact Informations
          </h1>
          <p className="text-white/90 max-w-xl text-xs sm:text-sm md:text-base mb-4 sm:mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Contact Us
          </button>
        </div>

        {/* Bottom Tabs — absolute on md+, static flow on mobile */}
        {/* DESKTOP (md+): absolute overlap — unchanged */}
        <div className="hidden md:block absolute left-1/2 -bottom-12 transform -translate-x-1/2 w-full px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-4 gap-4">
            <div className="bg-white border border-orange-400 rounded-lg p-4 text-center">
              <p className="text-orange-500 text-xs uppercase mb-1">Call Us</p>
              <p className="text-gray-800 font-semibold text-sm">+971 55 964 3050</p>
            </div>
            <div className="bg-white border border-orange-400 rounded-lg p-4 text-center">
              <p className="text-orange-500 text-xs uppercase mb-1">Email</p>
              <p className="text-gray-800 font-semibold text-sm">info@sslevents.ae</p>
            </div>
            <div className="bg-white border border-orange-400 rounded-lg p-4 text-center">
              <p className="text-orange-500 text-xs uppercase mb-1">Location</p>
              <p className="text-gray-800 font-semibold text-sm">Dubai - United Arab Emirates</p>
            </div>
            <div className="bg-white border border-orange-400 rounded-lg p-4 text-center">
              <p className="text-orange-500 text-xs uppercase mb-1">Working</p>
              <p className="text-gray-800 font-semibold text-sm">Mon - Fri : 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Space below for desktop overlap */}
      <div className="hidden md:block h-20"></div>

      {/* MOBILE: tabs flow below the image naturally */}
      <div className="md:hidden w-full px-4 py-5 bg-white">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border border-orange-400 rounded-lg p-3 text-center">
            <p className="text-orange-500 text-[10px] uppercase mb-1">Call Us</p>
            <p className="text-gray-800 font-semibold text-xs">+971 55 964 3050</p>
          </div>
          <div className="bg-white border border-orange-400 rounded-lg p-3 text-center">
            <p className="text-orange-500 text-[10px] uppercase mb-1">Email</p>
            <p className="text-gray-800 font-semibold text-xs">info@sslevents.ae</p>
          </div>
          <div className="bg-white border border-orange-400 rounded-lg p-3 text-center">
            <p className="text-orange-500 text-[10px] uppercase mb-1">Location</p>
            <p className="text-gray-800 font-semibold text-xs">Dubai - United Arab Emirates</p>
          </div>
          <div className="bg-white border border-orange-400 rounded-lg p-3 text-center">
            <p className="text-orange-500 text-[10px] uppercase mb-1">Working</p>
            <p className="text-gray-800 font-semibold text-xs">Mon - Fri : 9AM - 6PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}