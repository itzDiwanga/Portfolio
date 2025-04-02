import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullText = "UI/UX Designer & Frontend Developer";
  const typingSpeed = 100; // milliseconds per character
  
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [text]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Hi, I'm <span>Diwanga Munasinghe</span></h1>
          <h2>Computer Science Undergraduate</h2>
          <div className="job-title-container">
            <span className="job-title">{text}</span>
            <span className={`cursor ${isTypingComplete ? 'hidden' : ''}`}>|</span>
          </div>
          <p>
            I am currently pursuing my undergraduate studies at the Informatics Institute of Technology (IIT), 
            affiliated with the University of Westminster, majoring in BSc (Hons) with a specialization in 
            Computer Science, with an anticipated graduation in 2027
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#projects" className="btn btn-outline">View My Work</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/profile2.jpg" alt="Diwanga Munasinghe" />
        </div>
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          color: #1baa9c;
          overflow: hidden;
          font-family: 'Montserrat', sans-serif;
        }
        
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0a0a0a, #121212, #0a0a0a);
          z-index: -1;
        }
        
        .hero-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 30%, rgba(128, 103, 240, 0.15) 0%, transparent 60%);
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
          font-weight: 700;
          letter-spacing: -0.5px;
          color: #1baa9c;
        }
        
        .hero-content h1 span {
          color:rgb(255, 255, 255); /* Purple accent color */
          position: relative;
        }
        
        .hero-content h1 span::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color:rgb(244, 244, 244);
          animation: underline 1.5s ease forwards;
          animation-delay: 2s;
        }
        
        @keyframes underline {
          to { width: 100%; }
        }
        
        .hero-content h2 {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #1baa9c;
          letter-spacing: 0.5px;
        }
        
        .job-title-container {
          height: 35px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
        }
        
        .job-title {
          font-size: 1.3rem;
          font-weight: 500;
          color:rgb(255, 255, 255); /* Purple accent color */
          letter-spacing: 0.5px;
        }
        
        .cursor {
          font-size: 1.3rem;
          font-weight: 700;
          color: #8067f0;
          animation: blink 1s infinite;
          margin-left: 2px;
        }
        
        .cursor.hidden {
          opacity: 0;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .hero-content p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: #1baa9c;
          line-height: 1.7;
          letter-spacing: 0.2px;
          font-weight: 300;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .btn {
          padding: 0.9rem 1.7rem;
          border-radius: 30px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }
        
        .btn:hover {
          transform: translateY(-3px);
        }
        
        .btn-primary {
          background-color: transparent;
          color: #1baa9c;
          border: 2px solid #1baa9c;
          box-shadow: none;
        }
        
        .btn-primary:hover {
          background-color: #1baa9c;
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(128, 103, 240, 0.4);
        }
        
        .btn-outline {
          background: transparent;
          border: 2px solid #1baa9c;
          color: #1baa9c;
          box-shadow: none;
        }
        
        .btn-outline:hover {
          background: #1baa9c;
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(128, 103, 240, 0.4);
        }
        
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        .hero-image::before {
          content: '';
          position: absolute;
          width: 380px;
          height: 380px;
          border: 2px solid rgba(128, 103, 240, 0.3);
          border-radius: 50%;
          z-index: -1;
          animation: pulse 3s infinite alternate;
        }
        
        @keyframes pulse {
          from { transform: scale(0.98); opacity: 0.8; }
          to { transform: scale(1.02); opacity: 0.5; }
        }
        
        .hero-image::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(128, 103, 240, 0.1) 0%, transparent 70%);
          z-index: -1;
        }
        
        .hero-image img {
          width: 350px;
          height: 350px;
          object-fit: cover;
          border-radius: 50%;
          border: 5px solid  #1baa9c;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        
        @media (max-width: 992px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
          }
          
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-content h1 span::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .job-title-container {
            justify-content: center;
            text-align: center;
            width: 100%;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-image img {
            width: 250px;
            height: 250px;
          }
          
          .hero-image::before {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero