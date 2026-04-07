import { useState } from "react";

const categories = [
  { label: "Conferences", count: 142, icon: "🎙️" },
  { label: "Concerts & Music", count: 89, icon: "🎵" },
  { label: "Sports Events", count: 64, icon: "⚽" },
  { label: "Workshops", count: 215, icon: "🛠️" },
  { label: "Networking", count: 78, icon: "🤝" },
  { label: "Exhibitions", count: 53, icon: "🖼️" },
  { label: "Webinars", count: 301, icon: "💻" },
  { label: "Charity & Causes", count: 47, icon: "❤️" },
];

const quickLinks = [
  { label: "Browse Events", icon: "🔍", badge: "2.4K+" },
  { label: "Create Event", icon: "✨" },
  { label: "My Tickets", icon: "🎫" },
  { label: "Live Events", icon: "🔴", badge: "Live" },
  { label: "Calendar View", icon: "📅" },
  { label: "Map Explorer", icon: "🗺️" },
  { label: "Analytics", icon: "📈" },
  { label: "Past Events", icon: "🕐" },
];

const support = [
  { label: "Help Center", icon: "❓" },
  { label: "Contact Support", icon: "💬" },
  { label: "Organizer Guide", icon: "📖" },
  { label: "Pricing Plans", icon: "💳" },
  { label: "API Documentation", icon: "⚙️" },
  { label: "Careers", icon: "💼", badge: "Hiring" },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Global Tech Summit 2026",
    date: "Apr 20, 2026",
    location: "New York, USA",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=120&h=80&fit=crop",
    tag: "Featured",
    tagColor: "bg-orange-400 text-orange-900",
  },
  {
    id: 2,
    title: "Music & Arts Festival",
    date: "May 5, 2026",
    location: "London, UK",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=80&fit=crop",
    tag: "Hot",
    tagColor: "bg-red-500 text-red-950",
  },
  {
    id: 3,
    title: "AI & Robotics Expo 2026",
    date: "Jun 3, 2026",
    location: "Tokyo, Japan",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=120&h=80&fit=crop",
    tag: "New",
    tagColor: "bg-emerald-400 text-emerald-950",
  },
];

const socials = [
  {
    name: "Facebook",
    hoverClass: "hover:bg-blue-600 hover:border-blue-500",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    hoverClass: "hover:bg-sky-500 hover:border-sky-400",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    hoverClass: "hover:bg-pink-600 hover:border-pink-500",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    hoverClass: "hover:bg-blue-700 hover:border-blue-600",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "50K+", label: "Events Hosted", icon: "🎪" },
  { value: "2M+", label: "Happy Attendees", icon: "👥" },
  { value: "120+", label: "Countries", icon: "🌍" },
  { value: "98%", label: "Satisfaction", icon: "⭐" },
];

export default function EventFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  return (
    <div className="w-full bg-zinc-950 text-zinc-400 font-sans">

      {/* ── NEWSLETTER STRIP ── */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-screen-xl mx-auto px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <p className="font-black text-black text-2xl leading-tight tracking-tight">
              Stay in the loop 📬
            </p>
            <p className="text-black/70 text-sm mt-1">
              Weekly drops — exclusive events, early access & deals.
            </p>
          </div>
          {subscribed ? (
            <div className="bg-black/20 border border-black/20 text-black font-bold text-sm px-8 py-3 rounded-full backdrop-blur-sm">
              ✓ You're subscribed — see you next week!
            </div>
          ) : (
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="flex-1 md:w-72 bg-white/90 border border-transparent focus:border-orange-600 focus:bg-white outline-none rounded-full px-5 py-2.5 text-black text-sm placeholder-zinc-400 transition-all"
              />
              <button
                onClick={handleSubscribe}
                className="bg-black hover:bg-zinc-800 text-orange-400 font-bold text-sm rounded-full px-7 py-2.5 transition-all whitespace-nowrap active:scale-95"
              >
                Subscribe →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── STATS ROW ── */}
      <div className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-screen-xl mx-auto px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-zinc-800">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-6 first:pl-0 last:pr-0 group">
              <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">{s.icon}</span>
              <div>
                <div className="text-orange-400 font-black text-xl leading-none">{s.value}</div>
                <div className="text-zinc-500 text-[10px] tracking-widest uppercase font-semibold mt-1">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <footer className="max-w-screen-xl mx-auto px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">

          {/* ── BRAND COLUMN ── */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11">
                <div className="w-11 h-11 bg-orange-500 rounded-2xl rotate-12 absolute" />
                <div className="w-11 h-11 flex items-center justify-center font-black text-black text-xl relative">S</div>
              </div>
              <div>
                <span className="font-black text-white text-2xl tracking-tighter">SSL EVENTS</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase">Platform Online</span>
                </div>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
              The world's most trusted platform for discovering, creating, and managing extraordinary live experiences.
            </p>

            {/* Contact cards */}
            <div className="space-y-2 mb-7">
              {[
                { icon: "📧", label: "Email us", value: "hello@sslevents.io" },
                { icon: "📞", label: "Call us", value: "+1 (800) 382-4368" },
                { icon: "📍", label: "Headquarters", value: "New York, NY 10118" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors cursor-pointer group">
                  <span className="text-lg">{c.icon}</span>
                  <div>
                    <div className="text-zinc-500 text-[9px] uppercase tracking-widest font-bold">{c.label}</div>
                    <div className="text-zinc-200 text-xs font-semibold group-hover:text-orange-400 transition-colors">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mb-3">Follow us</p>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href="/"
                    aria-label={s.name}
                    className={`w-9 h-9 bg-zinc-900 border border-zinc-700 ${s.hoverClass} text-zinc-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── QUICK LINKS ── */}
          <div className="lg:col-span-2">
            <h5 className="text-white text-xs font-black tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-400 rounded-sm inline-block" />
              Pages
            </h5>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href="/" className="flex items-center justify-between text-zinc-400 hover:text-white text-sm py-0.5 group transition-colors">
                    <span className="flex items-center gap-2.5">
                      <span className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                      {link.label}
                    </span>
                    {link.badge && (
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full leading-none ${link.badge === "Live" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "bg-orange-400/20 text-orange-400 border border-orange-400/30"}`}>
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CATEGORIES ── */}
          <div className="lg:col-span-3">
            <h5 className="text-white text-xs font-black tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-400 rounded-sm inline-block" />
              Categories
            </h5>
            <ul className="space-y-1.5">
              {categories.map((cat, i) => (
                <li key={i}>
                  <a href="/" className="flex items-center justify-between text-zinc-400 hover:text-white text-sm py-0.5 group transition-colors">
                    <span className="flex items-center gap-2.5">
                      <span className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">{cat.icon}</span>
                      {cat.label}
                    </span>
                    <span className="text-[10px] font-bold bg-zinc-800 text-zinc-500 group-hover:bg-orange-400/20 group-hover:text-orange-400 px-2 py-0.5 rounded-md transition-all">
                      {cat.count}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── SUPPORT + TRENDING ── */}
          <div className="lg:col-span-3 space-y-10">

            {/* Support */}
            <div>
              <h5 className="text-white text-xs font-black tracking-widest uppercase mb-5 flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-400 rounded-sm inline-block" />
                Support
              </h5>
              <ul className="space-y-2">
                {support.map((link, i) => (
                  <li key={i}>
                    <a href="/" className="flex items-center justify-between text-zinc-400 hover:text-white text-sm py-0.5 group transition-colors">
                      <span className="flex items-center gap-2.5">
                        <span className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                        {link.label}
                      </span>
                      {link.badge && (
                        <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 border border-emerald-400/30 leading-none">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* App Store buttons */}
            <div>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mb-3">Get the app</p>
              <div className="space-y-2">
                {[
                  { icon: "🍎", store: "App Store", sub: "Download on the" },
                  { icon: "▶️", store: "Google Play", sub: "Get it on" },
                ].map((a, i) => (
                  <a key={i} href="/" className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-orange-400/50 hover:bg-zinc-800 rounded-xl px-4 py-2.5 group transition-all">
                    <span className="text-xl">{a.icon}</span>
                    <div>
                      <div className="text-zinc-500 text-[9px] uppercase font-bold">{a.sub}</div>
                      <div className="text-white text-xs font-bold group-hover:text-orange-400 transition-colors">{a.store}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TRENDING EVENTS ROW ── */}
        <div className="border-t border-zinc-800 pt-10 mb-10">
          <h5 className="text-white text-xs font-black tracking-widest uppercase mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-400 rounded-sm inline-block" />
            Trending Events
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {upcomingEvents.map((ev) => (
              <a key={ev.id} href="/" className="group flex gap-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-3 transition-all hover:-translate-y-0.5">
                <div className="relative flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden">
                  <img src={ev.img} alt={ev.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-1 left-1 text-[8px] font-black px-1.5 py-0.5 rounded-full ${ev.tagColor}`}>
                    {ev.tag}
                  </span>
                </div>
                <div className="flex-1 min-w-0 py-0.5">
                  <p className="text-zinc-200 text-xs font-bold leading-snug group-hover:text-orange-400 transition-colors line-clamp-2">{ev.title}</p>
                  <p className="text-orange-400/80 text-[10px] font-semibold mt-1.5">{ev.date}</p>
                  <p className="text-zinc-500 text-[10px] mt-0.5">{ev.location}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-zinc-800 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 rounded-lg rotate-6 flex items-center justify-center font-black text-black text-xs">S</div>
            <p className="text-zinc-500 text-sm">
              © 2026 <span className="text-white font-bold">SSL Events</span>. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-1">
            {["Privacy Policy", "Terms of Use", "Cookie Settings", "Accessibility"].map((item, i) => (
              <span key={item} className="flex items-center">
                {i > 0 && <span className="text-zinc-700 mx-1">·</span>}
                <a href="/" className="text-zinc-500 hover:text-orange-400 transition-colors text-xs">{item}</a>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            All systems operational
          </div>
        </div>
      </footer>
    </div>
  );
}