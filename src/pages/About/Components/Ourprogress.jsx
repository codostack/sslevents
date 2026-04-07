import React from 'react';

const EventManagementProcess = () => {
  return (
    <section className="relative min-h-[700px] w-full flex items-center justify-center py-20 px-6 overflow-hidden font-sans">
      {/* Background Image: Elegant Event Setup */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000')` }}
      >
        {/* Deep navy overlay to match your screenshot style */}
        <div className="absolute inset-0 bg-[#0f111a]/95 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 text-white">
        
        {/* Column 1: Introduction */}
        <div className="flex flex-col justify-center">
          <div className="w-10 h-1 bg-blue-600 mb-8"></div>
          <h2 className="text-5xl font-bold leading-tight mb-8">
            Our Planning <br /> Philosophy
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            Excellence in events isn't accidental. It is the result of meticulous preparation, 
            creative vision, and flawless execution.
          </p>
        </div>

        {/* Column 2: Operational Progress */}
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-3">Seamless Logistics.</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-12">
              We manage the complex moving parts of your event—from vendor sourcing 
              to on-site coordination—so you can focus on your guests.
            </p>
          </div>

          <div className="space-y-8">
            {/* Event Specific Progress Bars */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-300">
                <span>Venue & Decor Setup</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[85%] transition-all duration-1000"></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-300">
                <span>Guest Experience Design</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[95%] transition-all duration-1000"></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-300">
                <span>Technical & AV Production</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[75%] transition-all duration-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Success Metrics */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3">Memorable Impact.</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-12">
              Our data-driven approach ensures that every celebration leaves 
              a lasting impression and meets every strategic objective.
            </p>
          </div>

          <div className="space-y-10">
            {/* Hero Metric */}
            <div className="text-7xl font-extrabold text-blue-500 tracking-tighter">98%</div>
            <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold">Client Satisfaction Rate</div>
            
            {/* Global Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800">
              <div>
                <div className="text-2xl font-bold">120+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Cities</div>
              </div>
              <div>
                <div className="text-2xl font-bold">2.8K</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Events</div>
              </div>
              <div>
                <div className="text-2xl font-bold">500k</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Attendees</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventManagementProcess;