import { ArrowUpRight } from "lucide-react";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        <div className="about-image">
          <div className="about-image-content">
            <span>KRISHNA GROUP</span>
            <h2>Growing With Vision</h2>
          </div>
        </div>

        <div className="about-content">

          <span className="section-label">
            ABOUT OUR GROUP
          </span>

          <h2>
            A Vision That
            <span> Builds The Future.</span>
          </h2>

          <p>
            Krishna Group of Companies brings together
            diverse business ventures under one vision.
            Through our presence across multiple industries,
            we aim to create meaningful opportunities and
            deliver lasting value.
          </p>

          <p>
            Driven by commitment, innovation and a
            forward-looking approach, we continue to
            explore new possibilities and build stronger
            business relationships.
          </p>

          <a href="#services" className="about-link">
            Discover Our Businesses
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;