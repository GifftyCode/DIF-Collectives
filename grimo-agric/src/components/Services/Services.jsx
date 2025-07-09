import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import "./Services.scss";

const Services = () => {
  const { state } = useAppContext();
  const { services } = state;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % services.length;
      visible.push(services[index]);
    }
    return visible;
  };

  return (
    <div className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="services-header-left">
            <div className="services-badge">Our Services</div>
            <h2 className="services-title">Best Agriculture Services</h2>
          </div>
          <div className="services-navigation">
            <button
              className="nav-button prev"
              onClick={prevSlide}
              aria-label="Previous services"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="square"
                />
              </svg>
            </button>
            <button
              className="nav-button next"
              onClick={nextSlide}
              aria-label="Next services"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="services-content">
          <div className="services-grid">
            {getVisibleServices().map((service, index) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <div className="service-category">
                    <span className="category-dot"></span>
                    {service.category}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
