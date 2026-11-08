
import { ArrowUpRight } from "lucide-react";
import "../styles/Footer.css";
import logo from "../images/kcg logo.png";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* BRAND COLUMN */}
        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <img src={logo} alt="Krishna Group of Companies" />
          </a>

          <p>
            A diversified business group creating meaningful
            opportunities across multiple industries.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>EXPLORE</h3>

          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#services">Our businesses</a>
          <a href="#founder">Founder's message</a>
          <a href="#contact">Contact</a>

        </div>

        {/* BUSINESS LINKS */}
        <div className="footer-column">

          <h3>OUR BUSINESSES</h3>

          <a href="#services">Krishna Constructions</a>
          <a href="#services">Real Estate</a>
          <a href="#services">Studios</a>
          <a href="#services">Imports & Exports</a>
          <a href="#services">Software Solutions</a>
          <a href="#services">Textiles</a>
          <a href="#services">Marketing</a>

        </div>

        {/* CONTACT COLUMN */}
        <div className="footer-column footer-contact">

          <h3>GET IN TOUCH</h3>

          <p>
            We'd love to hear from you.
          </p>

          <a href="mailto:info@krishnagroup.com"
             className="footer-conversation">

            Start a conversation
            <ArrowUpRight size={17} />

          </a>

          <span className="footer-contact-note">
            Company contact details to be provided
          </span>

        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Krishna Group of Companies
        </p>

        <span className="footer-tagline">
          BUILT ON VISION. GROUNDED IN TRUST.
        </span>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;
