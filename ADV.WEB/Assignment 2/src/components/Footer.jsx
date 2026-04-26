import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="footer__content">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-icon">UMT</div>
                <div>
                  <h3>University of Management</h3>
                  <span>& Technology</span>
                </div>
              </div>
              <p>
                Empowering the next generation of leaders, innovators, and
                change-makers through world-class education and cutting-edge
                research since 1990.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/faculty">Faculty</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div className="footer__col">
              <h4>Top Programs</h4>
              <ul>
                <li><Link to="/program/bs-computer-science">BS Computer Science</Link></li>
                <li><Link to="/program/bs-artificial-intelligence">BS Artificial Intelligence</Link></li>
                <li><Link to="/program/bs-data-science">BS Data Science</Link></li>
                <li><Link to="/program/ms-computer-science">MS Computer Science</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4>Contact Us</h4>
              <ul className="footer__contact">
                <li>
                  <span className="footer__icon">📍</span>
                  C-II, Johar Town, Lahore, Pakistan
                </li>
                <li>
                  <span className="footer__icon">📞</span>
                  +92-42-35212801-10
                </li>
                <li>
                  <span className="footer__icon">✉️</span>
                  info@umt.edu.pk
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p>&copy; {new Date().getFullYear()} University of Management & Technology. All rights reserved.</p>
            <p className="footer__credits">Built with React ⚛️</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
