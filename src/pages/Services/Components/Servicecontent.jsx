import React, { useState, useEffect } from 'react';
import { ChevronRight, Building2, Briefcase, Users, Presentation } from 'lucide-react';

const EventServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const corporateSlides = [
    {
      image: "https://i.pinimg.com/736x/56/e2/f7/56e2f7abb877bccc5f4aed1b2843ee9a.jpg",
      title: "AV Rentals",
      desc: "We provide high-quality audio-visual equipment and technical support to ensure every corporate and social event runs flawlessly.",
      icon: <Building2 size={24} />
    },
    {
      image: "https://i.pinimg.com/736x/21/2d/28/212d28d9c30ff7dfb3eada8e12a71318.jpg",
      title: "Conferences",
      desc: "We organize professional conferences with seamless logistics, venue management, and innovative setups that engage and inspire attendees.",
      icon: <Briefcase size={24} />
    },
    {
      image: "https://i.pinimg.com/1200x/7b/65/b2/7b65b2f2524a8abb7af815a94b7ef1e8.jpg",
      title: "Corporate Events",
      desc: "Our team designs and delivers corporate events, from gala dinners to executive retreats, creating memorable experiences that reflect your brand.",
      icon: <Presentation size={24} />
    },
    {
      image: "https://i.pinimg.com/736x/1c/09/c2/1c09c20f41e1c39bc310ba771a96295d.jpg",
      title: "Wedding Events",
      desc: "We curate bespoke wedding experiences, handling every detail from venue selection to décor and on-site coordination for a flawless celebration.",
      icon: <Users size={24} />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % corporateSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [corporateSlides.length]);

  const services = [
    {
      title: "Corporate Excellence",
      subtitle: "Professional & Seamless",
      description: "From high-stakes board meetings to large-scale conferences, SSL Events & Productions delivers professional and seamless corporate events that reflect your brand's vision. Our expert team manages every detail — from venue selection, travel coordination, and on-site logistics to audiovisual production, catering, and security — ensuring flawless execution. Whether it's executive retreats, product launches, or international summits, we combine creativity with meticulous planning to craft engaging, memorable experiences that showcase professionalism, innovation, and elegance. We handle all logistics and technical details, allowing you to focus on your agenda while impressing every guest with a perfectly executed event.",
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
      description: "Celebrate your love against the world's most stunning backdrops with SSL Events & Productions. We meticulously manage every detail — from travel arrangements and exclusive venue selection to bespoke décor, floral design, lighting, entertainment, and on-site coordination across the globe. Whether it's an intimate beach ceremony, a grand villa celebration, or a luxury resort wedding, our expert planners ensure a seamless and unforgettable experience. We curate every moment to reflect your unique love story, offering personalized touches, world-class vendors, and flawless execution so you can immerse yourself in joy, romance, and celebration. With SSL, your destination wedding becomes an extraordinary, once-in-a-lifetime experience that leaves lasting memories for you and your guests.",
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
          {/* ── IMAGE / VISUAL SIDE ── */}
          <div
            className={`w-full md:w-1/2 p-6 lg:p-12 flex justify-center relative ${service.reverse ? 'md:order-last' : ''}`}
          >

            {/* ── INDEX 0: Corporate slider ── */}
            {index === 0 && (
              /* Mobile: full-width card with reduced height; desktop: unchanged */
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[420px] sm:h-[500px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 mx-auto">

                {corporateSlides.map((slide, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                      i === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  </div>
                ))}

                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white z-10">
                  <div>
                    <span className="inline-block bg-orange-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                      Premium Service
                    </span>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                      {corporateSlides[currentSlide].icon}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 transition-all duration-500">
                      {corporateSlides[currentSlide].title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed max-w-[260px] opacity-90">
                      {corporateSlides[currentSlide].desc}
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
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
            )}

            {/* ── INDEX 1: Social stacked images ── */}
            {index === 1 && (
              <>
                {/* Mobile: simple single image */}
                <div className="md:hidden w-full h-[280px] sm:h-[340px] overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Desktop: original stacked layout — unchanged */}
                <div className="hidden md:block relative w-[650px] h-[400px] scale-75 lg:scale-100">
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
              </>
            )}

            {/* ── INDEX 2: Weddings image ── */}
            {index === 2 && (
              <>
                {/* Mobile: full-width, reduced height */}
                <div className="md:hidden w-full h-[300px] sm:h-[380px] overflow-hidden shadow-xl border-4 border-stone-300 rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Desktop: original — unchanged */}
                <div className="hidden md:block relative group overflow-hidden shadow-xl w-[460px] h-[600px] border-4 border-stone-300 rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </>
            )}
          </div>

          {/* ── TEXT SIDE ── */}
          <div className={`w-full md:w-1/2 px-6 py-10 sm:px-8 sm:py-12 lg:p-20 ${service.textColor}`}>
            <span className="text-teal-500 font-serif italic text-lg sm:text-xl mb-2 block">
              {service.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              {service.title}
            </h2>
            <p className="text-base sm:text-lg opacity-80 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              {service.description}
            </p>
            <button
              className={`${service.btnColor} text-white px-6 sm:px-8 py-3 rounded text-sm font-bold uppercase tracking-widest hover:brightness-110 transition shadow-lg`}
            >
              View All
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default EventServices;