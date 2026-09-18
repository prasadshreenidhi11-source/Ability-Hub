import { useEffect, useRef } from "react";
import "./Services.css";


const services = [
  {
    number: "01",
    title: "Support Coordination",
    description:
      "We help you understand your NDIS plan, connect with the right providers, and make informed choices that support your goals.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=90",
  },

  {
    number: "02",
    title: "Community Access",
    description:
      "Build confidence, explore your community and take part in activities, outings and experiences that matter to you.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=90",
  },

  {
    number: "03",
    title: "Social Skill Building",
    description:
      "Develop communication, confidence and social skills through meaningful everyday experiences and connections.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=90",
  },

  {
    number: "04",
    title: "Life Skills",
    description:
      "Learn practical everyday skills that help you become more confident, capable and independent in your daily life.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=90",
  },

  {
    number: "05",
    title: "Transportation Training",
    description:
      "Develop the skills and confidence needed to travel safely and independently within your community.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=90",
  },

  {
    number: "06",
    title: "Individual Support",
    description:
      "Personalised support designed around your unique goals, preferences and needs to help you live a more independent life.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90",
  },
];
function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const items = section.querySelectorAll(".service-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="services-section"
      id="services"
      ref={sectionRef}
    >
      {/* CURVE MATCHING HERO */}
      <div className="services-top-curve"></div>

      <div className="services-container">

        {/* INTRO */}
        <div className="services-intro service-reveal">

          <div className="services-label">
            <span></span>
            Our Services
          </div>

          <h2 className="services-heading">
            Support Built Around <em>You</em>
          </h2>

          <div className="services-intro-bottom">

            <p>
              We help you understand your NDIS plan, connect with
              the right providers, and get the most out of your
              funding.
            </p>

            <a
              href="/service/"
              className="services-link"
            >
              <span>Explore all services</span>
              <strong>↗</strong>
            </a>

          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className="services-grid">

          {services.map((service, index) => (
            <article
              className="service-card service-reveal"
              key={service.title}
              style={{
                "--delay": `${index * 90}ms`,
              }}
            >

              <div className="service-image-wrapper">

                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                  loading="lazy"
                />

                <div className="service-image-overlay"></div>

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>

              </div>

              <div className="service-content">

                <div className="service-text">

                  <h3>{service.title}</h3>

                  <p>
                    {service.description}
                  </p>

                </div>

                <div className="service-bottom-line">

                  <span>Learn more</span>

                  <span className="service-small-arrow">
                    →
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="services-bottom service-reveal">

          <div className="services-bottom-line"></div>

          <p>
            Personalised support.
            <strong> Greater independence.</strong>
          </p>

          <div className="services-bottom-line"></div>

        </div>

      </div>
    </section>
  );
}

export default Services;