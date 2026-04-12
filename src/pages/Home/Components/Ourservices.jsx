import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  Presentation,
  Rocket,
  Heart,
  MonitorSpeaker,
  Speaker
} from "lucide-react";
import home7 from "../../../assets/home/home7.jpg";
import home8 from "../../../assets/home/home8.jpg";

/* ─── CSS ─── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

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

.svc-visible .svc-title-wrap { animation: fadeDown .6s ease forwards; }
.svc-visible .svc-card-left { animation: fadeSlideLeft .6s ease forwards; }
.svc-visible .svc-card-right { animation: fadeSlideRight .6s ease forwards; }
`;

/* ─── Icons ─── */
const CorporateIcon = <Building2 size={56} strokeWidth={1.5} className="text-white" />;
const ConferenceIcon = <Presentation size={56} strokeWidth={1.5} className="text-white" />;
const LaunchIcon = <Rocket size={56} strokeWidth={1.5} className="text-white" />;
const WeddingIcon = <Heart size={56} strokeWidth={1.5} className="text-white" />;
const ExhibitionIcon = <MonitorSpeaker size={56} strokeWidth={1.5} className="text-white" />;
const RentalIcon = <Speaker size={56} strokeWidth={1.5} className="text-white" />;

/* ─── Services ─── */
const leftServices = [
  {
    title: "Corporate Events",
    icon: CorporateIcon,
    desc:
      "Professional planning and execution of corporate meetings, seminars, and business gatherings with AV support."
  },
  {
    title: "Product Launches",
    icon: LaunchIcon,
    desc:
      "Create impactful product unveilings with immersive visuals, sound systems, and stage production solutions."
  },
  {
    title: "Exhibition AV Equipment",
    icon: ExhibitionIcon,
    desc:
      "Advanced audio-visual solutions tailored for exhibitions, trade shows, and display environments."
  }
];

const rightServices = [
  {
    title: "Conferences",
    icon: ConferenceIcon,
    desc:
      "Complete conference solutions including sound reinforcement, presentation systems, and live technical support."
  },
  {
    title: "Wedding Events",
    icon: WeddingIcon,
    desc:
      "Elegant wedding production with professional lighting, audio systems, staging, and seamless coordination."
  },
  {
    title: "AV Equipment Rentals",
    icon: RentalIcon,
    desc:
      "High-quality AV equipment rentals including speakers, LED displays, microphones, and projection systems."
  }
];

function Card({ title, icon, desc, side, index }) {
  const delay = `${0.2 + index * 0.15}s`;

  return (
    <div className={`svc-card-${side}`} style={{ animationDelay: delay }}>
      
      {/* LEFT SIDE */}
      {side === "left" && (
        <div className="relative h-[130px] w-full max-w-[330px] p-2 mx-auto lg:mx-0">

          {/* ICON */}
<div
  className="
    hidden xl:flex
    absolute top-1/2 -translate-y-1/2
    -left-[111px]
    w-[120px] h-[120px] rounded-full
    items-center justify-center
    bg-gradient-to-br from-[#f7c25a] to-[#e08a0a]
    shadow-xl
  "
>
            {React.cloneElement(icon, { size: 56 })}
          </div>

          {/* TEXT */}
          <div className="
            max-w-[260px]
            text-center lg:text-left
            mx-auto lg:ml-[25px]
          ">
            <h3 className="text-white font-bold text-[18px]">{title}</h3>

            <p className="text-[#c9b8e8] text-[13.5px] mt-1 leading-[1.7] line-clamp-3">
              {desc}
            </p>
          </div>
        </div>
      )}

      {/* RIGHT SIDE */}
      {side === "right" && (
        <div className="relative h-[130px] w-full max-w-[330px] p-2 mx-auto lg:mx-0">

          {/* ICON */}
<div
  className="
    hidden xl:flex
    absolute top-1/2 -translate-y-1/2
    -right-[107px]
    w-[120px] h-[120px] rounded-full
    items-center justify-center
    bg-gradient-to-br from-[#f7c25a] to-[#e08a0a]
    shadow-xl
  "
>
            {React.cloneElement(icon, { size: 56 })}
          </div>

          {/* TEXT */}
          <div className="
            max-w-[260px]
            text-center lg:text-left
            mx-auto
          ">
            <h3 className="text-white font-bold text-[18px]">{title}</h3>

            <p className="text-[#c9b8e8] text-[13.5px] mt-1 leading-[1.7] line-clamp-3">
              {desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── MAIN ─── */
export default function ServicesSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    });

    if (ref.current) obs.observe(ref.current);
  }, []);

  return (
    <>
      <style>{CSS}</style>

      <section
        ref={ref}
        className="w-full min-h-[650px] lg:h-[650px]
        flex flex-col lg:flex-row overflow-hidden font-[Nunito]"
      >
        {/* LEFT IMAGE */}
        <div
          className="w-full h-[220px] lg:w-[26%] lg:h-auto bg-cover bg-center"
          style={{
           backgroundImage: `url(${home7})`
          }}
        />

        {/* CENTER */}
        <div
          className={`${visible ? "svc-visible" : ""}
          flex-1 flex flex-col items-center
          px-6 sm:px-10 lg:px-12
          py-10 lg:py-12
          bg-gradient-to-br from-[#6a1fa8] via-[#551A8B] to-[#3d1266]`}
        >
          {/* TITLE */}
          <div className="svc-title-wrap flex items-center gap-5 mb-10">
            <span className="h-[2px] w-[44px] bg-[#e89010]" />
            <h2 className="text-white text-[32px] tracking-[0.22em]">
              Services
            </h2>
            <span className="h-[2px] w-[44px] bg-[#e89010]" />
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12 w-full">
            <div className="flex flex-col gap-10">
              {leftServices.map((s, i) => (
                <Card key={i} {...s} side="left" index={i} />
              ))}
            </div>

            <div className="flex flex-col gap-10">
              {rightServices.map((s, i) => (
                <Card key={i} {...s} side="right" index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="w-full h-[220px] lg:w-[26%] lg:h-auto bg-cover bg-center"
          style={{
           backgroundImage: `url(${home8})`
          }}
        />
      </section>
    </>
  );
}