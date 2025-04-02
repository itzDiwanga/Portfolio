import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formErrors, setFormErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    }
  }
  
  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }
    
    return errors
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const errors = validateForm()
    
    if (Object.keys(errors).length === 0) {
      // Submit form logic would go here
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } else {
      setFormErrors(errors)
      setSubmitStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>diwanga.2003@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+94 718828011</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>35/15A,ST.Ritas,Rathmalana</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/diwanga-munasinghe-b97409339/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/itzDiwanga" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              {/* <a href="diwanga.2003@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a> */}
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={formErrors.subject ? 'error' : ''}
                />
                {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? 'error' : ''}
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>
              
              <button type="submit" className="btn btn-submit">Send Message</button>
              
              {submitStatus === 'success' && (
                <div className="submit-message success">
                  Your message was sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="submit-message error">
                  Please fix the errors in the form.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact {
          padding: var(--section-padding);
          background-color: #f8f9fa;
        }
        
        .contact-container {
          display: flex;
          gap: 3rem;
          margin-top: 2rem;
        }
        
        /* Contact Info Styles */
        .contact-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .info-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        
        .info-icon {
          min-width: 50px;
          height: 50px;
          background-color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }
        
        .info-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
          color: var(--dark);
        }
        
        .info-content p {
          color: var(--gray);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          background-color: var(--dark);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          background-color: var(--primary);
          transform: translateY(-3px);
        }
        
        /* Contact Form Styles */
        .contact-form {
          flex: 2;
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--dark);
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(23, 180, 134, 0.2);
        }
        
        .form-group input.error,
        .form-group textarea.error {
          border-color: #e74c3c;
        }
        
        .error-message {
          color: #e74c3c;
          font-size: 0.85rem;
          margin-top: 0.3rem;
          display: block;
        }
        
        .btn-submit {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
        }
        
        .submit-message {
          margin-top: 1rem;
          padding: 0.8rem;
          border-radius: 4px;
          text-align: center;
        }
        
        .submit-message.success {
          background-color: rgba(46, 204, 113, 0.2);
          color: #27ae60;
        }
        
        .submit-message.error {
          background-color: rgba(231, 76, 60, 0.2);
          color: #e74c3c;
        }
        
        @media (max-width: 992px) {
          .contact-container {
            flex-direction: column;
          }
          
          .contact-info {
            order: 2;
          }
          
          .contact-form {
            order: 1;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact