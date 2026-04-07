import React, { useState } from 'react';
import { 
  X, ArrowRight, CheckCircle2, Users, Zap, Star, 
  Layout, Music, Mic2, Utensils, Presentation, Disc 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Service Data ---
const SERVICES_DATA = [
  { id: 1, title: "Corporate Events", category: "Professional", icon: <Users size={18}/>, image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069", shortDesc: "Strategic planning for high-level corporate gatherings.Strategic planning for high-level corporate gatherings.", fullDesc: "We transform standard meetings into immersive brand experiences. Our team handles everything from venue sourcing to agenda planning.", works: ["Annual Meetings", "Leadership Retreats", "Workshops"] },
  { id: 2, title: "Conferences", category: "Knowledge", icon: <Presentation size={18}/>, image: "https://images.unsplash.com/photo-1540575861501-7ad060e39fe5?q=80&w=2070", shortDesc: "Scalable solutions for industry summits and seminars Strategic planning for high-level corporate gatherings..", fullDesc: "Managing thousands of attendees requires expertise. We provide digital registration and speaker management.", works: ["Tech Summits", "Medical Conventions", "Trade Forums"] },
  { id: 3, title: "Product Launches", category: "Marketing", icon: <Zap size={18}/>, image: "https://images.unsplash.com/photo-1505373673634-11816f19430c?q=80&w=2073", shortDesc: "Creating viral impact for your brand's newest innovations Strategic planning for high-level corporate gatherings..", fullDesc: "The first impression is everything. We combine high-tech AV and theatrical lighting for a flawless reveal.", works: ["Auto Reveals", "Tech Unboxings", "Fashion Premiers"] },
  { id: 4, title: "Exhibition AV", category: "Hardware", icon: <Layout size={18}/>, image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2036", shortDesc: "High-resolution visual tech for trade show booths Strategic planning for high-level corporate gatherings..", fullDesc: "Stand out in a crowded hall. We supply P2.5 LED walls and interactive touch displays.", works: ["Custom LED Booths", "Kiosks", "Video Walls"] },
  { id: 5, title: "Wedding Events", category: "Social", icon: <Star size={18}/>, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070", shortDesc: "Bespoke luxury wedding planning for life's milestonesStrategic planning for high-level corporate gatherings..", fullDesc: "From 'Yes' to 'I Do', we curate every floral petal and light beam for your special day.", works: ["Destination Weddings", "Engagements", "Receptions"] },
  { id: 6, title: "AV Rentals", category: "Technical", icon: <Mic2 size={18}/>, image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070", shortDesc: "Professional grade sound and visual gear rentals Strategic planning for high-level corporate gatherings..", fullDesc: "Our inventory includes top-tier brands like L-Acoustics and Christie, maintained to the highest standards.", works: ["Sound Systems", "Lighting Rigs", "Wireless Mics"] },
  { id: 7, title: "Gala Dinners", category: "Luxury", icon: <Utensils size={18}/>, image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069", shortDesc: "Elegant evenings with premium catering and decor Strategic planning for high-level corporate gatherings..", fullDesc: "Where sophistication meets celebration. We manage luxury table styling and red carpet arrivals.", works: ["Charity Balls", "Award Nights", "Banquets"] },
  { id: 8, title: "Live Performance", category: "Artistic", icon: <Disc size={18}/>, image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070", shortDesc: "Theatrical production management for stage shows Strategic planning for high-level corporate gatherings..", fullDesc: "We bring the stage to life. Our team handles backstage logistics and stage management.", works: ["Theatrical Plays", "Comedy Specials", "Dance"] },
  { id: 9, title: "Concerts", category: "Mass Event", icon: <Music size={18}/>, image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070", shortDesc: "Massive scale production for stadium musical events Strategic planning for high-level corporate gatherings..", fullDesc: "The ultimate spectacle. We specialize in touring logistics, massive rigging, and sound engineering.", works: ["Music Festivals", "World Tours", "EDM Events"] }
];

const ServiceCard = ({ service, onReadMore }) => (
  <div className="bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-500 h-full">
    <div className="relative h-52 overflow-hidden">
      <img src={service.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={service.title} />
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
        {service.category}
      </div>
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-teal-600 transition-colors">{service.title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">{service.shortDesc}</p>
      
      <button 
        onClick={() => onReadMore(service)}
        className="mt-auto py-2 px-4 bg-teal-50/50 hover:bg-teal-600 rounded-xl flex items-center justify-between group/btn transition-all border border-teal-100/30"
      >
        <span className="text-[10px] font-black uppercase tracking-widest text-teal-700 group-hover/btn:text-white transition-colors">Read More</span>
        <ArrowRight size={14} className="text-teal-600 group-hover/btn:text-white transition-transform group-hover/btn:translate-x-1" />
      </button>
    </div>
  </div>
);

const FloatingTabPopup = ({ service, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[100]"
        />
        
        <motion.div 
          initial={{ x: '100%', opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          className="fixed right-4 top-4 bottom-4 w-[90%] md:w-[420px] bg-white z-[101] shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col border border-gray-100"
        >
          <div className="relative h-56 flex-shrink-0">
            <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
            <button onClick={onClose} className="absolute top-5 right-5 p-2.5 bg-white/90 hover:bg-red-500 hover:text-white rounded-full transition-all shadow-lg">
              <X size={18} />
            </button>
            <div className="absolute -bottom-6 left-8 bg-teal-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                {service.icon}
            </div>
          </div>

          <div className="p-8 pt-12 overflow-y-auto flex-grow">
            <h2 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.fullDesc}</p>

            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Past Works & Focus</h4>
            <div className="space-y-2">
              {service.works.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs font-bold text-gray-700">
                  <CheckCircle2 size={14} className="text-teal-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white border-t border-gray-50 flex-shrink-0">
            <button className="w-full bg-gray-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-teal-600 transition-all">
              Inquire Now
            </button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const EventApp = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans pb-20">
      {/* Container Settings: 
        max-w-screen-2xl (1536px) or 9xl ensures it fits wide screens.
        px-4 or px-6 keeps the side gaps minimal as requested.
      */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 pt-16">
        
        <header className="mb-16 ml-2">
          <h1 className="text-4xl md:text-6xl font-default text-gray-900 tracking-tighter">
            Our <span className="text-teal-600">Services.</span>
          </h1>
         <div className="max-w-lg">
  <p className="text-gray-400 text-sm font-medium mt-2 leading-relaxed">
    Explore our end-to-end event management solutions Explore our end-to-end event management solutions. Explore our end-to-end event management solutions Explore our end-to-end event management solutions. Explore our end-to-end event management solutions.
  </p>
</div>
        </header>

        {/* 3-3-3 Grid: Forced 3 columns from 'md' breakpoint and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onReadMore={setActiveService} 
            />
          ))}
        </div>
      </div>

      <FloatingTabPopup 
        service={activeService} 
        isOpen={!!activeService} 
        onClose={() => setActiveService(null)} 
      />
    </div>
  );
};

export default EventApp;