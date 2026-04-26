import { useParams, Link } from "react-router-dom";
import programsData from "../data/programsData";
import "./ProgramDetail.css";

// SubjectCard component — demonstrates props
function SubjectCard({ subject, index }) {
  return (
    <div className="subject-card" style={{ animationDelay: `${index * 0.08}s` }}>
      <span className="subject-card__number">{String(index + 1).padStart(2, "0")}</span>
      <span className="subject-card__name">{subject}</span>
    </div>
  );
}

// InfoItem component — demonstrates props
function InfoItem({ icon, label, value }) {
  return (
    <div className="info-item">
      <span className="info-item__icon">{icon}</span>
      <div>
        <span className="info-item__label">{label}</span>
        <span className="info-item__value">{value}</span>
      </div>
    </div>
  );
}

function ProgramDetail() {
  const { id } = useParams();

  // Find the program from our data array
  const program = programsData.find((p) => p.id === id);

  // 404 fallback
  if (!program) {
    return (
      <div className="program-not-found">
        <div className="container">
          <h2>Program Not Found</h2>
          <p>The program you're looking for doesn't exist.</p>
          <Link to="/programs" className="btn btn-primary">
            ← Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="program-detail">
      {/* Hero */}
      <section className="pd-hero">
        <div className="pd-hero__bg" style={{ background: `linear-gradient(135deg, var(--primary-dark), ${program.color}55)` }}></div>
        <div className="container pd-hero__content">
          <Link to="/programs" className="pd-hero__back">
            ← All Programs
          </Link>
          <div className="pd-hero__icon" style={{ background: `${program.color}20` }}>
            {program.icon}
          </div>
          <span className="badge badge-gold">{program.level}</span>
          <h1>{program.name}</h1>
          <p className="pd-hero__desc">{program.description}</p>
        </div>
      </section>

      {/* Info Grid */}
      <section className="pd-info">
        <div className="container">
          <div className="pd-info__grid">
            <InfoItem icon="⏱️" label="Duration" value={program.duration} />
            <InfoItem icon="📝" label="Credit Hours" value={`${program.creditHours} Credits`} />
            <InfoItem icon="🎓" label="Degree Level" value={program.level} />
            <InfoItem icon="🏫" label="Short Code" value={program.shortName} />
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="pd-eligibility">
        <div className="container">
          <div className="pd-eligibility__card">
            <div className="pd-eligibility__header">
              <span className="pd-eligibility__icon">📋</span>
              <h2>Eligibility Criteria</h2>
            </div>
            <p>{program.eligibility}</p>
            <Link to="/admissions" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
              Apply Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Key Subjects */}
      <section className="pd-subjects">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-blue">Curriculum</span>
            <h2>Key Subjects</h2>
            <p>Core courses that form the foundation of this program.</p>
          </div>

          <div className="pd-subjects__grid">
            {program.keySubjects.map((subject, index) => (
              <SubjectCard key={index} subject={subject} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pd-cta">
        <div className="container">
          <div className="pd-cta__card">
            <h2>Interested in {program.shortName}?</h2>
            <p>
              Take the first step towards your dream career. Apply now for the
              upcoming semester and join a community of innovators.
            </p>
            <div className="pd-cta__actions">
              <Link to="/admissions" className="btn btn-primary">
                View Admission Info
              </Link>
              <Link to="/programs" className="btn btn-outline">
                Explore Other Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProgramDetail;
