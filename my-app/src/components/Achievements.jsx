import React from 'react'

const Achievements = () => {
  const achievementsData = [
    {
      id: 1,
      title: "IEEE Xtreme 18.0 Programming Competition",
      issuer: "IEEE",
      year: "2024",
      icon: "trophy"
    },
    {
      id: 2,
      title: "IT Foundation Certificate",
      issuer: "Information Institute of Technology",
      year: "2023",
      icon: "certificate"
    },
    {
      id: 3,
      title: "News reporting competition Certificate",
      issuer: "Rahula Collage-Matara Media Unit Voice '18",
      year: "2018",
      icon: "newspaper"
    },
    {
      id: 4,
      title: "Announcing Certificate",
      issuer: "Ruhunu sevaya Radio channel(malmalwaram)",
      year: "2018",
      icon: "microphone-alt"
    },
    {
      id: 5,
      title: "Singing Competition Certificate",
      issuer: "Department of Cultural Affairs",
      year: "2015",
      icon: "music"
    }
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-timeline">
          {achievementsData.map((item) => (
            <div key={item.id} className="achievement-item">
              <div className="achievement-icon">
                <i className={`fas fa-${item.icon}`}></i>
              </div>
              <div className="achievement-content">
                <h3>{item.title}</h3>
                <p className="achievement-issuer">{item.issuer}</p>
                <p className="achievement-year">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .achievements {
          padding: var(--section-padding);
        }
        
        .achievements-timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }
        
        .achievements-timeline::before {
          content: '';
          position: absolute;
          width: 2px;
          background-color: var(--primary);
          top: 0;
          bottom: 0;
          left: 28px;
        }
        
        .achievement-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          position: relative;
        }
        
        .achievement-icon {
          min-width: 56px;
          height: 56px;
          background-color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.3rem;
          z-index: 1;
        }
        
        .achievement-content {
          background-color: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          flex: 1;
        }
        
        .achievement-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--dark);
        }
        
        .achievement-issuer {
          color: var(--gray);
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        
        .achievement-year {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .achievement-item {
            flex-direction: column;
          }
          
          .achievement-icon {
            margin-bottom: 0.5rem;
          }
          
          .achievements-timeline::before {
            left: 28px;
          }
        }
      `}</style>
    </section>
  )
}

export default Achievements