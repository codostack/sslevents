import { useState, useRef, useEffect } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";

export default function EventHero() {
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();

    const handleVisibility = () => {
      if (!document.hidden) playVideo();
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // ✅ VALIDATION FUNCTION
  const validate = () => {
    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!eventType.trim()) {
      newErrors.eventType = "Event type is required";
    }

    if (!date) {
      newErrors.date = "Date is required";
    } else if (date < today) {
      newErrors.date = "Date cannot be in the past";
    }

    if (!guests) {
      newErrors.guests = "Guest count is required";
    } else if (guests <= 0) {
      newErrors.guests = "Guest must be greater than 0";
    }

    if (!location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleWhatsAppBooking = () => {
  if (!validate()) return;

  const phoneNumber = "971508536881";

  const message = `Hi, I want to book an event.

📌 Event Type: ${eventType}
📅 Date: ${date}
👥 Guests: ${guests}
📍 Location: ${location}`;

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  // ✅ CLEAR FORM AFTER SUBMIT
  setEventType("");
  setDate("");
  setGuests("");
  setLocation("");
  setErrors({});
};

  return (
    <div className="relative w-full h-screen min-h-[650px] overflow-hidden font-['Outfit']">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/poster.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#1a1a2e",
        }}
      />

      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/poster.jpg"
      >
        <source src="/bannervideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 z-[2]" />

      {/* FORM */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px] z-10">
        <div className="relative flex flex-col md:flex-row items-center rounded-lg bg-white/90 backdrop-blur-md p-3 shadow-2xl overflow-hidden border-b-4 border-[#4dcad1]">

          {/* Event Type */}
          <div className="flex-1 w-full">
            <div className="flex items-center px-5 h-10 md:border-r border-gray-200">
              <Search className="text-[#4dcad1] mr-3" size={20} />
              <input
                type="text"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="bg-transparent outline-none w-full"
                placeholder="Event Type"
              />
            </div>
            {errors.eventType && (
              <p className="text-red-500 text-xs px-5">{errors.eventType}</p>
            )}
          </div>

          {/* Date */}
          <div className="flex-1 w-full mt-4 md:mt-0">
            <div className="flex items-center px-5 h-10 md:border-r border-gray-200">
              <Calendar className="text-[#4dcad1] mr-3" size={20} />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent outline-none w-full"
              />
            </div>
            {errors.date && (
              <p className="text-red-500 text-xs px-5">{errors.date}</p>
            )}
          </div>

          {/* Guests */}
          <div className="flex-1 w-full mt-4 md:mt-0">
            <div className="flex items-center px-5 h-10 md:border-r border-gray-200">
              <Users className="text-[#4dcad1] mr-3" size={20} />
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-transparent outline-none w-full"
                placeholder="Guest Count"
              />
            </div>
            {errors.guests && (
              <p className="text-red-500 text-xs px-5">{errors.guests}</p>
            )}
          </div>

          {/* Location */}
          <div className="flex-1 w-full mt-4 md:mt-0">
            <div className="flex items-center px-5 h-10">
              <MapPin className="text-[#4dcad1] mr-3" size={20} />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent outline-none w-full"
                placeholder="Preferred Location"
              />
            </div>
            {errors.location && (
              <p className="text-red-500 text-xs px-5">{errors.location}</p>
            )}
          </div>

          {/* Button */}
          <button
            onClick={handleWhatsAppBooking}
            className="w-full md:w-auto bg-[#008b8b] hover:bg-[#007373] text-white px-10 h-[50px] rounded-md uppercase tracking-wider transition-all duration-300 md:ml-4 mt-4 md:mt-0"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}