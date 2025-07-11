import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Hero.scss";
import logo from "../../assets/images/logo.png";

const Hero = ({
  title,
  subtitle,
  badge,
  ctaText,
  isAboutPage = false,
  showControls = true,
}) => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsHomeDropdownOpen(false);
    setIsPagesDropdownOpen(false);
  };

  const defaultContent = {
    title: "Quality Trust: Direct to the Farm",
    subtitle:
      "We all need a little space to grow. Give yourself the space you need to find your inner you.",
    badge: "BELIEVE IN QUALITY!",
    ctaText: "Contact Us",
  };

  const aboutContent = {
    title: "About Our Company",
    subtitle:
      "Discover our journey, values, and commitment to excellence in delivering quality solutions.",
    badge: "OUR STORY",
    ctaText: "Learn More",
  };

  const content = isAboutPage ? aboutContent : defaultContent;

  return (
    <div className={`hero ${isAboutPage ? "hero--about" : ""}`}>
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>

      <nav className="hero__navbar">
        <div className="hero__navbar-brand">
          <div className="hero__logo">
            <Link to="/" onClick={closeDropdowns}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>

        <div className="hero__navbar-menu">
          {/* <div className="hero__navbar-item hero__navbar-item--dropdown">
            <button className="hero__navbar-link" onClick={toggleHomeDropdown}>
              HOME
              <span className="hero__dropdown-icon">▼</span>
            </button>
            {isHomeDropdownOpen && (
              <div className="hero__dropdown-menu">
                <Link
                  to="/"
                  className="hero__dropdown-item"
                  onClick={closeDropdowns}
                >
                  HOME 1
                </Link>
                <Link
                  to="/"
                  className="hero__dropdown-item"
                  onClick={closeDropdowns}
                >
                  HOME 2
                </Link>
                <Link
                  to="/"
                  className="hero__dropdown-item"
                  onClick={closeDropdowns}
                >
                  HOME 3
                </Link>
              </div>
            )}
          </div> */}
          <div className="hero__navbar-item">
            <Link to="/" className="hero__navbar-link">
              HOME
              <span className="hero__dropdown-icon">▼</span>
            </Link>
          </div>

          {/* <div className="hero__navbar-item hero__navbar-item--dropdown">
            <button className="hero__navbar-link" onClick={togglePagesDropdown}>
              About
              <span className="hero__dropdown-icon">▼</span>
            </button>
            {isPagesDropdownOpen && (
              <div className="hero__dropdown-menu">
                <Link
                  to="/about"
                  className={`hero__dropdown-item ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  onClick={closeDropdowns}
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="hero__dropdown-item"
                  onClick={closeDropdowns}
                >
                  Our Services
                </Link>
                <Link
                  to="/team"
                  className="hero__dropdown-item"
                  onClick={closeDropdowns}
                >
                  Our Team
                </Link>
                <Link
                  to="/pricing"
                  className="hero__dropdown-item"
                  onClick={closeDropdowns}
                >
                  Pricing
                </Link>
              </div>
            )}
          </div> */}

          <div className="hero__navbar-item">
            <Link to="/about" className="hero__navbar-link">
              ABOUT
              <span className="hero__dropdown-icon">▼</span>
            </Link>
          </div>

          <div className="hero__navbar-item">
            <Link to="/services" className="hero__navbar-link">
              SERVICES
              <span className="hero__dropdown-icon">▼</span>
            </Link>
          </div>

          <div className="hero__navbar-item">
            <Link to="/portfolio" className="hero__navbar-link">
              PORTFOLIO
              <span className="hero__dropdown-icon">▼</span>
            </Link>
          </div>

          <div className="hero__navbar-item">
            <Link to="/blog" className="hero__navbar-link">
              BLOG
            </Link>
          </div>

          <div className="hero__navbar-item">
            <Link to="/contact" className="hero__navbar-link">
              CONTACT US
            </Link>
          </div>
        </div>

        <div className="hero__navbar-actions">
          <div className="hero__contact-info">
            <div className="hero__phone">
              <span className="hero__phone-icon">📞</span>
              <div className="hero__phone-text">
                <div className="hero__phone-label">Call us Now</div>
                <div className="hero__phone-number">+1(210)255-511</div>
              </div>
            </div>
          </div>

          <button className="hero__search-btn">
            <span className="hero__search-icon">🔍</span>
          </button>

          <button className="hero__cta-btn">
            Get In Touch
            <span className="hero__cta-arrow">↗</span>
          </button>
        </div>
      </nav>

      <div className="hero__content">
        <div className="hero__badge">{badge || content.badge}</div>

        <h1 className="hero__title">{title || content.title}</h1>

        <hr className="hr" />

        <p className="hero__subtitle">{subtitle || content.subtitle}</p>

        <button className="hero__contact-btn">
          {ctaText || content.ctaText}
          <span className="hero__contact-arrow">↗</span>
        </button>
      </div>

      {showControls && (
        <div className="hero__controls">
          <div className="hero__control-dots">
            <span className="hero__dot hero__dot--active"></span>
            <span className="hero__dot"></span>
            <span className="hero__dot"></span>
            <span className="hero__dot"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
