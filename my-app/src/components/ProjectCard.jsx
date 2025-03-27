import React, { useState } from 'react'

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="project-card">
      <div className="project-img">
        <img src={project.image || "/project-images/default-project.jpg"} alt={project.title} />
        <div className="project-overlay">
          <button className="btn-details" onClick={() => setShowDetails(true)}>
            View Details
          </button>
        </div>
      </div>
      
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
      
      {showDetails && (
        <div className="project-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{project.title}</h3>
              <button className="modal-close" onClick={() => setShowDetails(false)}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="modal-img">
                <img src={project.image || "/project-images/default-project.jpg"} alt={project.title} />
              </div>
              
              <div className="modal-description">
                <h4>Description</h4>
                <p>{project.fullDescription}</p>
              </div>
              
              <div className="modal-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              {project.link && (
                <div className="modal-link">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                    View Project
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .project-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }
        
        .project-img {
          height: 200px;
          position: relative;
          overflow: hidden;
        }
        
        .project-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-img img {
          transform: scale(1.05);
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .btn-details {
          background-color: var(--primary);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .btn-details:hover {
          background-color: #128f6b;
        }
        
        .project-info {
          padding: 1.5rem;
        }
        
        .project-info h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--dark);
        }
        
        .project-info p {
          color: var(--gray);
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-tag {
          background-color: #f0f0f0;
          color: var(--gray);
          font-size: 0.8rem;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          display: inline-block;
        }
        
        /* Modal Styles */
        .project-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
          padding: 2rem;
        }
        
        .modal-content {
          background-color: white;
          border-radius: 8px;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #eee;
        }
        
        .modal-header h3 {
          font-size: 1.5rem;
          color: var(--dark);
        }
        
        .modal-close {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: var(--gray);
        }
        
        .modal-body {
          padding: 1.5rem;
        }
        
        .modal-img {
          margin-bottom: 1.5rem;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .modal-img img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        
        .modal-description, .modal-tech {
          margin-bottom: 1.5rem;
        }
        
        .modal-description h4, .modal-tech h4 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          color: var(--dark);
          position: relative;
          padding-left: 1rem;
        }
        
        .modal-description h4::before, .modal-tech h4::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background-color: var(--primary);
        }
        
        .modal-description p {
          color: var(--gray);
          line-height: 1.6;
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .modal-link {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .project-modal {
            padding: 1rem;
          }
          
          .modal-content {
            max-height: 85vh;
          }
        }
      `}</style>
    </div>
  )
}

export default ProjectCard