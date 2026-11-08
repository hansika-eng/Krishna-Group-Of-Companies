
import React from "react";
import { UserRound } from "lucide-react";
import "../styles/Founder.css";

function Founder() {
  return (
    <section className="founder-section" id="founder">

      <div className="founder-container">

        {/* LEFT FOUNDER VISUAL */}

        <div className="founder-visual">

          <div className="founder-frame">

            <div className="founder-circle circle-outer"></div>
            <div className="founder-circle circle-inner"></div>

            <div className="founder-placeholder">
              <UserRound size={38} strokeWidth={1.4} />
            </div>

            <p className="founder-image-caption">
              Founder photograph to be provided
            </p>

            <span className="corner corner-top"></span>
            <span className="corner corner-bottom"></span>

          </div>

          <div className="founder-image-label">
            THE VISION BEHIND KRISHNA GROUP
          </div>

        </div>

        {/* RIGHT FOUNDER CONTENT */}

        <div className="founder-content">

          <div className="founder-label">
            <span></span>
            A MESSAGE FROM OUR FOUNDER
          </div>

          <h2>
            A vision built
            <br />
            on trust <span>& commitment.</span>
          </h2>

          <div className="founder-quote-mark">
            “
          </div>

          <p className="founder-intro">
            Every successful journey begins with a vision
            and grows through dedication, hard work and trust.
          </p>

          <p>
            At Krishna Group of Companies, our aim is to
            create meaningful opportunities, build lasting
            relationships and deliver excellence across
            every business we undertake.
          </p>

          <p>
            We believe that true success is not just about
            growth, but also about the values and commitment
            behind every step of the journey.
          </p>

          {/* FOUNDER SIGNATURE */}

          <div className="founder-signature">

            <span className="signature-line"></span>

            <div>
              <h4>Founder</h4>
              <p>Krishna Group of Companies</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Founder;
