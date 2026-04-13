import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [location, setLocation] = useState('india');

const data = {
  india: {
    phone: "+91 8029905586",
    email: "info@sslevents.ae",
    address: "Bangalore, India",
    mapUrl: "https://www.google.com/maps?q=Bangalore,India&output=embed"
  },
  dubai: {
    phone: "+971 55 964 3050",
    email: "info@sslevents.ae",
    address: "Dubai, United Arab Emirates",
    mapUrl: "https://www.google.com/maps?q=Dubai,United+Arab+Emirates&output=embed"
  }
};

  const current = data[location];

  return (
    <section className="w-full min-h-screen bg-white py-12 px-4 md:px-10">
      <div className="w-full max-w-[100%] mx-auto space-y-10">
        
        {/* Square Tabs */}
        <div className="flex items-center">
          {['india', 'dubai'].map((loc) => (
            <button
              key={loc}
              onClick={() => setLocation(loc)}
              className={`px-10 py-4 text-sm font-bold tracking-widest uppercase border-2 transition-all duration-300 ${
                location === loc 
                ? 'bg-slate-900 text-white border-slate-900' 
                : 'bg-white text-slate-500 border-gray-200 hover:border-slate-400'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Info Cards with Multiple Light Colors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Phone Card - Soft Mint */}
          <div className="bg-[#b3e7b7] p-10 squared-[2.5rem] flex flex-col space-y-4 border border-[#b2dfdb]/50 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Phone className="text-[#00796b]" size={28} />
            </div>
            <div>
              <h3 className="text-[#004d40] text-2xl font-default">{current.phone}</h3>
              <p className="text-[#00695c]/70 mt-2 font-default">
                Our support lines are open for technical consultations and project queries.
              </p>
            </div>
          </div>

          {/* Email Card - Soft Lavender */}
          <div className="bg-[#f3e5f5] p-10 squared-[2.5rem] flex flex-col space-y-4 border border-[#e1bee7]/50 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Mail className="text-[#7b1fa2]" size={28} />
            </div>
            <div>
              <h3 className="text-[#4a148c] text-2xl font-default">{current.email}</h3>
              <p className="text-[#6a1b9a]/70 mt-2 font-default">
                Prefer writing? Send us your requirements and we will get back within a day.
              </p>
            </div>
          </div>

          {/* Address Card - Soft Peach/Cream */}
          <div className="bg-[#fff3e0] p-10 square-[2.5rem] flex flex-col space-y-4 border border-[#ffe0b2]/50 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <MapPin className="text-[#e65100]" size={28} />
            </div>
            <div>
              <h3 className="text-[#bf360c] text-2xl font-default">{current.address}</h3>
              <p className="text-[#d84315]/70 mt-2 font-default">
                Our physical workspace is designed for collaborative planning sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section - Screen Fit Width */}
        <div className="w-full h-[500px] squared-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
          <iframe
            title="Location Map"
            src={current.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;