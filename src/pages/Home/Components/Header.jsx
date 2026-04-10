import React from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import bannerVideo from "../../../assets/images/bannervideo.mp4";
// import bannerPoster from "../../assets/images/banner-poster.jpg"; // add image

export default function EventHero() {
  return (
    <div className="relative w-full h-screen min-h-[650px] overflow-hidden font-['Outfit']">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform hidden md:block"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>

      {/* MOBILE FALLBACK IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 md:hidden"
        // style={{ backgroundImage: `url(${bannerPoster})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* SEARCH BAR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px] z-10">
        <div className="relative flex flex-col md:flex-row items-center rounded-lg bg-white/90 backdrop-blur-md p-3 shadow-2xl overflow-hidden border-b-4 border-[#4dcad1]">

          {/* Event Type */}
          <div className="flex-1 flex items-center px-5 h-10 w-full md:border-r border-gray-200">
            <Search className="text-[#4dcad1] mr-3" size={20} strokeWidth={2.5} />
            <input 
              type="text"
              className="bg-transparent outline-none text-[15px] w-full placeholder-gray-500"
              placeholder="Event Type"
            />
          </div>

          {/* Date */}
          <div className="flex-1 flex items-center px-5 h-10 w-full md:border-r border-gray-200 mt-4 md:mt-0">
            <Calendar className="text-[#4dcad1] mr-3" size={20} />
            <input 
              type="text"
              className="bg-transparent outline-none text-[15px] w-full placeholder-gray-500"
              placeholder="Date"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>

          {/* Guests */}
          <div className="flex-1 flex items-center px-5 h-10 w-full md:border-r border-gray-200 mt-4 md:mt-0">
            <Users className="text-[#4dcad1] mr-3" size={20} />
            <input 
              type="number"
              className="bg-transparent outline-none text-[15px] w-full placeholder-gray-500"
              placeholder="Guest Count"
            />
          </div>

          {/* Location */}
          <div className="flex-1 flex items-center px-5 h-10 w-full mt-4 md:mt-0">
            <MapPin className="text-[#4dcad1] mr-3" size={20} />
            <input 
              type="text"
              className="bg-transparent outline-none text-[15px] w-full placeholder-gray-500"
              placeholder="Preferred Location"
            />
          </div>

          {/* Button */}
          <button className="w-full md:w-auto bg-[#008b8b] hover:bg-[#007373] text-white px-10 h-[50px] rounded-md uppercase tracking-wider transition-all duration-300 md:ml-4 mt-4 md:mt-0 shadow-lg active:scale-95">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}