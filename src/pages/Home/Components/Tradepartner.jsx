import React, { useState } from "react";

const services = [
  {
    id: "01",
    title: "Corporate Events",
    desc: "At SSL Events and Productions, we specialize in designing and delivering corporate events that leave a lasting impression.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    popupDetail:
      "We plan and execute impactful corporate events including meetings, award ceremonies, and company celebrations with complete logistics management, branding, and professional coordination.",
    tag: "Most Popular",
  },
  {
    id: "02",
    title: "Conferences",
    desc: "At SSL Events and Productions, we specialize in organizing professional conferences that inspire, inform, and connect.",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    popupDetail:
      "Our conference solutions include venue selection, speaker coordination, stage setup, delegate management, and seamless technical support to ensure engaging and successful professional gatherings.",
    tag: "Premium",
  },
  {
    id: "03",
    title: "Product Launches",
    desc: "At SSL Events and Productions, we know that a successful product launch is more than just an event—it’s a pivotal moment.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    popupDetail:
      "We create high-impact product launches with creative staging, media integration, branding experiences, audience engagement strategies, and flawless execution that maximizes brand visibility.",
    tag: "Business",
  },
  {
    id: "04",
    title: "Wedding Events",
    desc: "At SSL Events and Productions, we understand that your wedding day is one of the most cherished moments of your life.",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    popupDetail:
      "Our wedding planning services include theme design, décor, catering coordination, entertainment, photography management, and complete day-of execution for a stress-free celebration.",
    tag: "Signature",
  },
  {
    id: "05",
    title: "Exhibition AV Equipment",
    desc: "At SSL Events and Productions, we provide state-of-the-art AV equipment to enhance your exhibition experience.",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    popupDetail:
      "We supply advanced sound systems, LED displays, lighting setups, and technical support to ensure your exhibition booths and presentations deliver maximum impact and clarity.",
    tag: "Exclusive",
  },
  {
    id: "06",
    title: "AV Equipment Rentals",
    desc: "At SSL Events and Productions, we understand the importance of high-quality audio-visual (AV) equipment in.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    popupDetail:
      "Our AV rental services provide reliable audio, video, and lighting equipment along with setup, testing, and on-site technical assistance for smooth and professional event execution.",
    tag: "Always On",
  },
];

export default function EventServiceShowcase() {
  const [active, setActive] = useState(services[0]);

  return (
    <div className="min-h-screen bg-white px-6 py-16 flex items-center justify-center font-serif">
      <div className="max-w-[1540px] w-full">
        
        {/* HEADER SECTION - Now centered at the top */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-5xl mb-6 tracking-tight bg-gray-600 bg-clip-text text-transparent">
            About our  
            <span className="text-orange-400"> Company & Services </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed italic">
              "Welcome to SSL Events Dubai, where every celebration becomes a masterpiece! We are your trusted partner in creating unforgettable moments, whether it's a dazzling wedding, a corporate gala, or a private celebration."
            </p>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-10 items-start">
          
          {/* LEFT SIDE: Service Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.id}
                onClick={() => setActive(s)}
                className={`group relative bg-white squared-2xl border-2 overflow-hidden shadow-sm transition-all duration-300 cursor-pointer flex flex-col h-[300px] ${
                  active.id === s.id 
                  ? "border-[#551A8B] shadow-purple-200 shadow-lg scale-[1.02] z-10" 
                  : "border-[#ede8f5] hover:border-purple-300"
                }`}
              >
                {/* Image Section */}
                <div className="w-full h-36 shrink-0 overflow-hidden relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#551A8B]/90 backdrop-blur-sm rounded-lg px-2 py-0.5 text-[10px] font-bold text-purple-100 font-sans tracking-wider">
                    {s.id}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col flex-grow overflow-hidden">
                  <h3 className="text-[14px] font-default text-[#1a0033] mb-1.5 leading-tight uppercase tracking-tight font-bold">
                    {s.title}
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed font-sans overflow-hidden">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Detail Panel (Sticky-like behavior) */}
          <div className="relative bg-white rounded-[24px] border border-[#ede8f5] shadow-2xl overflow-hidden flex flex-col h-full lg:sticky lg:top-12 min-h-[620px]">
            {/* Top Image Section */}
            <div className="relative h-[240px] overflow-hidden">
              <img
                src={active.img}
                alt={active.title}
                key={active.id}
                className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0033] via-[#1a0033]/20 to-transparent" />
              
              <div className="absolute top-6 left-6">
                <span className="bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full text-[10px] font-bold text-white font-sans uppercase tracking-widest">
                  {active.tag}
                </span>
              </div>

              <div className="absolute bottom-6 left-8 right-8 text-left">
                <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                  {active.title}
                </h2>
                <div className="w-12 h-1 bg-[#FF5B00] rounded-full" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col justify-between flex-1 text-left">
              <div>
                <p className="text-gray-600 text-[15px] leading-[1.7] font-sans mb-8 italic border-l-4 border-purple-100 pl-6">
                  "{active.popupDetail}"
                </p>

                {/* Performance Stats */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[["200+", "Events"], ["15+", "Years"], ["98%", "Rating"]].map(([v, l]) => (
                    <div key={l} className="bg-purple-50 rounded-xl py-4 px-2 text-center border border-purple-50">
                      <div className="text-xl font-bold text-[#551A8B]">{v}</div>
                      <div className="text-[9px] text-purple-400 font-sans font-bold uppercase tracking-tighter mt-1">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-[#551A8B] to-[#7c3aed] hover:from-[#FF5B00] hover:to-[#ff8100] text-white py-4 rounded-xl font-bold font-sans text-sm tracking-[2px] uppercase transition-all duration-300 shadow-lg shadow-purple-100 transform active:scale-[0.98]">
                Reserve Your Date
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}