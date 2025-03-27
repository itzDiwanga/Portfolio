import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Diwanga Munasinghe</h3>
            <p>Computer Science Undergraduate</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="https://linkedin.com/in/Diwanga-Munasinghe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/itzDiwanga" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:diwanga.2003@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Diwanga Munasinghe. All Rights Reserved.</p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background-color: var(--dark);
          color: var(--light);
          padding-top: 3rem;
        }
        
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-logo {
          flex: 1;
          min-width: 200px;
        }
        
        .footer-logo h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        
        .footer-logo p {
          color: #aaa;
        }
        
        .footer-links {
          flex: 1;
          min-width: 200px;
        }
        
        .footer-links h4, .footer-social h4 {
          font-size: 1.2rem;
          margin-bottom: 1.2rem;
          position: relative;
          display: inline-block;
        }
        
        .footer-links h4::after, .footer-social h4::after {
          content: '';
          position: absolute;
          width: 50%;
          height: 2px;
          background-color: var(--primary);
          bottom: -8px;
          left: 0;
        }
        
        .footer-links ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-links ul li {
          margin-bottom: 0.8rem;
        }
        
        .footer-links ul li a {
          color: #aaa;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-links ul li a:hover {
          color: var(--primary);
          padding-left: 5px;
        }
        
        .footer-social {
          flex: 1;
          min-width: 200px;
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        
        .social-icons a {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--light);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-icons a:hover {
          background-color: var(--primary);
          transform: translateY(-3px);
        }
        
        .footer-bottom {
          padding: 1.5rem 0;
          text-align: center;
        }
        
        .footer-bottom p {
          color: #aaa;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            gap: 2rem;
          }
          
          .footer-logo, .footer-links, .footer-social {
            flex: 100%;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer