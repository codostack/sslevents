import { useState, useRef, useEffect } from "react";
import { Heart, Building2, PartyPopper, Star, Trophy, Music, Camera, Utensils, MapPin, ChevronRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    name: "",
    eventType: "",
    location: "",
    peopleCount: "",
    message: "",
  });
  const [activeService, setActiveService] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const peopleOptions = [
    { min: "0", max: "50" },
    { min: "50", max: "100" },
    { min: "100", max: "200" },
    { min: "200", max: "500" },
    { min: "500", max: "700" },
    { min: "700", max: "1000" },
    { min: "1000", max: "1500" },
    { min: "1500", max: "2000" },
    { min: "2000", max: "+" },
  ];

  const services = [
    { 
      name: "Luxury Weddings", 
      icon: <Heart size={32} />, 
      content: "Crafting timeless moments with elegant decor, seamless coordination, and cinematic flair.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    },
    { 
      name: "Corporate Galas", 
      icon: <Building2 size={32} />, 
      content: "Professional networking events and galas that reflect your brand's excellence and prestige.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    },
    { 
      name: "Birthday Bashes", 
      icon: <PartyPopper size={32} />, 
      content: "From themed kids' parties to milestone adult celebrations, we bring the fun and the cake.",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800",
    },
    { 
      name: "Product Launches", 
      icon: <Star size={32} />, 
      content: "High-impact launches designed to grab media attention and leave a lasting market impression.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    },
    { 
      name: "Award Ceremonies", 
      icon: <Trophy size={32} />, 
      content: "Honoring achievement with grand stages, professional lighting, and flawless trophy sequences.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    },
    { 
      name: "Live Concerts", 
      icon: <Music size={32} />, 
      content: "Full-scale technical production, sound engineering, and artist management for live music.",
      image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800",
    },
    { 
      name: "Fashion Shows", 
      icon: <Camera size={32} />, 
      content: "Runway design and backstage management for the ultimate high-fashion experience.",
      image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=800",
    },
    { 
      name: "Private Catering", 
      icon: <Utensils size={32} />, 
      content: "Gourmet menus tailored to your taste, served by professional staff at your chosen venue.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
    },
    { 
      name: "Exhibitions", 
      icon: <MapPin size={32} />, 
      content: "Custom stall designs and visitor flow management for trade fairs and exhibitions.",
      image: "https://images.unsplash.com/photo-1496024840928-4c417adb2d1d?auto=format&fit=crop&q=80&w=800",
    },
  ];

  // Auto-scroll logic for the Services side
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, [services.length]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const dropdownStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23d1d5db'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    backgroundSize: "1.2em",
  };

  return (
    <div className="bg-white w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 font-['Lato',_sans-serif] mt-[50px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Left Side: Registration / Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-400 shadow-sm p-8 flex flex-col">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Plan Your Event</h2>
            <p className="text-gray-500 mt-2">Fill out the form below and our team will get back to you shortly.</p>
            <div className="w-20 h-1 bg-orange-500 mt-4 rounded-full"></div>
          </div>

          <form onSubmit={handleForm} className="space-y-4 flex-grow">
            {/* Row 1: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-600 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 text-sm transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-600 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 text-sm transition-colors"
              />
            </div>

            {/* Row 2: Email & Event Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-600 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 text-sm transition-colors"
              />

              <select
                value={form.eventType}
                onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                required
                style={dropdownStyle}
                className={`w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:border-gray-400 appearance-none pr-10 text-sm transition-colors ${
                  form.eventType === "" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <option value="" disabled hidden>Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Row 3: Location & Custom People Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Location"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-600 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 text-sm transition-colors"
              />

              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  style={dropdownStyle}
                  className={`w-full rounded-xl border border-gray-300 bg-white px-4 py-3 cursor-pointer text-sm pr-10 flex items-center transition-all ${
                    form.peopleCount === "" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {form.peopleCount || "Number of People"}
                </div>

                {isOpen && (
                  <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-2xl max-h-72 overflow-y-auto p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    {peopleOptions.map((opt, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setForm({ ...form, peopleCount: `${opt.min} - ${opt.max}` });
                          setIsOpen(false);
                        }}
                        className="flex items-center gap-3 p-1.5 hover:bg-purple-50 rounded-xl cursor-pointer transition-all mb-2 group"
                      >
                        <div className="flex-1 bg-gray-50 border border-gray-200 text-gray-600 py-3 rounded-lg text-xs font-bold text-center group-hover:border-orange-300 group-hover:bg-white group-hover:text-orange-700 transition-all shadow-sm">
                          {opt.min}
                        </div>
                        <div className="flex-1 bg-gray-50 border border-gray-200 text-gray-600 py-3 rounded-lg text-xs font-bold text-center group-hover:border-orange-300 group-hover:bg-white group-hover:text-orange-700 transition-all shadow-sm">
                          {opt.max}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Message Area */}
            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              required
              className="w-full h-[180px] rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-600 placeholder:text-gray-300 focus:outline-none focus:border-gray-400 text-sm resize-none transition-colors"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-10 py-3.5 text-sm font-bold tracking-widest uppercase transition-all shadow-md active:scale-95"
              >
                {submitted ? "✓ Sent!" : "Submit"}
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Advertisement Card with Auto-Scroll */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col bg-slate-900 min-h-[500px]">
          
          {/* Transitioning Background Image Layer */}
          {services.map((service, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${service.image})` }}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === activeService ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* Dark Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-0"></div>
          
          <div className="relative z-10 p-10 h-full flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500 text-[10px] font-bold text-white uppercase tracking-widest mb-6 shadow-lg shadow-orange-500/30">
                Premium Service
              </div>
              
              <div key={activeService} className="animate-in slide-in-from-right-12 fade-in duration-700">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/30">
                  {services[activeService].icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                  {services[activeService].name}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed drop-shadow-sm font-medium">
                  {services[activeService].content}
                </p>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <div className="flex gap-2 mb-6">
                {services.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeService ? 'w-10 bg-orange-500 shadow-md shadow-orange-500/50' : 'w-2 bg-white/30'}`}
                  />
                ))}
              </div>
              <button className="flex items-center gap-2 text-white font-bold text-sm hover:gap-4 transition-all group">
                Explore Packages <ChevronRight size={18} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}