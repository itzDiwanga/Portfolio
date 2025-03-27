import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Hi, I'm <span>Diwanga Munasinghe</span></h1>
          <h2>Computer Science Undergraduate</h2>
          <p>
            I am currently pursuing my undergraduate studies at the Informatics Institute of Technology (IIT), 
            affiliated with the University of Westminster, majoring in BSc (Hons) with a specialization in 
            Computer Science, with an anticipated graduation in 2027. I am characterized by my unwavering commitment 
            to achieving goals and my passion for problem-solving. I approach challenges with confidence, consistently 
            seeking innovative solutions and fresh perspectives.
          </p>
          <p>
            My career aspirations lie in UI/UX design, frontend development, and backend development, where I can 
            merge analytical thinking with creativity to build intuitive, seamless, and impactful digital experiences.
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
          height: 100vh;
          display: flex;
          align-items: center;
          background-color: var(--dark);
          color: var(--light);
          position: relative;
          overflow: hidden;
        }
        
        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
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
          color: var(--gray);
        }
        
        .hero-content p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .btn-outline {
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
        }
        
        .btn-outline:hover {
          background: var(--primary);
          color: var(--light);
        }
        
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .hero-image img {
          width: 350px;
          height: 350px;
          object-fit: cover;
          border-radius: 50%;
          border: 5px solid var(--primary);
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