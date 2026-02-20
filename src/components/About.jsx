import { FaCode, FaServer, FaDatabase, FaUsers } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const highlights = [
  { icon: <FaCode />, title: 'Frontend', desc: 'HTML, CSS, JS, Angular, Bootstrap' },
  { icon: <FaServer />, title: 'Backend', desc: 'CakePHP, Django, Node.js' },
  { icon: <FaDatabase />, title: 'Database', desc: 'MySQL, MongoDB' },
  { icon: <FaUsers />, title: 'Teamwork', desc: 'Agile, Cross-functional' },
]

function About() {
  const textRef = useScrollReveal()
  const cardsRef = useScrollReveal()

  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Getting to know me better</p>

        <div className="about-content">
          <div className="about-text reveal reveal-left" ref={textRef}>
            <p>
              I'm a passionate <strong>Full-Stack Software Developer</strong> based in Kerala, India,
              currently working at <strong>MWT Technologies Pvt. Ltd.</strong> in Kochi. With a Master's
              in Computer Applications from St. Joseph's College of Engineering and Technology, I bring
              a solid academic foundation paired with hands-on industry experience.
            </p>
            <p>
              I specialize in building and maintaining enterprise-grade web applications, including
              ERP systems for RTOs across Australia and other countries. My day-to-day involves
              developing APIs, optimizing backend operations, and collaborating with cross-functional
              teams to deliver solutions that align with business objectives.
            </p>
            <p>
              I'm driven by a love for <strong>problem-solving</strong> and <strong>continuous learning</strong>,
              always exploring new technologies and frameworks to stay at the cutting edge of web development.
            </p>
          </div>

          <div className="about-highlights reveal reveal-right" ref={cardsRef}>
            {highlights.map((item, i) => (
              <div className="about-highlight-card" key={i}>
                <div className="about-highlight-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
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
