import React from 'react';
import { Calendar, Users, MapPin, ShieldCheck } from 'lucide-react';
import project from "../../assets/home/home9.avif";

const EventFeatureSection = () => {
  const features = [
    {
      title: "CONCEPTUAL DESIGN",
      desc: "Transforming your vision into immersive event themes and experiences.",
      icon: <Calendar className="w-6 h-6 text-amber-700" />,
    },
    {
      title: "THE ELITE TEAM",
      desc: "Top-tier coordinators and vendors vetted for excellence and reliability.",
      icon: <Users className="w-6 h-6 text-amber-700" />,
    },
    {
      title: "VENUE LOGISTICS",
      desc: "Comprehensive site selection and spatial planning for maximum impact.",
      icon: <MapPin className="w-6 h-6 text-amber-700" />,
    },
    {
      title: "SEAMLESS EXECUTION",
      desc: "On-site management ensuring every detail unfolds with precision.",
      icon: <ShieldCheck className="w-6 h-6 text-amber-700" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Content Column */}
        <div className="w-full lg:w-7/12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gray-400"></div>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
              Your Vision Is Safe With Us
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
            COMMITTED TO <br />
            <span className="text-amber-600 italic">Your Big Moments</span>
          </h2>
          
          <p className="mt-6 text-gray-600 leading-relaxed text-sm max-w-xl">
            We are dedicated planners who handle a broad range of complex events for corporate clients, 
            private celebrations, and non-profits at the local, regional, and national levels.
          </p>

          {/* Icon Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[60px]">
            {features.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="bg-amber-100 p-3 h-fit rounded-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm tracking-wide mb-1 uppercase">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full lg:w-5/12 relative">
          <div className="relative z-10">
            <img 
              src={project} 
              alt="Event Planning" 
              className="w-full h-[300px] sm:h-[380px] md:h-[450px] object-cover shadow-2xl"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 -right-4 w-12 h-24 bg-amber-200/50 -z-0"></div>
          <div className="absolute -bottom-4 -right-8 w-16 h-16 bg-slate-200 -z-0"></div>
        </div>
        
      </div>
    </section>
  );
};

export default EventFeatureSection;