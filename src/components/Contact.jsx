
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // The enquiry form UI is ready.
    // Connect an email service or backend to send enquiries.

    setStatus(
      "Thank you for reaching out! Our enquiry form is ready for email integration."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* LEFT CONTENT */}

        <div className="contact-info">

          <span className="contact-label">
            START A CONVERSATION
          </span>

          <h2>
            Good things
            <br />
            begin with <span>a hello.</span>
          </h2>

          <p className="contact-description">
            Have a question or an opportunity in mind?
            We'd be glad to hear from you.
          </p>

          <div className="contact-details">

            <div className="contact-detail">

              <div className="contact-detail-icon">
                <Mail size={22} />
              </div>

              <div>
                <span>EMAIL</span>
                <p>Official email to be provided</p>
              </div>

            </div>

            <div className="contact-detail">

              <div className="contact-detail-icon">
                <Phone size={22} />
              </div>

              <div>
                <span>PHONE</span>
                <p>Phone number to be provided</p>
              </div>

            </div>

            <div className="contact-detail">

              <div className="contact-detail-icon">
                <MapPin size={22} />
              </div>

              <div>
                <span>LOCATION</span>
                <p>Company address to be provided</p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT FORM */}

        <div className="contact-form-wrapper">

          <div className="contact-form-heading">
            <span>ENQUIRY</span>
            <p>We'll be in touch.</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <div className="form-group">
                <label htmlFor="contact-name">
                  Your name
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">
                  Email address
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">
                Phone number
              </label>

              <input
                type="tel"
                id="contact-phone"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">
                How can we help?
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell us a little about your enquiry..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Send your enquiry
              <ArrowRight size={19} />
            </button>

            {status && (
              <p className="contact-status" role="status">
                {status}
              </p>
            )}

            <p className="contact-privacy">
              Your details are used only to respond to your enquiry.
            </p>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;
