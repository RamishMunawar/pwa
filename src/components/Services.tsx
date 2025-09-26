import { useEffect, useRef } from 'react'
import './Services.css'

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
      title: 'Web Development',
      description: 'I build modern, responsive web applications using React, TypeScript, and Node.js. I focus on performance, accessibility, and user experience to create applications that not only look great but also provide exceptional functionality.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'Mobile Development',
      description: 'I create cross-platform mobile applications using React Native and Flutter. I ensure smooth performance and native-like user experience across all devices, from iOS to Android.'
    }
  ]

  return (
    <section id="services" className="services" ref={servicesRef}>
      <div className="services-banner-text">
        <div className="banner-overlay">
          <h3>Strategic Business Meetings</h3>
          <p>Planning and executing digital strategies that drive business growth and success</p>
        </div>
      </div>
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Services I Offer</h2>
          <p className="section-subtitle">
            I provide comprehensive development services to help bring your ideas to life 
            with cutting-edge technology and best practices.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
