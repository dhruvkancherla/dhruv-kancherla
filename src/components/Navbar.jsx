import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeNav}>
          Dhruv Kancherla
        </Link>
        
        <div className="menu-icon" onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={isNavOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeNav}>
              Home
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeNav}>
              About
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/resume" className="nav-link" onClick={closeNav}>
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/certificates" className="nav-link" onClick={closeNav}>
              Certificates
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={closeNav}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeNav}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
