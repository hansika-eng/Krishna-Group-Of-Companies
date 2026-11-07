import {
  Building2,
  House,
  Megaphone,
  Clapperboard,
  Globe,
  Code,
  Shirt,
  ArrowUpRight
} from "lucide-react";

import "../styles/Services.css";

const businesses = [
  {
    title: "Krishna Constructions",
    description:
      "Building quality spaces through thoughtful planning and construction.",
    icon: Building2
  },
  {
    title: "Real Estate",
    description:
      "Exploring property opportunities and real estate solutions.",
    icon: House
  },
  {
    title: "Marketing",
    description:
      "Creative marketing strategies that connect brands with people.",
    icon: Megaphone
  },
  {
    title: "Studios",
    description:
      "Creative ideas transformed into engaging visual experiences.",
    icon: Clapperboard
  },
  {
    title: "Imports & Exports",
    description:
      "Connecting businesses and opportunities across markets.",
    icon: Globe
  },
  {
    title: "Software Solutions",
    description:
      "Technology-driven solutions for evolving business needs.",
    icon: Code
  },
  {
    title: "Textiles",
    description:
      "Textile products and opportunities across the industry.",
    icon: Shirt
  }
];

function Services() {
  return (
    <section className="services-section" id="services">

      <div className="services-heading">

        <span className="section-label">
          OUR BUSINESS VERTICALS
        </span>

        <h2>
          Diverse Businesses.
          <span> One Vision.</span>
        </h2>

        <p>
          Discover the different industries and business
          divisions that make up Krishna Group of Companies.
        </p>

      </div>

      <div className="business-grid">

        {businesses.map((business, index) => {
          const Icon = business.icon;

          return (
            <article className="business-card" key={business.title}>

              <div className="business-card-top">
                <span className="business-number">
                  0{index + 1}
                </span>

                <Icon size={32} strokeWidth={1.4} />
              </div>

              <h3>{business.title}</h3>

              <p>{business.description}</p>

              <a href="#contact" aria-label={`Enquire about ${business.title}`}>
                Explore More
                <ArrowUpRight size={17} />
              </a>

            </article>
          );
        })}

      </div>

    </section>
  );
}

export default Services;