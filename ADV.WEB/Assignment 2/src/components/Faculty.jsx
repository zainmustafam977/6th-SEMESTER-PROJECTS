import facultyData from "../data/facultyData";
import "./Faculty.css";

// Reusable FacultyCard component — demonstrates props
function FacultyCard({ member }) {
  return (
    <div className="faculty-card">
      <div className="faculty-card__image-wrap">
        <img
          src={member.image}
          alt={member.name}
          className="faculty-card__image"
        />
        <div className="faculty-card__overlay">
          <span className="faculty-card__dept">{member.department}</span>
        </div>
      </div>
      <div className="faculty-card__body">
        <h3 className="faculty-card__name">{member.name}</h3>
        <p className="faculty-card__designation">{member.designation}</p>
        <div className="faculty-card__divider"></div>
        <div className="faculty-card__info">
          <div className="faculty-card__info-row">
            <span className="faculty-card__info-label">Expertise</span>
            <p className="faculty-card__info-value">{member.expertise}</p>
          </div>
          <div className="faculty-card__stats">
            <div className="faculty-card__stat">
              <span className="faculty-card__stat-value">{member.publications}</span>
              <span className="faculty-card__stat-label">Publications</span>
            </div>
            <div className="faculty-card__stat">
              <span className="faculty-card__stat-value">{member.experience}</span>
              <span className="faculty-card__stat-label">Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Faculty() {
  return (
    <div className="faculty-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__content">
          <span className="badge badge-gold">Our Team</span>
          <h1>Faculty Members</h1>
          <p>
            Meet our distinguished faculty — world-class researchers and
            educators dedicated to shaping the future of technology and
            innovation.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="faculty-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-blue">Department of Computer Science & IT</span>
            <h2>Our Distinguished Faculty</h2>
            <p>
              Internationally trained scholars with expertise spanning AI, data
              science, cybersecurity, and software engineering.
            </p>
          </div>

          <div className="faculty-grid">
            {facultyData.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="faculty-stats">
        <div className="container">
          <div className="faculty-stats__grid">
            {[
              { value: "200+", label: "Faculty Members", icon: "👨‍🏫" },
              { value: "500+", label: "Research Papers", icon: "📄" },
              { value: "50+", label: "PhD Holders", icon: "🎓" },
              { value: "30+", label: "International Faculty", icon: "🌍" },
            ].map((stat, i) => (
              <div key={i} className="faculty-stat-card">
                <span className="faculty-stat-card__icon">{stat.icon}</span>
                <h3 className="faculty-stat-card__value">{stat.value}</h3>
                <p className="faculty-stat-card__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faculty;
