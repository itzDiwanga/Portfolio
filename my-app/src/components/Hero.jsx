import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Hi, I'm <span>Diwanga Munasinghe</span></h1>
          <h2>Computer Science Undergraduate</h2>
          <p>
            I am currently pursuing my undergraduate studies at the Informatics Institute of Technology (IIT), 
            affiliated with the University of Westminster, majoring in BSc (Hons) with a specialization in 
            Computer Science, with an anticipated graduation in 2027
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn">Contact Me</a>
            <a href="#projects" className="btn btn-outline">View My Work</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/profile.jpg" alt="Diwanga Munasinghe" />
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          color: var(--light);
          overflow: hidden;
        }
        
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          z-index: -1;
        }
        
        .hero-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 30%, rgba(23, 180, 134, 0.2) 0%, transparent 60%);
        }
        
        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }
        
        .hero-content {
          flex: 1;
          max-width: 600px;
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .hero-content h1 span {
          color: var(--primary);
        }
        
        .hero-content h2 {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: #a0dacd;
        }
        
        .hero-content p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .btn {
          padding: 0.8rem 1.5rem;
          background-color: var(--primary);
          color: white;
          border: none;
          border-radius: 5px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(23, 180, 134, 0.3);
        }
        
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(23, 180, 134, 0.4);
        }
        
        .btn-outline {
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
          box-shadow: none;
        }
        
        .btn-outline:hover {
          background: var(--primary);
          color: var(--light);
          box-shadow: 0 6px 20px rgba(23, 180, 134, 0.4);
        }
        
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        .hero-image::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(23, 180, 134, 0.1) 0%, transparent 70%);
          z-index: -1;
        }
        
        .hero-image img {
          width: 350px;
          height: 350px;
          object-fit: cover;
          border-radius: 50%;
          border: 5px solid var(--primary);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 992px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
          }
          
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-image img {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero