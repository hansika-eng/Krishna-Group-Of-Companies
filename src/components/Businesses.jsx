
import React from "react";
import {
  Building2,
  House,
  Clapperboard,
  Ship,
  Code2,
  Shirt,
  Megaphone,
  ArrowUpRight
} from "lucide-react";
import "../styles/Businesses.css";

const businessList = [
  {
    number: "01",
    category: "CONSTRUCTION",
    title: "Krishna Constructions",
    description:
      "Construction, infrastructure and development shaped by a commitment to quality.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900",
    icon: Building2
  },
  {
    number: "02",
    category: "REAL ESTATE",
    title: "Real Estate",
    description:
      "Property and real estate opportunities with a long-term perspective.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900",
    icon: House
  },
  {
    number: "03",
    category: "MEDIA & PRODUCTION",
    title: "Studios",
    description:
      "Creative, media and production services for ideas ready to take shape.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=900",
    icon: Clapperboard
  },
  {
    number: "04",
    category: "INTERNATIONAL TRADE",
    title: "Imports & Exports",
    description:
      "International trade connecting businesses and new opportunities.",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=900",
    icon: Ship
  },
  {
    number: "05",
    category: "TECHNOLOGY",
    title: "Software Solutions",
    description:
      "Digital and technology solutions for a changing business landscape.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
    icon: Code2
  },
  {
    number: "06",
    category: "TEXTILES",
    title: "Textiles",
    description:
      "Textile-related products and business, grounded in quality and care.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900",
    icon: Shirt
  },
  {
    number: "07",
    category: "BRAND & MARKETING",
    title: "Marketing",
    description:
      "Marketing, branding and promotional solutions that help ideas connect.",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900",
    icon: Megaphone
  }
];

function Businesses() {
  return (
    <section className="businesses-section" id="businesses">

      <div className="businesses-container">

        <div className="businesses-heading">

          <div>
            <span className="section-label">
              OUR BUSINESSES
            </span>

            <h2>
              One group.
              <br />
              <span>Many possibilities.</span>
            </h2>
          </div>

          <p>
            Explore the businesses that bring the Krishna
            Group vision to life, each with its own
            perspective and purpose.
          </p>

        </div>

        <div className="businesses-grid">

          {businessList.map((business) => {
            const Icon = business.icon;

            return (
              <article
                className="business-card"
                key={business.number}
              >

                <div className="business-image">

                  <img
                    src={business.image}
                    alt={business.title}
                    loading="lazy"
                  />

                  <span className="business-number">
                    {business.number}
                  </span>

                  <div className="business-icon">
                    <Icon size={23} />
                  </div>

                </div>

                <div className="business-content">

                  <span className="business-category">
                    {business.category}
                  </span>

                  <h3>{business.title}</h3>

                  <p>{business.description}</p>

                  <a href="#contact" className="business-link">
                    Explore business
                    <ArrowUpRight size={18} />
                  </a>

                </div>

              </article>
            );
          })}

        </div>

        <div className="businesses-bottom">
          <span></span>
          Built on shared values, shaped by distinct possibilities.
        </div>

      </div>

    </section>
  );
}

export default Businesses;
