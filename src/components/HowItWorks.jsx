import { useEffect, useRef } from "react";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Free Phone Consultation",
    description:
      "A free 15-minute phone consultation for all new NDIS clients, held by appointment only.",
    tag: "Start Here",
    icon: "✦",
  },
  {
    number: "02",
    title: "Support Coordination",
    description:
      "We help you navigate the NDIS and connect with service providers, tailored to meet your needs.",
    tag: "Understand",
    icon: "↗",
  },
  {
    number: "03",
    title: "Tailored Support Delivered",
    description:
      "Quality care through trained support staff — via phone, Teams, in our office, or in your home.",
    tag: "Support",
    icon: "♡",
  },
  {
    number: "04",
    title: "Building Independence",
    description:
      "Working toward your NDIS and personal goals, with freedom of choice and control.",
    tag: "Your Future",
    icon: "→",
  },
];

function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(".how-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("how-visible");
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
      className="how-section"
      id="how-it-works"
      ref={sectionRef}
    >

      {/* =====================================================
          TOP CURVE
      ====================================================== */}

      <div className="how-top-curve"></div>


      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="how-orbit how-orbit-one"></div>
      <div className="how-orbit how-orbit-two"></div>

      <div className="how-glow"></div>


      <div className="how-container">

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className="how-intro how-reveal">

          <div className="how-label">
            <span></span>
            How It Works
          </div>

          <h2>
            Step by Step,
            <br />
            <em>We Make It Happen.</em>
          </h2>

          <div className="how-intro-bottom">

            <p>
              Support tailored to meet your specific needs —
              from your first phone call through to ongoing care.
            </p>

            <a
              href="https://wordpress-691607-6555637.cloudwaysapps.com/about-us/"
              className="how-read-more"
            >
              <span>Read More</span>
              <strong>↗</strong>
            </a>

          </div>

        </div>


        {/* =====================================================
            JOURNEY
        ====================================================== */}

        <div className="how-journey">

          {/* Connecting line */}
          <div className="how-line">

            <div className="how-line-progress"></div>

          </div>


          {steps.map((step, index) => (

            <article
              className={`how-step how-step-${index + 1} how-reveal`}
              style={{
                "--step-delay": `${index * 140}ms`,
              }}
              key={step.number}
            >

              {/* Number */}
              <div className="how-step-number">
                {step.number}
              </div>


              {/* Center node */}
              <div className="how-step-node">

                <div className="how-node-inner">
                  {step.icon}
                </div>

              </div>


              {/* Content */}
              <div className="how-step-content">

                <div className="how-step-tag">
                  {step.tag}
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

                <div className="how-step-arrow">
                  <span>Step {step.number}</span>
                  <strong>→</strong>
                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =====================================================
            FINAL CTA / CENTER MESSAGE
        ====================================================== */}

        <div className="how-bottom how-reveal">

          <div className="how-bottom-circle">

            <div className="how-bottom-circle-inner">

              <span>
                YOUR JOURNEY
              </span>

              <div className="how-bottom-line"></div>

              <strong>
                Starts
                <br />
                <em>Here.</em>
              </strong>

              <i>↗</i>

            </div>

          </div>


          <div className="how-bottom-copy">

            <span>
              From the first conversation
            </span>

            <h3>
              Support that moves
              <br />
              <em>with you.</em>
            </h3>

            <p>
              Every step is built around your goals,
              your choices and the life you want to live.
            </p>

          </div>

        </div>


        {/* Bottom statement */}

        <div className="how-footer">

          <span>
            Your goals
          </span>

          <strong>→</strong>

          <span>
            Your choices
          </span>

          <strong>→</strong>

          <span>
            Your independence
          </span>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;