import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Ability<span>Counts</span></h2>
            <p>
              Supporting people to live with confidence,
              choice and independence.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#services">Services</a>
            <a href="#what-we-do">What We Do</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <a href="tel:0421176289">0421 176 289</a>
            <a href="mailto:info@abilitycounts.com.au">
              info@abilitycounts.com.au
            </a>
            <span>Logan & Scenic Rim</span>
          </div>

          <div className="footer-column">
            <h3>Connect</h3>
            <a href="#">Facebook ↗</a>
            <a href="#">Instagram ↗</a>
            <a href="#">LinkedIn ↗</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ability Counts</span>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <span>NDIS Registered Provider</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;