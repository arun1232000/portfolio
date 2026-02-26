import { FaCode } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

const projects = [
  {
    title: 'IHM Australia AI Chatbot',
    subtitle: 'Metaveo.ai',
    description: 'Online verification AI chatbot and application form for the IHM Australia website, integrating ChatGPT agents for intelligent student verification and admissions.',
    frontend: ['HTML', 'CSS', 'JavaScript'],
    backend: ['Python', 'Django', 'PostgreSQL', 'ChatGPT API'],
    color: '#ff6b35',
  },
  {
    title: 'Complaint Management System',
    subtitle: 'Metaveo.ai',
    description: 'High-performance complaint management system for IHNA and IHM students to submit, track, and resolve complaints with a modern full-stack architecture.',
    frontend: ['Next.js', 'React'],
    backend: ['FastAPI', 'PostgreSQL'],
    color: '#1565c0',
  },
  {
    title: 'Knowledge Hub (ERP)',
    subtitle: 'Metaveo.ai',
    description: "CakePHP-based ERP application for Registered Training Organizations (RTOs) in Australia and other international regions, managing training, compliance, and student records.",
    frontend: ['CakePHP', 'HTML', 'CSS', 'JavaScript'],
    backend: ['CakePHP', 'MySQL'],
    color: '#b71c1c',
  },
  {
    title: 'AceEd Mobile App APIs',
    subtitle: 'Metaveo.ai',
    description: 'Architected and developed scalable RESTful APIs for the AceEd mobile application, supporting core mobile functionalities including user management and content delivery.',
    frontend: ['React Native', 'Mobile App'],
    backend: ['CakePHP', 'MySQL'],
    color: '#00838f',
  },
  {
    title: 'Medical Supplies Management',
    subtitle: 'MCA Main Project',
    description: 'Web platform for managing used medical supplies, featuring inventory tracking, supplier management, and reporting capabilities.',
    frontend: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    backend: ['Python', 'Django', 'MySQL'],
    color: '#306998',
  },
  {
    title: 'Employee Management System',
    subtitle: 'MCA Mini Project',
    description: 'Comprehensive employee management system with features for tracking employee data, attendance, and performance.',
    frontend: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    backend: ['Python', 'Django', 'MySQL'],
    color: '#0c4b33',
  },
  {
    title: 'Price Comparison Website',
    subtitle: 'BCA Main Project',
    description: 'Wishlist-based product price comparison tool allowing users to compare prices across multiple platforms.',
    frontend: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    backend: ['Python', 'Django', 'MySQL'],
    color: '#e044ff',
  },
]

function Projects() {
  const gridRef = useScrollReveal()

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built along the way</p>

        <div className="projects-grid reveal" ref={gridRef}>
          {projects.map((project, i) => (
            <div
              className="project-card"
              key={i}
              style={{ '--project-color': project.color }}
            >
              <div className="project-card-shimmer" />
              <div className="project-card-header">
                <div className="project-icon">
                  <FaCode />
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <span className="project-subtitle">{project.subtitle}</span>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                <div className="project-tech-group">
                  <span className="tech-label">Frontend</span>
                  <div className="tech-tags">
                    {project.frontend.map((tech, j) => (
                      <span className="tech-tag" key={j}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-tech-group">
                  <span className="tech-label">Backend</span>
                  <div className="tech-tags">
                    {project.backend.map((tech, j) => (
                      <span className="tech-tag backend" key={j}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
