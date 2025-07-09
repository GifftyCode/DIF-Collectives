import React from "react";
import { useAppContext } from "../../context/AppContext";
import "./FeaturesShowcase.scss";

const FeaturesShowcase = () => {
  const { state } = useAppContext();
  const { features, showcaseContent } = state;

  return (
    <section className="features-showcase">
      <div className="features-showcase__container">
        <div className="features-showcase__header">
          <div className="features-showcase__badge">
            <span className="features-showcase__badge-icon">🌱</span>
            <span className="features-showcase__badge-text">
              {showcaseContent.badge.text}
            </span>
          </div>
          <h2 className="features-showcase__title">{showcaseContent.title}</h2>
        </div>

        <div className="features-showcase__grid">
          <div className="features-showcase__column features-showcase__column--left">
            {features.slice(0, 2).map((feature) => (
              <div key={feature.id} className="features-showcase__card">
                <div className="features-showcase__card-icon">
                  <img
                    src={feature.icon}
                    alt={feature.iconAlt}
                    className="features-showcase__card-icon-image"
                  />
                </div>
                <div className="features-showcase__card-content">
                  <h3 className="features-showcase__card-title">
                    {feature.title}
                  </h3>
                  <p className="features-showcase__card-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="features-showcase__center">
            <div className="features-showcase__image-container">
              <img
                src={showcaseContent.centerImage.src}
                alt={showcaseContent.centerImage.alt}
                className="features-showcase__image"
              />
            </div>
          </div>

          <div className="features-showcase__column features-showcase__column--right">
            {features.slice(2, 4).map((feature) => (
              <div key={feature.id} className="features-showcase__card">
                <div className="features-showcase__card-icon">
                  <img
                    src={feature.icon}
                    alt={feature.iconAlt}
                    className="features-showcase__card-icon-image"
                  />
                </div>
                <div className="features-showcase__card-content">
                  <h3 className="features-showcase__card-title">
                    {feature.title}
                  </h3>
                  <p className="features-showcase__card-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="features-showcase__gallery">
          <div className="features-showcase__gallery-grid">
            {showcaseContent.gallery.map((image, index) => (
              <div
                key={image.id}
                className={`features-showcase__gallery-item ${
                  index === 1 || index === 2
                    ? "features-showcase__gallery-item--canvas"
                    : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="features-showcase__gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
