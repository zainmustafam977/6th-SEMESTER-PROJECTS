import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/programs", label: "Programs" },
    { to: "/admissions", label: "Admissions" },
    { to: "/faculty", label: "Faculty" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setMobileOpen(false)}>
          <div className="navbar__logo-icon">UMT</div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">University of Management</span>
            <span className="navbar__logo-subtitle">& Technology</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/admissions" className="navbar__cta btn btn-primary">
          Apply Now
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle ${mobileOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
                }
                end={link.to === "/"}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/admissions"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
