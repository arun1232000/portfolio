import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">&lt;AA /&gt;</div>
          <div className="footer-links">
            <a href="https://github.com/arun1232000" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/arun-abraham-62149b1b6/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:arunabr2000@gmail.com"><FaEnvelope /></a>
          </div>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Arun Abraham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
