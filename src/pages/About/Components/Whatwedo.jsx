import React, { useEffect, useState, useRef, useCallback } from "react";
import { Briefcase, Wind, MapPin, Music, Camera, Utensils, Flower2, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import about13 from "../../../assets/about/about13.avif";

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
    "out-prev": "animate-out-prev",
  }[animDir];

  return (
    <div className="w-full min-h-screen bg-white font-['DM_Sans']">
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

      {/* ── DESKTOP layout (lg+): unchanged ── */}
      <div className="hidden lg:flex p-10 lg:p-16 min-h-screen">
        <div className="grid grid-cols-[4fr_5fr_3fr] gap-10 items-stretch w-full min-h-[90vh]">

          {/* Left Column: Main Image */}
          <div className="h-full">
            <img
              src={about13}
              alt="Main Event"
              className="w-full h-full object-cover rounded-[10px] min-h-[90vh] block"
            />
          </div>

          {/* Center Column: Typography */}
          <div className="flex flex-col justify-center py-8">
            <h1 className="font-['Playfair_Display'] font-light text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] tracking-tight text-slate-800 uppercase mb-8">
              PLAN<br />A GOOD<br /><strong className="font-black text-slate-900 block">OCCASION</strong>
            </h1>
            <p className="text-slate-500 text-[0.96rem] leading-[1.85] text-justify">
              At SSL Events & Productions, we specialize in designing and delivering unforgettable events that balance creativity, precision, and flawless execution. From corporate gatherings to luxury weddings, gala nights, and immersive brand experiences, our talented and dedicated team transforms your vision into reality with passion, innovation, and personalized touches. Every celebration is crafted with meticulous planning, innovative production, and careful attention to every detail, ensuring a seamless, elegant, and extraordinary experience. We take pride in turning concepts into spectacular, memorable moments that leave lasting impressions, making every occasion a true masterpiece celebrated by all.
            </p>
          </div>

          {/* Right Column: Interaction Card */}
          <div className="flex flex-col justify-center h-full">
            <ServiceCard
              pkg={pkg}
              Icon={Icon}
              active={active}
              animClass={animClass}
              prev={prev}
              nextSlide={nextSlide}
              goTo={goTo}
            />
          </div>
        </div>
      </div>

      {/* ── MOBILE / TABLET layout (below lg) ── */}
      <div className="lg:hidden flex flex-col">

        {/* Hero image — full width, fixed height */}
        <div className="relative w-full h-[52vw] min-h-[220px] max-h-[360px] overflow-hidden">
          <img
            src={about13}
            alt="Main Event"
            className="w-full h-full object-cover block"
          />
          {/* Gradient overlay for heading legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
        </div>

        {/* Text block */}
        <div className="px-5 sm:px-8 pt-7 pb-5">
          <h1 className="font-['Playfair_Display'] font-light text-[clamp(2.2rem,9vw,3.8rem)] leading-[0.9] tracking-tight text-slate-800 uppercase mb-5">
            PLAN<br />A GOOD<br /><strong className="font-black text-slate-900 block">OCCASION</strong>
          </h1>
          <p className="text-slate-500 text-justify text-sm sm:text-[0.96rem] leading-[1.85]">
            At SSL Events & Productions, we specialize in designing and delivering unforgettable events that balance creativity, precision, and flawless execution. From corporate gatherings to luxury weddings, gala nights, and immersive brand experiences, our talented and dedicated team transforms your vision into reality with passion, innovation, and personalized touches.
          </p>
        </div>

        {/* Service card — full width with horizontal padding */}
        <div className="px-5 sm:px-8 pb-10">
          <ServiceCard
            pkg={pkg}
            Icon={Icon}
            active={active}
            animClass={animClass}
            prev={prev}
            nextSlide={nextSlide}
            goTo={goTo}
            mobile
          />
        </div>
      </div>
    </div>
  );
}

