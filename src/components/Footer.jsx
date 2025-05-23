import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dhruv Kancherla</h3>
            <p>Business Administration Professional</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              {/* <li><Link to="/about">About</Link></li> */}
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/certificates">Certificates</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p><FaEnvelope /> dhruvkancherla2204@gmail.com</p>
            <p><FaPhone /> +91 9390674845</p>
            <p><FaMapMarkerAlt /> Hyderabad, India</p>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/dhruv-kancherla-3ab67a259/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:dhruvkancherla2204@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dhruv Kancherla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
