import React, { useEffect, useRef, useState } from "react";
import { 
  Building2, 
  Heart, 
  Music, 
  GlassWater, 
  Users, 
  Palette 
} from "lucide-react";

/* ─── Keyframes via Tailwind layer ─── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400&family=Nunito:wght@400;600;700&display=swap');

@keyframes fadeSlideLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fadeSlideRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes pulseRing {
  0%   { box-shadow: 0 0 0 0px rgba(232,144,16,0.55); }
  70%  { box-shadow: 0 0 0 10px rgba(232,144,16,0); }
  100% { box-shadow: 0 0 0 0px rgba(232,144,16,0); }
}
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes lineGrow {
  from { width: 0; }
  to   { width: 44px; }
}

.svc-visible .svc-title-wrap { animation: fadeDown 0.6s ease forwards; }
.svc-visible .svc-card-left { animation: fadeSlideLeft 0.6s ease forwards; }
.svc-visible .svc-card-right { animation: fadeSlideRight 0.6s ease forwards; }

.icon-hover:hover { animation: pulseRing 0.9s ease-out; }
.shimmer-line {
  background: linear-gradient(90deg, transparent, #e89010, #f7c25a, #e89010, transparent);
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}
.line-animate { width: 0; animation: lineGrow 0.5s ease forwards; }
`;

/* ─── Icons ─── */


/* --- Individual Icon Assignments --- */

// 1. Corporate Events
const CorporateIcon = <Building2 size={56} strokeWidth={1.5} className="text-white" />;

// 2. Wedding Management
const WeddingIcon = <Heart size={56} strokeWidth={1.5} className="text-white" />;

// 3. Entertainment Events
const EntertainmentIcon = <Music size={56} strokeWidth={1.5} className="text-white" />;

// 4. Party Events
const PartyIcon = <GlassWater size={56} strokeWidth={1.5} className="text-white" />;

// 5. Family Events
const FamilyIcon = <Users size={56} strokeWidth={1.5} className="text-white" />;

// 6. Design & Decor
const DecorIcon = <Palette size={56} strokeWidth={1.5} className="text-white" />;

/* ─── Data ─── */
const DESC = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered";

const leftServices = [
  { title: "Corporate Events", icon: CorporateIcon, desc: "...", iconBg: "from-[#f7c25a] to-[#e08a0a]" },
  { title: "Wedding Management", icon: WeddingIcon, desc: "...", iconBg: "from-[#f7c25a] to-[#e08a0a]" },
  { title: "Entertainment", icon: EntertainmentIcon, desc: "...", iconBg: "from-[#f7c25a] to-[#e08a0a]" },
];

const rightServices = [
  { title: "Party Events", icon: PartyIcon, desc: "...", iconBg: "from-[#f7c25a] to-[#e08a0a]" },
  { title: "Family Events", icon: FamilyIcon, desc: "...", iconBg: "from-[#f7c25a] to-[#e08a0a]" },
  { title: "Design & Decor", icon: DecorIcon, desc: "...", iconBg: "from-[#f7c25a] to-[#e08a0a]" },
];
/* ─── Card ─── */
function Card({ title, icon, side, index }) {
  const delay = `${0.2 + index * 0.15}s`;

  return (
    <div
      className={`svc-card-${side} flex items-start gap-4 group`}
      style={{ animationDelay: delay }}
    >
      {/* LEFT SIDE CARD */}
      {side === "left" && (
        <>
          <div className="flex items-start gap-6 p-6 rounded-2xl mt-[-30px] w-[340px]">
  
  {/* Icon */}
  <div
    className="ml-[-120px] icon-hover w-[120px] h-[120px] rounded-full 
               flex items-center justify-center
               bg-gradient-to-br from-[#f7c25a] to-[#e08a0a] flex-shrink-0">
    {icon}
  </div>

  {/* Text */}
  <div className="pt-2">
    <h3 className="text-white font-bold text-[18px] tracking-wide 
                   group-hover:text-[#f7c25a] transition">
      {title}
    </h3>
    <p className="text-[#c9b8e8] text-[13.5px] leading-[1.8] max-w-[230px] mt-1">
      {DESC}
    </p>
  </div>

</div>
        </>
      )}

      {/* RIGHT SIDE CARD */}
      {side === "right" && (
        <>
       <div className="relative w-[360px] ml-[80px] mt-[-40px] p-6 gap-6">
  
  {/* Icon Overlapping More */}
  <div className="absolute -right-[120px] top-1/2 -translate-y-1/2
                  w-[120px] h-[120px] rounded-full
                  flex items-center justify-center
                  bg-gradient-to-br from-[#f7c25a] to-[#e08a0a] shadow-xl">
    {icon}
  </div>

  {/* Text */}
 <div className="pt-2 max-w-[230px]">
  <h3 className="text-white font-bold text-[18px] tracking-wide 
                 group-hover:text-[#f7c25a] transition">
    {title}
  </h3>

  <p className="text-[#c9b8e8] text-[13.5px] leading-[1.8] max-w-[230px] mt-[-2px]">
    {DESC}
  </p>
</div>

</div>
        </>
      )}
    </div>
  );
}

/* ─── Main ─── */
export default function ServicesSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{CSS}</style>

      <section ref={ref} className="w-full h-[650px] flex overflow-hidden font-[Nunito]">
        
        {/* LEFT IMAGE */}
        <div className="w-[26%] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80')" }}
        />

        {/* CENTER PANEL */}
        <div className={`${visible ? "svc-visible" : ""} relative flex-1 flex flex-col items-center
         px-12 py-12 bg-gradient-to-br from-[#6a1fa8] via-[#551A8B] to-[#3d1266]`}>

          {/* shimmer lines */}
          <div className="absolute top-0 left-0 right-0 h-[3px] shimmer-line"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[3px] shimmer-line"></div>

          {/* TITLE */}
          <div className="svc-title-wrap flex items-center gap-5 mb-10">
            <span className={`${visible ? "line-animate" : ""} h-[2px] bg-[#e89010] block`}></span>
            <h2 className="text-white text-[32px] tracking-[0.22em] font-light">
              Services
            </h2>
            <span className={`${visible ? "line-animate" : ""} h-[2px] bg-[#e89010] block`}></span>
          </div>

          {/* GRID */}
          {/* GRID */}
<div className="grid grid-cols-2 gap-x-12 gap-y-10 w-full">
  <div className="flex flex-col gap-10">
    {/* Changed leftCol to leftServices */}
    {leftServices.map((s, i) => (
      <Card key={i} title={s.title} icon={s.icon} side="left" index={i} />
    ))}
  </div>

  <div className="flex flex-col gap-10">
    {/* Changed rightCol to rightServices */}
    {rightServices.map((s, i) => (
      <Card key={i} title={s.title} icon={s.icon} side="right" index={i} />
    ))}
  </div>
</div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[26%] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80')" }}
        />
      </section>
    </>
  );
}