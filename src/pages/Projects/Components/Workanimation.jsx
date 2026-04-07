import React from 'react';
import { 
  Camera, 
  Calendar, 
  MapPin, 
  Music, 
  Sparkles, 
  Users 
} from 'lucide-react';

const EventFeaturesSection = () => {
  const features = [
    {
      title: "DESTINATION PLANNING",
      desc: "Curating seamless experiences across borders, from heritage sites to coastal retreats.",
      icon: <MapPin className="w-8 h-8 text-orange-500" strokeWidth={1.5} />,
    },
    {
      title: "BESPOKE STYLING",
      desc: "Creating unique visual narratives with a Pinterest-inspired modern aesthetic.",
      icon: <Sparkles className="w-8 h-8 text-orange-500" strokeWidth={1.5} />,
    },
    {
      title: "TECHNICAL EXECUTION",
      desc: "Expertly managed lighting, sound, and AV for high-impact corporate excellence.",
      icon: <Calendar className="w-8 h-8 text-orange-500" strokeWidth={1.5} />,
    },
    {
      title: "ENTERTAINMENT CURATION",
      desc: "Connecting you with world-class performers and local talent for every vibe.",
      icon: <Music className="w-8 h-8 text-orange-500" strokeWidth={1.5} />,
    },
    {
      title: "GUEST MANAGEMENT",
      desc: "End-to-end coordination ensuring a smooth journey for every single attendee.",
      icon: <Users className="w-8 h-8 text-orange-500" strokeWidth={1.5} />,
    },
    {
      title: "CINEMATIC CAPTURE",
      desc: "Preserving moments with high-fidelity, golden-hour photography and film.",
      icon: <Camera className="w-8 h-8 text-orange-500" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Testimonial Box */}
        <div className="lg:w-1/3 bg-[#141414] border border-white/5 p-10 flex flex-col relative">
          <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 border-b border-white/10 pb-4">
            What Clients Say
          </h3>
          
          <div className="flex gap-4 mb-8">
            <div className="w-1 bg-orange-500 h-24"></div>
            <p className="italic text-gray-400 leading-relaxed text-sm">
              "The attention to detail was beyond anything we imagined. 
              The entire process was cost-effective yet felt incredibly 
              luxurious. They truly turned our vision into a disruptive 
              reality that our guests are still talking about."
            </p>
          </div>
          
          <div className="mt-auto">
            <p className="font-bold tracking-widest uppercase text-sm">ARJUN & ANJALI</p>
            <p className="text-[10px] text-orange-500 tracking-widest mt-1 uppercase">Wedding Clients / May 2026</p>
          </div>

          <button className="mt-10 border border-white/20 px-6 py-3 text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-colors self-start">
            Visit Services
          </button>
        </div>

        {/* Features Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 py-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start group">
              <div className="flex-shrink-0 pt-1 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-bold tracking-widest uppercase">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-xs leading-loose">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventFeaturesSection;