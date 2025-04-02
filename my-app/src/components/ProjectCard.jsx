import React, { useState } from 'react'

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false)

  // Handle image loading errors
  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div className="project-card">
      <div className="project-img">
        <img 
          src={imageError ? "/project-images/default-project.jpg" : project.image} 
          alt={project.title}
          onError={handleImageError}
        />
        <div className="project-overlay">
          {/* No button or click action */}
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
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
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
        
        @media (max-width: 768px) {
          .project-img {
            height: 180px;
          }
        }
        
        :root {
          --primary: #16a085;
          --dark: #333;
          --gray: #666;
        }
      `}</style>
    </div>
  )
}

export default ProjectCard