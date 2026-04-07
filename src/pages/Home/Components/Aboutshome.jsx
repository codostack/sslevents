import React, { useEffect, useState, useRef, useCallback } from "react";
import { Briefcase, Wind, MapPin, Music, Camera, Utensils, Flower2, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { icon: Briefcase, label: "Corporate Events", tag: "Business", short: "Corporate", desc: "High-impact conferences, executive summits & unforgettable brand activations.", color: "#0a1628", accent: "#2563eb", light: "#dbeafe", grad: "linear-gradient(135deg, #0a1628 60%, #1e3a7b)" },
  { icon: Wind, label: "Dream Weddings", tag: "Romance", short: "Weddings", desc: "Breathtaking ceremonies, floral elegance & memories that last forever.", color: "#1e0533", accent: "#a21caf", light: "#fae8ff", grad: "linear-gradient(135deg, #1e0533 60%, #5b21b6)" },
  { icon: MapPin, label: "Destination", tag: "Travel", short: "Destination", desc: "Exotic venues, seamless logistics & world-class global event execution.", color: "#052e16", accent: "#16a34a", light: "#dcfce7", grad: "linear-gradient(135deg, #052e16 60%, #14532d)" },
  { icon: Music, label: "Live Concerts", tag: "Music", short: "Live Music", desc: "World-class artists, electrifying DJs & live experiences your guests will rave about.", color: "#2d1000", accent: "#ea580c", light: "#ffedd5", grad: "linear-gradient(135deg, #2d1000 60%, #7c2d12)" },
  { icon: Camera, label: "Photography", tag: "Visuals", short: "Photo & Film", desc: "Cinematic storytelling, aerial drone footage & award-winning post-production.", color: "#0c0c2e", accent: "#7c3aed", light: "#ede9fe", grad: "linear-gradient(135deg, #0c0c2e 60%, #1e1b4b)" },
  { icon: Utensils, label: "Fine Catering", tag: "Gourmet", short: "Catering", desc: "Michelin-inspired menus, live cooking stations & world-class bar service.", color: "#3d0808", accent: "#dc2626", light: "#fee2e2", grad: "linear-gradient(135deg, #3d0808 60%, #7f1d1d)" },
  { icon: Flower2, label: "Floral Design", tag: "Décor", short: "Florals", desc: "Bespoke installations, archways & centrepieces that define the space.", color: "#2d0a24", accent: "#db2777", light: "#fce7f3", grad: "linear-gradient(135deg, #2d0a24 60%, #831843)" },
  { icon: Star, label: "VIP Experience", tag: "Exclusive", short: "VIP", desc: "Priority access, private lounges, concierge & red-carpet treatment.", color: "#0f1f05", accent: "#65a30d", light: "#ecfccb", grad: "linear-gradient(135deg, #0f1f05 60%, #1a3a0a)" },
];

