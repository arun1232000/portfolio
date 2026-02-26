import { FaBriefcase } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Experience.css'

const experiences = [
  {
    title: 'Junior Software Developer',
    type: 'Full-time',
    company: 'Metaveo.ai Pvt Ltd (previously MWT Technologies Pvt. Ltd.)',
    location: 'Kochi, Kerala',
    period: 'March 2024 - Present',
    current: true,
    points: [
      'Developed and maintained a Django and PostgreSQL-based online verification AI chatbot and application form for the IHM Australia website, integrating ChatGPT agents.',
      'Engineered and sustained a high-performance Complaint Management System for IHNA and IHM students utilizing FastAPI, Next.js, and PostgreSQL.',
      "Managed the development and maintenance of 'Knowledge Hub,' a CakePHP-based ERP application designed for Registered Training Organizations (RTOs) in Australia and other international regions.",
      "Architected and developed scalable APIs for the 'AceEd' mobile application to support core mobile functionalities.",
      'Performed rigorous bug fixes, implemented system modifications, and oversaw deployment processes to ensure seamless and reliable software updates.',
      'Optimized backend operations and executed complex database queries to enhance system performance, responsiveness, and data integrity.',
      'Collaborated with cross-functional teams to analyze technical requirements, design robust solutions, and implement features aligned with strategic business objectives.',
    ]
  },
  {
    title: 'Software Developer Trainee',
    company: 'Metaveo.ai Pvt Ltd (previously MWT Technologies Pvt. Ltd.)',
    location: 'Kochi, Kerala',
    period: 'May 2023 - February 2024',
    current: false,
    points: [
      'Training in various front-end and back-end technologies to enhance technical knowledge and improve development skills.',
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
