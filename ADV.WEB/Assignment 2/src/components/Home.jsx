import { Link } from "react-router-dom";
import programsData from "../data/programsData";
import heroBanner from "../assets/images/hero-banner.png";
import "./Home.css";

// Reusable StatCard component — demonstrates props usage
function StatCard({ value, label, icon }) {
  return (
    <div className="stat-card">
      <span className="stat-card__icon">{icon}</span>
      <h3 className="stat-card__value">{value}</h3>
      <p className="stat-card__label">{label}</p>
    </div>
  );
}

// Reusable ProgramHighlight component — demonstrates props usage
function ProgramHighlight({ program }) {
  return (
    <Link to={`/program/${program.id}`} className="highlight-card">
      <div className="highlight-card__icon" style={{ background: `${program.color}18` }}>
        <span>{program.icon}</span>
      </div>
      <h3 className="highlight-card__name">{program.name}</h3>
      <p className="highlight-card__meta">
        <span className="badge badge-gold">{program.level}</span>
        <span>{program.duration}</span>
      </p>
      <p className="highlight-card__desc">{program.description.slice(0, 120)}...</p>
      <span className="highlight-card__link">
        Learn More →
      </span>
    </Link>
  );
}

function Home() {
  const stats = [
    { value: "30,000+", label: "Students Enrolled", icon: "🎓" },
    { value: "200+", label: "Faculty Members", icon: "👨‍🏫" },
    { value: "50+", label: "Programs Offered", icon: "📚" },
    { value: "35+", label: "Years of Excellence", icon: "🏆" },
  ];

  const featuredPrograms = programsData.slice(0, 4);

  return (
    <div className="home">
      {/* ===== Hero Section ===== */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <img src={heroBanner} alt="UMT Campus" className="hero__bg-img" />
          <div className="hero__overlay"></div>
        </div>

        <div className="hero__content container">
          <div className="hero__badge">
            <span>🏛️</span> Established 1990 — Lahore, Pakistan
          </div>
          <h1 className="hero__title">
            University of
            <span className="hero__title-accent"> Management</span>
            <br />& Technology
          </h1>
          <p className="hero__subtitle">
            Shaping visionary leaders and innovative thinkers through
            world-class education, cutting-edge research, and a commitment to
            excellence that spans over three decades.
          </p>
          <div className="hero__actions">
            <Link to="/programs" className="btn btn-primary">
              Explore Programs
            </Link>
            <Link to="/admissions" className="btn btn-secondary">
              Admission Info
            </Link>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="hero__stats container">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="about" id="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__text">
              <span className="badge badge-gold">About UMT</span>
              <h2>A Legacy of Academic Excellence</h2>
              <p>
                The University of Management and Technology (UMT) is one of
                Pakistan&apos;s premier institutions, recognized by the Higher
                Education Commission (HEC) and accredited by multiple
                international bodies. UMT offers a diverse range of
                undergraduate and graduate programs across computing, business,
                engineering, and social sciences.
              </p>
              <p>
                With state-of-the-art facilities, a vibrant campus life, and a
                faculty comprising internationally trained scholars, UMT
                prepares students to excel in an increasingly competitive global
                landscape.
              </p>
              <div className="about__features">
                <div className="about__feature">
                  <span>✅</span> HEC Recognized
                </div>
                <div className="about__feature">
                  <span>✅</span> International Accreditation
                </div>
                <div className="about__feature">
                  <span>✅</span> Research Excellence
                </div>
                <div className="about__feature">
                  <span>✅</span> Industry Partnerships
                </div>
              </div>
            </div>
            <div className="about__visual">
              <div className="about__card about__card--1">
                <h4>🌍 Global Network</h4>
                <p>Partnerships with 50+ international universities</p>
              </div>
              <div className="about__card about__card--2">
                <h4>🔬 Research Output</h4>
                <p>1,200+ published research papers annually</p>
              </div>
              <div className="about__card about__card--3">
                <h4>💼 Career Placement</h4>
                <p>92% graduate employment rate within 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Program Highlights ===== */}
      <section className="highlights" id="highlights">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-blue">Our Programs</span>
            <h2>Highlights of Programs</h2>
            <p>
              Discover our cutting-edge degree programs designed to prepare you
              for the careers of tomorrow.
            </p>
          </div>

          <div className="highlights__grid">
            {featuredPrograms.map((program) => (
              <ProgramHighlight key={program.id} program={program} />
            ))}
          </div>

          <div className="highlights__cta">
            <Link to="/programs" className="btn btn-outline">
              View All Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Why UMT ===== */}
      <section className="why-umt">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-gold">Why Choose UMT</span>
            <h2>Your Future Starts Here</h2>
            <p>
              Experience a transformative educational journey at one of
              Pakistan&apos;s top universities.
            </p>
          </div>

          <div className="why-umt__grid">
            {[
              {
                icon: "🎯",
                title: "Industry-Aligned Curriculum",
                desc: "Programs designed in collaboration with industry leaders to ensure job-ready graduates.",
              },
              {
                icon: "🧪",
                title: "Research Opportunities",
                desc: "Access to funded research projects and state-of-the-art labs for hands-on experience.",
              },
              {
                icon: "🌐",
                title: "Global Exposure",
                desc: "Exchange programs and partnerships with top international universities worldwide.",
              },
              {
                icon: "🏢",
                title: "Modern Campus",
                desc: "A sprawling campus with smart classrooms, high-speed internet, and recreational facilities.",
              },
              {
                icon: "💡",
                title: "Innovation Hub",
                desc: "Incubation centers and entrepreneurship programs to fuel your startup ideas.",
              },
              {
                icon: "🤝",
                title: "Career Services",
                desc: "Dedicated career center offering internships, job placements, and mentorship programs.",
              },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
