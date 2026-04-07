import { useState, useRef, useEffect } from "react";
import {
  Heart,
  Building2,
  PartyPopper,
  MonitorSpeaker,
  Speaker,
  ChevronRight,
} from "lucide-react";

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
  const [submitted, setSubmitted] = useState(false);

  const dropdownRef = useRef(null);

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

  /* ✅ UPDATED SERVICES LIST */
  const services = [
    {
      name: "Luxury Weddings",
      icon: <Heart size={30} />,
      content:
        "Crafting timeless moments with elegant decor and seamless coordination.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Corporate Galas",
      icon: <Building2 size={30} />,
      content:
        "Professional networking events reflecting your brand excellence.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "Birthday Bashes",
      icon: <PartyPopper size={30} />,
      content:
        "Fun-filled themed celebrations and unforgettable birthday moments.",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800",
    },

    /* ✅ NEW SERVICE */
    {
      name: "Exhibition AV Equipment",
      icon: <MonitorSpeaker size={30} />,
      content:
        "Advanced audiovisual setups for exhibitions, trade shows, and display booths.",
      image:
        "https://i.pinimg.com/1200x/c9/34/07/c9340709bda7d10541744ed01cca3cb5.jpg",
    },

    /* ✅ NEW SERVICE */
    {
      name: "AV Equipment Rentals",
      icon: <Speaker size={30} />,
      content:
        "Flexible rental solutions for speakers, microphones, LED screens, and AV systems.",
      image:
        "https://i.pinimg.com/1200x/b0/55/0e/b0550e2a44d610a08cf8cccec00cf2c1.jpg",
    },
  ];

  /* Auto service switch */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((p) =>
        p === services.length - 1 ? 0 : p + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  /* Close dropdown outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const dropdownStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23d1d5db'%3E%3Cpath stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    backgroundSize: "1.2em",
  };

  return (
    <div className="bg-white w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-10 sm:py-12 mt-[50px]">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ================= FORM ================= */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-300 shadow-sm p-5 sm:p-8">

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Plan Your Event
          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Fill out the form and our team will contact you shortly.
          </p>

          <div className="w-16 h-1 bg-orange-500 mt-4 rounded-full mb-6" />

          <form onSubmit={handleForm} className="space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                placeholder="Name"
                required
                className="inputStyle"
                onChange={(e)=>setForm({...form,name:e.target.value})}
              />
              <input
                placeholder="Phone"
                required
                className="inputStyle"
                onChange={(e)=>setForm({...form,phone:e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                required
                className="inputStyle"
                onChange={(e)=>setForm({...form,email:e.target.value})}
              />

              <select
                required
                style={dropdownStyle}
                className="inputStyle appearance-none"
                onChange={(e)=>setForm({...form,eventType:e.target.value})}
              >
                <option value="">Select Event Type</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                placeholder="Location"
                className="inputStyle"
                onChange={(e)=>setForm({...form,location:e.target.value})}
              />

              <div ref={dropdownRef} className="relative">
                <div
                  onClick={()=>setIsOpen(!isOpen)}
                  className="inputStyle cursor-pointer"
                >
                  {form.peopleCount || "Number of People"}
                </div>

                {isOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white border rounded-xl shadow-xl max-h-60 overflow-y-auto">
                    {peopleOptions.map((opt,i)=>(
                      <div
                        key={i}
                        onClick={()=>{
                          setForm({...form,peopleCount:`${opt.min}-${opt.max}`});
                          setIsOpen(false);
                        }}
                        className="p-3 hover:bg-orange-50 cursor-pointer text-sm"
                      >
                        {opt.min} — {opt.max}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <textarea
              rows={4}
              placeholder="Message"
              required
              className="inputStyle resize-none"
              onChange={(e)=>setForm({...form,message:e.target.value})}
            />

            <div className="flex justify-end">
              <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-3 text-sm font-bold tracking-widest transition active:scale-95">
                {submitted ? "✓ Sent!" : "Submit"}
              </button>
            </div>

          </form>
        </div>

        {/* ================= SERVICE CARD ================= */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 h-[420px] sm:h-[480px] lg:h-auto">

          {services.map((service,index)=>(
            <div
              key={index}
              style={{backgroundImage:`url(${service.image})`}}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index===activeService ? "opacity-100":"opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"/>

          <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end">

            <div className="mb-6">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white mb-4">
                {services[activeService].icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {services[activeService].name}
              </h3>

              <p className="text-white/90 text-sm sm:text-base">
                {services[activeService].content}
              </p>
            </div>

            <button className="flex items-center gap-2 text-white font-semibold text-sm group">
              Explore Packages
              <ChevronRight className="group-hover:translate-x-1 transition"/>
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .inputStyle {
          width:100%;
          border-radius:12px;
          border:1px solid #d1d5db;
          background:white;
          padding:12px 16px;
          font-size:14px;
          color:#374151;
          outline:none;
        }
        .inputStyle:focus{
          border-color:#9ca3af;
        }
      `}</style>
    </div>
  );
}