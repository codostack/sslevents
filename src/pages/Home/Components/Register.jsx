import { useState, useRef, useEffect } from "react";
import {
  Heart,
  Building2,
  PartyPopper,
  MonitorSpeaker,
  Speaker,
  ChevronRight,
} from "lucide-react";
import home9 from "../../../assets/home/home9.avif";
import home10 from "../../../assets/home/home10.avif";
import home12 from "../../../assets/home/home12.avif";
import home13 from "../../../assets/home/home13.jpg";
import home14 from "../../../assets/home/home14.jpg";

export default function ContactPage() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    name: "",
    eventType: "",
    location: "",
    eventDate: "",
    peopleCount: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
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

  const services = [
    {
      name: "Luxury Weddings",
      icon: <Heart size={30} />,
      content:
        "Crafting timeless moments with elegant decor and seamless coordination.",
      image: home9,
    },
    {
      name: "Corporate Galas",
      icon: <Building2 size={30} />,
      content:
        "Professional networking events reflecting your brand excellence.",
      image: home10,
    },
    {
      name: "Birthday Bashes",
      icon: <PartyPopper size={30} />,
      content:
        "Fun-filled themed celebrations and unforgettable birthday moments.",
      image: home12,
    },
    {
      name: "Exhibition AV Equipment",
      icon: <MonitorSpeaker size={30} />,
      content:
        "Advanced audiovisual setups for exhibitions, trade shows, and display booths.",
      image: home13,
    },
    {
      name: "AV Equipment Rentals",
      icon: <Speaker size={30} />,
      content:
        "Flexible rental solutions for speakers, microphones, LED screens, and AV systems.",
      image: home14,
    },
  ];

  /* ── Validation rules ── */
  const validate = (fieldValues = form) => {
    const errs = { ...errors };
    const today = new Date().toISOString().split("T")[0];

    if ("name" in fieldValues) {
      if (!fieldValues.name.trim()) {
        errs.name = "Name is required.";
      } else if (fieldValues.name.trim().length < 2) {
        errs.name = "Name must be at least 2 characters.";
      } else {
        delete errs.name;
      }
    }

    if ("phone" in fieldValues) {
      const phoneRegex = /^[+]?[\d\s\-()]{7,15}$/;
      if (!fieldValues.phone.trim()) {
        errs.phone = "Phone number is required.";
      } else if (!phoneRegex.test(fieldValues.phone.trim())) {
        errs.phone = "Enter a valid phone number.";
      } else {
        delete errs.phone;
      }
    }

    if ("email" in fieldValues) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fieldValues.email.trim()) {
        errs.email = "Email is required.";
      } else if (!emailRegex.test(fieldValues.email.trim())) {
        errs.email = "Enter a valid email address.";
      } else {
        delete errs.email;
      }
    }

    if ("eventType" in fieldValues) {
      if (!fieldValues.eventType) {
        errs.eventType = "Please select an event type.";
      } else {
        delete errs.eventType;
      }
    }

    if ("location" in fieldValues) {
      if (!fieldValues.location.trim()) {
        errs.location = "Location is required.";
      } else {
        delete errs.location;
      }
    }

    if ("eventDate" in fieldValues) {
      if (!fieldValues.eventDate) {
        errs.eventDate = "Event date is required.";
      } else if (fieldValues.eventDate < today) {
        errs.eventDate = "Event date cannot be in the past.";
      } else {
        delete errs.eventDate;
      }
    }

    if ("peopleCount" in fieldValues) {
      if (!fieldValues.peopleCount) {
        errs.peopleCount = "Please select number of people.";
      } else {
        delete errs.peopleCount;
      }
    }

    if ("message" in fieldValues) {
      if (!fieldValues.message.trim()) {
        errs.message = "Message is required.";
      } else if (fieldValues.message.trim().length < 10) {
        errs.message = "Message must be at least 10 characters.";
      } else {
        delete errs.message;
      }
    }

    return errs;
  };

  const handleChange = (field, value) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      setErrors(validate({ [field]: value }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate({ [field]: form[field] }));
  };
  /* Auto service switch */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((p) => (p === services.length - 1 ? 0 : p + 1));
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    /* Touch all fields to trigger visible errors */
    const allFields = {
      name: true, phone: true, email: true, eventType: true,
      location: true, eventDate: true, peopleCount: true, message: true,
    };
    setTouched(allFields);

    const allValues = {
      name: form.name, phone: form.phone, email: form.email,
      eventType: form.eventType, location: form.location,
      eventDate: form.eventDate, peopleCount: form.peopleCount,
      message: form.message,
    };
    const errs = validate(allValues);
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const dropdownStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23d1d5db'%3E%3Cpath stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    backgroundSize: "1.2em",
  };

  /* Today's date string for min attribute */
  const todayStr = new Date().toISOString().split("T")[0];

  const fieldClass = (field) =>
    `inputStyle${errors[field] && touched[field] ? " inputError" : ""}`;

  return (
    <div id="register" className="bg-white w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-10 sm:py-12 mt-[50px]">
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

          <form onSubmit={handleForm} className="space-y-4" noValidate>

            {/* Row 1: Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="fieldWrap">
                <input
                  placeholder="Name"
                  value={form.name}
                  className={fieldClass("name")}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                />
                {errors.name && touched.name && (
                  <span className="errMsg">{errors.name}</span>
                )}
              </div>

              <div className="fieldWrap">
                <input
                  placeholder="Phone"
                  value={form.phone}
                  className={fieldClass("phone")}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                />
                {errors.phone && touched.phone && (
                  <span className="errMsg">{errors.phone}</span>
                )}
              </div>
            </div>

            {/* Row 2: Email + Event Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="fieldWrap">
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  className={fieldClass("email")}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                />
                {errors.email && touched.email && (
                  <span className="errMsg">{errors.email}</span>
                )}
              </div>

              <div className="fieldWrap">
                <select
                  value={form.eventType}
                  style={dropdownStyle}
                  className={`${fieldClass("eventType")} appearance-none`}
                  onChange={(e) => handleChange("eventType", e.target.value)}
                  onBlur={() => handleBlur("eventType")}
                >
                  <option value="">Select Event Type</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Corporate</option>
                </select>
                {errors.eventType && touched.eventType && (
                  <span className="errMsg">{errors.eventType}</span>
                )}
              </div>
            </div>

            {/* Row 3: Location + Event Date */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="fieldWrap">
                <input
                  placeholder="Location"
                  value={form.location}
                  className={fieldClass("location")}
                  onChange={(e) => handleChange("location", e.target.value)}
                  onBlur={() => handleBlur("location")}
                />
                {errors.location && touched.location && (
                  <span className="errMsg">{errors.location}</span>
                )}
              </div>

              <div className="fieldWrap">
                <input
                  type="date"
                  min={todayStr}
                  value={form.eventDate}
                  className={`${fieldClass("eventDate")} dateInput`}
                  onChange={(e) => handleChange("eventDate", e.target.value)}
                  onBlur={() => handleBlur("eventDate")}
                  style={{ color: form.eventDate ? "#374151" : "#9ca3af" }}
                />
                {errors.eventDate && touched.eventDate && (
                  <span className="errMsg">{errors.eventDate}</span>
                )}
              </div>

              <div ref={dropdownRef} className="fieldWrap relative">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className={`inputStyle cursor-pointer${errors.peopleCount && touched.peopleCount ? " inputError" : ""
                    }`}
                  style={{ color: form.peopleCount ? "#374151" : "#9ca3af" }}
                >
                  {form.peopleCount || "Number of People"}
                </div>

                {isOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white border rounded-xl shadow-xl max-h-60 overflow-y-auto">
                    {peopleOptions.map((opt, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          handleChange("peopleCount", `${opt.min}-${opt.max}`);
                          setIsOpen(false);
                        }}
                        className="p-3 hover:bg-orange-50 cursor-pointer text-sm"
                      >
                        {opt.min} — {opt.max}
                      </div>
                    ))}
                  </div>
                )}

                {errors.peopleCount && touched.peopleCount && (
                  <span className="errMsg">{errors.peopleCount}</span>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="fieldWrap">
              <textarea
                rows={4}
                placeholder="Message"
                value={form.message}
                className={`${fieldClass("message")} resize-none`}
                onChange={(e) => handleChange("message", e.target.value)}
                onBlur={() => handleBlur("message")}
              />
              {errors.message && touched.message && (
                <span className="errMsg">{errors.message}</span>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-3 text-sm font-bold tracking-widest transition active:scale-95"
              >
                {submitted ? "✓ Sent!" : "Submit"}
              </button>
            </div>

          </form>
        </div>

        {/* ================= SERVICE CARD ================= */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 h-[420px] sm:h-[480px] lg:h-auto">

          {services.map((service, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${service.image})` }}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === activeService ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

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
              <ChevronRight className="group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .inputStyle {
          width: 100%;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          background: white;
          padding: 12px 16px;
          font-size: 14px;
          color: #374151;
          outline: none;
          display: block;
        }
        .inputStyle:focus {
          border-color: #9ca3af;
        }
        .inputError {
          border-color: #f97316 !important;
          background-color: #fff7ed;
        }
        .inputError:focus {
          border-color: #ea580c !important;
        }
        .fieldWrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .errMsg {
          font-size: 12px;
          color: #ea580c;
          padding-left: 4px;
        }
        .dateInput::-webkit-calendar-picker-indicator {
          opacity: 0.5;
          cursor: pointer;
        }
        .dateInput::-webkit-datetime-edit-text,
        .dateInput::-webkit-datetime-edit-month-field,
        .dateInput::-webkit-datetime-edit-day-field,
        .dateInput::-webkit-datetime-edit-year-field {
          color: inherit;
        }
      `}</style>
    </div>
  );
}