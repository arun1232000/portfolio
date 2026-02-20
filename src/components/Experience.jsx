import { FaBriefcase } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Experience.css'

const experiences = [
  {
    title: 'Junior Software Developer',
    type: 'Full-time',
    company: 'MWT Technologies Pvt. Ltd.',
    location: 'Kochi, Kerala',
    period: 'March 2024 - Present',
    current: true,
    points: [
      "Developed and maintained CakePHP based ERP Application for RTOs in Australia & other countries called 'Knowledge Hub'",
      "Developing APIs for a mobile application called 'AceEd'",
      'Conducted bug fixes, implemented new modifications, and managed deployment processes',
      'Executed database queries and optimized back-end operations for enhanced performance',
      'Collaborated with cross-functional teams to analyse requirements and implement features',
    ]
  },
  {
    title: 'Software Developer Trainee',
    company: 'MWT Technologies Pvt. Ltd.',
    location: 'Kochi, Kerala',
    period: 'May 2023 - February 2024',
    current: false,
    points: [
      'Completed intensive training in HTML, CSS, JavaScript, Bootstrap, jQuery, PHP, CakePHP, and MySQL',
      'Built foundational skills across full-stack web development technologies',
    ]
  },
]

function Experience() {
  const timelineRef = useScrollReveal()

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey so far</p>

        <div className="experience-timeline reveal" ref={timelineRef}>
          {experiences.map((exp, i) => (
            <div className="experience-card" key={i}>
              <div className="experience-marker">
                <div className={`experience-dot ${exp.current ? 'active' : ''}`}>
                  <FaBriefcase />
                </div>
                {i < experiences.length - 1 && <div className="experience-line"></div>}
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    {exp.type && <span className="experience-type">{exp.type}</span>}
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>

                <ul className="experience-points">
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
