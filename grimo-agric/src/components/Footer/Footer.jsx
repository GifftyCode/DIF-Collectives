import React from "react";
import "./Footer.scss";
import phone from "../../assets/icons/phone.png";
import mail from "../../assets/icons/mail.png";
import footerLogo from "../../assets/images/footerLogo.png";
import ig from "../../assets/icons/ig.png";
import x from "../../assets/icons/x.png";
import ln from "../../assets/icons/ln.png";
import fb from "../../assets/icons/fb.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top-bar">
        <div className="top-bar__container">
          <nav className="top-bar__nav">
            <ul>
              <li>
                <a href="#">FARMERS</a>
              </li>
              <li>
                <a href="#">ORGANIC</a>
              </li>
              <li>
                <a href="#">FOODS</a>
              </li>
              <li>
                <a href="#">PRODUCT</a>
              </li>
            </ul>
          </nav>

          <div className="top-bar__separator"></div>
          <div className="top-bar__contact">
            <a href="tel:+123255-518" className="contact__item">
              <span className="contact__icon">
                <img src={phone} alt="" />
              </span>
              <span>(123) 255-518</span>
            </a>
            <a href="mailto:name@grimoimfotech.com" className="contact__item">
              <span className="contact__icon">
                <img src={mail} alt="" />
              </span>
              <span>name@grimoimfotech.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__container">
        <h2 className="footer__tagline">
          Professional & modern, a theme designed to help
          <br />
          your business stand out from the rest.
        </h2>

        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="logo__icon">
                <img src={footerLogo} alt="" />
              </div>
            </div>
            <p className="footer__description">
              Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
              risus. In vitae sapien viverra est Duo et ullam inani sensent.
            </p>
            <div className="footer__social">
              <a href="#" className="social__link">
                <img src={fb} alt="" />
              </a>
              <a href="#" className="social__link">
                <img src={x} alt="" />
              </a>
              <a href="#" className="social__link">
                <img src={ln} alt="" />
              </a>
              <a href="#" className="social__link">
                <img src={ig} alt="" />
              </a>
            </div>
          </div>

          <div className="footer__links">
            <h3 className="footer__title">Useful Link</h3>
            <ul className="links__list">
              <li>
                <a href="#" className="links__item">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="links__item">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="links__item">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__hours">
            <h3 className="footer__title">Working Time</h3>
            <ul className="hours__list">
              <li className="hours__item">
                <span>Mon - Fri: 9.00am - 5.00pm</span>
              </li>
              <li className="hours__item">
                <span>Saturday: 10.00am - 6.00pm</span>
              </li>
              <li className="hours__item">
                <span>Sunday: Closed</span>
              </li>
            </ul>
          </div>

          <div className="footer__address">
            <h3 className="footer__title">Our Address</h3>
            <address className="address__content">
              Old Westbury 256, New York
              <br />
              11201, United States
            </address>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <a href="#" className="legal__link">
              Terms & Conditions
            </a>
            <a href="#" className="legal__link">
              Privacy Policy
            </a>
          </div>
          <div className="footer__copyright">
            <p>Copyright © 2024 Agrimo. All Rights Reserved.</p>
          </div>
        </div>
      </div>

      <div className="footer__decoration">
        <div className="decoration__leaf"></div>
        <div className="decoration__wheat"></div>
      </div>
    </footer>
  );
};

export default Footer;
