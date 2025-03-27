import React from 'react'

const Skills = () => {
  const technicalSkills = [
    { id: 1, name: "HTML", icon: "html5", color: "#E34F26" },
    { id: 2, name: "CSS", icon: "css3-alt", color: "#1572B6" },
    { id: 3, name: "JavaScript", icon: "js", color: "#F7DF1E" },
    { id: 4, name: "React", icon: "react", color: "#61DAFB" },
    { id: 5, name: "Node.js", icon: "node-js", color: "#339933" },
    { id: 6, name: "Python", icon: "python", color: "#3776AB" },
    { id: 7, name: "Java", icon: "java", color: "#007396" },
    { id: 8, name: "PHP", icon: "php", color: "#777BB4" },
    { id: 9, name: "SQL", icon: "database", color: "#4479A1" },
    { id: 10, name: "GitHub", icon: "github", color: "#181717" },
    { id: 11, name: "React Native", icon: "react", color: "#61DAFB" },
    { id: 12, name: "Flutter", icon: "mobile-alt", color: "#02569B" }
  ]

  const softSkills = [
    { id: 1, name: "Problem-Solving", icon: "lightbulb" },
    { id: 2, name: "Time Management", icon: "clock" },
    { id: 3, name: "Collaboration", icon: "users" },
    { id: 4, name: "Adaptability", icon: "sync" },
    { id: 5, name: "Customer Service", icon: "headset" },
    { id: 6, name: "Positive Attitude", icon: "smile" }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-content">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill) => (
                <div key={skill.id} className="skill-card">
                  <div className="skill-icon" style={{ backgroundColor: skill.color }}>
                    <i className={`fab fa-${skill.icon}`}></i>
                  </div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
          
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="skills-grid">
              {softSkills.map((skill) => (
                <div key={skill.id} className="skill-card soft">
                  <div className="skill-icon">
                    <i className={`fas fa-${skill.icon}`}></i>
                  </div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .skills {
          padding: var(--section-padding);
        }
        
        .skills-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        
        .technical-skills, .soft-skills {
          flex: 1;
        }
        
        .technical-skills h3, .soft-skills h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--dark);
          position: relative;
          padding-left: 1rem;
        }
        
        .technical-skills h3::before, .soft-skills h3::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 25px;
          background-color: var(--primary);
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1.5rem;
        }
        
        .skill-card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .skill-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          background-color: var(--primary);
          color: white;
          font-size: 1.8rem;
        }
        
        .skill-card.soft .skill-icon {
          background-color: var(--dark);
        }
        
        .skill-card h4 {
          font-size: 1rem;
          font-weight: 500;
        }
        
        @media (min-width: 992px) {
          .skills-content {
            flex-direction: row;
          }
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }
        }
      `}</style>
    </section>
  )
}

export default Skills