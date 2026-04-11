import React, { useState } from 'react';
import { MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ image, title, rating }) => (
  <div
    className="
      bg-white
      overflow-hidden
      border-white
      shadow-sm
      hover:shadow-xl
      hover:-translate-y-1
      transition-all duration-300
    "
    style={{ borderWidth: "6px", borderStyle: "solid" }}
  >
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>

    <div className="p-4 border-t border-gray-100">
      <h4 className="text-gray-800 font-semibold text-sm mb-2">
        {title}
      </h4>

      <div className="flex justify-between items-center">
        <div className="flex text-yellow-400">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={10} fill="currentColor" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const EventHero = () => {
  const navigate = useNavigate();

  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [preference, setPreference] = useState("");

  const handleWhatsApp = () => {
    const phoneNumber = "971508536881";

    const message = `Hi, I want to enquire about an event.

📌 Event Type: ${eventType || "Not specified"}
📅 Date: ${date || "Not specified"}
👥 Guests: ${guests || "Not specified"}
🎯 Preference: ${preference || "Not specified"}

Please share details.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative w-full bg-white font-sans overflow-x-hidden">

      {/* HERO */}
      <div className="relative min-h-[80vh] w-full flex flex-col items-center justify-center text-center px-4 py-16 md:py-0 md:h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070')` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-white w-full max-w-5xl mx-auto">
          <p className="italic text-lg md:text-xl font-light mb-2">
            World Best Event Management Agency
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-wider mb-6 md:mb-8 px-2">
            Plan Your Upcoming <span className="text-[#39CABB]">Dream Celebration</span>
          </h1>

          {/* SEARCH BAR */}
          <div className="bg-white/95 backdrop-blur-sm p-2 rounded-md shadow-2xl flex flex-col md:flex-row items-stretch md:items-center gap-0 md:gap-2 mx-2 sm:mx-4 md:mx-auto border-b-4 border-[#39CABB]">

            {/* Event Type */}
            <div className="flex items-center gap-2 px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
              <MapPin size={18} className="text-[#39CABB] shrink-0" />
              <input
                type="text"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                placeholder="Event Type"
                className="bg-transparent text-gray-700 outline-none w-full text-sm"
              />
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
              <Calendar size={18} className="text-[#39CABB] shrink-0" />
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
                className="bg-transparent text-gray-700 outline-none w-full text-sm"
              />
            </div>

            {/* Guest Count */}
            <div className="flex items-center gap-2 px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
              <Calendar size={18} className="text-[#39CABB] shrink-0" />
              <input
                type="text"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="Guest Count"
                className="bg-transparent text-gray-700 outline-none w-full text-sm"
              />
            </div>

            {/* Preference */}
            <div className="flex items-center gap-2 px-4 py-3 md:py-2 border-b md:border-b-0 flex-1">
              <Users size={18} className="text-[#39CABB] shrink-0" />
              <input
                type="text"
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
                placeholder="Preference"
                className="bg-transparent text-gray-700 outline-none w-full text-sm"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={handleWhatsApp}
              className="bg-[#39CABB] hover:bg-[#2da99d] text-white px-8 py-3 rounded uppercase font-bold text-sm transition-all w-full md:w-auto mt-1 md:mt-0"
            >
              Search
            </button>
          </div>

          {/* View Packages */}
          <button
            onClick={() => navigate("/services")}
            className="mt-6 md:mt-8 border-2 border-white/50 bg-white/10 hover:bg-white hover:text-gray-800 transition px-6 py-2 rounded text-xs uppercase tracking-widest font-semibold"
          >
            View Packages
          </button>
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div className="relative z-20 md:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">

        {/* Intro block — full width on mobile, inline on desktop */}
        <div className="pt-10 md:pt-0 pb-6 md:pb-0 md:hidden">
          <h5 className="text-[#39CABB] italic font-medium mb-1">Our Agency</h5>
          <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-[#39CABB] pl-4 mb-2">
            Feature Event
          </h2>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            Delivering exceptional events with innovative planning.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="bg-[#39CABB] text-white px-6 py-2 rounded text-xs font-bold uppercase shadow-lg shadow-[#39CABB]/30 hover:scale-105 transition-transform"
          >
            View All
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 items-center">

          {/* Desktop-only text column */}
          <div className="hidden md:block pt-24 space-y-4">
            <h5 className="text-[#39CABB] italic font-medium">Our Agency</h5>
            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-[#39CABB] pl-4">
              Feature Event
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed">
              Delivering exceptional events with innovative planning.
            </p>
            <button
              onClick={() => navigate("/services")}
              className="bg-[#39CABB] text-white px-6 py-2 rounded text-xs font-bold uppercase shadow-lg shadow-[#39CABB]/30 hover:scale-105 transition-transform"
            >
              View All
            </button>
          </div>

          <FeatureCard
            image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069"
            title="Luxury Wedding Planning"
            rating={4}
          />
          <FeatureCard
            image="https://i.pinimg.com/1200x/68/6d/d3/686dd3962532a6e0185f6bab99d9dc2d.jpg"
            title="Corporate Events"
            rating={5}
          />
          <FeatureCard
            image="https://i.pinimg.com/1200x/db/3c/d6/db3cd61994f42191c310691b84959057.jpg"
            title="AV Rentals"
            rating={5}
          />
        </div>
      </div>

      {/* ARROWS — hidden on small screens */}
      <div className="hidden md:flex absolute right-10 bottom-40 flex-col gap-2">
        <div className="w-8 h-8 rounded-full bg-[#39CABB] text-white flex items-center justify-center cursor-pointer shadow-lg">
          <ArrowRight size={14} />
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center cursor-pointer border">
          <ArrowRight size={14} className="rotate-180" />
        </div>
      </div>
    </div>
  );
};

export default EventHero;