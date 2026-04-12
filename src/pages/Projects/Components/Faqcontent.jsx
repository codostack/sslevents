import React, { useState } from 'react';
import { ChevronDown, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import project8 from "../../../assets/project/project8.avif";

const FAQItem = ({ question, answer, bgColor, isOpen, onClick }) => {
  return (
    <div className={`mb-2 rounded-xl border border-gray-100 transition-all duration-500 ${bgColor} ${isOpen ? 'shadow-sm ring-1 ring-black/5' : 'hover:shadow-sm'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-3.5 text-left focus:outline-none"
      >
        <span className="text-sm font-bold text-gray-800">{question}</span>
        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          <div className="bg-white/80 p-1 rounded-full">
            <ChevronDown size={14} className="text-gray-500" />
          </div>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-4 pb-3.5 text-gray-600 text-xs leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const EventFAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const navigate = useNavigate(); // ✅ added only

  const faqs = [
    { question: "How do we handle venue selection?", answer: "We curate exclusive locations from heritage villas to modern rooftops tailored to your theme.", color: "bg-rose-50" },
    { question: "Can you manage destination weddings?", answer: "Yes, we handle all logistics, guest travel, and local vendor coordination globally.", color: "bg-amber-50" },
    { question: "What is in the Full Planning package?", answer: "Complete coverage: budget, vendor sourcing, day-of coordination, and wrap-up.", color: "bg-indigo-50" },
    { question: "Do you provide custom decor?", answer: "Our designers create bespoke mood boards to ensure every detail fits your vision.", color: "bg-teal-50" },
    { question: "What about last-minute changes?", answer: "Our team is trained for rapid problem-solving to ensure your event runs smoothly.", color: "bg-orange-50" }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 font-sans">

      {/* ── DESKTOP layout (md+): unchanged ── */}
      <div className="hidden md:flex flex-row w-full max-w-8xl h-[580px] bg-white overflow-hidden shadow-xl border border-gray-100">

        {/* Left: FAQ */}
        <div className="w-[70%] h-full flex flex-col">
          <div className="p-8 pb-4">
            <span className="text-[10px] font-bold text-rose-500 uppercase tracking-[0.2em] mb-1 block">Support Center</span>
            <h3 className="text-3xl font-black text-gray-900 tracking-tight">FAQs</h3>
          </div>

          <div className="flex-grow overflow-y-auto px-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
            <div className="max-w-2xl">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  bgColor={faq.color}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>

          {/* ✅ ONLY CHANGE HERE */}
          <div className="p-8 pt-4 mt-auto">
            <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between border border-gray-100">
              <div>
                <p className="text-sm font-bold text-gray-900">Need more help?</p>
                <p className="text-[10px] text-gray-500 uppercase font-medium">Contact our specialists</p>
              </div>
              <button
                onClick={() => navigate("/contact")}
                className="bg-gray-900 hover:bg-rose-600 text-white px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all duration-300 text-xs shadow-md"
              >
                <Calendar size={14} />
                Connect
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-[30%] h-full overflow-hidden">
          <img
            src={project8}
            alt="Event"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-1.5 mb-2 bg-white/10 backdrop-blur-md w-fit px-2.5 py-1 rounded-full border border-white/20">
              <Sparkles size={12} className="text-rose-300" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/90">Premium</span>
            </div>
            <h2 className="text-2xl font-bold leading-tight">Moments <br /> Defined.</h2>
          </div>
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="flex md:hidden flex-col w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">

        {/* Image */}
        <div className="relative w-full h-[180px] sm:h-[220px] overflow-hidden flex-shrink-0">
          <img
            src={project8}
            alt="Event"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-1.5 mb-1.5 bg-white/10 backdrop-blur-md w-fit px-2.5 py-1 rounded-full border border-white/20">
              <Sparkles size={12} className="text-rose-300" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/90">Premium</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold leading-tight">Moments Defined.</h2>
          </div>
        </div>

        {/* FAQ */}
        <div className="px-5 pt-5 pb-2">
          <span className="text-[10px] font-bold text-rose-500 uppercase tracking-[0.2em] mb-1 block">Support Center</span>
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">FAQs</h3>
        </div>

        <div className="px-5 pb-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              bgColor={faq.color}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* ✅ ONLY CHANGE HERE */}
        <div className="px-5 py-4">
          <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between border border-gray-100">
            <div>
              <p className="text-sm font-bold text-gray-900">Need more help?</p>
              <p className="text-[10px] text-gray-500 uppercase font-medium">Contact our specialists</p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gray-900 hover:bg-rose-600 text-white px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all duration-300 text-xs shadow-md"
            >
              <Calendar size={14} />
              Connect
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventFAQComponent;