import React, { useState, useRef, useEffect } from "react";
import {
  Clapperboard,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const EventVideoWatchPage = () => {

  /* ✅ MAIN VIDEO */
  const defaultVideo =
    "https://www.youtube.com/embed/bEycJ5r0W0g?autoplay=1&mute=1&loop=1&playlist=bEycJ5r0W0g&controls=0&modestbranding=1&rel=0&playsinline=1";

  /* ✅ SIDEBAR VIDEO IDs */
  const sidebarVideos = [
    "RHz1HQSAMvg",
    "KGEc2A5yDTU",
    "bEycJ5r0W0g",
    "GOi4jFy-01o",
    "QIT0SRQ-3wE",
    "BLVzI50SEZ0",
    "gm4AYNYtlXY",
    "Qj1b1FFTHqE",
    "SG4BnysW6_Q",
    "TzKwklD2Bko",
  ];

  // Triplicate for seamless infinite loop — always has content above & below
  const loopedVideos = [...sidebarVideos, ...sidebarVideos, ...sidebarVideos];

  const [activeVideo, setActiveVideo] = useState(defaultVideo);
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);
  const isPausedRef = useRef(false);

  /* ✅ SEAMLESS LOOPING AUTO SCROLLER */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start at the middle copy
    el.scrollTop = el.scrollHeight / 3;

    autoScrollRef.current = setInterval(() => {
      if (isPausedRef.current) return;

      el.scrollTop += 1;

      // When reaching end of 2nd copy → silently snap back to start of 2nd copy
      if (el.scrollTop >= (el.scrollHeight / 3) * 2) {
        el.scrollTop = el.scrollHeight / 3;
      }
    }, 30);

    const pause = () => { isPausedRef.current = true; };
    const resume = () => { isPausedRef.current = false; };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      clearInterval(autoScrollRef.current);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

  /* ✅ GET THUMBNAIL */
  const getThumbnail = (id) =>
    `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  /* ✅ MANUAL SCROLL — pauses auto-scroll for 2s then resumes */
  const scrollAmount = 220;

  const manualScroll = (direction) => {
    isPausedRef.current = true;
    scrollRef.current?.scrollBy({ top: direction * scrollAmount, behavior: "smooth" });
    setTimeout(() => { isPausedRef.current = false; }, 2000);
  };

  const scrollUp = () => manualScroll(-1);
  const scrollDown = () => manualScroll(1);

  /* ✅ SELECT SIDEBAR VIDEO */
  const handleSelectVideo = (id) => {
    setActiveVideo(
      `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&playsinline=1`
    );
  };

  return (
    <div className="min-h-[92vh] bg-zinc-950 text-white px-4 sm:px-6 lg:px-8 py-10">

      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-8">

        {/* ================= LEFT — MAIN VIDEO ================= */}
        <div className="flex-[3] min-w-0">
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <iframe
              key={activeVideo}
              src={activeVideo}
              loading="lazy"
              title="Main Video"
              allow="autoplay"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* ================= RIGHT — SIDEBAR ================= */}
        <div className="flex-1 xl:max-w-sm flex flex-col min-w-0">

          {/* Header */}
          <div className="flex items-center gap-2 mb-5 p-3 bg-zinc-900 rounded-lg border border-zinc-800 flex-shrink-0">
            <Clapperboard className="text-red-500 flex-shrink-0" size={20} />
            <h3 className="font-bold text-sm tracking-wide truncate">
              Live Stream Highlights
            </h3>
          </div>

          {/* Panel */}
          <div
            className="relative flex flex-col rounded-3xl border border-zinc-800 bg-black overflow-hidden"
            style={{ height: "520px" }}
          >

            {/* Top fade + Up button */}
            <div
              className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-3 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)",
                paddingBottom: "28px",
              }}
            >
              <button
                onClick={scrollUp}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-lg p-2 rounded-full pointer-events-auto transition"
              >
                <ChevronUp size={22} />
              </button>
            </div>

            {/* Scrollable looped thumbnail list */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto flex flex-col gap-5"
              style={{
                padding: "52px 14px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>{`
                .ssl-hide-scroll::-webkit-scrollbar { display: none; }
              `}</style>

              {loopedVideos.map((id, i) => (
                <div
                  key={i}
                  onClick={() => handleSelectVideo(id)}
                  className="ssl-hide-scroll relative w-full rounded-xl overflow-hidden border border-zinc-800 cursor-pointer hover:scale-[1.03] transition-transform duration-200 flex-shrink-0"
                  style={{ aspectRatio: "16/9" }}
                >
                  <img
                    src={getThumbnail(id)}
                    alt={`video thumbnail ${(i % sidebarVideos.length) + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-3xl select-none">
                    ▶
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom fade + Down button */}
            <div
              className="absolute left-0 right-0 z-20 flex justify-center pointer-events-none"
              style={{
                bottom: "127px",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                paddingTop: "28px",
                paddingBottom: "10px",
              }}
            >
              <button
                onClick={scrollDown}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-lg p-2 rounded-full pointer-events-auto transition"
              >
                <ChevronDown size={22} />
              </button>
            </div>

            {/* Social bar — pinned at bottom */}
            <div className="flex-shrink-0 p-5 bg-white/10 backdrop-blur-xl border-t border-white/20 text-center space-y-3">
              <p className="text-[10px] tracking-[0.5em] text-zinc-400 uppercase font-bold">
                Join the Community
              </p>
              <h4 className="text-base font-bold">SSL Events</h4>
              <div className="flex justify-center gap-5">
                <Instagram size={24} className="text-[#E4405F]" />
                <Facebook size={24} className="text-[#1877F2]" />
                <Twitter size={24} className="text-[#1DA1F2]" />
                <Youtube size={24} className="text-[#FF0000]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventVideoWatchPage;