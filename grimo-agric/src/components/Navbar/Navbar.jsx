import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/icons/phoneH.png";
import search from "../../assets/icons/search.png";
import { useAppContext } from "../../context/AppContext";

const Navbar = ({ transparent = false }) => {
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

  const isProductsPage = location.pathname === "/products";

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
          <Link to="/products" className="navbar__link">
            PRODUCTS
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

        {isProductsPage && (
          <button className="navbar__cart-btn" onClick={toggleCart}>
            <div className="navbar__cart-icon-wrapper">
              <svg
                className="navbar__cart-icon"
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
                <span className="navbar__cart-count">{state.cartCount}</span>
              )}
            </div>
            <span className="navbar__cart-text">Cart</span>
          </button>
        )}

        <button className="navbar__cta-btn">
          Get In Touch
          <span className="navbar__cta-arrow">↗</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