export default function EventDesign() {
  const [active, setActive] = useState(0);
  const [animDir, setAnimDir] = useState("in-next");
  const intervalRef = useRef(null);

  const startAuto = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setAnimDir("out-next");
      setTimeout(() => {
        setActive((a) => (a + 1) % services.length);
        setAnimDir("in-next");
      }, 350);
    }, 3500);
  }, []);

  const goTo = (i, dir = "next") => {
    if (i === active) return;
    clearInterval(intervalRef.current);
    setAnimDir("out-" + dir);
    setTimeout(() => {
      setActive(i);
      setAnimDir("in-" + dir);
      startAuto();
    }, 350);
  };

  const prev = () => goTo((active - 1 + services.length) % services.length, "prev");
  const nextSlide = () => goTo((active + 1) % services.length, "next");

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, [startAuto]);

  const pkg = services[active];
  const Icon = pkg.icon;

  const animClass = {
    "in-next": "animate-in-next",
    "in-prev": "animate-in-prev",
    "out-next": "animate-out-next",
    "out-prev": "animate-out-prev"
  }[animDir];

  return (
    <div className="w-full min-h-screen bg-white font-['DM_Sans'] flex items-center p-10 lg:p-16">
      <style>{`
        @keyframes inN { from { opacity: 0; transform: translateX(22px) scale(0.97); } to { opacity: 1; transform: translateX(0) scale(1); } }
        @keyframes inP { from { opacity: 0; transform: translateX(-22px) scale(0.97); } to { opacity: 1; transform: translateX(0) scale(1); } }
        @keyframes outN { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(-18px); } }
        @keyframes outP { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(18px); } }
        .animate-in-next { animation: inN 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-in-prev { animation: inP 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-out-next { animation: outN 0.35s cubic-bezier(0.4, 0, 1, 1) forwards; }
        .animate-out-prev { animation: outP 0.35s cubic-bezier(0.4, 0, 1, 1) forwards; }
        .animate-prog-fill { animation: progfill 3.5s linear infinite; }
        @keyframes progfill { from { width: 0% } to { width: 100% } }
      `}</style>

      <div className="grid grid-cols-[3.5fr_4fr_3.5fr] gap-10 items-stretch w-full max-w-[1600px] mx-auto min-h-[85vh]">
        
        {/* Left Column: Hero Image */}
        <div className="relative overflow-hidden rounded-2xl group">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
            alt="Event Atmosphere"
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Center Column: About Content */}
        <div className="flex flex-col justify-center px-6">
          <span className="text-xs font-bold tracking-[0.3em] text-slate-400 mb-6 uppercase">Established 2012</span>
          <h1 className="font-['Playfair_Display'] font-light text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.95] tracking-tight text-slate-800 uppercase mb-8">
            ABOUT<br />OUR<br /><strong className="font-black text-slate-900 block">COMPANY</strong>
          </h1>
          <div className="space-y-6">
            <p className="text-slate-500 text-[1rem] leading-[1.8] max-w-[440px]">
              We specialize in crafting unforgettable events that combine creativity, 
              precision, and flawless execution. Our team transforms your vision into 
              sensory-rich experiences that resonate long after the final toast.
            </p>
            <p className="text-slate-400 text-[0.9rem] leading-[1.7] max-w-[400px] border-l-2 border-slate-100 pl-6 italic">
              "Excellence is not an act, but a habit. We weave luxury into every detail 
              of our corporate and private celebrations."
            </p>
          </div>
        </div>

        {/* Right Column: Advertisement Experience Card */}
        <div className="flex flex-col justify-center">
          <div 
            className={`relative overflow-hidden rounded-[2.5rem] p-10 h-[650px] flex flex-col justify-between text-white transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] ${animClass}`}
            style={{ background: pkg.grad }}
          >
            {/* Background Watermark Icon */}
            <div className="absolute top-[-5%] right-[-10%] opacity-10 pointer-events-none transition-transform duration-1000 group-hover:scale-110">
              <Icon size={320} strokeWidth={1} />
            </div>

            {/* Card Header */}
            <div className="relative z-10">
              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {pkg.tag}
              </div>
              <h2 className="text-4xl font-['Playfair_Display'] font-bold leading-[1.1] mb-5">
                {pkg.label}
              </h2>
              <p className="text-white/70 text-[0.95rem] leading-relaxed max-w-[260px]">
                {pkg.desc}
              </p>
            </div>

            {/* Card Footer */}
            <div className="relative z-10">
              <button 
                className="group flex items-center justify-between w-full bg-white text-black px-7 py-5 rounded-2xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 mb-10 shadow-lg"
                style={{ color: pkg.color }}
              >
                BOOK THE EXPERIENCE
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Navigation UI */}
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <button 
                      onClick={prev}
                      className="p-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="p-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-tighter opacity-40 font-bold mb-1">Service</span>
                    <span className="text-lg font-['Playfair_Display'] italic">
                      0{active + 1} <span className="text-sm opacity-30 mx-1">/</span> 0{services.length}
                    </span>
                  </div>
                </div>

                {/* Loading Progress Bar */}
                <div className="h-[3px] w-full bg-white/10 relative rounded-full overflow-hidden">
                  <div 
                    key={active}
                    className="absolute top-0 left-0 h-full bg-white animate-prog-fill"
                  />
                </div>

                {/* Tiny Indicators */}
                <div className="flex gap-2">
                  {services.map((_, i) => (
                    <div 
                      key={i}
                      onClick={() => goTo(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${active === i ? 'w-10 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}