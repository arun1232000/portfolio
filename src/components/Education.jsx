import { FaGraduationCap } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Education.css'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: "St. Joseph's College of Engineering and Technology",
    location: 'Palai, Kerala',
    period: 'Oct 2021 - June 2023',
    gpa: '6.88',
    courses: [
      'Operating Systems', 'Data Structures', 'Analysis of Algorithms',
      'Artificial Intelligence', 'Machine Learning', 'Networking', 'Databases'
    ]
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Bishop Vayalil Memorial Holy Cross College',
    location: 'Cherpunkal, Kerala',
    period: 'July 2018 - Aug 2021',
    gpa: '5.43',
    courses: []
  },
]

function Education() {
  const cardsRef = useScrollReveal()

  return (
    <section className="section education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background</p>

        <div className="education-cards reveal" ref={cardsRef}>
          {education.map((edu, i) => (
            <div className="education-card" key={i}>
              <div className="education-card-icon">
                <FaGraduationCap />
              </div>
              <div className="education-card-content">
                <div className="education-card-header">
                  <div>
                    <h3>{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-location">{edu.location}</p>
                  </div>
                  <div className="education-meta">
                    <span className="education-period">{edu.period}</span>
                    <span className="education-gpa">GPA: {edu.gpa}</span>
                  </div>
                </div>

                {edu.courses.length > 0 && (
                  <div className="education-courses">
                    <span className="courses-label">Key Courses:</span>
                    <div className="courses-list">
                      {edu.courses.map((course, j) => (
                        <span className="course-tag" key={j}>{course}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
