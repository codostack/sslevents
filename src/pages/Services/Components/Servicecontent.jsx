import React, { useState, useEffect } from 'react';
import { ChevronRight, Building2, Briefcase, Users, Presentation } from 'lucide-react';

const EventServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 1. Data for the Corporate Auto-Slider
  const corporateSlides = [
    {
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      title: "Corporate Galas",
      desc: "Professional networking events and galas that reflect your brand's excellence.",
      icon: <Building2 size={24} />
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      title: "Executive Summits",
      desc: "High-level strategic meetings designed for decision-makers and leaders.",
      icon: <Briefcase size={24} />
    },
    {
      image: "https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&w=800&q=80",
      title: "Tech Conferences",
      desc: "Seamless technical integration for large-scale industry innovations.",
      icon: <Presentation size={24} />
    },
    {
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      title: "Team Building",
      desc: "Strengthen company culture with curated off-site experiences.",
      icon: <Users size={24} />
    }
  ];

  // 2. Auto-scroll Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % corporateSlides.length);
    }, 4000); // 4 seconds for better readability of content
    return () => clearInterval(timer);
  }, [corporateSlides.length]);

  const services = [
    {
      title: "Corporate Excellence",
      subtitle: "Professional & Seamless",
      description: "From high-stakes board meetings to large-scale conferences,Find the perfect location to say 'I do'. We manage travel, venue scouting, and on-site coordination across the globe.Find the perfect location to say 'I do'. We manage travel, venue scouting, and on-site coordination across the globe.Find the perfect location to say 'I do'. We manage travel, venue scouting, and on-site coordination across the globe.Find the perfect location to say 'I do'. We manage travel, venue scouting, and on-site coordination across the globe. we handle the logistics so you can focus on the agenda. Our team ensures every technical detail reflects your brand’s standards.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      btnColor: "bg-teal-500",
      reverse: false
    },
    {
      title: "Social Celebrations",
      subtitle: "Memorable & Intimate",
      description: "Whether it is a milestone birthday or a private gala, we bring your vision to life with creative decor and bespoke catering.",
      image: "https://i.pinimg.com/736x/10/76/e3/1076e3f2d40c35afb835079897655653.jpg",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      btnColor: "bg-teal-400",
      reverse: true
    },
    {
      title: "Destination Weddings",
      subtitle: "Breathtaking & Romantic",
      description: "Find the perfect location to say 'I do'. We manage travel, venue scouting, and on-site coordination across the globe.Find the perfect location to say 'I do'. We manage travel, venue scouting, and on-site coordination across the globe.Find the perfect location to say 'I do'. We manage travel, venue scouting, and on-site coordination across the globe.Find the perfect location to say 'I do'. We manage travel, venue scouting, and on-site coordination across the globe.Find the perfect location to say 'I do'. We manage travel, venue scouting, and on-site coordination across the globe.Find the perfect location to say 'I do'. We manage travel, venue scouting, and on-site coordination across the globe.Find the perfect location to say 'I do'. We manage travel, venue scouting, and on-site coordination across the globe.",
      image: "https://i.pinimg.com/736x/5e/08/46/5e08463acf5c64cc2e15e8ffbb3bcf55.jpg",
      bgColor: "bg-stone-50",
      textColor: "text-gray-800",
      btnColor: "bg-teal-600",
      reverse: false
    }
  ];

  return (
    <div className="font-sans">
      {services.map((service, index) => (
        <section 
          key={index} 
          className={`relative overflow-hidden flex flex-col md:flex-row items-center min-h-[750px] ${service.bgColor}`}
        >
          {/* LEFT IMAGE SECTION */}
          <div className={`w-full md:w-1/2 p-6 lg:p-12 flex justify-center relative ${service.reverse ? 'md:order-last' : ''}`}>
            
            {index === 0 ? (
              /* --- SLIMMER CORPORATE AD PANEL --- */
              <div className="relative w-full max-w-[380px] h-[550px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500">
                
                {/* Background Images Layer */}
                {corporateSlides.map((slide, i) => (
                  <div 
                    key={i}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                        i === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    {/* Darker gradient for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  </div>
                ))}

                {/* Content Overlay (Dynamic per slide) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
                    <div>
                        <span className="inline-block bg-orange-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                            Premium Service
                        </span>
                        {/* Animated Icon container */}
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                           {corporateSlides[currentSlide].icon}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-3xl font-bold mb-3 transition-all duration-500">
                            {corporateSlides[currentSlide].title}
                        </h3>
                        <p className="text-gray-200 text-sm leading-relaxed max-w-[260px] opacity-90">
                            {corporateSlides[currentSlide].desc}
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Pagination Dots */}
                        <div className="flex gap-1.5 items-center">
                            {corporateSlides.map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`h-1.5 rounded-full transition-all duration-500 ${
                                      i === currentSlide ? 'w-8 bg-orange-500' : 'w-1.5 bg-white/30'
                                  }`}
                                />
                            ))}
                        </div>

                        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group/btn">
                            Explore Packages 
                            <ChevronRight size={16} className="text-orange-500 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </div>
              </div>
            ) : index === 1 ? (
              /* SOCIAL (STACKED) - Remains same */
              <div className="relative w-[650px] h-[400px] scale-75 lg:scale-100">
                <div className="absolute top-[-150px] left-[180px] w-[360px] h-[540px] z-10 border-4 border-white shadow-2xl">
                  <img src="https://i.pinimg.com/1200x/6d/e1/11/6de1117e42da47e2905b02554c6d6386.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-[60px] left-[-80px] w-[420px] h-[260px] z-20 border-4 border-white shadow-2xl">
                  <img src={service.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-[120px] left-[320px] w-[300px] h-[350px] z-30 border-4 border-white shadow-2xl">
                  <img src="https://i.pinimg.com/1200x/a0/7d/f3/a07df3f049289e39f6be128ada9a73c0.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            ) : (
              /* WEDDINGS - Remains same */
              <div className="relative group overflow-hidden shadow-xl w-[460px] h-[600px] border-4 border-stone-300 rounded-xl">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
              </div>
            )}
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div className={`w-full md:w-1/2 p-8 lg:p-20 ${service.textColor}`}>
            <span className="text-teal-500 font-serif italic text-xl mb-2 block">
              {service.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {service.title}
            </h2>
            <p className="text-lg opacity-80 mb-8 leading-relaxed max-w-xl">
              {service.description}
            </p>
            <button className={`${service.btnColor} text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-widest hover:brightness-110 transition shadow-lg`}>
              View All
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default EventServices;