import { useState, useRef, useEffect } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import bannerVideo from "../../../assets/bannervideo.mp4";

export default function EventHero() {
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [location, setLocation] = useState("");
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force load and play — critical for mobile browsers (iOS Safari, Android Chrome)
    video.load();

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked — retry on first user interaction
          const retryPlay = () => {
            video.play().catch(() => {});
            document.removeEventListener("touchstart", retryPlay);
            document.removeEventListener("click", retryPlay);
          };
          document.addEventListener("touchstart", retryPlay, { once: true });
          document.addEventListener("click", retryPlay, { once: true });
        });
      }
    };

    if (video.readyState >= 3) {
      // Already loaded enough — play immediately
      tryPlay();
      setVideoReady(true);
    } else {
      video.addEventListener("canplay", () => {
        tryPlay();
        setVideoReady(true);
      }, { once: true });
    }

    // Visibility API: resume play when tab becomes active again
    const handleVisibility = () => {
      if (!document.hidden && video.paused) {
        video.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // 👉 WhatsApp handler
  const handleWhatsAppBooking = () => {
    const phoneNumber = "971508536881";

    const message = `Hi, I want to book an event.

📌 Event Type: ${eventType || "Not specified"}
📅 Date: ${date || "Not specified"}
👥 Guests: ${guests || "Not specified"}
📍 Location: ${location || "Not specified"}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative w-full h-screen min-h-[650px] overflow-hidden font-['Outfit']">

      {/* Poster/placeholder shown instantly while video loads */}
      {!videoReady && (
        <div
          className="absolute inset-0 z-0 bg-gray-900"
          style={{
            backgroundImage: "url('/poster.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* VIDEO — key fixes:
          - ref for programmatic control
          - fetchpriority="high" so browser loads it first
          - preload="auto" requests full buffering
          - width/height prevent reflow
          - disablePictureInPicture / disableRemotePlayback for mobile perf
          - style opacity transition: fade in when ready
      */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        fetchPriority="high"
        poster="/poster.jpg"
        width="1920"
        height="1080"
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0 transition-opacity duration-700"
        style={{ opacity: videoReady ? 1 : 0 }}
      >
        {/*
          Serving the same file with explicit type.
          If you can also export a WebM version, add it ABOVE the mp4 line —
          WebM is smaller and loads faster in Chrome/Firefox:
          <source src={bannerVideoWebm} type="video/webm" />
        */}
        <source src={bannerVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* SEARCH BAR CONTAINER */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px] z-10">
        <div className="relative flex flex-col md:flex-row items-center rounded-lg bg-white/90 backdrop-blur-md p-3 shadow-2xl overflow-hidden border-b-4 border-[#4dcad1]">

          {/* Event Type */}
          <div className="flex-1 flex items-center px-5 h-10 w-full md:border-r border-gray-200">
            <span className="text-[#4dcad1] mr-3">
              <Search size={20} strokeWidth={2.5} />
            </span>
            <input
              type="text"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
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
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent border-none outline-none text-[15px] text-gray-800 w-full placeholder-gray-500"
              placeholder="Date"
            />
          </div>

          {/* Guest Count */}
          <div className="flex-1 flex items-center px-5 h-10 w-full md:border-r border-gray-200 mt-4 md:mt-0">
            <span className="text-[#4dcad1] mr-3">
              <Users size={20} strokeWidth={2.5} />
            </span>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="bg-transparent border-none outline-none text-[15px] text-gray-800 w-full placeholder-gray-500"
              placeholder="Guest Count"
            />
          </div>

          {/* Location */}
          <div className="flex-1 flex items-center px-5 h-10 w-full mt-4 md:mt-0">
            <span className="text-[#4dcad1] mr-3">
              <MapPin size={20} strokeWidth={2.5} />
            </span>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent border-none outline-none text-[15px] text-gray-800 w-full placeholder-gray-500"
              placeholder="Preferred Location"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleWhatsAppBooking}
            className="w-full md:w-auto bg-[#008b8b] hover:bg-[#007373] text-white px-10 h-[50px] rounded-md font-default uppercase tracking-wider transition-all duration-300 md:ml-4 mt-4 md:mt-0 shadow-lg hover:-translate-y-0.5 active:scale-95"
          > 
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}