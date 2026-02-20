import { FaCode } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

const projects = [
  {
    title: 'E-commerce Website',
    subtitle: 'Node.js',
    status: 'In Progress',
    description: 'Full-featured e-commerce platform with product management, cart functionality, and order processing built with Node.js and MongoDB.',
    frontend: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    backend: ['Node.js', 'Express.js', 'MongoDB'],
    color: '#68a063',
  },
  {
    title: 'Blog Website',
    subtitle: 'CakePHP',
    description: 'Dynamic blog platform with content management, user authentication, and CRUD operations built with CakePHP framework.',
    frontend: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    backend: ['CakePHP', 'MySQL'],
    color: '#d33c44',
  },
  {
    title: 'E-commerce Website',
    subtitle: 'PHP',
    description: 'Online shopping platform with product catalog, shopping cart, and payment integration built using core PHP.',
    frontend: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    backend: ['PHP', 'MySQL'],
    color: '#777bb4',
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
                {project.status && (
                  <span className="project-status">{project.status}</span>
                )}
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
