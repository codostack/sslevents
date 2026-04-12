import project2 from "../../../assets/project/project2.jpg";

const EventWorksSection = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-24 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column: Headline and Featured Image */}
        <div className="flex flex-col">
        <h1 className="leading-tight mb-12 tracking-tight">
  <span className="block font-serif text-gray-300 text text-3xl md:text-4xl">
    An Elegant Portfolio
  </span>
  <span className="block  font-serif text-5xl md:text-5xl text-orange-400 mt-2">
    of Memorable Events
  </span>
</h1>
          
          <div className="w-full aspect-[4/3] overflow-hidden">
            <img 
              src={project2}
              alt="Destination Wedding Setup" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Right Column: Narrative Content */}
        <div className="flex flex-col pt-4">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-center block mb-2">
              Our Craft & Commitment
            </span>
            <div className="w-50 h-[2px] bg-orange-200 mb-10"></div>
            
            <div className="flex gap-6">
              <span className="text-6xl font-serif text-gray-300 leading-none">E</span>
              <p className="text-lg font-medium leading-relaxed">
Every event we design is guided by creativity, precision, and attention to detail.
At SSL Events and Productions, we transform ideas into unforgettable experiences.
From elegant weddings to impactful corporate conferences, we bring every vision to life.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-sm lg:text-base mt-[40px]">
            <p>
            We believe great events are built on thoughtful planning and flawless execution. 
Our team carefully manages every element — venue design, stage production, 
lighting, and guest experience — ensuring that each moment reflects the 
vision and purpose behind the event.
            </p>
            <p>
          Whether it’s a luxury wedding celebration, a high-profile corporate summit, 
or a dynamic gala evening, we combine creativity with advanced event 
technology to deliver experiences that inspire and engage every guest.
            </p>
            <p>
         Our portfolio showcases a diverse range of events across industries and 
cultures. With a commitment to quality, innovation, and elegance, 
SSL Events and Productions continues to create memorable events 
that leave lasting impressions.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default EventWorksSection;