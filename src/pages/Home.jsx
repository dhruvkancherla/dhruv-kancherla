import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import profilePic from '../assets/profile-pic.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">      <div className="hero-section">
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={profilePic} alt="Dhruv Kancherla" />
        </motion.div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>Hi, I'm <span className="highlight">Dhruv Kancherla</span></h1>
          <h2>Business Administration Professional</h2>
          <p>
            A dynamic and motivated business student with strong communication skills
            and a passion for developing innovative business solutions.
          </p>
          <div className="hero-buttons">
            <Link to="/contact">
              <motion.button 
                className="secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="home-sections">
        <motion.div 
          className="home-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-icon">
            <FaUserTie />
          </div>
          <h3>About Me</h3>
          <p>
            Dynamic and motivated professional with a bachelor's in business administration and strong foundation in customer service and communication.
          </p>
          <Link to="/about" className="section-link">
            Learn More <FaArrowRight />
          </Link>
        </motion.div>

        <motion.div 
          className="home-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="section-icon">
            <FaGraduationCap />
          </div>
          <h3>Education</h3>
          <p>
            Currently pursuing Bachelor's in Business Administration at Mahindra University (August 2022-Present).
          </p>
          <Link to="/resume" className="section-link">
            View Resume <FaArrowRight />
          </Link>
        </motion.div>

        <motion.div 
          className="home-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="section-icon">
            <FaBriefcase />
          </div>
          <h3>Experience</h3>
          <p>
            Intern at RUPID India (June 2024 - July 2024) working on cross-departmental tasks.
          </p>
          <Link to="/projects" className="section-link">
            View Projects <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
