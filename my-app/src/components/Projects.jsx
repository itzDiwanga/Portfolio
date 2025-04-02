import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Mental Health Companion App",
      shortDescription: "An application providing emotional support and guidance.",
      fullDescription: "A mental health application aimed at providing ongoing emotional support and guidance, connecting professional therapy sessions with everyday life. The app offers features like anonymous chat rooms, mood detection through text analysis, therapist and peer mentorship matching, AI-driven personalized suggestions, and real-time reminders for self-care.",
      image: "/mental-health-app.jpg",
      technologies: ["React Native", "Node.js", "MongoDB"],
      status: "Ongoing Project"
    },
    {
      id: 2,
      title: "Property Search Web App",
      shortDescription: "React-based property search app with interactive filters.",
      fullDescription: "Developed a React-based property search web app with interactive filters, dynamic JSON data retrieval, and a responsive UI. Implemented features like a favorites list with local storage, image viewer, React Tabs for property details, and security best practices.",
      image: "/property-search.jpg",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      year: "2024"
    },
    {
      id: 3,
      title: "Sri Community Development Foundation Website",
      shortDescription: "A fully responsive React and Node based charity platform.",
      fullDescription: "A fully responsive React and Node based charity platform showcasing the humanitarian initiatives. Features include project galleries with multimedia content, assistance request forms, volunteer registration, and media validation.",
      image: "/project-images/foundation-website.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      year: "2024"
    },
    {
      id: 4,
      title: "Digital Identity Verification System",
      shortDescription: "A secure and decentralized digital identity verification platform.",
      fullDescription: "Trustify is a secure and decentralized digital identity verification platform designed to enhance trust, privacy, and efficiency in identity management. Leveraging blockchain technology, the system ensures tamper-proof identity verification.",
      image: "/project-images/identity-verification.jpg",
      technologies: ["Blockchain", "React", "Node", "MongoDB"],
      year: "2024"
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      shortDescription: "Responsive personal portfolio website with modern UI.",
      fullDescription: "Designed and developed a responsive personal portfolio website using HTML, CSS, and JavaScript. The project features a clean, modern UI with interactive elements including hover animations effect, hover states, and smooth scrolling navigation.",
      image: "/project-images/portfolio-website.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      year: "2024"
    },
    {
      id: 6,
      title: "Real-Time Ticketing System",
      shortDescription: "Multi-threaded ticketing system with real-time updates.",
      fullDescription: "Built a multi-threaded ticketing system with real-time updates. Used Java for concurrency handling, a React.js UI for visualization, and Node.js for backend logic. Ensured thread-safe ticket management, real-time communication via Web Sockets, and robust logging.",
      image: "/project-images/ticketing-system.jpg",
      technologies: ["Java", "React", "Node.js", "WebSockets"],
      year: "2024"
    },
    {
      id: 7,
      title: "Student Management System",
      shortDescription: "Java-based system for handling student records.",
      fullDescription: "It utilizes Java I/O libraries for handling input and output operations, such as reading from and writing to files.",
      image: "/project-images/student-management.jpg",
      technologies: ["Java", "File I/O"],
      year: "2024"
    },
    {
      id: 8,
      title: "Enhanced Personal Finance Tracker",
      shortDescription: "GUI Implementation with Tkinter and OOP principles.",
      fullDescription: "A personal finance tracker with an intuitive GUI built using Tkinter. Implemented using object-oriented programming principles for maintainable and extensible code.",
      image: "/project-images/finance-tracker.jpg",
      technologies: ["Python", "Tkinter", "OOP"],
      year: "2024"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        {/* Filter buttons removed */}
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .projects {
          padding: var(--section-padding);
          background-color: #f8f9fa;
        }
        
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          position: relative;
          color: #333;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background-color: #16a085;
        }
        
        .projects-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        
        .filter-btn {
          background-color: white;
          border: 1px solid #e0e0e0;
          padding: 0.6rem 1.2rem;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .filter-btn:hover {
          background-color: #16a085;
          color: white;
          border-color: #16a085;
        }
        
        .filter-btn.active {
          background-color: #16a085;
          color: white;
          border-color: #16a085;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
          
          .section-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
        }
        
        :root {
          --primary: #16a085;
          --dark: #333;
          --gray: #666;
          --section-padding: 5rem 0;
        }
      `}</style>
    </section>
  )
}

export default Projects