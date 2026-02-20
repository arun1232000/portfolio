import { FaCertificate, FaCloud, FaMicrochip } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Certifications.css'

const certifications = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL (IIT Kharagpur)',
    icon: <FaCloud />,
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL (IIT Kharagpur)',
    icon: <FaMicrochip />,
  },
]

const volunteer = [
  {
    title: 'Coordinator of TECHSPHERE',
    desc: "Workshop at St. Joseph's College of Engineering and Technology, Palai",
  },
  {
    title: 'Coordinator of FENSTRA',
    desc: "Department of MCA, St. Joseph's College of Engineering and Technology, Palai in association with ASTHRA 2022",
  },
]

function Certifications() {
  const gridRef = useScrollReveal()

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications &amp; Activities</h2>
        <p className="section-subtitle">Continuous learning and community involvement</p>

        <div className="cert-grid reveal" ref={gridRef}>
          <div className="cert-column">
            <h3 className="cert-column-title">
              <FaCertificate /> Certifications
            </h3>
            <div className="cert-cards">
              {certifications.map((cert, i) => (
                <div className="cert-card" key={i}>
                  <div className="cert-card-icon">{cert.icon}</div>
                  <div>
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cert-column">
            <h3 className="cert-column-title">
              <FaCertificate /> Volunteer Experience
            </h3>
            <div className="cert-cards">
              {volunteer.map((vol, i) => (
                <div className="cert-card" key={i}>
                  <div className="cert-card-icon volunteer-icon">
                    <span>{vol.title.charAt(0)}</span>
                  </div>
                  <div>
                    <h4>{vol.title}</h4>
                    <p>{vol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
