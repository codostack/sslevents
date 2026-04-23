import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/12.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 👉 WhatsApp handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "971508536881"; // ✅ Your number (no +)
    const message = "Hi, I want to book an event. Please share details.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        backgroundColor: scrolled ? "#ffffff" : "transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
          }}
        >
          {/* Logo */}
<img
  src={logo}
  alt="Logo"
  style={{
    height: "50px",
    width: "auto",
    objectFit: "contain",
    transition: "0.4s ease",
  }}
/>

          {/* Desktop Menu */}
          <div
            className="desktop-menu"
            style={{
              display: "flex",
              gap: "30px",
            }}
          >
            <Link to="/" style={{ color: scrolled ? "#000" : "#fff" }}>Home</Link>
            <Link to="/about" style={{ color: scrolled ? "#000" : "#fff" }}>About</Link>
            <Link to="/services" style={{ color: scrolled ? "#000" : "#fff" }}>Services</Link>
            <Link to="/projects" style={{ color: scrolled ? "#000" : "#fff" }}>Projects</Link>
            <Link to="/contact" style={{ color: scrolled ? "#000" : "#fff" }}>Contact</Link>
          </div>

          {/* Desktop Button */}
<button
  onClick={handleWhatsAppClick}
  className="desktop-btn rounded-md"
  style={{
    backgroundColor: "#f97316",
    color: "#fff",
    padding: "8px 18px",
    border: "none",
    cursor: "pointer",
  }}
>
  Book Event
</button>

          {/* Mobile Menu Icon */}
          <div
            className="mobile-menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              fontSize: "26px",
              color: scrolled ? "#000" : "#fff",
              cursor: "pointer",
            }}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            style={{
              background: "#fff",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <button
              onClick={handleWhatsAppClick}
              style={{
                backgroundColor: "#f97316",
                color: "#fff",
                padding: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Book Event
            </button>
          </div>
        )}
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .desktop-btn {
            display: none !important;
          }
          .mobile-menu-icon {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}