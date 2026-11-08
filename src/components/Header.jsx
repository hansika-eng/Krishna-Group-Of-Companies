
import React, { useState } from "react";
import {
  Building2,
  ChevronDown,
  ArrowUpRight,
  Menu,
  X,
  House,
  Clapperboard,
  Ship,
  Code2,
  Shirt,
  Megaphone
} from "lucide-react";

import "../styles/Header.css";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const businesses = [
    { name: "Krishna Constructions", icon: Building2, id: "construction" },
    { name: "Real Estate", icon: House, id: "real-estate" },
    { name: "Studios", icon: Clapperboard, id: "studios" },
    { name: "Imports & Exports", icon: Ship, id: "imports-exports" },
    { name: "Software Solutions", icon: Code2, id: "software" },
    { name: "Textiles", icon: Shirt, id: "textiles" },
    { name: "Marketing", icon: Megaphone, id: "marketing" }
  ];

  const closeMenus = () => {
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="header">
      <div className="navbar">

        {/* LOGO */}
        <a href="#home" className="logo" onClick={closeMenus}>
          <div className="logo-icon">
            <Building2 size={27} strokeWidth={1.6} />
          </div>

          <div className="logo-text">
            <h2>KRISHNA</h2>
            <span>GROUP OF COMPANIES</span>
          </div>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* NAVIGATION */}
        <nav className={`nav-links ${mobileOpen ? "active" : ""}`}>

          <a href="#home" onClick={closeMenus}>Home</a>

          <a href="#about" onClick={closeMenus}>About</a>

          {/* BUSINESSES DROPDOWN */}
          <div
            className={`nav-dropdown ${dropdownOpen ? "open" : ""}`}
            onMouseEnter={() => {
              if (window.innerWidth > 900) setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 900) setDropdownOpen(false);
            }}
          >
            <button
              className="dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              Businesses
              <ChevronDown
                size={17}
                className={dropdownOpen ? "chevron-rotated" : ""}
              />
            </button>

            <div className="dropdown-menu">
              {businesses.map((business) => {
                const Icon = business.icon;

                return (
                  <a
                    href={`#${business.id}`}
                    key={business.id}
                    onClick={closeMenus}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                    <span>{business.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <a href="#contact" onClick={closeMenus}>Contact</a>

          <a
            href="#contact"
            className="nav-contact"
            onClick={closeMenus}
          >
            Get in touch
            <ArrowUpRight size={19} />
          </a>

        </nav>
      </div>
    </header>
  );
}

export default Header;