/* ── Shared card component used in both layouts ── */
function ServiceCard({ pkg, Icon, active, animClass, prev, nextSlide, goTo, mobile = false }) {
  const navigate = useNavigate();
  return (
    <div className={`rounded-[20px] overflow-hidden border border-slate-200 shadow-[0_8px_40px_rgba(0,0,0,0.10)] bg-white flex flex-col ${mobile ? "w-full" : "h-full"}`}>

      {/* Hero section */}
      <div
        className={`relative overflow-hidden flex flex-col justify-end p-5 pb-6 transition-all duration-500 ${mobile ? "min-h-[220px] sm:min-h-[260px]" : "flex-1 min-h-[280px]"}`}
        style={{ background: pkg.grad }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_28px,rgba(255,255,255,0.025)_28px,rgba(255,255,255,0.025)_29px)]" />
        <div className="absolute w-[200px] h-[200px] rounded-full -top-14 -right-14 opacity-15 blur-[40px] transition-colors duration-500" style={{ background: pkg.accent }} />

        <div className="absolute top-5 left-5 font-['Playfair_Display'] text-[54px] font-black text-white/5 leading-none select-none">
          {String(active + 1).padStart(2, "0")}
        </div>

        <div className="absolute top-5 right-5 w-[52px] h-[52px] rounded-2xl flex items-center justify-center transition-all duration-500" style={{ background: `${pkg.accent}2a` }}>
          <Icon size={24} color={pkg.accent} />
        </div>

        <div key={active} className={animClass}>
          <div className="inline-block text-[9px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-2 w-fit" style={{ background: `${pkg.accent}30`, color: pkg.light }}>
            {pkg.tag}
          </div>
          <div className="font-['Playfair_Display'] text-2xl font-bold text-white leading-[1.15] tracking-tight">
            {pkg.label}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] bg-slate-100 overflow-hidden">
        <div key={active} className="h-full animate-prog-fill transition-colors duration-500" style={{ background: pkg.accent }} />
      </div>

      {/* Description */}
      <div className="px-5 pt-4 pb-1">
        <div key={`d-${active}`} className={`${animClass} text-[12.5px] text-slate-600 leading-relaxed`}>
          {pkg.desc}
        </div>
      </div>

      {/* CTA + nav arrows */}
      <div className="px-5 py-4 flex items-center gap-2">
<button
  onClick={() =>
    navigate("/services", {
      state: { service: pkg.label } // ✅ PASS SELECTED SERVICE
    })
  }
  className="flex-1 py-[11px] rounded-[10px] text-[12px] font-semibold tracking-wider text-white flex items-center justify-center gap-1.5 transition-all duration-500 active:scale-95 shadow-sm"
  style={{ background: pkg.accent }}
>
  Learn More <ArrowRight size={13} />
</button>
        <button
          onClick={prev}
          className="w-[38px] h-[38px] rounded-[10px] border-[1.5px] border-slate-200 bg-white flex items-center justify-center cursor-pointer flex-shrink-0 hover:bg-slate-50 transition-colors"
        >
          <ChevronLeft size={14} className="text-slate-500" />
        </button>
        <button
          onClick={nextSlide}
          className="w-[38px] h-[38px] rounded-[10px] border-[1.5px] border-slate-200 bg-white flex items-center justify-center cursor-pointer flex-shrink-0 hover:bg-slate-50 transition-colors"
        >
          <ChevronRight size={14} className="text-slate-500" />
        </button>
      </div>

      <div className="h-px bg-slate-100 mx-[18px]" />

      {/* Thumbnails */}
      <div className="flex gap-1.5 px-[18px] py-[14px]">
        {services.map((s, i) => {
          const T = s.icon;
          const on = active === i;
          return (
            <div
              key={i}
              onClick={() => goTo(i, i > active ? "next" : "prev")}
              className="flex-1 h-9 rounded-[10px] flex items-center justify-center cursor-pointer border-[1.5px] transition-all duration-300 relative overflow-hidden"
              style={{
                borderColor: on ? s.accent : "transparent",
                backgroundColor: on ? `${s.accent}14` : "#f8fafc",
              }}
            >
              <T size={13} color={on ? s.accent : "#94a3b8"} />
            </div>
          );
        })}
      </div>
    </div>
  );
}