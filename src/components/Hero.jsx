import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import './Hero.css'

const roles = [
  'Full-Stack Developer',
  'Backend Engineer',
  'API Developer',
  'ERP Specialist',
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
      } else {
        timeout = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 38)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Available for opportunities
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Arun Abraham</span>
        </h1>

        <div className="hero-typed-wrapper">
          <span className="hero-typed-text">{displayed}</span>
          <span className="hero-cursor">|</span>
        </div>

        <p className="hero-description">
          Full-stack developer crafting robust web applications with modern technologies.
          Experienced in CakePHP, Django, Node.js &amp; more. Currently building ERP solutions
          at MWT Technologies.
        </p>

        <div className="hero-socials">
          <a href="https://github.com/arun1232000" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/arun-abraham-62149b1b6/" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:arunabr2000@gmail.com" className="hero-social-link" title="Email">
            <FaEnvelope />
          </a>
          <a href="tel:+918921791479" className="hero-social-link" title="Phone">
            <FaPhone />
          </a>
        </div>

        <div className="hero-buttons">
          <Link to="contact" smooth duration={500} offset={-80} className="btn btn-primary">
            Get In Touch
          </Link>
          <Link to="projects" smooth duration={500} offset={-80} className="btn btn-outline">
            View Projects
          </Link>
        </div>
      </div>

      <Link to="about" smooth duration={500} offset={-80} className="hero-scroll-indicator">
        <span>Scroll Down</span>
        <HiArrowDown className="hero-scroll-arrow" />
      </Link>
    </section>
  )
}

export default Hero
