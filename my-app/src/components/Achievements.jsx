import React, { useState } from 'react'

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  const achievementsData = [
    {
      id: 1,
      title: "Participated in Hult Prize",
      subtitle: "Hult Prize On-Campus Qualifier Round!",
      description: "Competed in the Hult Prize On-Campus Qualifier with Student 360 application.",
      icon: "trophy",
      certificate: "/hult-prize.jpg"
    },
    {
      id: 3,
      title: "IEEE Xtreme 18.0 Programming Competition",
      subtitle: "IEEE",
      description: "Participated in the global 24-hour programming competition organized by IEEE.",
      issuer: "IEEE",
      year: "2024",
      icon: "laptop-code",
      certificate: "/ieee-certificate.jpg"
    },
    {
      id: 4,
      title: "IT Foundation Certificate",
      subtitle: "Information Institute of Technology",
      description: "Successfully completed the foundation course in Information Technology.",
      issuer: "Information Institute of Technology",
      year: "2023",
      icon: "certificate",
      certificate: "/it-foundation-certificate.jpg"
    },
    {
      id: 5,
      title: "News reporting competition Certificate",
      subtitle: "Rahula Collage-Matara Media Unit Voice '18",
      description: "Awarded for excellence in news reporting during the school media competition.",
      issuer: "Rahula Collage-Matara Media Unit Voice '18",
      year: "2018",
      icon: "newspaper",
      certificate: "/news-reporting-certificate.jpg"
    },
    {
      id: 6,
      title: "Singing Competition Certificate",
      subtitle: "Department of Cultural Affairs",
      description: "Recognized for vocal performance in the annual singing competition.",
      issuer: "Department of Cultural Affairs",
      year: "2015",
      icon: "music",
      certificate: "/singing-certificate.jpg"
    }
  ];

  const openCertificate = (id) => {
    const certificate = achievementsData.find(item => item.id === id);
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-grid">
          {achievementsData.map((item) => (
            <div key={item.id} className="achievement-card">
              <div className="certificate-preview">
                <img src={item.certificate} alt={item.title} />
                <button 
                  className="enlarge-btn" 
                  onClick={() => openCertificate(item.id)}
                >
                  Click to Enlarge
                </button>
              </div>
              <div className="achievement-details">
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="certificate-modal">
          <div className="modal-backdrop" onClick={closeCertificate}></div>
          <div className="modal-content">
            <button className="close-modal" onClick={closeCertificate}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-certificate">
              <img src={selectedCertificate.certificate} alt={selectedCertificate.title} />
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .achievements {
          padding: var(--section-padding);
          background-color: #f8f9fa;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          color: #1e3a5f;
          font-size: 2.5rem;
          position: relative;
        }
        
        .section-title:after {
          content: '';
          display: block;
          width: 80px;
          height: 4px;
          background-color: #45e5c3;
          margin: 15px auto 0;
        }
        
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin: 0 auto;
          max-width: 1200px;
        }
        
        .achievement-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .achievement-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .certificate-preview {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        
        .certificate-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .enlarge-btn {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(62, 84, 172, 0.9);
          color: white;
          text-align: center;
          padding: 0.8rem;
          cursor: pointer;
          font-weight: 500;
          border: none;
          transition: background-color 0.3s ease;
        }
        
        .enlarge-btn:hover {
          background-color: rgba(62, 84, 172, 1);
        }
        
        .achievement-details {
          padding: 1.5rem;
        }
        
        .achievement-details h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: #1e3a5f;
        }
        
        .achievement-details h4 {
          font-size: 1rem;
          margin-bottom: 0.8rem;
          color: #3e54ac;
          font-weight: 500;
        }
        
        .achievement-details p {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        /* Certificate Modal */
        .certificate-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .modal-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: -1;
        }
        
        .modal-content {
          background-color: white;
          border-radius: 8px;
          max-width: 90%;
          max-height: 90vh;
          width: auto;
          position: relative;
          overflow: hidden;
        }
        
        .close-modal {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: white;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          z-index: 10;
          font-size: 1.2rem;
        }
        
        .modal-certificate {
          overflow: auto;
          max-height: 80vh;
          padding: 1rem;
        }
        
        .modal-certificate img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
          
          .modal-content {
            width: 95%;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Achievements