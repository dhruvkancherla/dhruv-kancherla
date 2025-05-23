import { motion } from 'framer-motion';
import { FaSearch, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import macroEconomics from '../assets/macro-economics-cert.png';
import businessCaseDev from '../assets/business-case-development-cert.jpg';
import '../styles/Certificates.css';

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Macroeconomics',
      issuer: 'Coursera',
      date: 'January 2023',
      image: macroEconomics,
      description: 'Completed comprehensive course on macroeconomic principles, policies, and analysis.'
    },
    {
      id: 2,
      title: 'Business Case Development',
      issuer: 'LinkedIn Learning',
      date: 'July 2023',
      image: businessCaseDev,
      description: 'Mastered techniques for developing compelling business cases and strategic proposals.'
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="certificates-container">
      <motion.div 
        className="certificates-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>My Certificates</h1>
        <p>A collection of my professional certifications and courses</p>
      </motion.div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <motion.div 
            key={certificate.id}
            className="certificate-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="certificate-image">
              <img src={certificate.image} alt={certificate.title} />
              <div className="certificate-overlay">
                <button onClick={() => openModal(certificate)} className="view-button">
                  <FaSearch /> View
                </button>
              </div>
            </div>
            <div className="certificate-info">
              <h3>{certificate.title}</h3>
              <p className="certificate-issuer">{certificate.issuer}</p>
              <p className="certificate-date">{certificate.date}</p>
              <p className="certificate-description">{certificate.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {modalOpen && selectedCertificate && (
        <div className="certificate-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedCertificate.title}</h2>
              <button onClick={closeModal} className="close-button">&times;</button>
            </div>
            <div className="modal-body">
              <img src={selectedCertificate.image} alt={selectedCertificate.title} />
              <div className="certificate-details">
                <p><strong>Issuer:</strong> {selectedCertificate.issuer}</p>
                <p><strong>Date:</strong> {selectedCertificate.date}</p>
                <p><strong>Description:</strong> {selectedCertificate.description}</p>
              </div>
              <a href={selectedCertificate.image} target="_blank" rel="noopener noreferrer" className="external-link">
                Open Full Size <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>      )}
    </div>
  );
};

export default Certificates;
