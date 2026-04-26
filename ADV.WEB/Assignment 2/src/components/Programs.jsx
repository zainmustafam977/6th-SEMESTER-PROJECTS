import { Link } from "react-router-dom";
import programsData from "../data/programsData";
import "./Programs.css";

// Reusable ProgramCard component — uses props for data passing
function ProgramCard({ program }) {
  return (
    <Link to={`/program/${program.id}`} className="program-card">
      <div className="program-card__header">
        <div
          className="program-card__icon-wrap"
          style={{ background: `${program.color}15` }}
        >
          <span className="program-card__icon">{program.icon}</span>
        </div>
        <span className="badge badge-gold">{program.level}</span>
      </div>

      <h3 className="program-card__name">{program.name}</h3>

      <div className="program-card__details">
        <div className="program-card__detail">
          <span className="program-card__detail-icon">⏱️</span>
          <span>{program.duration}</span>
        </div>
        <div className="program-card__detail">
          <span className="program-card__detail-icon">📝</span>
          <span>{program.creditHours} Credit Hours</span>
        </div>
      </div>

      <p className="program-card__desc">
        {program.description.slice(0, 140)}...
      </p>

      <div className="program-card__subjects">
        {program.keySubjects.slice(0, 3).map((subject, i) => (
          <span key={i} className="program-card__tag">
            {subject}
          </span>
        ))}
        {program.keySubjects.length > 3 && (
          <span className="program-card__tag program-card__tag--more">
            +{program.keySubjects.length - 3} more
          </span>
        )}
      </div>

      <div className="program-card__footer">
        <span className="program-card__link">
          View Details →
        </span>
      </div>
    </Link>
  );
}

function Programs() {
  // Separate programs by level using array methods
  const undergradPrograms = programsData.filter(
    (p) => p.level === "Undergraduate"
  );
  const gradPrograms = programsData.filter((p) => p.level === "Graduate");

  return (
    <div className="programs-page">
      {/* Page Header */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__content">
          <span className="badge badge-gold">Academic Programs</span>
          <h1>Programs Offered</h1>
          <p>
            Explore our comprehensive range of undergraduate and graduate
            programs, each designed to equip you with the skills and knowledge
            for a successful career in technology.
          </p>
        </div>
      </section>

      {/* Undergraduate Programs */}
      <section className="programs-section">
        <div className="container">
          <div className="programs-section__header">
            <h2>🎓 Undergraduate Programs</h2>
            <p>4-year degree programs leading to a Bachelor of Science</p>
          </div>

          <div className="programs-grid">
            {undergradPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Programs */}
      <section className="programs-section programs-section--grad">
        <div className="container">
          <div className="programs-section__header">
            <h2>📘 Graduate Programs</h2>
            <p>2-year advanced programs leading to a Master of Science</p>
          </div>

          <div className="programs-grid programs-grid--grad">
            {gradPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs;
