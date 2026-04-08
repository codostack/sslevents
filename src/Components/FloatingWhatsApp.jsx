import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] group">

      {/* MESSAGE TOOLTIP */}
      <div
        className="
          absolute right-16 bottom-3
          bg-white text-gray-800
          px-4 py-2 rounded-xl
          shadow-xl
          text-sm font-medium
          opacity-0 translate-x-4
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all duration-300
          whitespace-nowrap
        "
      >
        Chat with SSL Events 👋
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://api.whatsapp.com/send?phone=971508536881&text=Hello%20%F0%9F%91%8B%0AWelcome%20to%20SSL%20Events%20%26%20Productions!%0A%0AI%E2%80%99d%20like%20to%20know%20more%20about%20your%20event%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          relative
          flex items-center justify-center
          w-16 h-16
          bg-gradient-to-br from-green-400 to-green-600
          text-white
          rounded-full
          shadow-2xl
          hover:scale-110
          transition-all duration-300
        "
      >
        {/* Pulse Ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping"></span>

        {/* Icon */}
        <MessageCircle size={30} className="relative z-10" />
      </a>
    </div>
  );
}