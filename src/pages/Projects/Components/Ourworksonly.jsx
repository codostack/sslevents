import React from 'react';
import { motion } from 'framer-motion';

const EVENTS = [
  { id: 1, title: "Grand Wedding Gala", loc: "Palakkad", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600" },
  { id: 2, title: "Tech Innovation Summit", loc: "Kochi", img: "https://images.unsplash.com/photo-1540575861501-7ad0582373f0?q=80&w=600" },
  { id: 3, title: "Corporate Excellence", loc: "Bangalore", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600" },
  { id: 4, title: "Destination Beach Fest", loc: "Goa", img: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=600" },
  { id: 5, title: "Art & Culture Exhibit", loc: "Mumbai", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600" },
];

const ScrollingColumn = ({ items, reverse = false }) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="flex flex-col gap-6 overflow-hidden h-screen">
      <motion.div
        initial={{ y: reverse ? "-66.66%" : "0%" }}
        animate={{ y: reverse ? "0%" : "-66.66%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Smooth slow crawl
        }}
        className="flex flex-col gap-6"
      >
        {duplicatedItems.map((item, idx) => (
          <motion.div
            key={`${item.id}-${idx}`}
            className="w-44 h-28 md:w-72 md:h-48 overflow-hidden border border-white/20 relative group cursor-pointer shadow-xl"
          >
            {/* High Visibility Image */}
            <img 
              src={item.img} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt={item.title} 
            />
            
            {/* Small subtle label only visible on hover to keep images clean */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <p className="text-[10px] text-white font-bold uppercase tracking-widest">
                 {item.loc}
               </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const EventArcScroll = () => {
  return (
    <div className="relative min-h-[650px] bg-[#0a0a0a] text-white overflow-hidden font-sans flex items-center justify-center">
      
      {/* Background Scrolling Columns - With Edge Spacing */}
      <div className="absolute inset-0 flex justify-between px-12 md:px-24 pointer-events-auto">
        {/* Left Column (Scrolls Down) */}
        <div className="flex justify-start">
            <ScrollingColumn items={EVENTS} reverse={false} />
        </div>

        {/* Right Column (Scrolls Up) */}
        <div className="flex justify-end">
            <ScrollingColumn items={EVENTS} reverse={true} />
        </div>
      </div>

      {/* Center Fixed Content - Updated */}
      <div className="z-30 text-center flex flex-col items-center pointer-events-none px-4">
        <h2 className="text-orange-500 font-bold tracking-[0.4em] text-[10px] md:text-xs mb-2 uppercase">
          Curated Experiences
        </h2>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
          ELEVATING <br /> 
          <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>
            VISIONS
          </span>
        </h1>
        <div className="w-12 h-[2px] bg-orange-500 my-6" />
        <p className="text-zinc-400 text-[9px] md:text-[11px] uppercase tracking-[0.5em] max-w-xs leading-relaxed">
          Crafting moments that <br /> resonate forever
        </p>
      </div>

      {/* Branding Elements */}
     

      
    </div>
  );
};

export default EventArcScroll;