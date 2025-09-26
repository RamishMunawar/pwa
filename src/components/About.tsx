import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null)

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'TypeScript', level: 85, color: '#3178c6' },
    { name: 'Node.js', level: 80, color: '#68a063' },
    { name: 'Python', level: 75, color: '#3776ab' },
    { name: 'UI/UX Design', level: 85, color: '#ff6b6b' },
    { name: 'Figma', level: 90, color: '#f24e1e' }
  ]

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading frontend development for web applications using React and TypeScript.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Developed full-stack applications and managed cloud infrastructure.'
    },
    {
      title: 'UI/UX Designer',
      company: 'Design Studio',
      period: '2018 - 2020',
      description: 'Created user-centered designs and prototypes for mobile and web applications.'
    }
  ]

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about-banner-text">
        <div className="banner-overlay">
          <h3>Collaborative Team Environment</h3>
          <p>Working together to create innovative solutions and drive digital transformation</p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I'm a passionate Full Stack Developer with over 5 years of experience 
            creating beautiful, responsive, and user-friendly web applications. 
            I love turning complex problems into simple, beautiful, and intuitive solutions. 
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or sharing my knowledge with the community.
          </p>
        </div>

        <div className="about-content">
          <div className="about-skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image">
            <div className="about-avatar">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" 
                alt="Profile" 
                className="about-profile-image"
              />
            </div>
          </div>
        </div>

        <div className="about-buttons">
          <button className="btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </button>
          <button className="btn-secondary">
            Read More
          </button>
        </div>

        <div className="about-experience">
          <h3>Professional Experience</h3>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-dot"></div>
                <div className="experience-content">
                  <h4>{exp.title}</h4>
                  <div className="experience-meta">
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
