import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Mental Health Companion App",
      shortDescription: "An application providing emotional support and guidance. The app offers features like anonymous chat forum,mood detection,chat bot,therapist dashboad and feed page",
      image: "/mental-health-app.jpg",
      technologies: ["Flutter", "Node.js", "MongoDB"],
      status: "Ongoing Project"
    },
    {
      id: 2,
      title: "Real Estate Agent",
      shortDescription: "Developed a React-based property search web app with interactive filters, dynamic JSON data retrieval, and a responsive UI. Implemented features like a favorites list with local storage, image viewer, React Tabs for property details, and security best practices.",
      image: "/property-search.jpg",
      technologies: ["React"],
      year: "2024"
    },
    {
      id: 3,
      title: "Selena Gomez Portfolio Website",
      shortDescription: "Created a website showcasing Selena's life, career, and achievements with a clean and responsive design.",
      image: "/Selena-website.jpg",
      technologies: ["HTML5","CSS"],
      year: "2024"
    },
    {
      id: 4,
      title: "Oceanauts Web Application",
      shortDescription: "A platform promoting marine conservation through educational content, interactive resources, and advocacy on ocean sustainability.",
      image: "/Oceanauts-image.jpg",
      technologies: ["HTML","CSS","JavaScript"],
      year: "2024"
    },
    {
      id: 5,
      title: "Real Time Ticketing System",
      shortDescription: "Developed a website using React and Node.js, and a CLI using Java, enabling seamless ticket booking, live availability updates, and secure transactions.",
      image: "/Ticketing-image.jpg",
      technologies: ["Java","React","Node.js"],
      year: "2024"
    },
    {
      id: 6,
      title: "Green Steps App",
      shortDescription: "Designed Green Steps in Figma, a sustainability-focused app promoting eco-friendly habits through interactive features and user engagement.",
      image: "/Green-image.jpg",
      technologies: ["Figma"],
      year: "2024"
    },
    {
      id: 7,
      title: "Banking Transaction System",
      shortDescription: "Built a Python app to track income, expenses, and budgets, with data visualization for better financial planning.",
      image: "/Banking-image.jpg",
      technologies: ["Python"],
      year: "2024"
    },
    {
      id: 8,
      title: "Student Management System",
      shortDescription: "A Java-based application for managing student records, enabling efficient data entry, updates, and retrieval with a user-friendly interface.",
      image: "/Management-image.jpg",
      technologies: ["Java"],
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