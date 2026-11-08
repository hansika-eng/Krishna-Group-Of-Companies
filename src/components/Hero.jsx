
import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Compass,
  Layers3
} from "lucide-react";

import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-label">
            <span className="hero-label-line"></span>
            A GROUP BUILT FOR WHAT'S NEXT
          </div>

          <h1>
            Building
            <br />
            businesses.
            <br />
            <span>Creating</span>
            <br />
            <span>opportunities.</span>
            <br />
            Shaping
            <br />
            tomorrow.
          </h1>

          <p className="hero-description">
            A diversified business group driven by vision,
            commitment and innovation, creating meaningful
            opportunities across multiple industries.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <a href="#businesses" className="hero-btn-primary">
              Explore Our Businesses
              <ArrowRight size={19} />
            </a>

            <a href="#contact" className="hero-btn-secondary">
              Get in Touch
              <ArrowUpRight size={19} />
            </a>

          </div>

          <div className="hero-bottom-text">
            BUILT ON PURPOSE. DRIVEN BY VISION.
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-visual">

          <div className="hero-image-wrapper">

            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=90"
              alt="Modern glass corporate office building"
              className="hero-image"
              loading="eager"
            />

            <div className="hero-image-overlay"></div>

          </div>

          {/* VISION CARD */}
          <div className="hero-floating-card card-top">

            <div className="floating-icon">
              <Compass size={22} />
            </div>

            <span>A vision for tomorrow</span>

          </div>

          {/* OPPORTUNITY CARD */}
          <div className="hero-floating-card card-middle">

            <div className="floating-middle-icon">
              <Layers3 size={22} />
            </div>

            <span>Creating meaningful opportunity</span>

          </div>

          {/* PURPOSE CARD */}
          <div className="hero-purpose-card">

            <div className="purpose-icon">
              <Building2 size={27} />
            </div>

            <div className="purpose-content">
              <h4>Built with purpose.</h4>
              <p>Progress across industries.</p>
            </div>

            <ArrowUpRight
              className="purpose-arrow"
              size={25}
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
