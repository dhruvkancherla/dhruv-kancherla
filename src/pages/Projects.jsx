import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaSearch } from 'react-icons/fa';
import avikaPPT from '../assets/Avika PPT-project.pdf';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Avika Business Case Analysis',
      category: 'business-analysis',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Conducted a comprehensive business case analysis for Avika company, identifying key market opportunities and strategic recommendations.',
      technologies: ['Market Analysis', 'SWOT Analysis', 'Financial Projection'],
      link: avikaPPT,
      date: 'March 2023'
    },
    {
      id: 2,
      title: 'Customer Satisfaction Survey Analysis',
      category: 'data-analysis',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Analyzed customer satisfaction survey data for a retail company, providing insights and recommendations for service improvement.',
      technologies: ['Data Analysis', 'Statistical Methods', 'Visualization'],
      link: '#',
      date: 'October 2023'
    },
    {
      id: 3,
      title: 'Marketing Campaign Strategy',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      description: 'Developed a comprehensive marketing campaign strategy for a startup, including target audience analysis and channel selection.',
      technologies: ['Market Segmentation', 'Digital Marketing', 'ROI Analysis'],
      link: '#',
      date: 'February 2024'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="projects-container">
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>My Projects</h1>
        <p>Explore my business and academic projects</p>
      </motion.div>

      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'business-analysis' ? 'active' : ''} 
          onClick={() => setFilter('business-analysis')}
        >
          Business Analysis
        </button>
        <button 
          className={filter === 'data-analysis' ? 'active' : ''} 
          onClick={() => setFilter('data-analysis')}
        >
          Data Analysis
        </button>
        <button 
          className={filter === 'marketing' ? 'active' : ''} 
          onClick={() => setFilter('marketing')}
        >
          Marketing
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <button onClick={() => openModal(project)} className="view-button">
                  <FaSearch /> View Details
                </button>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {modalOpen && selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <button onClick={closeModal} className="close-button">&times;</button>
            </div>
            <div className="modal-body">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="project-details">
                <p><strong>Date:</strong> {selectedProject.date}</p>
                <p><strong>Category:</strong> {selectedProject.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                <p><strong>Description:</strong> {selectedProject.description}</p>
                <div className="technologies-section">
                  <h4>Technologies / Methods Used:</h4>
                  <div className="project-technologies">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> View Project
                    </a>
                  )}
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-container {
          width: 100%;
          padding: 2rem 5%;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 3rem;
          padding-top: 2rem;
        }

        .projects-header h1 {
          font-size: 2.5rem;
          color: var(--dark-color);
          position: relative;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .projects-header h1::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 3px;
          background-color: var(--primary-color);
        }

        .projects-header p {
          color: #666;
          font-size: 1.1rem;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .filter-buttons button {
          background-color: transparent;
          border: 2px solid var(--primary-color);
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          color: var(--primary-color);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-buttons button.active,
        .filter-buttons button:hover {
          background-color: var(--primary-color);
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .project-card {
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .project-image {
          position: relative;
          overflow: hidden;
          height: 200px;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-image:hover .project-overlay {
          opacity: 1;
        }

        .project-image:hover img {
          transform: scale(1.1);
        }

        .view-button {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 0.7rem 1.2rem;
          border-radius: 30px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .view-button:hover {
          background-color: #238a7e;
          transform: translateY(-2px);
        }

        .project-info {
          padding: 1.5rem;
        }

        .project-info h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--dark-color);
        }

        .project-date {
          color: #777;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .project-description {
          color: #666;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background-color: rgba(42, 157, 143, 0.1);
          color: var(--primary-color);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Modal */
        .project-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 2rem;
        }

        .modal-content {
          background-color: white;
          border-radius: 10px;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #eee;
        }

        .modal-header h2 {
          margin: 0;
          color: var(--dark-color);
        }

        .close-button {
          background: none;
          border: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: #777;
        }

        .modal-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modal-body img {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          border-radius: 5px;
        }

        .project-details {
          line-height: 1.6;
          color: #555;
        }

        .technologies-section {
          margin: 1.5rem 0;
        }

        .technologies-section h4 {
          margin-bottom: 0.8rem;
          color: var(--dark-color);
        }

        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--primary-color);
          color: white;
          padding: 0.7rem 1.2rem;
          border-radius: 5px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background-color: #238a7e;
          transform: translateY(-2px);
        }

        @media screen and (max-width: 768px) {
          .projects-header h1 {
            font-size: 2rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-buttons {
            gap: 0.5rem;
          }
          
          .filter-buttons button {
            padding: 0.4rem 1rem;
            font-size: 0.9rem;
          }
          
          .project-modal {
            padding: 1rem;
          }
          
          .project-links {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
