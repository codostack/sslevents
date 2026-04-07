import React from 'react';
import { ArrowRight } from 'lucide-react'; // Optional for the arrows

const ConstructionLanding = () => {
  const services = [
    {
      id: '01',
      title: 'Architecture Design',
      desc: 'Sed ut perspiciatis undewre omnis iste natus errore omnis iut.',
      active: true,
    },
    {
      id: '02',
      title: 'New Buildings',
      desc: 'Sed ut perspiciatis undewre omnis iste natus errore omnis iut.',
      active: false,
    },
    {
      id: '03',
      title: 'Full Project',
      desc: 'Sed ut perspiciatis undewre omnis iste natus errore omnis iut.',
      active: false,
    },
    {
      id: '04',
      title: 'Renovation',
      desc: 'Sed ut perspiciatis undewre omnis iste natus errore omnis iut.',
      active: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative min-h-[80vh] flex items-center">
  {/* Full Background Image */}
 {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center lg:bg-right saturate-150 contrast-110"
  style={{
    backgroundImage: `url('https://i.pinimg.com/736x/16/49/b8/1649b845c47695dc2041946d41859e87.jpg')`,
  }}
/>

<div className="absolute inset-0 bg-black/35" />

  {/* Content */}
  <div className="relative z-10 w-full lg:w-1/2 p-8 lg:p-24 text-white">
    <span className="uppercase tracking-[0.3em] text-xs font-bold text-white/80 mb-4 block">
      Let' us build your dream house
    </span>
    <h1 className="text-4xl lg:text-4xl font-bold leading-tight mb-6">
      Every Event is a Journey
    </h1>
    <p className="max-w-md text-white/80 leading-relaxed mb-8">
      Sed ut perspiciatis undewre omnis iste natus errorut perspiciatis 
      undis iperspiciatis undewre omnis iste natus errste natus atus erroruerspiciati.
    </p>
  </div>
</section>
      {/* Services Grid Section */}
      <section className="px-8 lg:px-24 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          
          {/* Service Cards */}
          {services.map((service) => (
            <div 
              key={service.id}
              className={`p-8 h-80 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                service.active 
                ? 'bg-[#434f6b] text-white scale-105' 
                : 'bg-white text-slate-800'
              }`}
            >
              <div>
                <span className={`text-4xl font-bold opacity-30 ${service.active ? 'text-white' : 'text-slate-400'}`}>
                  {service.id}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3">{service.title}</h3>
                <p className={`text-sm leading-relaxed ${service.active ? 'text-slate-200' : 'text-slate-500'}`}>
                  {service.desc}
                </p>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold cursor-pointer hover:underline">Learn More</span>
                <div className={`h-1 w-12 ${service.active ? 'bg-yellow-400' : 'bg-yellow-400/50'}`} />
              </div>
            </div>
          ))}

          {/* Swipe Right / Gallery Section */}
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