import React, { useState } from "react";
import "./Hero.scss";
import logo from "../../assets/images/logo.png";

const Hero = () => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  return (
    <div className="hero">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>

      <nav className="hero__navbar">
        <div className="hero__navbar-brand">
          <div className="hero__logo">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="hero__navbar-menu">
          <div className="hero__navbar-item hero__navbar-item--dropdown">
            <button className="hero__navbar-link" onClick={toggleHomeDropdown}>
              HOME
              <span className="hero__dropdown-icon">▼</span>
            </button>
            {isHomeDropdownOpen && (
              <div className="hero__dropdown-menu">
                <a href="#" className="hero__dropdown-item">
                  HOME 1
                </a>
                <a href="#" className="hero__dropdown-item">
                  HOME 2
                </a>
                <a href="#" className="hero__dropdown-item">
                  HOME 3
                </a>
              </div>
            )}
          </div>

          <div className="hero__navbar-item">
            <a href="#" className="hero__navbar-link">
              PAGES
              <span className="hero__dropdown-icon">▼</span>
            </a>
          </div>

          <div className="hero__navbar-item">
            <a href="#" className="hero__navbar-link">
              SERVICES
              <span className="hero__dropdown-icon">▼</span>
            </a>
          </div>

          <div className="hero__navbar-item">
            <a href="#" className="hero__navbar-link">
              PORTFOLIO
              <span className="hero__dropdown-icon">▼</span>
            </a>
          </div>

          <div className="hero__navbar-item">
            <a href="#" className="hero__navbar-link">
              BLOG
            </a>
          </div>

          <div className="hero__navbar-item">
            <a href="#" className="hero__navbar-link">
              CONTACT US
            </a>
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
        <div className="hero__badge">BELIEVE IN QUALITY!</div>

        <h1 className="hero__title">
          Quality Trust: <br />
          Direct to the Farm
        </h1>

        <hr className="hr" />

        <p className="hero__subtitle">
          We all need a little space to grow. Give yourself the space you need
          to find your inner you.
        </p>

        <button className="hero__contact-btn">
          Contact Us
          <span className="hero__contact-arrow">↗</span>
        </button>
      </div>

      <div className="hero__controls">
        <div className="hero__control-dots">
          <span className="hero__dot hero__dot--active"></span>
          <span className="hero__dot"></span>
          <span className="hero__dot"></span>
          <span className="hero__dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
