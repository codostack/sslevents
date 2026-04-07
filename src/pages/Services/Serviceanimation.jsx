import React from 'react';

const EventManagementSection = () => {
  // Data for the top white overlapping tab
  const stats = [
    { 
      value: "1200+", 
      label: "Events Managed", 
      sub: "From grand weddings to corporate galas.",
      color: "text-orange-600"
    },
    { 
      value: "450+", 
      label: "Happy Clients", 
      sub: "Trusted by families and global brands.",
      color: "text-pink-600"
    },
    { 
      value: "25+", 
      label: "Cities Reached", 
      sub: "Delivering excellence across the country.",
      color: "text-blue-600"
    },
  ];

  // Data for the purple process section
  const steps = [
    { 
      id: "Step 01", 
      title: "Vision & Strategy", 
      icon: "🤝",
      desc: "Initial consultation to define your event goals."
    },
    { 
      id: "Step 02", 
      title: "Design & Curation", 
      icon: "🎨",
      desc: "Creating custom themes and spatial layouts."
    },
    { 
      id: "Step 03", 
      title: "Vendor Logistics", 
      icon: "📞",
      desc: "Coordinating catering, decor, and AV teams."
    },
    { 
      id: "Step 04", 
      title: "Seamless Execution", 
      icon: "✨",
      desc: "On-site management for a stress-free day."
    },
  ];

  return (
    <div className="relative w-full font-sans bg-gray-50">
      
      {/* 1. TOP SECTION: White Overlay Stats */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 pt-16">
        <div className="bg-white rounded-t-2xl border-x border-t border-gray-200 shadow-xl flex flex-col md:flex-row justify-around py-14 px-8">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="text-center px-6 mb-10 md:mb-0 last:border-0 md:border-r border-gray-100 w-full"
            >
              <h2 className={`text-5xl font-default mb-3 ${item.color}`}>
                {item.value}
              </h2>
              <p className="text-base font-bold text-gray-800 uppercase tracking-wide">
                {item.label}
              </p>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. BOTTOM SECTION: Purple Event Solutions */}
      <section className="relative z-10 -mt-8 bg-gray-800 pb-32 pt-40 px-6">
        
        {/* Subtle Background Pattern/Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        
        <div className="relative z-20 max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <p className="text-purple-200 text-xs uppercase tracking-[0.3em] font-bold mb-4">
              Our Work Process
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-default leading-tight">
              Comprehensive Solutions for <br /> 
              <span className="text-purple-200">Corporate & Private Events</span>
            </h2>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group flex flex-col items-center">
                
                {/* Circle Icon Container */}
                <div className="relative flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-50">
                    <span className="text-4xl" role="img" aria-label={step.title}>
                      {step.icon}
                    </span>
                  </div>
                  
                  {/* Dotted Connection Line */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-[calc(100%-10px)] w-[calc(100%-40px)] border-t-2 border-dotted border-purple-400/40 -z-10"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="mt-8">
                  <p className="text-purple-300 text-[11px] uppercase font-black tracking-widest mb-2">
                    {step.id}
                  </p>
                  <h4 className="text-white text-xl font-bold mb-3">
                    {step.title}
                  </h4>
                  <p className="text-purple-100/70 text-sm leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default EventManagementSection;