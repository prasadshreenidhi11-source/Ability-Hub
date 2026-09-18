import { useEffect, useRef } from "react";
import "./WhatWeDo.css";

const features = [
  {
    number: "01",
    icon: "▣",
    title: "By Appointment",
    description:
      "Consultations by phone, Teams, in our office, or in your home – whatever suits you.",
  },
  {
    number: "02",
    icon: "◇",
    title: "NDIS Provider",
    description:
      "Provider Number 4050161787, billed per the NDIS Price Guide.",
  },
  {
    number: "03",
    icon: "↻",
    title: "Consistency",
    description:
      "Reliable, quality care you can count on, visit to visit.",
  },
  {
    number: "04",
    icon: "♡",
    title: "Compassion",
    description:
      "Trained support staff who genuinely care about your goals.",
  },
];

function WhatWeDo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(".what-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("what-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="what-section"
      id="what-we-do"
      ref={sectionRef}
    >

      {/* Small top curve */}
      <div className="what-top-curve"></div>

      {/* Background decoration */}
      <div className="what-orbit what-orbit-one"></div>
      <div className="what-orbit what-orbit-two"></div>

      <div className="what-container">

        {/* ================================
            MAIN CONTENT
        ================================= */}

        <div className="what-main">

          {/* LEFT CONTENT */}
          <div className="what-copy what-reveal">

            <div className="what-label">
              <span></span>
              What We Do
            </div>

            <h2>
              Your Ability,
              <br />
              <em>Our Focus.</em>
            </h2>

            <p className="what-description">
              We provide guidance and advice with a focus on
              ability, inclusion, and community participation —
              delivered through quality care and trained,
              supportive staff. Our holistic approach gives every
              participant the opportunity to work toward their NDIS
              and personal goals, with freedom of choice and control
              at the centre of everything we do.
            </p>

            <div className="what-signature">
              <span>Real people.</span>
              <strong>Real support.</strong>
            </div>

          </div>


          {/* CENTER IMAGE */}
          <div className="what-visual what-reveal">

            <div className="what-image-back"></div>

            <div className="what-image-wrap">

              <img
                src="https://images.unsplash.com/photo-1764006145420-df3006edf060?auto=format&fit=crop&w=1400&q=90"
                alt="Support worker assisting a participant"
                className="what-image"
              />

              <div className="what-image-overlay"></div>

            </div>

            {/* Floating message */}
            <div className="what-floating-message">

              <span>More Support</span>

              <strong>
                More
                <br />
                Possibilities
              </strong>

              <div className="what-floating-arrow">
                ↗
              </div>

            </div>

            {/* Orange decorative spark */}
            <div className="what-spark">
              <span></span>
              <span></span>
            </div>

          </div>


          {/* RIGHT PROFILE */}
          <div className="what-profile what-reveal">

            <div className="what-profile-photo">

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=85"
                alt="Managing Director"
              />

            </div>

            <div className="what-profile-role">
              Managing Director &
              <br />
              Support Coordinator
            </div>

            <h3>Joanne Sullivan</h3>

            <div className="what-profile-line"></div>

            <p>
              Our team shares a passion for supporting people
              of all ages and abilities with consistent care,
              providing opportunities for everyone to achieve
              their goals and live their best life. We work
              together to offer NDIS participants high-quality
              care, empowering each person to reach their
              potential and achieve positive outcomes.
            </p>

            <div className="what-profile-mark">
              “
            </div>

          </div>

        </div>


        {/* ================================
            FEATURE STRIP
        ================================= */}

        <div className="what-features">

          {features.map((feature, index) => (

            <article
              className="what-feature what-reveal"
              style={{
                "--feature-delay": `${index * 120}ms`,
              }}
              key={feature.title}
            >

              <div className="what-feature-top">

                <span className="what-feature-number">
                  {feature.number}
                </span>

                <div className="what-feature-icon">
                  {feature.icon}
                </div>

              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </article>

          ))}

        </div>


        {/* ================================
            BOTTOM STATEMENT
        ================================= */}

        <div className="what-bottom what-reveal">

          <div className="what-bottom-decoration">

            <span>Together</span>

            <strong>
              We Achieve
            </strong>

            <i>♡</i>

          </div>

          <div className="what-bottom-line"></div>

          <p>
            Empowering people to
            <strong> reach their potential.</strong>
          </p>

        </div>

      </div>


      {/* Bottom organic wave */}
      <div className="what-bottom-wave"></div>

    </section>
  );
}

export default WhatWeDo;