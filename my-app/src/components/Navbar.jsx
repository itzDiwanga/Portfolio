import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <a href="#home">Diwanga Munasinghe</a>
        </div>
        
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a></li>
          <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#achievements" onClick={() => setMobileMenuOpen(false)}>Achievements</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: transparent;
          transition: all 0.3s ease;
          padding: 1rem 0;
          font-family: 'Montserrat', sans-serif;
        }
        
        .navbar.scrolled {
          background-color: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          padding: 0.5rem 0;
        }
        
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }
        
        .logo a {
          color: #ffffff;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }
        
        .logo a:hover {
          color: #8067f0;
          text-shadow: 0 0 10px rgba(128, 103, 240, 0.5);
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }
        
        .nav-links li a {
          color: #ffffff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }
        
        .nav-links li a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #8067f0;
          transition: width 0.3s ease;
        }
        
        .nav-links li a:hover {
          color: #8067f0;
        }
        
        .nav-links li a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          z-index: 1001;
        }
        
        .mobile-menu-btn span {
          display: block;
          width: 30px;
          height: 3px;
          background-color: #ffffff;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }
          
          .mobile-menu-btn span:nth-child(1) {
            transform: ${mobileMenuOpen ? 'rotate(45deg) translate(8px, 8px)' : 'rotate(0)'};
          }
          
          .mobile-menu-btn span:nth-child(2) {
            opacity: ${mobileMenuOpen ? '0' : '1'};
          }
          
          .mobile-menu-btn span:nth-child(3) {
            transform: ${mobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'rotate(0)'};
          }
          
          .nav-links {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.98);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem 0;
            gap: 2rem;
            transform: ${mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
            transition: all 0.4s ease;
          }
          
          .nav-links li a {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar