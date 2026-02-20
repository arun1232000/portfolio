import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'arunabr2000@gmail.com',
    href: 'mailto:arunabr2000@gmail.com',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91 8921791479',
    href: 'tel:+918921791479',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Kochi, Kerala, India',
    href: null,
  },
]

const socials = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/arun1232000',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/arun-abraham-62149b1b6/',
  },
]

function Contact() {
  const infoRef = useScrollReveal()
  const ctaRef  = useScrollReveal()

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>

        <div className="contact-content">
          <div className="contact-info reveal reveal-left" ref={infoRef}>
            <div className="contact-cards">
              {contactInfo.map((info, i) => (
                <div className="contact-card" key={i}>
                  <div className="contact-card-icon">{info.icon}</div>
                  <div>
                    <span className="contact-card-label">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} className="contact-card-value">{info.value}</a>
                    ) : (
                      <span className="contact-card-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <h4>Connect with me</h4>
              <div className="contact-social-links">
                {socials.map((social, i) => (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    key={i}
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-cta reveal reveal-right" ref={ctaRef}>
            <div className="contact-cta-card">
              <h3>Let's work together</h3>
              <p>
                I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions.
              </p>
              <div className="contact-cta-btn-wrapper">
                <div className="contact-cta-ripple" />
                <a href="mailto:arunabr2000@gmail.com" className="btn btn-primary">
                  <FaEnvelope /> Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
