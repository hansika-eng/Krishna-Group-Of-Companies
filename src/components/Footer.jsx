import {
  Camera,
  Users,
  BriefcaseBusiness,
  Mail
} from "lucide-react";

import "../styles/Footer.css";
import logo from "../img/KGC-logo.png";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <img src={logo} alt="Krishna Group of Companies" />

          <p>
            Building Businesses. Creating Opportunities.
            Shaping Tomorrow.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

        </div>

        {/* BUSINESS DIVISIONS */}
        <div className="footer-column">

          <h3>Our Businesses</h3>

          <a href="#services">Constructions</a>
          <a href="#services">Real Estate</a>
          <a href="#services">Marketing</a>
          <a href="#services">Studios</a>
          <a href="#services">Imports & Exports</a>
          <a href="#services">Software Solutions</a>
          <a href="#services">Textiles</a>

        </div>

        {/* CONTACT */}
        <div className="footer-column">

          <h3>Get In Touch</h3>

          <p>
            Connect with Krishna Group of Companies
            for business enquiries and opportunities.
          </p>

          <div className="footer-socials">

            <a href="#contact" aria-label="Instagram">
              <Camera />
            </a>

            <a href="#contact" aria-label="Community">
              <Users />
            </a>

            <a href="#contact" aria-label="Business">
              <BriefcaseBusiness />
            </a>

            <a href="#contact" aria-label="Email">
              <Mail />
            </a>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">

        © {new Date().getFullYear()} Krishna Group of Companies.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;