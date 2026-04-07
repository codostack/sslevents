import React, { useState, useEffect, useRef } from "react";

const services = [
  {
    id: 1,
    title: "Full Event Planning",
    desc: "End-to-end event coordination from concept to close.",
    theme: { border: "border-orange-100", iconText: "text-orange-600" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
        <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Corporate Conferences",
    desc: "Professional setups for summits, AGMs, and product launches.",
    theme: { border: "border-blue-100", iconText: "text-blue-600" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <rect x="8" y="12" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M16 20h16M16 28h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Gala & Award Nights",
    desc: "Luxury galas, award ceremonies, and red-carpet events.",
    theme: { border: "border-purple-100", iconText: "text-purple-600" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <path d="M24 8l4 8 9 1.3-6.5 6.3 1.5 9L24 28l-8 4.6 1.5-9L11 17.3l9-1.3z"
          stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Wedding Management",
    desc: "Bespoke wedding days crafted around your love story.",
    theme: { border: "border-pink-100", iconText: "text-pink-600" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <rect x="10" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 20h28" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },

  /* ✅ REPLACED SERVICE 1 */
  {
    id: 5,
    title: "Exhibition AV Equipment",
    desc: "Advanced audio-visual solutions designed for exhibitions, trade shows, and interactive display environments.",
    theme: { border: "border-emerald-100", iconText: "text-emerald-600" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <rect x="6" y="10" width="36" height="20" rx="2"
          stroke="currentColor" strokeWidth="2"/>
        <path d="M16 38h16M20 30v8M28 30v8"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },

  /* ✅ REPLACED SERVICE 2 */
  {
    id: 6,
    title: "AV Equipment Rentals",
    desc: "High-quality speakers, LED walls, microphones, and projection systems available for short and long-term rentals.",
    theme: { border: "border-cyan-100", iconText: "text-cyan-600" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <rect x="14" y="8" width="20" height="32" rx="3"
          stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="18" r="4"
          stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="30" r="6"
          stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },

  {
    id: 7,
    title: "Live Entertainment",
    desc: "Curated performers, AV, lighting, and stage production.",
    theme: { border: "border-red-100", iconText: "text-red-600" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
        <path d="M24 14v10l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Brand Activations",
    desc: "Immersive brand experiences that resonate and convert.",
    theme: { border: "border-indigo-100", iconText: "text-indigo-600" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <path d="M12 20h24l-3 16H15z"
          stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="24" cy="30" r="3"
          stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

function AnimatedIcon({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-8xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-4xl font-default mb-6 tracking-tight bg-gray-600 bg-clip-text text-transparent">
            Comprehensive Services <span className="text-orange-400">for Every Occasion</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed italic">
              "To transform ordinary spaces into extraordinary experiences by blending
              unparalleled creativity with precision logistics."
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <AnimatedIcon key={s.id} delay={i * 50}>
              <div className={`h-full bg-white border-2 p-8 transition-all duration-300 hover:shadow-xl ${s.theme.border}`}>
                <div className={`w-20 h-20 mx-auto flex items-center justify-center mb-6 ${s.theme.iconText}`}>
                  {s.icon}
                </div>

                <h3 className="text-xl font-default text-slate-600 mb-3 uppercase tracking-tight text-center">
                  {s.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed text-center line-clamp-3">
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