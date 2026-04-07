import React, { useState, useEffect } from 'react';

const partySets = [
  {
    id: 1,
    hero: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    sideTop: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&q=80",
    sideBottom: "https://images.unsplash.com/photo-1514525253361-bee8a1874aa9?w=500&q=80",
    extraLeft: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&q=80",
  },
  {
    id: 2,
    hero: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80",
    sideTop: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80",
    sideBottom: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=500&q=80",
    extraLeft: "https://images.unsplash.com/photo-1429962714451-bb934ecbb4ec?w=500&q=80",
  }
];

const DarkBlurGallery = () => {
  const [index, setIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

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
      
      {/* 1. Deep Dark Background with Subtle Blur Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] scale-110"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514525253361-bee8a1874aa9?w=1600&q=80')` }}
      />
      {/* DARK SHADE: Midnight Blue to Black with 90% opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-black z-10 backdrop-blur-[2px]" />

      {/* 2. Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Minimalist Dark Text */}
        <div className="text-white space-y-8">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-bold tracking-widest uppercase">
            Est. 2026
          </div>
          <h1 className="text-6xl lg:text-4xl font-bold tracking-tighter leading-none">
            WHO <span className="text-slate-500">WE ARE</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-lg font-light text-justify">
            Crafting immersive nightlife experiences through light, sound, and precision. 
            A collective of creators dedicated to the art of the event. Crafting immersive nightlife experiences through light, sound, and precision. 
            A collective of creators dedicated to the art of the event. Crafting immersive nightlife experiences through light, sound, and precision. 
            A collective of creators dedicated to the art of the event.
          </p>
          <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-sm overflow-hidden transition-all hover:bg-amber-400">
            <span className="relative z-10">EXPLORE SERVICES</span>
          </button>
        </div>

        {/* Right Side: Blur-Scale Image Grid */}
        <div 
          className={`grid grid-cols-3 gap-6 h-[560px] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform
          ${isChanging ? 'opacity-0 scale-110 blur-xl' : 'opacity-100 scale-100 blur-0'}`}
        >
          
          {/* Col 1: Extra Left (Blurred backdrop effect) */}
          <div className="flex items-center">
            <div className="h-3/5 w-full rounded-xl overflow-hidden shadow-2xl border border-white/5 relative group">
              <img src={current.extraLeft} alt="party" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          </div>

          {/* Col 2: Hero Center (High Scale & Focus) */}
          <div className="h-full w-full rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10 relative group">
            <img 
              src={current.hero} 
              alt="hero" 
              className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-125" 
            />
            {/* Dark vignette over center image */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          </div>

          {/* Col 3: Stacked (Asymmetric Scale) */}
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