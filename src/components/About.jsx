import { ArrowUpRight, Compass, Sparkles } from "lucide-react";
import "../styles/About.css";

function About() {
  const values = [
    "Integrity",
    "Trust",
    "Innovation",
    "Quality",
    "Commitment",
    "Excellence",
  ];

  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* TOP CONTENT */}
        <div className="about-main">

          {/* LEFT SIDE */}
          <div className="about-heading">

            <div className="about-label">
              <span className="about-label-line"></span>
              WHO WE ARE
            </div>

            <h2>
              Different industries.
              <br />
              <span>One forward vision.</span>
            </h2>

            <a href="#businesses" className="about-link">
              Get to know us
              <ArrowUpRight size={19} />
            </a>

          </div>

          {/* RIGHT SIDE */}
          <div className="about-information">

            <h3>
              Krishna Group of Companies is a diversified
              business group with interests across multiple
              industries.
            </h3>

            <p className="about-description">
              Driven by a commitment to quality, innovation
              and long-term relationships, we aim to create
              meaningful opportunities and deliver excellence
              in every endeavour.
            </p>

            <div className="about-divider"></div>

            {/* VISION AND MISSION */}
            <div className="about-features">

              <div className="about-feature">

                <div className="about-feature-icon">
                  <Compass size={23} />
                </div>

                <div>
                  <h4>Our vision</h4>
                  <p>
                    To build a trusted and diversified business
                    group that creates lasting value and
                    meaningful opportunities.
                  </p>
                </div>

              </div>

              <div className="about-feature">

                <div className="about-feature-icon">
                  <Sparkles size={23} />
                </div>

                <div>
                  <h4>Our mission</h4>
                  <p>
                    To deliver quality, innovation and
                    excellence while building strong
                    relationships with customers and partners.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* VALUES SECTION */}
        <div className="about-values">

          <span className="values-heading">
            OUR VALUES
          </span>

          <div className="values-list">

            {values.map((value, index) => (
              <div className="value-item" key={value}>

                <span>{value}</span>

                {index !== values.length - 1 && (
                  <span className="value-dot"></span>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;