import { useEffect, useRef, useState } from 'react';

const EVENTS = [
  { id: 1, title: "Event 1", videoId: "NbUffwlaz2E" },
  { id: 2, title: "Event 2", videoId: "27UdXYvpn5g" },
  { id: 3, title: "Event 3", videoId: "0_LWl0_7NjI" },
  { id: 4, title: "Event 4", videoId: "27UdXYvpn5g" },
  { id: 5, title: "Event 5", videoId: "LoP0IZ4j3lc" },
  { id: 6, title: "Event 6", videoId: "zXssl9IJ1Ao" },
  { id: 7, title: "Event 7", videoId: "an3VPANZjFs" },
  { id: 8, title: "Event 8", videoId: "Q_y-s8OkoOw" },
  { id: 9, title: "Event 9", videoId: "I2GpNw6VoYY" },
  { id: 10, title: "Event 10", videoId: "k0j7u47WDVA" },
];

const SPEED = 0.3; // px per frame — lower = slower scroll

const VideoCard = ({ item, cardW, cardH }) => {
  const [hovered, setHovered] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setHovered(true);
      setIframeReady(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: cardW, height: cardH, flexShrink: 0 }}
      className="overflow-hidden border border-white/20 relative cursor-pointer shadow-xl"
    >
      {/* YouTube thumbnail as poster */}
      <img
        src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
        className="w-full h-full object-cover"
        style={{
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.7s ease',
        }}
        alt={item.title}
      />

      {/* Iframe only injected on first hover — no load impact on mount */}
      {iframeReady && (
        <iframe
          className="absolute inset-0 w-full h-full"
          style={{
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: hovered ? 'auto' : 'none',
            border: 'none',
          }}
          src={
            hovered
              ? `https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.videoId}&modestbranding=1&rel=0`
              : undefined
          }
          title={item.title}
          allow="autoplay; encrypted-media"
          loading="lazy"
        />
      )}
    </div>
  );
};

const ScrollingColumn = ({ items, reverse = false, cardW, cardH, gap, pauseSignal }) => {
  const innerRef = useRef(null);
  const posRef = useRef(reverse ? 0 : -(items.length * (cardH + gap)));
  const pausedRef = useRef(false);
  const rafRef = useRef(null);
  const totalH = items.length * (cardH + gap);

  useEffect(() => {
    pausedRef.current = pauseSignal;
  }, [pauseSignal]);

  useEffect(() => {
    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += reverse ? -SPEED : SPEED;
        if (reverse && posRef.current <= -totalH) posRef.current = 0;
        if (!reverse && posRef.current >= 0) posRef.current = -totalH;
        if (innerRef.current) {
          innerRef.current.style.transform = `translateY(${posRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reverse, totalH]);

  const allItems = [...items, ...items, ...items, ...items];

  return (
    <div style={{ width: cardW, overflow: 'hidden', height: '100%' }}>
      <div
        ref={innerRef}
        style={{ display: 'flex', flexDirection: 'column', gap }}
      >
        {allItems.map((item, idx) => (
          <VideoCard
            key={`${item.id}-${idx}`}
            item={item}
            cardW={cardW}
            cardH={cardH}
          />
        ))}
      </div>
    </div>
  );
};

const EventArcScroll = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const cardW = isMobile ? 90  : 288;
  const cardH = isMobile ? 60  : 192;
  const gap   = isMobile ? 10  : 24;
  const px    = isMobile ? 12  : 96;

  const [col1Paused, setCol1Paused] = useState(false);
  const [col2Paused, setCol2Paused] = useState(false);

  return (
    <div
      className="relative bg-[#0a0a0a] text-white font-sans flex items-center justify-center"
      style={{ minHeight: '100svh', overflow: 'hidden' }}
    >
      {/* Scrolling columns */}
      <div
        className="absolute inset-0 flex justify-between"
        style={{ padding: `0 ${px}px` }}
      >
        <div
          style={{ height: '100%' }}
          onMouseEnter={() => setCol1Paused(true)}
          onMouseLeave={() => setCol1Paused(false)}
        >
          <ScrollingColumn
            items={EVENTS}
            reverse={false}
            cardW={cardW}
            cardH={cardH}
            gap={gap}
            pauseSignal={col1Paused}
          />
        </div>

        <div
          style={{ height: '100%' }}
          onMouseEnter={() => setCol2Paused(true)}
          onMouseLeave={() => setCol2Paused(false)}
        >
          <ScrollingColumn
            items={EVENTS}
            reverse={true}
            cardW={cardW}
            cardH={cardH}
            gap={gap}
            pauseSignal={col2Paused}
          />
        </div>
      </div>

      {/* Fade masks */}
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
        <h1
          className="font-black tracking-tighter leading-none uppercase"
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
        <p
          className="text-zinc-400 uppercase leading-relaxed"
          style={{ fontSize: 'clamp(8px, 2vw, 11px)', letterSpacing: '0.4em', maxWidth: 220 }}
        >
          Crafting moments that <br /> resonate forever
        </p>
      </div>
    </div>
  );
};

export default EventArcScroll;