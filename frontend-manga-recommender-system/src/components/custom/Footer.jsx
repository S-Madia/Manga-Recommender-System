import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo + Socials */}
        <div className="footer-column brand-column">
          <h2 className="footer-logo">Kwentoon</h2>
          <p className="tagline">Connect. Create. Storytell.</p>
<div className="social-icons">
  <a href="#" className="social-icon" aria-label="Facebook">
     <img 
      src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" 
      alt="Facebook" 
      style={{ width: '16px', height: '16px' }} 
    />
  </a>
  <a href="#" className="social-icon" aria-label="Instagram">
     <img 
      src="https://cdn-icons-png.flaticon.com/128/2168/2168336.png" 
      alt="Instagram" 
      style={{ width: '16px', height: '16px' }} 
    />
  </a>
  <a href="#" className="social-icon" aria-label="Instagram">
    <img 
      src="https://cdn-icons-png.flaticon.com/128/87/87390.png" 
      alt="Instagram" 
      style={{ width: '16px', height: '16px' }} 
    />
  </a>
</div>
        </div>

        {/* Column 2: Collabs/Sponsors */}
        <div className="footer-column">
          <h3 className="footer-heading">Collabs & Sponsors</h3>
          <ul className="footer-links">
            <li><a href="#">ToonGod</a></li>
            <li><a href="#">Eat Bulaga</a></li>
            <li><a href="#">National University MoA</a></li>
          </ul>
        </div>

        {/* Column 3: About Us */}
        <div className="footer-column">
          <h3 className="footer-heading">About Us</h3>
          <p className="about-text">
            Kwentoon is a platform made to connect storytellers, readers, and creators 
            in one awesome creative space.
          </p>
          <a href="#" className="learn-more-link">Learn more about us <span>&rarr;</span></a>
        </div>

        {/* Column 4: Community */}
        <div className="footer-column">
          <h3 className="footer-heading">Community</h3>
          <ul className="footer-links">
            <li><a href="#">Forums</a></li>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Kwentoon. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;