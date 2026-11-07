import { ArrowRight, Building2 } from "lucide-react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-label">
          <Building2 size={17} />
          GROUP OF COMPANIES
        </span>

        <h1>
          Building Businesses.
          <br />
          <span>Creating Opportunities.</span>
          <br />
          Shaping Tomorrow.
        </h1>

        <p>
          A diverse business group driven by vision,
          commitment and innovation, creating opportunities
          across multiple industries.
        </p>

        <div className="hero-buttons">

          <a href="#services" className="btn-primary">
            Explore Our Businesses
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Us
          </a>

        </div>

      </div>

      <div className="hero-bottom">
        <span>EXCELLENCE IN EVERY ENDEAVOUR</span>
        <span>01 — 07</span>
      </div>

    </section>
  );
}

export default Hero;