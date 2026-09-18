import { useEffect, useRef } from "react";
import "./Freedom.css";

const values = [
  {
    number: "01",
    title: "Quality Care",
    description:
      "Trained, supportive staff who understand individual needs and provide care with respect, patience and understanding.",
  },
  {
    number: "02",
    title: "Inclusion",
    description:
      "A focus on community participation, meaningful connections and creating a genuine sense of belonging.",
  },
  {
    number: "03",
    title: "Consistency",
    description:
      "Reliable support you can count on, appointment to appointment, with people who understand your goals.",
  },
  {
    number: "04",
    title: "Independence",
    description:
      "Building capacity and confidence so you can work toward your own goals and live life on your terms.",
  },
];

function Freedom() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(".freedom-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("freedom-visible");
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
      className="freedom-section"
      id="freedom"
      ref={sectionRef}
    >
      {/* Background atmosphere */}
      <div className="freedom-orbit freedom-orbit-one"></div>
      <div className="freedom-orbit freedom-orbit-two"></div>
      <div className="freedom-glow"></div>

      {/* Top curve */}
      <div className="freedom-top-curve"></div>

      <div className="freedom-container">

        {/* Header */}
        <div className="freedom-header freedom-reveal">
          <div className="freedom-eyebrow">
            <span></span>
            What We Stand For
          </div>

          <h2>
            Freedom of
            <br />
            <em>Choice &amp; Control</em>
          </h2>

          <p>
            Your support should fit around your life — not the other
            way around. We believe every person deserves choice,
            respect and the confidence to shape their own future.
          </p>
        </div>

        {/* Main experience */}
        <div className="freedom-stage">

          {/* Left cards */}
          <div className="freedom-column freedom-column-left">
            {values.slice(0, 2).map((value, index) => (
              <article
                className={`freedom-card freedom-card-${index + 1} freedom-reveal`}
                style={{ "--delay": `${index * 120}ms` }}
                key={value.title}
              >
                <div className="freedom-card-top">
                  <span className="freedom-number">
                    {value.number}
                  </span>

                  <span className="freedom-card-icon">
                    ↗
                  </span>
                </div>

                <div className="freedom-card-content">
                  <h3>{value.title}</h3>

                  <p>{value.description}</p>

                  <a
                    href="https://wordpress-691607-6555637.cloudwaysapps.com/about-us/"
                    className="freedom-learn"
                  >
                    <span>Learn More</span>
                    <strong>↗</strong>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Center statement */}
          <div className="freedom-center freedom-reveal">

            <div className="freedom-ring freedom-ring-one"></div>
            <div className="freedom-ring freedom-ring-two"></div>

            <div className="freedom-center-inner">

              <span className="freedom-center-small">
                YOUR LIFE
              </span>

              <div className="freedom-center-line"></div>

              <h3>
                Your
                <br />
                <span>choices.</span>
              </h3>

              <p>
                Your support.
                <br />
                Your future.
              </p>

              <div className="freedom-center-dot">
                <span></span>
              </div>

            </div>
          </div>

          {/* Right cards */}
          <div className="freedom-column freedom-column-right">
            {values.slice(2, 4).map((value, index) => (
              <article
                className={`freedom-card freedom-card-${index + 3} freedom-reveal`}
                style={{ "--delay": `${(index + 2) * 120}ms` }}
                key={value.title}
              >
                <div className="freedom-card-top">
                  <span className="freedom-number">
                    {value.number}
                  </span>

                  <span className="freedom-card-icon">
                    ↗
                  </span>
                </div>

                <div className="freedom-card-content">
                  <h3>{value.title}</h3>

                  <p>{value.description}</p>

                  <a
                    href="https://wordpress-691607-6555637.cloudwaysapps.com/about-us/"
                    className="freedom-learn"
                  >
                    <span>Learn More</span>
                    <strong>↗</strong>
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* Bottom statement */}
        <div className="freedom-bottom freedom-reveal">
          <div className="freedom-bottom-line"></div>

          <div className="freedom-bottom-text">
            <span>Support with purpose</span>
            <strong>·</strong>
            <span>Choice with confidence</span>
          </div>

          <div className="freedom-bottom-line"></div>
        </div>

      </div>
    </section>
  );
}

export default Freedom;