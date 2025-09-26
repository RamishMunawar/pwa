import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-banner-text">
          <div className="banner-overlay">
            <h3>Welcome to My Digital Workspace</h3>
            <p>Where creativity meets technology to build amazing digital experiences</p>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Your Name</span>
            </h1>
            <h2 className="hero-subtitle">
              Full Stack Developer
            </h2>
            <p className="hero-description">
              I'm a passionate Full Stack Developer with over 5 years of experience 
              creating beautiful, responsive, and user-friendly web applications. 
              I love turning complex problems into simple, beautiful, and intuitive solutions. 
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge with the community.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToProjects}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                View Projects
              </button>
              <button 
                className="btn-secondary"
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Contact Me
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>Scroll down</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
