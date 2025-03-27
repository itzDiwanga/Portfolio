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
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: transparent;
          transition: all 0.3s ease;
          padding: 1rem 0;
        }
        
        .navbar.scrolled {
          background-color: var(--dark);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
        }
        
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo a {
          color: var(--light);
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        
        .nav-links li a {
          color: var(--light);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .nav-links li a:hover {
          color: var(--primary);
        }
        
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
        }
        
        .mobile-menu-btn span {
          display: block;
          width: 30px;
          height: 3px;
          background-color: var(--light);
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }
          
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: var(--dark);
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            gap: 1.5rem;
            transform: translateY(-150%);
            transition: all 0.3s ease;
          }
          
          .nav-links.active {
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar