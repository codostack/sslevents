import { MapPin, Calendar, Users, Search } from "lucide-react";
import bannerVideo from "../../../assets/images/bannervideo.mp4";

export default function EventHero() {
  return (
    <div className="relative w-full h-screen min-h-[650px] overflow-hidden font-['Outfit']">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/poster.jpg"
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* SEARCH BAR CONTAINER */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px] z-10">
        <div className="relative flex flex-col md:flex-row items-center rounded-lg bg-white/90 backdrop-blur-md p-3 shadow-2xl overflow-hidden border-b-4 border-[#4dcad1]">

          {/* Event Type - Now using Search Icon */}
          <div className="flex-1 flex items-center px-5 h-10 w-full md:border-r border-gray-200">
            <span className="text-[#4dcad1] mr-3">
              <Search size={20} strokeWidth={2.5} />
            </span>
            <input
              type="text"
              className="bg-transparent border-none outline-none text-[15px] text-gray-800 w-full placeholder-gray-500"
              placeholder="Event Type"
            />
          </div>

          {/* Date */}
          <div className="flex-1 flex items-center px-5 h-10 w-full md:border-r border-gray-200 mt-4 md:mt-0">
            <span className="text-[#4dcad1] mr-3">
              <Calendar size={20} strokeWidth={2.5} />
            </span>
            <input
              type="text"
              className="bg-transparent border-none outline-none text-[15px] text-gray-800 w-full placeholder-gray-500"
              placeholder="Date"
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => e.target.type = 'text'}
            />
          </div>

          {/* Guest Count */}
          <div className="flex-1 flex items-center px-5 h-10 w-full md:border-r border-gray-200 mt-4 md:mt-0">
            <span className="text-[#4dcad1] mr-3">
              <Users size={20} strokeWidth={2.5} />
            </span>
            <input
              type="number"
              className="bg-transparent border-none outline-none text-[15px] text-gray-800 w-full placeholder-gray-500"
              placeholder="Guest Count"
            />
          </div>

          {/* Preferred Location - Now using MapPin Icon */}
          <div className="flex-1 flex items-center px-5 h-10 w-full mt-4 md:mt-0">
            <span className="text-[#4dcad1] mr-3">
              <MapPin size={20} strokeWidth={2.5} />
            </span>
            <input
              type="text"
              className="bg-transparent border-none outline-none text-[15px] text-gray-800 w-full placeholder-gray-500"
              placeholder="Preferred Location"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full md:w-auto bg-[#008b8b] hover:bg-[#007373] text-white px-10 h-[50px] rounded-md font-default uppercase tracking-wider transition-all duration-300 md:ml-4 mt-4 md:mt-0 shadow-lg hover:-translate-y-0.5 active:scale-95">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}