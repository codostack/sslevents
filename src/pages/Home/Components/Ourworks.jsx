import React from "react";
import {
  Play,
  Clapperboard,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import bannerVideo from "../../assets/images/banner video.mp4";

const EventVideoWatchPage = () => {

  const mainVideo = bannerVideo;

const sidebarVideos = [
  "https://www.youtube.com/embed/RHz1HQSAMvg?autoplay=1&mute=1&loop=1&playlist=RHz1HQSAMvg&controls=0&modestbranding=1&rel=0&disablekb=1",
  "https://www.youtube.com/embed/KGEc2A5yDTU?autoplay=1&mute=1&loop=1&playlist=KGEc2A5yDTU&controls=0&modestbranding=1&rel=0&disablekb=1",
  "https://www.youtube.com/embed/bEycJ5r0W0g?autoplay=1&mute=1&loop=1&playlist=bEycJ5r0W0g&controls=0&modestbranding=1&rel=0&disablekb=1",
];
  return (
    <div className="min-h-[92vh] bg-zinc-950 text-zinc-100 px-4 sm:px-6 lg:px-8 py-6 lg:py-10">

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

        {/* LEFT SIDE */}
        <div className="flex-[3] flex flex-col gap-6">

          <div className="relative h-[55vh] sm:h-[65vh] lg:h-[58vh] min-h-[420px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={mainVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-full">
                <Play size={48} fill="white" />
              </button>
            </div>
          </div>

          <div className="p-5 sm:p-6 border border-zinc-800 bg-zinc-900 rounded-2xl">
            <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Global Tech Summit 2024
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base">
              Experience the atmosphere and highlights of the event.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="flex-1 xl:max-w-sm flex flex-col">

          <div className="flex items-center gap-2.5 mb-5 p-3 bg-zinc-900 rounded-lg border border-zinc-800">
            <Clapperboard className="text-red-500" size={20} />
            <h3 className="font-bold text-sm tracking-wide">
              Live Stream Highlights
            </h3>
          </div>

          <div className="relative flex flex-col rounded-3xl border border-zinc-800 bg-black overflow-hidden shadow-inner h-[500px]">

            <div className="flex-1 overflow-hidden pause-scroll">
              <div className="animate-glide p-4 flex flex-col gap-6">

                {[...sidebarVideos, ...sidebarVideos].map((video, i) => (
                  <div
                    key={i}
                    className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800/50 group"
                  >
                    {/* ✅ YOUTUBE PLAYER */}
<div className="relative w-full h-full pointer-events-none">
  <iframe
    src={video}
    title={`sidebar-video-${i}`}
    allow="autoplay"
    allowFullScreen
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
</div>
                  </div>
                ))}

              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex-none w-full p-6 sm:p-8 bg-white/10 backdrop-blur-2xl border-t border-white/20 flex flex-col items-center justify-center">
              <div className="text-center space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
                  Join the Community
                </p>

                <h4 className="text-lg font-bold text-white">
                  SSL Events
                </h4>

                <div className="flex justify-center gap-6 flex-wrap">
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
    </div>
  );
};

export default EventVideoWatchPage;