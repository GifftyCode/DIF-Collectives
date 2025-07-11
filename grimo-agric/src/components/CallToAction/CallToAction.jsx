import React from "react";
import "./CallToAction.scss";
import hero from "../../assets/images/cta.jpeg";

const CallToAction = () => {
  return (
    <section className="hero-section">
      <div className="hero-banner">
        <img
          src={hero}
          alt="Farmer in field with tablet"
          className="farmer-image"
        />
        <div className="hero-text">
          <div className="hero-badge">What We Do</div>
          <h1 className="hero-title">Healthy life with fresh products</h1>
          <p className="hero-description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-circle">
                <span className="stat-number">90%</span>
              </div>
              <div className="stat-label">
                <strong>Eco Farms</strong>
                <span>Worldwide</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-circle">
                <span className="stat-number">78%</span>
              </div>
              <div className="stat-label">
                <strong>Special</strong>
                <span>Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
