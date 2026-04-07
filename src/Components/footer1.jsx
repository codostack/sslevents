import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";

export default function EventFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const links = {
    Pages: [
      "Browse Events",
      "Create Event",
      "Live Events",
      "Calendar View",
      "Analytics",
      "Past Events",
    ],
    Categories: [
      "Conferences",
      "Music & Concerts",
      "Sports",
      "Workshops",
      "Networking",
      "Webinars",
    ],
    Support: [
      "Help Center",
      "Contact Support",
      "Organizer Guide",
      "Pricing",
      "API Docs",
      "Careers",
    ],
  };

  const socials = [Facebook, Twitter, Instagram, Linkedin];

  return (
    <footer className="relative bg-[#0b0b0d] text-zinc-400 border-t border-zinc-800 overflow-hidden">
      {/* subtle gradient glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.25),transparent_60%)]" />

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-16">

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-semibold text-lg shadow-lg shadow-orange-500/20">
                S
              </div>

              <div>
                <h2 className="text-white text-xl font-semibold tracking-tight">
                  SSL Events
                </h2>
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Platform Online
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-zinc-500 max-w-sm">
              Discover, create and manage unforgettable experiences with a
              powerful event platform trusted by organizers worldwide.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-3">
              {[
                { icon: Mail, text: "hello@sslevents.io" },
                { icon: Phone, text: "+1 (800) 382-4368" },
                { icon: MapPin, text: "New York, USA" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-orange-500/40 hover:bg-zinc-900 transition"
                >
                  <c.icon size={16} className="text-orange-400" />
                  <span className="text-sm">{c.text}</span>
                </div>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="flex gap-3 pt-2">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="/"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:text-white transition-all hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-white font-semibold mb-5 tracking-wide">
                  {title}
                </h4>

                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="/"
                        className="group flex items-center justify-between text-sm text-zinc-500 hover:text-white transition"
                      >
                        {item}
                        <ChevronRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-16 border-t border-zinc-800 pt-10 flex flex-col md:flex-row justify-between gap-6 items-center">

          <div>
            <h3 className="text-white text-lg font-semibold">
              Join our newsletter
            </h3>
            <p className="text-sm text-zinc-500">
              Monthly insights, event trends & platform updates.
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm outline-none focus:border-orange-500 w-full md:w-[260px]"
            />

            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 text-white px-5 rounded-lg text-sm font-medium transition shadow-lg shadow-orange-500/20"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} SSL Events. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="/" className="hover:text-white">Privacy</a>
            <a href="/" className="hover:text-white">Terms</a>
            <a href="/" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}