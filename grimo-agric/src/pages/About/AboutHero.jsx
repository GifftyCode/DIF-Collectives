import React from "react";
import "./AboutHero.scss";

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="about-hero__background">
        <div className="about-hero__overlay"></div>
      </div>

      <div className="about-hero__content">
        <h1 className="about-hero__title">About Us</h1>
        <div className="about-hero__breadcrumb">
          <span className="about-hero__breadcrumb-item">AGRIMO</span>
          <span className="about-hero__breadcrumb-separator">›</span>
          <span className="about-hero__breadcrumb-item about-hero__breadcrumb-item--active">
            ABOUT US
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
