import {
  FaPython, FaPhp, FaJsSquare, FaNodeJs, FaBootstrap,
  FaGitAlt, FaLinux, FaWindows, FaDocker, FaCode
} from 'react-icons/fa'
import {
  SiDjango, SiCakephp, SiJquery,
  SiMysql, SiMongodb, SiPostman,
  SiFastapi, SiLaravel, SiNextdotjs, SiPostgresql
} from 'react-icons/si'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python',      icon: <FaPython />,    color: '#3776AB' },
      { name: 'PHP',         icon: <FaPhp />,       color: '#8892BE' },
      { name: 'JavaScript',  icon: <FaJsSquare />,  color: '#F7DF1E' },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Django',    icon: <SiDjango />,    color: '#0C4B33' },
      { name: 'FastAPI',   icon: <SiFastapi />,   color: '#009688' },
      { name: 'CakePHP',   icon: <SiCakephp />,   color: '#D33C44' },
      { name: 'Laravel',   icon: <SiLaravel />,   color: '#FF2D20' },
      { name: 'Next.js',   icon: <SiNextdotjs />, color: '#000000' },
      { name: 'Node.js',   icon: <FaNodeJs />,    color: '#68A063' },
      { name: 'jQuery',    icon: <SiJquery />,    color: '#0769AD' },
      { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
      { name: 'MySQL',      icon: <SiMysql />,      color: '#00758F' },
      { name: 'MongoDB',    icon: <SiMongodb />,    color: '#47A248' },
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git',         icon: <FaGitAlt />,  color: '#F05032' },
      { name: 'Docker',      icon: <FaDocker />,  color: '#2496ED' },
      { name: 'Claude Code', icon: <FaCode />,    color: '#CC785C' },
      { name: 'Postman',     icon: <SiPostman />, color: '#FF6C37' },
      { name: 'Linux',       icon: <FaLinux />,   color: '#FCC624' },
      { name: 'Windows',     icon: <FaWindows />, color: '#0078D6' },
    ]
  },
]

function Skills() {
  const gridRef = useScrollReveal()

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="section-subtitle">Technologies I work with on a daily basis</p>

        <div className="skills-grid reveal" ref={gridRef}>
          {skillCategories.map((cat, i) => (
            <div className="skills-category" key={i}>
              <h3 className="skills-category-title">{cat.title}</h3>
              <div className="skills-list">
                {cat.skills.map((skill, j) => (
                  <div
                    className="skill-chip"
                    key={j}
                    style={{ '--skill-color': skill.color }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
