import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Arlene McCoy",
    location: "Germany",
    image: "https://i.pravatar.cc/150?u=1",
    rating: 5,
    reviews: [
      "The corporate gala was flawless. From lighting to coordination, everything was handled with extreme professionalism. They truly made our brand vision come to life in ways we didn't think possible.",
      "The follow-up after the event was equally impressive. They provided a detailed breakdown and ensured every KPI was met beyond expectations."
    ]
  },
  {
    id: 2,
    name: "Marcus Finn",
    location: "USA",
    image: "https://i.pravatar.cc/150?u=2",
    rating: 5,
    reviews: [
      "Planning a destination wedding seemed impossible until we met this team. They managed vendors across three time zones and ensured our special day was stress-free.",
      "Our guests are still talking about the welcome dinner. The atmosphere was intimate yet grand—exactly what we dreamed of."
    ]
  },
  {
    id: 3,
    name: "Sarah Chen",
    location: "Singapore",
    image: "https://i.pravatar.cc/150?u=3",
    rating: 4,
    reviews: [
      "The tech conference was a huge success. The stage design was futuristic, and the live-streaming integration was seamless.",
      "The networking lounge was the highlight! The interactive displays kept everyone engaged throughout the three-day event."
    ]
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="bg-slate-50 py-20 px-4 min-h-400 flex flex-col items-center justify-center overflow-hidden">
      {/* Header */}
   

      {/* Avatar Curve (Kept Original Design) */}
      <div className="relative w-full max-w-4xl h-32 flex justify-center items-end mb-10 mt-[-100px]">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent border-b border-dashed border-slate-300 rounded-[50%] opacity-40"></div>
        <div className="flex items-end justify-center gap-6 relative z-10">
          {testimonials.map((person, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={person.id}
                onClick={() => setActiveIndex(index)}
                className={`relative transition-all duration-700 ease-in-out rounded-full border-4 shadow-md overflow-hidden
                  ${isActive ? 'w-20 h-20 border-purple-600 scale-110 z-20' : 'w-14 h-14 border-white scale-90 opacity-40 hover:opacity-100'}
                `}
              >
                <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Testimonial Cards Area - Super Wide Layout */}
      <div className="relative w-full max-w-[90rem] px-4 md:px-20">
        {/* Nav Buttons */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full text-purple-600 hover:bg-purple-600 hover:text-white transition-all z-30 shadow-lg">
          <ChevronLeft size={24} />
        </button>

        {/* The Wide Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {testimonials[activeIndex].reviews.map((review, i) => (
              <motion.div 
                key={`${activeIndex}-${i}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                // Height decreased via "py-8", Width increased via "max-w-none" and "lg:grid-cols-2"
                className="bg-white rounded-2xl p-8 md:px-12 md:py-8 shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden min-h-[220px]"
              >
                <Quote className="text-slate-50 absolute -right-2 -bottom-2" size={120} fill="currentColor" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{testimonials[activeIndex].name}</h3>
                      <p className="text-purple-600 text-xs font-bold tracking-widest uppercase">{testimonials[activeIndex].location}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={14} className={idx < testimonials[activeIndex].rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-base italic line-clamp-3">
                    "{review}"
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex items-center gap-3">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">Review Part {i + 1}</span>
                    <div className="h-[1px] flex-grow bg-slate-100"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full text-purple-600 hover:bg-purple-600 hover:text-white transition-all z-30 shadow-lg">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;