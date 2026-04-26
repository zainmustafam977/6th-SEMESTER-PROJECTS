import { Link } from "react-router-dom";
import "./Admission.css";

// Reusable TimelineItem component — demonstrates props
function TimelineItem({ step, title, description, icon }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item__marker">
        <span className="timeline-item__icon">{icon}</span>
        <span className="timeline-item__step">Step {step}</span>
      </div>
      <div className="timeline-item__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Reusable DateCard component — demonstrates props
function DateCard({ event, date, status }) {
  return (
    <div className={`date-card ${status === "active" ? "date-card--active" : ""}`}>
      <div className="date-card__status">
        {status === "active" ? "🟢 Open" : status === "upcoming" ? "🟡 Upcoming" : "🔴 Closed"}
      </div>
      <h4 className="date-card__event">{event}</h4>
      <p className="date-card__date">{date}</p>
    </div>
  );
}

function Admission() {
  // Admission criteria stored in an array
  const admissionCriteria = [
    {
      title: "Academic Qualification",
      description: "Intermediate / A-Levels / equivalent with minimum required percentage as per program.",
      icon: "📚",
    },
    {
      title: "UMT Entry Test",
      description: "All applicants must clear the UMT Aptitude Test (UAT) or provide a valid NTS/NAT score.",
      icon: "📝",
    },
    {
      title: "Merit-Based Selection",
      description: "Admission is granted on merit basis considering academic record, test score, and interview.",
      icon: "🏆",
    },
    {
      title: "GAT Score (Graduate)",
      description: "MS/PhD applicants must have a valid GAT General score of 50% or above.",
      icon: "🎓",
    },
  ];

  // Admission process stored in an array
  const admissionProcess = [
    {
      step: 1,
      title: "Online Application",
      description: "Fill out the online application form at admissions.umt.edu.pk with your personal and academic details.",
      icon: "💻",
    },
    {
      step: 2,
      title: "Submit Documents",
      description: "Upload scanned copies of your academic transcripts, CNIC/B-Form, photographs, and domicile certificate.",
      icon: "📄",
    },
    {
      step: 3,
      title: "Entry Test",
      description: "Appear for the UMT Aptitude Test (UAT) at one of our designated test centers across Pakistan.",
      icon: "✍️",
    },
    {
      step: 4,
      title: "Merit List",
      description: "Check the displayed merit list on the university website. Selected candidates will be notified via email and SMS.",
      icon: "📋",
    },
    {
      step: 5,
      title: "Fee Payment",
      description: "Confirm your admission by paying the semester fees through bank challan or online payment portal.",
      icon: "💳",
    },
    {
      step: 6,
      title: "Enrollment",
      description: "Complete the enrollment process by verifying original documents and collecting your student ID card.",
      icon: "🎉",
    },
  ];

  // Important dates stored in an array
  const importantDates = [
    { event: "Fall 2026 Applications Open", date: "June 1, 2026", status: "upcoming" },
    { event: "Spring 2026 Admissions", date: "Dec 15, 2025 – Jan 31, 2026", status: "closed" },
    { event: "Entry Test (Fall Batch)", date: "July 15, 2026", status: "upcoming" },
    { event: "Merit List Announcement", date: "August 1, 2026", status: "upcoming" },
    { event: "Fee Submission Deadline", date: "August 20, 2026", status: "upcoming" },
    { event: "Orientation Week", date: "September 1, 2026", status: "upcoming" },
  ];

  return (
    <div className="admission-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__content">
          <span className="badge badge-gold">Admissions 2026</span>
          <h1>Admission Information</h1>
          <p>
            Everything you need to know about applying to the University of
            Management & Technology. Start your journey today.
          </p>
        </div>
      </section>

      {/* Admission Criteria */}
      <section className="adm-criteria">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-blue">Requirements</span>
            <h2>Admission Criteria</h2>
            <p>Meet these requirements to be eligible for admission.</p>
          </div>

          <div className="adm-criteria__grid">
            {admissionCriteria.map((item, index) => (
              <div key={index} className="criteria-card">
                <div className="criteria-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="adm-process">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-gold">How to Apply</span>
            <h2>Admission Process</h2>
            <p>Follow these simple steps to apply for admission at UMT.</p>
          </div>

          <div className="adm-process__timeline">
            {admissionProcess.map((item) => (
              <TimelineItem
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="adm-dates">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-blue">Calendar</span>
            <h2>Important Dates</h2>
            <p>Mark these key dates in your calendar to stay on track.</p>
          </div>

          <div className="adm-dates__grid">
            {importantDates.map((date, index) => (
              <DateCard
                key={index}
                event={date.event}
                date={date.date}
                status={date.status}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="adm-cta">
        <div className="container">
          <div className="adm-cta__card">
            <h2>Ready to Apply?</h2>
            <p>
              Join thousands of students who chose UMT to build their future.
              Explore our programs and find the right fit for you.
            </p>
            <div className="adm-cta__actions">
              <Link to="/programs" className="btn btn-primary">
                Explore Programs
              </Link>
              <Link to="/faculty" className="btn btn-outline">
                Meet Our Faculty
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admission;
