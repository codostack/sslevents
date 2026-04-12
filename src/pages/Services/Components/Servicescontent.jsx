import React, { useState, useEffect, useCallback, memo } from 'react';
import { 
  X, ArrowRight, CheckCircle2, Users, Zap, Star, 
  Layout, Music, Mic2, Utensils, Presentation, Disc,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Local Image Imports ---
import corporate1 from '../../../assets/images/corporate1.JPG';
import corporate2 from '../../../assets/images/corporate2.JPG';
import conference1 from '../../../assets/images/2onference1.JPG';
import conference2 from '../../../assets/images/2onference2.JPG';
import conference3 from '../../../assets/images/2onference3.JPG';
import productLaunch1 from '../../../assets/images/ProductLaunche1.JPG';
import productLaunch2 from '../../../assets/images/ProductLaunche2.JPG';
import productLaunch3 from '../../../assets/images/ProductLaunche3.JPG';
import home1 from '../../../assets/home/home1.jpeg';
import home4 from '../../../assets/home/home4.jpeg';
import img12 from '../../../assets/images/12.png';

const SERVICES_DATA = [
  {
    id: 1,
    title: "Corporate Events",
    category: "Professional",
    icon: <Users size={18}/>,
    thumbnail: corporate1,
    images: [corporate1, corporate2, home1],
    shortDesc: "End-to-end management for high-level corporate gatherings, ensuring professionalism and memorable experiences.",
    fullDesc: "We transform standard meetings into immersive brand experiences. Our team handles everything from venue sourcing to agenda planning, AV setup, catering, and guest engagement to ensure flawless corporate events.",
    works: ["Expertise in delivering professional and memorable events.", "Tailored solutions to align with your business objectives.", "Flawless execution, ensuring every detail is covered."]
  },
  {
    id: 2,
    title: "Conferences",
    category: "Knowledge",
    icon: <Presentation size={18}/>,
    thumbnail: conference1,
    images: [conference1, conference2, conference3],
    shortDesc: "Professional planning for industry summits, seminars, and educational conferences.",
    fullDesc: "The ability of all the various components to work for the organization of successful conferences and corporate events. We serve as a communication link between all conference components, giving your speakers, technical personnel, and event management team the tools they need to offer the ideal conference experience.",
    works: ["Proven expertise in managing conferences of all sizes and scopes.", "Cutting-edge technology for a professional and memorable experience.", "A dedicated team committed to excellence and precision."]
  },
  {
    id: 3,
    title: "Product Launches",
    category: "Marketing",
    icon: <Zap size={18}/>,
    thumbnail: productLaunch1,
    images: [productLaunch1, productLaunch2, productLaunch3],
    shortDesc: "Creating high-impact product reveals that captivate audiences and generate buzz.",
    fullDesc: "From stage design to lighting, AV production, and brand storytelling, we ensure every product launch makes a strong, memorable impression.",
    works: ["Venue selection and design", "Innovative stage setups and branding", "Interactive product presentations"]
  },
  {
    id: 4,
    title: "Exhibition AV",
    category: "Hardware",
    icon: <Layout size={18}/>,
    thumbnail: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2036",
    images: [home4, home1, img12],
    shortDesc: "Cutting-edge audio-visual solutions for trade shows and exhibitions.",
    fullDesc: "We provide you with all of the resources, experience, and knowledge you need to put on a creative and strategic exhibition that meets our clients' expectations. We are here to take your vision to the next level and make it easy for you to stand out for the right reasons by incorporating skilled consultants and managers in various platforms.",
    works: ["Cutting-edge equipment that delivers reliability and impact.", "Customized solutions to match your exhibition goals.", "Expert team committed to flawless execution."]
  },
  {
    id: 5,
    title: "Wedding Events",
    category: "Social",
    icon: <Star size={18}/>,
    thumbnail: "https://i.pinimg.com/736x/b5/ca/c7/b5cac76469cf0cf0307e6a54102e95fa.jpg",
    images: [home1, home4, img12],
    shortDesc: "Luxury wedding planning and bespoke celebrations for your most memorable day.",
    fullDesc: "On your big day, unwind and let us handle the rest; we'll make sure the entire ceremony meets your standards. Our vivacious wedding event planners offer you services that are current with the newest trends in Dubai's lovely metropolis. We are specialized in: Arabic, Indian and Western Weddings, Trending Themes, Eye-Catching Decorations, Stunning Centerpieces, World-Class Cuisine, Gorgeous Flower arrangements, Bridal/Groom Shower Parties, Multi-lingual Hostesses, Entertainment by world-class artists.",
    works: ["Destination Weddings", "Engagements", "Receptions"]
  },
  {
    id: 6,
    title: "AV Rentals",
    category: "Technical",
    icon: <Mic2 size={18}/>,
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
    images: [img12, home1, home4],
    shortDesc: "Professional-grade sound, lighting, and visual gear for flawless event execution.",
    fullDesc: "Enhance your events with premium audiovisual equipment from SSL Events & Production. Whether it's a corporate gathering, a wedding, or a live performance, our state-of-the-art rentals ensure your event is seamless, impactful, and unforgettable.",
    works: ["Cutting-edge equipment that delivers reliability and impact.", "Customized solutions to match your exhibition goals.", "Expert team committed to flawless execution."]
  },
  {
    id: 7,
    title: "Gala Dinners",
    category: "Luxury",
    icon: <Utensils size={18}/>,
    thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069",
    images: [home4, img12, home1],
    shortDesc: "Elegant gala dinners with premium catering, decor, and event styling.",
    fullDesc: "We provide you with all of the resources, experience, and knowledge you need to put on a creative and strategic exhibition that meets our clients' expectations. We are here to take your vision to the next level and make it easy for you to stand out for the right reasons by incorporating skilled consultants and managers in various platforms.",
    works: ["Cutting-edge equipment that delivers reliability and impact.", "Customized solutions to match your exhibition goals.", "Expert team committed to flawless execution."]
  },
  {
    id: 8,
    title: "Live Performance",
    category: "Artistic",
    icon: <Disc size={18}/>,
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070",
    images: [home1, img12, home4],
    shortDesc: "Stage management and production for concerts, plays, and live entertainment.",
    fullDesc: "Bring your event to life with exceptional live performances and professionally produced stage shows. From renowned artists and musicians to immersive cultural acts, we curate entertainment that captivates audiences and creates unforgettable moments. Every performance is seamlessly integrated with advanced lighting, sound, and stage design to deliver a truly spectacular experience.",
    works: ["Theatrical Plays", "Comedy Specials", "Dance Performances"]
  },
  {
    id: 9,
    title: "Concerts",
    category: "Mass Event",
    icon: <Music size={18}/>,
    thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070",
    images: [img12, home4, home1],
    shortDesc: "Massive-scale concerts with full production management and audience engagement.",
    fullDesc: "We deliver high-energy concert experiences with seamless planning and world-class production. From artist coordination to stage design, sound, and lighting, every element is crafted to create an electrifying atmosphere and an unforgettable audience experience.",
    works: ["Large-Scale Music Festivals with immersive stage production", "International World Tours with seamless artist and logistics management", "High-Energy EDM Events featuring cutting-edge sound, lighting, and visuals"]
  }
];

// --- Image Slider (only used inside popup) ---
const ImageSlider = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
  }, [images]);

  const prev = useCallback((e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback((e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  return (
    <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} ${current + 1}`}
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm z-10"
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm z-10"
      >
        <ChevronRight size={16} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
            className={`rounded-full transition-all duration-300 ${
              idx === current ? 'bg-white w-5 h-1.5' : 'bg-white/50 w-1.5 h-1.5'
            }`}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white z-10">
        {current + 1} / {images.length}
      </div>
    </div>
  );
};

// --- Service Card — uses only thumbnail, completely isolated from slider state ---
const ServiceCard = memo(({ service, onReadMore }) => (
  <div className="bg-white rounded-[1.5rem] overflow-hidden border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-500 h-full">
    <div className="relative h-52 overflow-hidden">
      {/* thumbnail is a fixed separate field — never affected by slider */}
      <img
        src={service.thumbnail}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        alt={service.title}
      />
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
        {service.category}
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-gray-900 text-lg mb-2 group-hover:text-teal-600 transition-colors">{service.title}</h3>
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
));

// --- Floating Popup — slider lives here, isolated from the card grid ---
const FloatingTabPopup = ({ service, isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && service && (
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
          {/* Slider — completely separate from card grid */}
          <div className="relative flex-shrink-0">
            <ImageSlider images={service.images} title={service.title} />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2.5 bg-white/90 hover:bg-red-500 hover:text-white rounded-full transition-all shadow-lg z-20"
            >
              <X size={18} />
            </button>

            <div className="absolute -bottom-6 left-8 bg-teal-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white z-20">
              {service.icon}
            </div>
          </div>

          <div className="p-8 pt-12 overflow-y-auto flex-grow">
            <h4 className="text-lg text-gray-900 mb-4">{service.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.fullDesc}</p>

            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Our Work & Expertise</h4>
            <div className="space-y-2">
              {service.works.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs font-bold text-gray-700">
                  <CheckCircle2 size={14} className="text-teal-500 flex-shrink-0" />
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

// --- Main App ---
const EventApp = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans pb-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 pt-16">

        <header className="mb-16 ml-2">
          <h1 className="text-4xl md:text-6xl font-default text-gray-900 tracking-tighter">
            Our <span className="text-teal-600">Services.</span>
          </h1>
          <div className="max-w-lg">
            <p className="text-gray-400 text-sm font-medium mt-2 leading-relaxed">
              Explore SSL Events & Productions' full suite of event management solutions, including corporate events, weddings, product launches, exhibitions, live performances, and luxury gala experiences. We handle every detail to create seamless, memorable, and extraordinary events.
            </p>
          </div>
        </header>

        {/* Card grid — thumbnail never changes */}
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

      {/* Popup with slider — completely separate from card grid */}
      <FloatingTabPopup
        service={activeService}
        isOpen={!!activeService}
        onClose={() => setActiveService(null)}
      />
    </div>
  );
};

export default EventApp;