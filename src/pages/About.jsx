import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaPhone, FaEnvelope, FaUserTie } from 'react-icons/fa';
import profilePic from '../assets/profile-pic.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About Me</h1>
      </motion.div>

      <div className="about-content">
        <motion.div 
          className="profile-image-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={profilePic} alt="Dhruv Kancherla" className="profile-image" />
        </motion.div>

        <motion.div 
          className="about-info"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Dhruv Kancherla</h2>
          <h3>Business Administration Professional</h3>
          <p className="about-bio">
            A dynamic and motivated professional with a bachelor's in business administration and a strong foundation in customer service and communication. Passionate about developing innovative business solutions and contributing to organizational growth.
          </p>

          <div className="personal-details">
            <div className="detail-item">
              <FaMapMarkerAlt className="detail-icon" />
              <span>Hyderabad, India</span>
            </div>
            <div className="detail-item">
              <FaPhone className="detail-icon" />
              <span>+91 9390674845</span>
            </div>
            <div className="detail-item">
              <FaEnvelope className="detail-icon" />
              <span>dhruvkancherla2204@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="about-sections">
        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <FaUserTie className="section-icon" />
            <h3>Skills</h3>
          </div>
          <div className="skills-container">
            <div className="skill-item">
              <span className="skill-name">Communication Skills</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Team Collaboration</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Customer Service</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Market Analysis</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Conflict Resolution</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h3>Education</h3>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Bachelor's in Business Administration</h4>
                <p className="timeline-place">Mahindra University</p>
                <p className="timeline-duration">August 2022 - Present</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>High School (Grades 1-12)</h4>
                <p className="timeline-place">Hyderabad Public School, Begumpet</p>
                <p className="timeline-duration">Completed</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <FaBriefcase className="section-icon" />
            <h3>Work Experience</h3>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Intern - Cross-Departmental Tasks</h4>
                <p className="timeline-place">RUPID India</p>
                <p className="timeline-duration">June 2024 - July 2024</p>
                <p className="timeline-description">
                  Gained valuable professional experience working across multiple departments, developing skills in team collaboration, communication, and problem-solving.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
