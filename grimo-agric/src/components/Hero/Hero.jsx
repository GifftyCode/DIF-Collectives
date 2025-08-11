import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Hero.scss";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/icons/phoneH.png";
import search from "../../assets/icons/search.png";
import { useAppContext } from "../../context/AppContext";

const Hero = ({
  title,
  subtitle,
  badge,
  ctaText,
  isAboutPage = false,
  isProductPage = false,
  showControls = true,
}) => {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const location = useLocation();
  const { state, dispatch, actionTypes } = useAppContext();

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

  const toggleCart = () => {
    dispatch({ type: actionTypes.TOGGLE_CART });
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

  const productContent = {
    title: "Our Premium Products",
    subtitle:
      "Discover our wide range of fresh, organic, and quality farm products directly from our fields.",
    badge: "SHOP NOW",
    ctaText: "Browse Products",
  };

  const getContent = () => {
    if (isProductPage) return productContent;
    if (isAboutPage) return aboutContent;
    return defaultContent;
  };

  const content = getContent();

  const isProductsPage = location.pathname === "/products";

  return (
    <div
      className={`hero ${isAboutPage ? "hero--about" : ""} ${
        isProductPage ? "hero--product" : ""
      }`}
    >
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
          <div className="hero__navbar-item">
            <Link to="/" className="hero__navbar-link">
              HOME
              <span className="hero__dropdown-icon">▼</span>
            </Link>
          </div>

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
            <Link to="/products" className="hero__navbar-link">
              PRODUCTS
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
              <span className="hero__phone-icon">
                <img src={phone} alt="" />
              </span>
              <div className="hero__phone-text">
                <div className="hero__phone-label">Call us Now</div>
                <div className="hero__phone-number">+1(210)255-511</div>
              </div>
            </div>
          </div>

          <button className="hero__search-btn">
            <span className="hero__search-icon">
              <img src={search} alt="" />
            </span>
          </button>

          {isProductsPage && (
            <button className="hero__cart-btn" onClick={toggleCart}>
              <div className="hero__cart-icon-wrapper">
                <svg
                  className="hero__cart-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 4V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V6H4C3.44772 6 3 5.55228 3 5C3 4.44772 3.44772 4 4 4H7ZM7 6V19H17V6H7ZM9 4H15V3H9V4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z"
                    fill="currentColor"
                  />
                </svg>
                {state.cartCount > 0 && (
                  <span className="hero__cart-count">{state.cartCount}</span>
                )}
              </div>
              <span className="hero__cart-text">Cart</span>
            </button>
          )}

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
