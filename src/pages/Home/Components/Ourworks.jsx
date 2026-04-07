import React from 'react';
import { 
  Play, Clapperboard, 
  Instagram, Facebook, Twitter, Youtube, Globe 
} from 'lucide-react';

const EventVideoWatchPage = () => {
  const sidebarImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=225&q=80", 
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=225&q=80", 
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=225&q=80", 
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=225&q=80", 
    "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=225&q=80", 
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=225&q=80"  
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8">
      <style>{`
        @keyframes subtleGlide {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-glide {
          animation: subtleGlide 40s linear infinite;
        }
        .pause-scroll:hover .animate-glide {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 h-[600px]">
        
        {/* --- LEFT SIDE: UNCHANGED --- */}
        <div className="flex-[3] flex flex-col gap-5">
          <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1600&q=80" 
              className="w-full h-full object-cover"
              alt="Main Event"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-xl p-8 rounded-full transition-all group">
                <Play size={48} fill="white" className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          <div className="p-6 border border-zinc-800 bg-zinc-900 rounded-2xl">
            <h1 className="text-3xl font-extrabold mb-3">Global Tech Summit 2024</h1>
            <p className="text-zinc-400">Experience the atmosphere, the insights, and the connections made on the floor.</p>
          </div>
        </div>

        {/* --- RIGHT SIDE: LIGHT THEME STICKY & BRAND COLORS --- */}
        <div className="flex-1 lg:max-w-xs xl:max-w-sm flex flex-col h-[calc(115vh-200px)]">
          
          <div className="flex items-center gap-2.5 mb-5 p-2 bg-zinc-900 rounded-lg border border-zinc-800">
            <Clapperboard className="text-red-500" size={20} />
            <h3 className="font-bold text-md tracking-wide">Live Stream Highlights</h3>
          </div>
          
          <div className="relative flex-1 overflow-hidden rounded-3xl border border-zinc-800 bg-black flex flex-col shadow-inner">
            
            {/* Scroller Container */}
            <div className="flex-1 overflow-hidden relative">
                <div className="animate-glide p-4 flex flex-col gap-6">
                {sidebarImages.concat(sidebarImages).map((url, i) => (
                    <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800/50 group cursor-pointer">
                        <img src={url} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" alt="" />
                    </div>
                ))}
                </div>
            </div>

            {/* STICKY SOCIAL SECTION (Light Glass Theme) */}
            <div className="flex-none sticky bottom-0 w-full h-[350px] p-8 bg-white/10 backdrop-blur-2xl border-t border-white/20 z-20 flex flex-col items-center justify-center shadow-[0_-15px_40px_rgba(0,0,0,0.6)]">
              <div className="text-center space-y-8">
                <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">Join the Community</p>
                    <h4 className="text-xl font-bold text-white tracking-tight">SSL Events</h4>
                </div>
                
                {/* Brand Colored Icons */}
                <div className="flex justify-center gap-8">
                    <Instagram size={28} className="text-[#E4405F] hover:scale-125 transition-transform cursor-pointer drop-shadow-[0_0_8px_rgba(228,64,95,0.4)]" />
                    <Facebook size={28} className="text-[#1877F2] hover:scale-125 transition-transform cursor-pointer drop-shadow-[0_0_8px_rgba(24,119,242,0.4)]" />
                    <Twitter size={28} className="text-[#1DA1F2] hover:scale-125 transition-transform cursor-pointer drop-shadow-[0_0_8px_rgba(29,161,242,0.4)]" />
                    <Youtube size={28} className="text-[#FF0000] hover:scale-125 transition-transform cursor-pointer drop-shadow-[0_0_8px_rgba(255,0,0,0.4)]" />
                </div>

                <div className="pt-8">
                    <button className="bg-white text-black text-[11px] font-black px-6 py-3 rounded-full hover:bg-zinc-200 transition-all tracking-[0.1em] flex items-center gap-2 shadow-lg shadow-white/5">
                        <Globe size={14} /> VISIT OFFICIAL SITE
                    </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default EventVideoWatchPage;