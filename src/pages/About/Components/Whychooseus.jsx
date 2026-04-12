import React, { useEffect, useRef } from "react";

const steps = [
  {
    id: 1,
    title: "Submit Your Event",
    desc: "Share your vision through our simple form.",
    accent: "#6ee7b7",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Consult With Us",
    desc: "Expert planners understand every detail.",
    accent: "#fda4af",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Plan Your Design",
    desc: "Bespoke blueprints for themes and décor.",
    accent: "#c4b5fd",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Approve Concept",
    desc: "Refine the proposal to match your dream.",
    accent: "#fcd34d",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Secure Booking",
    desc: "Lock in your date and receive confirmation.",
    accent: "#7dd3fc",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Celebrate Magic",
    desc: "Sit back while we execute every moment.",
    accent: "#f9a8d4",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 0.4;
    let animFrame;

    const scroll = () => {
      scrollAmount += speed;
      container.scrollTop = scrollAmount;

      if (scrollAmount >= container.scrollHeight - container.clientHeight) {
        scrollAmount = 0;
        container.scrollTop = 0;
      }

      animFrame = requestAnimationFrame(scroll);
    };

    animFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen w-full bg-black overflow-hidden font-sans">

      {/* LEFT SIDE: Video Section */}
      <div className="relative flex-[1.4] w-full h-[40vh] sm:h-[50vh] lg:h-full overflow-hidden bg-zinc-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105 animate-slow-zoom"
        >
          <source src='/bannervideo.mp4' type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />

        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 lg:bottom-20 lg:left-20 z-20 max-w-[85%]">
          {/* Ad content space */}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex-1 bg-[#0a0a0a] flex flex-col justify-start lg:justify-center px-4 sm:px-8 lg:px-16 py-8 lg:py-10 border-t border-white/5 lg:border-t-0 lg:border-l lg:border-white/5">

        {/* Fade overlays — hidden on mobile to avoid clipping content */}
        <div className="hidden lg:block absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-30 pointer-events-none" />
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-30 pointer-events-none" />

        {/* Heading */}
        <div className="mb-6 lg:mb-8 relative z-40">
          <p className="text-yellow-400 text-lg sm:text-2xl font-black tracking-[0.3em] uppercase mb-2">HOW IT WORKS</p>
          <h2 className="text-white text-2xl sm:text-3xl font-serif font-bold">OUR PROCESS</h2>
        </div>

        {/* Steps — scrolling on desktop, stacked on mobile */}
        <div className="relative lg:h-[700px] xl:h-[600px] lg:overflow-hidden">
          <div
            ref={scrollRef}
            className="lg:h-full lg:overflow-hidden"
          >
            <div className="flex flex-col gap-4 sm:gap-6 pb-6 lg:pb-0">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 sm:gap-8 bg-white/5 border border-white/10 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] min-h-[110px] sm:min-h-[130px] lg:min-h-[150px]"
                >
                  {/* Icon circle */}
                  <div
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shrink-0 text-black shadow-2xl transition-transform duration-300 hover:rotate-12"
                    style={{ backgroundColor: step.accent }}
                  >
                    <span className="w-6 h-6 sm:w-9 sm:h-9">
                      {step.icon}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <span
                      className="text-[10px] sm:text-[11px] font-black tracking-widest uppercase mb-1"
                      style={{ color: step.accent }}
                    >
                      Step 0{step.id}
                    </span>
                    <h3 className="text-white text-lg sm:text-2xl font-bold mb-1 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slow-zoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .animate-slow-zoom {
            animation: slow-zoom 20s ease-in-out infinite;
          }
        `,
      }} />
    </div>
  );
}