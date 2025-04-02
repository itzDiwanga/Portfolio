import React from 'react'

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "University of Westminster / Informatics Institute of Technology",
      degree: "BSc (Hons) Computer Science",
      duration: "2024 (Present)",
      details: [
        "Pursuing a degree in Computer Science with a focus on UI/UX design, web technologies, software development and database management.",
        "Year 2: Ongoing | Year 1: Passed with 120 credits."
      ]
    },
    {
      id: 2,
      institution: "Informatics Institute of Technology",
      degree: "IT Foundation Course",
      duration: "2023",
      details: []
    },
    {
      id: 3,
      institution: "Advanced Level (A/L) Examination",
      degree: "Subject taken: Combined Maths, Physics, Chemistry for G.C.E A/L",
      duration: "2022",
      details: []
    },
    {
      id: 4,
      institution: "Ordinary Level (O/L)",
      degree: "Achieved A grades in Mathematics and English",
      duration: "2019",
      details: []
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          {educationData.map((item) => (
            <div key={item.id} className="education-item">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-content">
                <h3>{item.institution}</h3>
                <h4>{item.degree}</h4>
                <p className="education-date">{item.duration}</p>
                {item.details.map((detail, index) => (
                  <p key={index} className="education-detail">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .education {
          background-color: #f8f9fa;
          padding: var(--section-padding);
        }
        
        .education-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .education-timeline::before {
          content: '';
          position: absolute;
          width: 2px;
          background-color: var(--primary);
          top: 0;
          bottom: 0;
          left: 20px;
        }
        
        .education-item {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
          position: relative;
        }
        
        .education-icon {
          min-width: 40px;
          height: 40px;
          background-color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--light);
          z-index: 1;
        }
        
        .education-content {
          background-color: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          flex: 1;
        }
        
        .education-content h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--dark);
        }
        
        .education-content h4 {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: var(--gray);
        }
        
        .education-date {
          font-size: 0.9rem;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .education-detail {
          margin-bottom: 0.5rem;
          color: var(--gray);
        }
        
        @media (max-width: 768px) {
          .education-item {
            flex-direction: column;
            gap: 1rem;
          }
          
          .education-icon {
            margin-bottom: 1rem;
          }
          
          .education-timeline::before {
            left: 20px;
          }
        }
      `}</style>
    </section>
  )
}

export default Education