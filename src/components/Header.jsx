import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight
} from "lucide-react";

import "../styles/Header.css";
import logo from "../img/KGC-logo.png";

const services = [
  "Krishna Constructions",
  "Real Estate",
  "Marketing",
  "Studios",
  "Imports & Exports",
  "Software Solutions",
  "Textiles"
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="header">
      <div className="navbar">

        {/* LOGO */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Krishna Group of Companies" />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* NAVIGATION */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          {/* SERVICES DROPDOWN */}
          <div
            className={`nav-dropdown ${servicesOpen ? "open" : ""}`}
            onMouseEnter={() => {
              if (window.innerWidth > 900) {
                setServicesOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 900) {
                setServicesOpen(false);
              }
            }}
          >
            <button
              className="dropdown-trigger"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown size={15} />
            </button>

            <div className="dropdown-menu">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  onClick={closeMenu}
                >
                  <ChevronRight size={14} />
                  {service}
                </a>
              ))}
            </div>
          </div>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a href="#founder" onClick={closeMenu}>
            Founder
          </a>

          <a href="#founder-message" onClick={closeMenu}>
            Founder Message
          </a>

          <a
            href="#contact"
            className="nav-contact"
            onClick={closeMenu}
          >
            Get In Touch
          </a>

        </nav>

      </div>
    </header>
  );
}

export default Header;