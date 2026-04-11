import React from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaBriefcase,
  FaHeadset,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ServicesHeader() {
  const navigate = useNavigate(); // ✅ navigation

  const whatsappNumber = "971542910172"; // your number (no +)
  const whatsappMessage = "Hello, I would like to get started with your event services.";

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <div className="w-full relative">
      {/* Header Section */}
      <div
        className="w-full h-[400px] sm:h-[480px] md:h-[550px] bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819')",
        }}
      >
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-6 sm:gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              About Our Services
            </h2>
            <p className="text-gray-200 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              We specialize in delivering high-quality event management
              services tailored to your needs. From corporate meetings to
              weddings and large-scale events, we ensure every detail is
              handled with precision and creativity.
            </p>

<button
  onClick={handleWhatsApp}
  className="bg-orange-500 hover:bg-orange-600 px-5 sm:px-6 py-2.5 sm:py-3 text-white font-semibold text-sm sm:text-base"
>
  Get Started
</button>
          </div>

          {/* RIGHT SIDE — hidden on small mobile, visible from sm up */}
          <div className="hidden sm:flex justify-center md:justify-end">
            <div className="bg-gray-800/60 backdrop-blur-md text-white p-6 sm:p-8 max-w-md w-full">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Design Your Event Experience
              </h1>
              <p className="text-xs sm:text-sm text-gray-200 mb-5 sm:mb-6">
                We create unforgettable moments with stunning designs,
                seamless execution, and a touch of creativity for every
                celebration.
              </p>
<button
  onClick={() => navigate("/about")}
  className="bg-teal-500 px-5 py-2 font-semibold text-sm sm:text-base"
>
  Learn More
</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="w-full flex justify-center">
        <div className="bg-white w-[92%] sm:w-[88%] md:w-[85%] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 -mt-10 sm:-mt-14 md:-mt-20 relative z-20 border border-orange-200">

          <div className="text-center px-2">
            <FaUsers className="text-2xl sm:text-3xl mx-auto text-orange-500 mb-2 sm:mb-3" />
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Event Management</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Full-service event handling and execution.
            </p>
          </div>

          <div className="text-center px-2">
            <FaCalendarAlt className="text-2xl sm:text-3xl mx-auto text-orange-500 mb-2 sm:mb-3" />
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Event Planning</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Strategic planning for seamless events.
            </p>
          </div>

          <div className="text-center px-2">
            <FaBriefcase className="text-2xl sm:text-3xl mx-auto text-orange-500 mb-2 sm:mb-3" />
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Corporate Events</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Professional business event services.
            </p>
          </div>

          <div className="text-center px-2">
            <FaHeadset className="text-2xl sm:text-3xl mx-auto text-orange-500 mb-2 sm:mb-3" />
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">24/7 Support</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Always available to assist your needs.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}