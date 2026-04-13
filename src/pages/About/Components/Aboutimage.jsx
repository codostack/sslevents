import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; // ✅ ONLY ADD
import about5 from "../../../assets/about/about5.jpg";
import about7 from "../../../assets/about/about7.jpg";
import about8 from "../../../assets/about/about1.jpg";
import about9 from "../../../assets/home/home14.jpg";
import about10 from "../../../assets/about/about10.jpg";
import about12 from "../../../assets/about/about12.jpg";

const partySets = [
  {
    id: 1,
    hero: about5,
    sideTop: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    sideBottom: about7,
    extraLeft: about8,
  },
  {
    id: 2,
    hero: about9,
    sideTop: about10,
    sideBottom: "https://visionphoto.ca/wp-content/uploads/2025/04/2025_JUNOS_Vancouver_VCC_InnovationLighting_006_Web.jpg",
    extraLeft: about12,
  }
];

const DarkBlurGallery = () => {
  const [index, setIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const navigate = useNavigate(); // ✅ ONLY ADD

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % partySets.length);
        setIsChanging(false);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = partySets[index];

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#020617]">
      
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-black z-10 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Text */}
        <div className="flex justify-center lg:justify-start">
          <div className="text-white space-y-6 sm:space-y-8 max-w-xl text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-bold tracking-widest uppercase">
              Est. 2014
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight sm:leading-none">
              WHO <span className="text-slate-500">WE ARE</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-full sm:max-w-lg font-light text-justify lg:text-left">
              At SSL Events & Productions, we craft unforgettable experiences through expert planning, innovative production, and flawless execution. Our team transforms visions into extraordinary corporate events, luxury weddings, and large-scale productions with creativity, precision, and personalized service. Founded in 2014, and operating across Dubai and India, SSL has quickly grown into one of the most elite event management and production companies. Every project balances innovation, professionalism, and attention to detail, ensuring seamless and memorable experiences for every client.
            </p>

            {/* ✅ ONLY THIS LINE CHANGED */}
            <button
              onClick={() => navigate("/services")}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-sm overflow-hidden transition-all hover:bg-amber-400"
            >
              <span className="relative z-10">EXPLORE SERVICES</span>
            </button>
          </div>
        </div>

        {/* Right Side Image Grid */}
        <div 
          className={`hidden lg:grid grid-cols-3 gap-6 h-[560px] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform
          ${isChanging ? 'opacity-0 scale-110 blur-xl' : 'opacity-100 scale-100 blur-0'}`}
        >
          <div className="flex items-center">
            <div className="h-3/5 w-full rounded-xl overflow-hidden shadow-2xl border border-white/5 relative group">
              <img src={current.extraLeft} alt="party" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          </div>

          <div className="h-full w-full rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10 relative group">
            <img 
              src={current.hero} 
              alt="hero" 
              className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-125" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          </div>

          <div className="flex flex-col gap-6 h-full">
            <div className="h-[35%] w-full rounded-xl overflow-hidden border border-white/5 group">
              <img src={current.sideTop} alt="dj" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="h-[55%] w-full rounded-xl overflow-hidden border border-white/5 group">
              <img src={current.sideBottom} alt="night" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DarkBlurGallery;