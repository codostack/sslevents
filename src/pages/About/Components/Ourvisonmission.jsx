import React, { useState, useEffect, useRef } from "react";

/* ================= SERVICES ================= */

const services = [
  {
    id: 1,
    title: "Corporate Events",
    desc: "Professional corporate gatherings designed to elevate brand presence and business impact.",
    theme: { border: "border-blue-100", iconText: "text-blue-600" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <rect x="10" y="12" width="28" height="24" rx="2"
          stroke="currentColor" strokeWidth="2"/>
        <path d="M18 20h12M18 26h12"
          stroke="currentColor" strokeWidth="2"
          strokeLinecap="round"/>
      </svg>
    ),
  },

  {
    id: 2,
    title: "Conferences & Summits",
    desc: "Seamless conferences powered by advanced AV, stage design, and expert coordination.",
    theme: { border: "border-indigo-100", iconText: "text-indigo-600" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <rect x="8" y="10" width="32" height="18"
          stroke="currentColor" strokeWidth="2"/>
        <path d="M16 34h16M24 28v6"
          stroke="currentColor" strokeWidth="2"
          strokeLinecap="round"/>
      </svg>
    ),
  },

  {
    id: 3,
    title: "Product Launches",
    desc: "Impactful launch experiences that showcase innovation and captivate audiences.",
    theme: { border: "border-purple-100", iconText: "text-purple-600" },
    icon: (
      /* Spotlight Reveal Icon */
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <path d="M10 14l14 10 14-10"
          stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="30" r="6"
          stroke="currentColor" strokeWidth="2"/>
        <path d="M24 8v6"
          stroke="currentColor" strokeWidth="2"
          strokeLinecap="round"/>
      </svg>
    ),
  },

  {
    id: 4,
    title: "Wedding Events",
    desc: "Luxury weddings crafted with personalized themes, décor, and flawless execution.",
    theme: { border: "border-pink-100", iconText: "text-pink-600" },
    icon: (
      /* Ceremony Heart Icon */
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <path
          d="M24 36s-10-6-10-14a6 6 0 0110-4 6 6 0 0110 4c0 8-10 14-10 14z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    id: 5,
    title: "Exhibitions & AV Solutions",
    desc: "State-of-the-art audiovisual setups enhancing exhibitions and live presentations.",
    theme: { border: "border-emerald-100", iconText: "text-emerald-600" },
    icon: (
      /* LED Screen Icon */
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <rect x="8" y="12" width="32" height="18"
          stroke="currentColor" strokeWidth="2"/>
        <path d="M18 36h12"
          stroke="currentColor" strokeWidth="2"
          strokeLinecap="round"/>
      </svg>
    ),
  },

  {
    id: 6,
    title: "Gala Dinners & Awards",
    desc: "Sophisticated gala evenings and award ceremonies designed for memorable celebrations.",
    theme: { border: "border-orange-100", iconText: "text-orange-600" },
    icon: (
      /* Medal Award Icon */
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <circle cx="24" cy="22" r="8"
          stroke="currentColor" strokeWidth="2"/>
        <path d="M20 30l-4 10 8-4 8 4-4-10"
          stroke="currentColor" strokeWidth="2"
          strokeLinejoin="round"/>
      </svg>
    ),
  },

  {
    id: 7,
    title: "Live Shows & Concerts",
    desc: "Dynamic concerts and live entertainment powered by lighting, sound, and staging expertise.",
    theme: { border: "border-red-100", iconText: "text-red-600" },
    icon: (
      /* Stage Lights Icon */
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <path d="M12 12h24l-4 10H16z"
          stroke="currentColor" strokeWidth="2"/>
        <path d="M18 22l-4 14M30 22l4 14"
          stroke="currentColor" strokeWidth="2"
          strokeLinecap="round"/>
      </svg>
    ),
  },

  {
    id: 8,
    title: "Event Production & Management",
    desc: "End-to-end planning, staging, talent coordination, and full event execution services.",
    theme: { border: "border-cyan-100", iconText: "text-cyan-600" },
    icon: (
      /* Control Dashboard Icon */
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <rect x="8" y="12" width="32" height="24"
          stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="24" r="2"
          stroke="currentColor" strokeWidth="2"/>
        <circle cx="30" cy="24" r="2"
          stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

/* ================= ANIMATION ================= */

function AnimatedIcon({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ================= APP ================= */

export default function App() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-8xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-default text-gray-600">
            Crafting <span className="text-orange-400">Extraordinary Events</span>
          </h1>
          <p className="text-slate-500 mt-4 italic">
            We transform visions into unforgettable experiences through creativity,
            precision planning, and world-class production.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <AnimatedIcon key={s.id} delay={i * 60}>
              <div className={`bg-white border-2 p-8 hover:shadow-xl transition ${s.theme.border}`}>
                <div className={`w-20 h-20 mx-auto flex items-center justify-center mb-6 ${s.theme.iconText}`}>
                  {s.icon}
                </div>

                <h3 className="text-xl text-center text-slate-600 mb-3 uppercase">
                  {s.title}
                </h3>

                <p className="text-sm text-slate-500 text-center">
                  {s.desc}
                </p>
              </div>
            </AnimatedIcon>
          ))}
        </div>

      </div>
    </div>
  );
}