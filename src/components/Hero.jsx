import "./Hero.css";

const HERO_IMAGE =
  "https://wordpress-691607-6555637.cloudwaysapps.com/wp-content/uploads/2026/07/ChatGPT_Image_Jul_31__2026__05_09_51_AM-removebg-preview.webp";

function Hero() {
  return (
    <section className="hero">
      {/* Background image */}
      <div className="hero-bg">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
      </div>

      {/* Header INSIDE hero */}
      <header className="hero-header">
        <a href="/" className="hero-logo">
          <div className="logo-mark">
            <span>✚</span>
          </div>

          <div className="logo-text">
            <strong>Ability Counts</strong>
            <small>NDIS SUPPORT SERVICES</small>
          </div>
        </a>

        <nav className="hero-nav">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <a href="tel:0421176289" className="hero-call">
          <span className="call-icon">⌕</span>
          <span>Call: 0421 176 289</span>
        </a>
      </header>

      {/* Main hero content */}
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            NDIS SUPPORT COORDINATION & COMMUNITY ACCESS
          </p>

          <h1>
            Support Tailored
            <br />
            to Your Ability
          </h1>

          <div className="hero-accent"></div>

          <h2>Live Well, Your Way.</h2>

          <p className="hero-description">
            Support that fits around your goals, your community, and your
            everyday life.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-primary-btn">
              Book a Free Consultation
              <span>↗</span>
            </a>

            <a href="#story" className="hero-story-btn">
              <span className="play-icon">▶</span>
              <span>Watch Our Story</span>
            </a>
          </div>
        </div>

        {/* Years card */}
        <div className="hero-years">
          <span className="years-number">9+</span>
          <span className="years-label">Years in Operation</span>
        </div>
      </div>

     
      {/* Bottom curved white transition */}
      <div className="hero-bottom-shape"></div>
    </section>
  );
}

export default Hero;