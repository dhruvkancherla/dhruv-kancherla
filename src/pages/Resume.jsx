import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaUserTie } from 'react-icons/fa';
import resumeImg from '../assets/resume.jpg';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <motion.div 
        className="resume-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>My Resume</h1>
      </motion.div>

      <div className="resume-content">
        <motion.div 
          className="resume-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <FaUserTie className="section-icon" />
            <h2>Professional Summary</h2>
          </div>
          <div className="section-content">
            <p>
              Dynamic and motivated professional with a bachelor's in business administration and strong foundation in customer service and communication. Skilled in team collaboration, market analysis, and conflict resolution. Passionate about developing innovative business solutions and contributing to organizational growth.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="resume-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <FaBriefcase className="section-icon" />
            <h2>Professional Experience</h2>
          </div>
          <div className="section-content">
            <div className="experience-item">
              <div className="experience-header">
                <h3>Intern - Cross-Departmental Tasks</h3>
                <span className="experience-date">June 2024 - July 2024</span>
              </div>
              <h4>RUPID India</h4>
              <ul className="experience-details">
                <li>Assisted in cross-departmental projects and tasks</li>
                <li>Collaborated with team members to achieve organizational goals</li>
                <li>Developed strong communication and problem-solving skills</li>
                <li>Gained valuable industry knowledge and professional experience</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="resume-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h2>Education</h2>
          </div>
          <div className="section-content">
            <div className="education-item">
              <div className="education-header">
                <h3>Bachelor's in Business Administration</h3>
                <span className="education-date">August 2022 - Present</span>
              </div>
              <h4>Mahindra University, Hyderabad</h4>
              <p>Pursuing a comprehensive business administration degree with focus on management principles, marketing strategies, and organizational behavior.</p>
            </div>
            <div className="education-item">
              <div className="education-header">
                <h3>High School Education</h3>
                <span className="education-date">Completed</span>
              </div>
              <h4>Hyderabad Public School, Begumpet</h4>
              <p>Completed grades 1-12 with a strong academic foundation and participation in extracurricular activities.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="resume-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <FaUserTie className="section-icon" />
            <h2>Skills</h2>
          </div>
          <div className="section-content">
            <div className="skills-grid">
              <div className="skill-tag">Communication Skills</div>
              <div className="skill-tag">Team Collaboration</div>
              <div className="skill-tag">Customer Service</div>
              <div className="skill-tag">Market Analysis</div>
              <div className="skill-tag">Conflict Resolution</div>
              <div className="skill-tag">Problem Solving</div>
              <div className="skill-tag">Adaptability</div>
              <div className="skill-tag">Time Management</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="resume-preview">
        <motion.div 
          className="preview-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Resume Preview</h2>
          <div className="resume-image">
            <img src={resumeImg} alt="Dhruv Kancherla Resume" />
          </div>
          <a href={resumeImg} download="Dhruv_Kancherla_Resume" className="download-button">
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
