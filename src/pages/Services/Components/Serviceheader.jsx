import React from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaBriefcase,
  FaHeadset,
} from "react-icons/fa";

export default function ServicesHeader() {
  return (
    <div className="w-full relative">
      {/* Header Section */}
      <div
        className="w-full h-[550px] bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819')", // 🎉 PARTY IMAGE
        }}
      >
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              About Our Services
            </h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              We specialize in delivering high-quality event management
              services tailored to your needs. From corporate meetings to
              weddings and large-scale events, we ensure every detail is
              handled with precision and creativity.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 text-white font-semibold">
              Get Started
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-gray-800/60 backdrop-blur-md text-white p-8 max-w-md">
              <h1 className="text-3xl font-bold mb-4">
                Design Your Event Experience
              </h1>
              <p className="text-sm text-gray-200 mb-6">
                We create unforgettable moments with stunning designs,
                seamless execution, and a touch of creativity for every
                celebration.
              </p>

              <button className="bg-teal-500 px-5 py-2 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="w-full flex justify-center">
        <div className="bg-white w-[85%] grid grid-cols-1 md:grid-cols-4 gap-6 p-8 -mt-20 relative z-20 border border-orange-200">
          
          <div className="text-center">
            <FaUsers className="text-3xl mx-auto text-orange-500 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Event Management</h3>
            <p className="text-sm text-gray-600">
              Full-service event handling and execution.
            </p>
          </div>

          <div className="text-center">
            <FaCalendarAlt className="text-3xl mx-auto text-orange-500 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Event Planning</h3>
            <p className="text-sm text-gray-600">
              Strategic planning for seamless events.
            </p>
          </div>

          <div className="text-center">
            <FaBriefcase className="text-3xl mx-auto text-orange-500 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Corporate Events</h3>
            <p className="text-sm text-gray-600">
              Professional business event services.
            </p>
          </div>

          <div className="text-center">
            <FaHeadset className="text-3xl mx-auto text-orange-500 mb-3" />
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">
              Always available to assist your needs.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}