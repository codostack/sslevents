import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import project1 from "../../../assets/project/project1.jpg";

const ConstructionLanding = () => {
  const [selectedId, setSelectedId] = useState('01');

  const services = [
    {
      id: '01',
      title: 'Experience',
      desc: 'With over a decade in event management, our expert team ensures flawless execution for corporate and social events worldwide.',
    },
    {
      id: '02',
      title: 'Creativity',
      desc: 'We conceptualize unique themes and innovative setups, turning each event into an extraordinary and memorable experience.',
    },
    {
      id: '03',
      title: 'Quality',
      desc: 'A commitment to perfection in every detail ensures that our events not only meet but exceed client expectations.',
    },
    {
      id: '04',
      title: 'Local Presence',
      desc: 'Our strong presence in Dubai and India enables seamless coordination, leveraging local expertise and trusted vendors.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:bg-right saturate-150 contrast-110"
          style={{
            backgroundImage: `url(${project1})`,
          }}
        />
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 w-full lg:w-1/2 p-8 lg:p-24 text-white">
          <span className="uppercase tracking-[0.3em] text-xs font-bold text-white/80 mb-4 block">
            Let&apos;s Build Your Dream Event
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Every Event is a Journey
          </h1>
          <p className="max-w-md text-white/80 leading-relaxed mb-8">
            At SSL Events & Productions, we turn your ideas into unforgettable experiences. From corporate conferences to luxurious weddings, our team meticulously plans every detail to ensure seamless, memorable, and extraordinary events that reflect your vision.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="px-8 lg:px-24 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">

          {/* Service Cards */}
          {services.map((service) => {
            const isActive = selectedId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={`p-8 h-80 flex flex-col justify-between transition-all duration-500 cursor-pointer shadow-xl transform ${isActive
                    ? 'bg-[#434f6b] text-white scale-105 shadow-2xl'
                    : 'bg-white text-slate-800 hover:scale-105 hover:shadow-lg'
                  }`}
              >
                <div>
                  <span className={`text-4xl font-bold opacity-30 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                    {service.id}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-3">{service.title}</h3>
                  <p className={`text-sm leading-relaxed ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                    {service.desc}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold cursor-pointer hover:underline">Learn More</span>
                  <div className={`h-1 w-12 ${isActive ? 'bg-yellow-400' : 'bg-yellow-400/50'}`} />
                </div>
              </div>
            );
          })}

          {/* Gallery Section */}
          <div className="lg:pl-8 py-8 flex flex-col justify-center">
            <p className="uppercase tracking-widest text-xs font-bold text-slate-400 mb-1">View Gallery</p>
            <h2 className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-4">
              WATCH MORE <ArrowRight size={24} className="text-yellow-500" />
            </h2>
            <div className="h-0.5 w-16 bg-yellow-500 mt-2" />
          </div>

        </div>
      </section>
    </div>
  );
};

export default ConstructionLanding;