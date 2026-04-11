import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Globe,
  Github,
  ChevronRight,
  Calendar,
  Users,
  Mic,
  Play,
} from "lucide-react";

import { Link } from "react-router-dom"; // ✅ ADD THIS

export default function EventFooter() {
  const links = {
    Company: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Our Work", path: "/projects" },
      { name: "Contact", path: "/contact" },
    ],
    Services: [
      "Corporate Events",
      "Conferences",
      "Product Launches",
      "Wedding Events",
      "Live Shows",
      "Exhibitions",
    ],
    Support: ["Get Quote", "Event Planning", "AV Solutions", "Consultation"],
  };

const socials = [
  { icon: Facebook, link: "https://www.facebook.com/sslevents" },
  { icon: Instagram, link: "https://www.instagram.com/ssl_events_dubai/" },
  { icon: Linkedin, link: "https://www.linkedin.com/company/ssl-events/" },
  { icon: Twitter, link: "https://twitter.com/sslevents" },
  { icon: Youtube, link: "https://www.youtube.com/@SSLEVENTS" },
  { icon: Globe, link: "https://sslevents.ae/" },
];

  return (
    <footer className="relative bg-black text-zinc-400 border-t border-zinc-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.18),transparent_70%)]" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-16">

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: Calendar, title: "10+ Years", label: "Industry Experience" },
            { icon: Users, title: "500+", label: "Successful Events" },
            { icon: Mic, title: "UAE & India", label: "Global Presence" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-[#0f0f11] border border-zinc-800 hover:border-orange-500/40 transition">
              <item.icon className="text-orange-400" size={26} />
              <div>
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* BRAND */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-bold">
                SSL
              </div>
              <div>
                <h2 className="text-white text-xl font-semibold">
                  SSL Events & Productions
                </h2>
                <p className="text-xs text-orange-400">
                  Crafting Memories, One Moment at a Time
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-500 leading-relaxed">
              A forward-thinking event management company delivering
              corporate events, weddings, exhibitions, concerts and
              live productions across UAE and India.
            </p>

            {/* CONTACT */}
            <div className="space-y-3">
              {[
                { icon: Mail, text: "info@sslevents.ae" },
                { icon: Phone, text: "+971 54 291 0172" },
                { icon: MapPin, text: "Dubai, United Arab Emirates" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#0f0f11] border border-zinc-800 hover:border-orange-500/40 transition">
                  <c.icon size={16} className="text-orange-400" />
                  <span className="text-sm">{c.text}</span>
                </div>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="flex flex-wrap gap-4 pt-3">
{socials.map((item, i) => {
  const Icon = item.icon;
  return (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-lg
      bg-[#0f0f11] border border-zinc-800
      hover:border-orange-500 hover:text-white
      transition-all duration-300 hover:-translate-y-1"
    >
      <Icon size={18} />
    </a>
  );
})}
            </div>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-8">

            {/* COMPANY */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Company</h4>
              <ul className="space-y-2">
                {links.Company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition"
                    >
                      {item.name}
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES → go to /services */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Services</h4>
              <ul className="space-y-2">
                {links.Services.map((item) => (
                  <li key={item}>
                    <Link
                      to="/services"
                      state={{ service: item }} // ✅ PASS DATA
                      className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition"
                    >
                      {item}
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SUPPORT → go to /about */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Support</h4>
              <ul className="space-y-2">
                {links.Support.map((item) => (
                  <li key={item}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition"
                    >
                      {item}
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* VIDEO (unchanged) */}
          <div className="lg:col-span-3">
            <div className="bg-[#0f0f11] border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/40 transition">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop"
                  alt="Event venue overview"
                  className="w-full h-[190px] object-cover group-hover:scale-105 transition duration-500"
                />
                <a
                  href="https://www.youtube.com/watch?v=3fumBcKC6RE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition">
                    <Play size={22} />
                  </div>
                </a>
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold">Event Showreel</h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Experience our large-scale productions and live events.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-zinc-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>
            © SSL Events & Productions.
            <span className="ml-2 text-zinc-400">
              Powered by <span className="text-white font-semibold">Codostack</span>
            </span>
          </p>

          <div className="flex gap-6">
            <Link to="/" className="hover:text-white">Privacy Policy</Link>
            <Link to="/" className="hover:text-white">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}