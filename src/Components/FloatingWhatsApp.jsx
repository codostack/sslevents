export default function FloatingWhatsApp({ phone = "" }) {
  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes wa-bounce-in {
          0%   { transform: scale(0) rotate(-180deg); opacity: 0; }
          60%  { transform: scale(1.15) rotate(8deg); opacity: 1; }
          80%  { transform: scale(0.92) rotate(-4deg); }
          100% { transform: scale(1) rotate(0deg); }
        } 
        @keyframes wa-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes wa-bob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes wa-tooltip-in {
          from { opacity: 0; transform: translateY(-50%) translateX(10px); }
          to   { opacity: 1; transform: translateY(-50%) translateX(0); }
        }

        .wa-wrap {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 9999;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Pulse rings */
        .wa-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25D366;
          opacity: 0;
          animation: wa-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .wa-ring:nth-child(2) {
          animation-delay: 0.7s;
        }

        /* Spinning conic-gradient border */
        .wa-spin-border {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: conic-gradient(#25D366 80%, #80FFB8 90%, #25D366 100%);
          animation: wa-spin 3s linear infinite;
          z-index: 0;
        }
        .wa-spin-border::after {
          content: "";
          position: absolute;
          inset: 4px;
          border-radius: 50%;
          background: white; /* match your page bg */
        }

        /* Main button */
        .wa-btn {
          position: relative;
          z-index: 1;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          animation:
            wa-bounce-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both,
            wa-bob 3s 1s ease-in-out infinite;
          transition: background 0.2s;
        }
        .wa-btn:hover { background: #1ebe5d; }
        .wa-btn:hover + .wa-tooltip { display: flex; }

        /* WhatsApp SVG icon */
        .wa-icon {
          width: 28px;
          height: 28px;
          fill: #fff;
        }

        /* Tooltip */
        .wa-tooltip {
          display: none;
          align-items: center;
          gap: 6px;
          position: absolute;
          right: 76px;
          top: 50%;
          transform: translateY(-50%);
          background: #1a1a1a;
          color: #fff;
          font-size: 13px;
          padding: 7px 12px;
          border-radius: 8px;
          white-space: nowrap;
          pointer-events: none;
          animation: wa-tooltip-in 0.2s ease forwards;
        }
        .wa-tooltip::after {
          content: "";
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-left-color: #1a1a1a;
        }
        .wa-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #25D366;
          flex-shrink: 0;
        }
      `}</style>

      <div className="wa-wrap">
        {/* Pulse rings */}
        <div className="wa-ring" />
        <div className="wa-ring" />

        {/* Spinning ring */}
        <div className="wa-spin-border" />

        {/* Button */}
        <a
        href="https://api.whatsapp.com/send?phone=971508536881&text=Hello%20%F0%9F%91%8B%0AWelcome%20to%20SSL%20Events%20%26%20Productions!%0A%0AI%E2%80%99d%20like%20to%20know%20more%20about%20your%20event%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
          aria-label="Chat on WhatsApp"
        >
          <svg className="wa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a> 

        {/* Hover tooltip */}
        <div className="wa-tooltip">
          <span className="wa-dot" />
          Chat with us
        </div>
      </div>
    </>
  );
}