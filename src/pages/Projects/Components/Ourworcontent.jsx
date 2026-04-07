import React from 'react';

const EventWorksSection = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-24 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column: Headline and Featured Image */}
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-6xl font-default leading-tight mb-12 tracking-tight">
            An Elegant <br />
            Portfolio <br />
           <span className='text-orange-500'> of Memorable <br />
            Events</span>
          </h1>
          
          <div className="w-full aspect-[4/3] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000" 
              alt="Destination Wedding Setup" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Right Column: Narrative Content */}
        <div className="flex flex-col pt-4">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Our Craft & Commitment
            </span>
            <div className="w-8 h-[2px] bg-black mb-10"></div>
            
            <div className="flex gap-6">
              <span className="text-6xl font-serif text-gray-300 leading-none">E</span>
              <p className="text-lg font-medium leading-relaxed">
                Every event we curate is a blend of precision and passion. 
                From intimate destination weddings to high-impact corporate 
                summits, we specialize in transforming visions into 
                seamless, immersive experiences.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm lg:text-base mt-[40px]">
            <p>
              We believe that the beauty of event management lies in the details. 
              Our team meticulously handles every logistical element, allowing 
              the core narrative of your celebration or brand to shine. 
              Whether it’s a floral installation in Palakkad or a tech 
              conference layout, our approach remains rooted in modern 
              minimalism and functional elegance. Every event we curate is a blend of precision and passion. 
                From intimate destination weddings to high-impact corporate 
                summits, we specialize in transforming visions into 
                seamless, immersive experiences.
            </p>
            <p>
              Over the years, we have redefined what it means to "host." 
              By integrating cutting-edge UI/UX principles into event 
              flow and physical space design, we ensure that guests 
              aren't just attending—they are experiencing.  Every event we curate is a blend of precision and passion. 
                From intimate destination weddings to high-impact corporate
            </p>
            <p>
              Our portfolio spans across diverse landscapes and cultures, 
              bringing a sophisticated, Pinterest-style aesthetic to 
              every project we touch. We don't just plan events; we 
              build environments where memories are made and 
              disruption happens elegantly.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default EventWorksSection;