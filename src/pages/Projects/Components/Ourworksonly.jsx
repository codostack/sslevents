import { motion } from 'framer-motion';

const EVENTS = [
  { id: 1, title: "Grand Wedding Gala", loc: "Palakkad", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600" },
  { id: 2, title: "Tech Innovation Summit", loc: "Kochi", img: "https://i.pinimg.com/736x/2a/ad/f2/2aadf2e0fd34bae0d3170c4e3275f16a.jpg" },
  { id: 3, title: "Corporate Excellence", loc: "Bangalore", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600" },
  { id: 4, title: "Destination Beach Fest", loc: "Goa", img: "https://i.pinimg.com/1200x/0a/a3/92/0aa39272a4365514432319257d2fc598.jpg" },
  { id: 5, title: "Art & Culture Exhibit", loc: "Mumbai", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600" },
];

const ScrollingColumn = ({ items, reverse = false, cardW, cardH, gap }) => {
  const totalH = items.length * (cardH + gap);

  return (
    <div
      style={{ width: cardW, overflow: 'hidden', height: '100%' }}
    >
      <motion.div
        style={{ display: 'flex', flexDirection: 'column', gap }}
        animate={{ y: reverse ? [0, -totalH] : [-totalH, 0] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: items.length * 4,
        }}
      >
        {/* Render 4x to ensure no gap at seam on any screen height */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            style={{ width: cardW, height: cardH, flexShrink: 0 }}
            className="overflow-hidden border border-white/20 relative group cursor-pointer shadow-xl"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={item.title}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-[10px] text-white font-bold uppercase tracking-widest">
                {item.loc}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const EventArcScroll = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const cardW  = isMobile ? 90  : 288;
  const cardH  = isMobile ? 60  : 192;
  const gap    = isMobile ? 10  : 24;
  const px     = isMobile ? 12  : 96;

  return (
    <div
      className="relative bg-[#0a0a0a] text-white font-sans flex items-center justify-center"
      style={{ minHeight: '100svh', overflow: 'hidden' }}
    >
      {/* Scrolling columns — absolutely fill the container */}
      <div
        className="absolute inset-0 flex justify-between"
        style={{ padding: `0 ${px}px` }}
      >
        <ScrollingColumn
          items={EVENTS}
          reverse={false}
          cardW={cardW}
          cardH={cardH}
          gap={gap}
        />
        <ScrollingColumn
          items={EVENTS}
          reverse={true}
          cardW={cardW}
          cardH={cardH}
          gap={gap}
        />
      </div>

      {/* Fade masks top & bottom */}
      <div
        className="absolute inset-x-0 top-0 z-20 pointer-events-none"
        style={{ height: 80, background: 'linear-gradient(to bottom, #0a0a0a, transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 z-20 pointer-events-none"
        style={{ height: 80, background: 'linear-gradient(to top, #0a0a0a, transparent)' }}
      />

      {/* Center content */}
      <div className="relative z-30 text-center flex flex-col items-center pointer-events-none px-4">
        <h2 className="text-orange-500 font-bold tracking-[0.4em] text-[9px] md:text-xs mb-2 uppercase">
          Curated Experiences
        </h2>

        <h1 className="font-black tracking-tighter leading-none uppercase"
          style={{ fontSize: 'clamp(2rem, 8vw, 5rem)' }}
        >
          ELEVATING <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: '1px white' }}
          >
            VISIONS
          </span>
        </h1>

        <div className="w-10 md:w-12 h-[2px] bg-orange-500 my-4 md:my-6" />

        <p className="text-zinc-400 uppercase leading-relaxed"
          style={{ fontSize: 'clamp(8px, 2vw, 11px)', letterSpacing: '0.4em', maxWidth: 220 }}
        >
          Crafting moments that <br /> resonate forever
        </p>
      </div>
    </div>
  );
};

export default EventArcScroll;