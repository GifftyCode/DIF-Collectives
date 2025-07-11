import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/icons/phoneH.png";
import search from "../../assets/icons/search.png";

const Navbar = ({ transparent = false }) => {
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

  return (
    <nav className={`navbar ${transparent ? "navbar--transparent" : ""}`}>
      <div className="navbar__brand">
        <div className="navbar__logo">
          <Link to="/" onClick={closeDropdowns}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="navbar__menu">
        <div className="navbar__item">
          <Link to="/" className="navbar__link">
            HOME
            <span className="navbar__dropdown-icon">▼</span>
          </Link>
        </div>

        <div className="navbar__item">
          <Link to="/about" className="navbar__link">
            ABOUT
            <span className="navbar__dropdown-icon">▼</span>
          </Link>
        </div>

        <div className="navbar__item">
          <Link to="/services" className="navbar__link">
            SERVICES
            <span className="navbar__dropdown-icon">▼</span>
          </Link>
        </div>

        <div className="navbar__item">
          <Link to="/portfolio" className="navbar__link">
            PORTFOLIO
            <span className="navbar__dropdown-icon">▼</span>
          </Link>
        </div>

        <div className="navbar__item">
          <Link to="/blog" className="navbar__link">
            BLOG
          </Link>
        </div>

        <div className="navbar__item">
          <Link to="/contact" className="navbar__link">
            CONTACT US
          </Link>
        </div>
      </div>

      <div className="navbar__actions">
        <div className="navbar__contact-info">
          <div className="navbar__phone">
            <span className="navbar__phone-icon">
              <img src={phone} alt="" />
            </span>
            <div className="navbar__phone-text">
              <div className="navbar__phone-label">Call us Now</div>
              <div className="navbar__phone-number">+1(210)255-511</div>
            </div>
          </div>
        </div>

        <button className="navbar__search-btn">
          <span className="navbar__search-icon">
            <img src={search} alt="" />
          </span>
        </button>

        <button className="navbar__cta-btn">
          Get In Touch
          <span className="navbar__cta-arrow">↗</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
