import { useEffect, useRef } from "react";
import "./Impact.css";

const values = [
  {
    title: "Inclusion",
    description: "Everyone belongs, no matter their ability.",
    icon: "✦",
  },
  {
    title: "Independent",
    description: "Building confidence for greater freedom.",
    icon: "↗",
  },
  {
    title: "Quality Control",
    description: "Trusted support with high standards.",
    icon: "✓",
  },
  {
    title: "Consistency",
    description: "Reliable care, every step of the way.",
    icon: "↻",
  },
];

function Impact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("impact-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const elements =
      section.querySelectorAll(".impact-reveal");

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="impact-section"
      ref={sectionRef}
    >

      {/* =================================================
          TOP CURVE
      ================================================= */}

      <div className="impact-top-curve"></div>


      {/* =================================================
          SOFT BACKGROUND SHAPES
      ================================================= */}

      <div className="impact-circle impact-circle-one"></div>
      <div className="impact-circle impact-circle-two"></div>


      <div className="impact-container">

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="impact-main">

          {/* LEFT */}
          <div className="impact-copy impact-reveal">

            <div className="impact-label">
              <span></span>
              Our Impact
            </div>


            <div className="impact-number">
              80<span>+</span>
            </div>


            <h2>
              Active
              <br />
              Participants
            </h2>


            <p>
              Supporting 80+ NDIS participants across
              the Logan and Scenic Rim regions with
              consistent, quality care.
            </p>


            <div className="impact-bottom">

              <div className="impact-avatars">

                <div className="impact-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                    alt=""
                  />
                </div>

                <div className="impact-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                    alt=""
                  />
                </div>

                <div className="impact-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
                    alt=""
                  />
                </div>

                <div className="impact-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt=""
                  />
                </div>

              </div>


              <div className="impact-note">
                <span>Real support.</span>
                <strong>Real people.</strong>
              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="impact-visual impact-reveal">

            <div className="impact-image-frame">

              <img
                src="https://images.unsplash.com/photo-1764006145420-df3006edf060?auto=format&fit=crop&w=1400&q=90"
                alt="Support worker assisting a participant"
                className="impact-main-image"
              />

              <div className="impact-image-glow"></div>

            </div>


            {/* FLOATING MESSAGE */}

            <div className="impact-floating-note">

              <span>
                More support
              </span>

              <strong>
                More possibilities
              </strong>

              <i>↗</i>

            </div>


            {/* ORANGE DECORATION */}

            <div className="impact-spark">
              <span></span>
              <span></span>
            </div>

          </div>

        </div>


        {/* =================================================
            INFINITE VALUES MARQUEE
        ================================================= */}

        <div className="impact-marquee-wrapper">

          <div className="impact-marquee">

            <div className="impact-marquee-track">

              {[...values, ...values].map(
                (value, index) => (

                  <div
                    className="impact-value"
                    key={`${value.title}-${index}`}
                  >

                    <div className="impact-value-icon">
                      {value.icon}
                    </div>

                    <div className="impact-value-content">

                      <h3>
                        {value.title}
                      </h3>

                      <p>
                        {value.description}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>


        {/* =================================================
            SMALL FOOTER MESSAGE
        ================================================= */}

        <div className="impact-footer impact-reveal">

          <span>
            Your goals.
          </span>

          <strong>
            Our support.
          </strong>

        </div>

      </div>

    </section>
  );
}

export default Impact;