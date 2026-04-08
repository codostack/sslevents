import React, { useState, useRef } from "react";
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
    "https://www.youtube.com/embed/bEycJ5r0W0g?autoplay=1&mute=1&loop=1&playlist=bEycJ5r0W0g&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3";

  /* ✅ SIDEBAR VIDEOS */
  const sidebarVideos = [
    "https://www.youtube.com/embed/RHz1HQSAMvg?autoplay=1&mute=1&loop=1&playlist=RHz1HQSAMvg&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3",
    "https://www.youtube.com/embed/KGEc2A5yDTU?autoplay=1&mute=1&loop=1&playlist=KGEc2A5yDTU&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3",
    "https://www.youtube.com/embed/bEycJ5r0W0g?autoplay=1&mute=1&loop=1&playlist=bEycJ5r0W0g&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3",
    "https://www.youtube.com/embed/GOi4jFy-01o?autoplay=1&mute=1&loop=1&playlist=GOi4jFy-01o&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&iv_load_policy=3"
  ];

  const [activeVideo, setActiveVideo] = useState(defaultVideo);
  const scrollRef = useRef(null);

  /* ===========================
     ✅ INFINITE ARROW SCROLL
     =========================== */

  const scrollAmount = 250;

  const scrollUp = () => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({ top: -scrollAmount, behavior: "smooth" });

    // loop to bottom when reaching top
    setTimeout(() => {
      if (el.scrollTop <= 5) {
        el.scrollTop = el.scrollHeight / 2;
      }
    }, 400);
  };

  const scrollDown = () => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({ top: scrollAmount, behavior: "smooth" });

    // loop back to middle when reaching bottom
    setTimeout(() => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 5) {
        el.scrollTop = el.scrollHeight / 2;
      }
    }, 400);
  };

  return (
    <div className="min-h-[92vh] bg-zinc-950 text-white px-4 sm:px-6 lg:px-8 py-10">

      {/* AUTO SCROLL STYLE (UNCHANGED) */}
      <style>{`
        @keyframes subtleGlide {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .animate-glide {
          animation: subtleGlide 80s linear infinite;
        }

        .pause-scroll:hover .animate-glide {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row gap-8">

        {/* ================= LEFT VIDEO ================= */}
        <div className="flex-[3]">
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">

            <iframe
              key={activeVideo}
              src={activeVideo}
              title="Main Video"
              allow="autoplay"
              className="absolute inset-0 w-full h-full pointer-events-none"
            />

            <div className="absolute inset-0 z-10" />
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="flex-1 xl:max-w-sm flex flex-col">

          <div className="flex items-center gap-2 mb-5 p-3 bg-zinc-900 rounded-lg border border-zinc-800">
            <Clapperboard className="text-red-500" size={20} />
            <h3 className="font-bold text-sm tracking-wide">
              Live Stream Highlights
            </h3>
          </div>

          <div className="relative flex flex-col rounded-3xl border border-zinc-800 bg-black overflow-hidden h-[500px]">

            {/* UP */}
            <div className="absolute top-0 left-0 w-full flex justify-center pt-3 pb-3 z-20 bg-gradient-to-b from-black/70 to-transparent">
              <button
                onClick={scrollUp}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-lg p-2 rounded-full transition"
              >
                <ChevronUp size={22} />
              </button>
            </div>

            {/* SCROLLER */}
            <div ref={scrollRef} className="flex-1 overflow-hidden pause-scroll">
              <div className="animate-glide p-4 flex flex-col gap-6">

                {[...sidebarVideos, ...sidebarVideos].map((video, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveVideo(video)}
                    className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 cursor-pointer hover:scale-[1.03] transition"
                  >
                    <iframe
                      src={video}
                      title={`sidebar-${i}`}
                      allow="autoplay"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                    />
                  </div>
                ))}

              </div>
            </div>

            {/* DOWN */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center pt-3 pb-[11.75rem] z-20 bg-gradient-to-t from-black/70 to-transparent">
              <button
                onClick={scrollDown}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-lg p-2 rounded-full transition"
              >
                <ChevronDown size={22} />
              </button>
            </div>

            {/* SOCIAL */}
            <div className="p-8 bg-white/10 backdrop-blur-xl border-t border-white/20 text-center space-y-5">
              <p className="text-[10px] tracking-[0.5em] text-zinc-400 uppercase font-bold">
                Join the Community
              </p>

              <h4 className="text-lg font-bold">SSL Events</h4>

              <div className="flex justify-center gap-6">
                <Instagram size={26} className="text-[#E4405F]" />
                <Facebook size={26} className="text-[#1877F2]" />
                <Twitter size={26} className="text-[#1DA1F2]" />
                <Youtube size={26} className="text-[#FF0000]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventVideoWatchPage;