import React from "react";
import "./Overview.scss";
import whoWeAre from "../../assets/images/whoWeAre.png";
import vector from "../../assets/images/Vector.png";
import icon from "../../assets/images/Icon.png";

const Overview = () => {
  return (
    <section className="organic-food-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="image-section">
            <div className="main-image">
              <img
                src={whoWeAre}
                alt="Woman with organic tomato plant"
                className="farmer-image"
              />
            </div>
          </div>

          <div className="content-section">
            <div className="section-header">
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">
                Currently we are growing and selling organic food
              </h2>
              <p className="section-description">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src={vector}
                    alt="Eco Farms Worldwide Icon"
                    className="icon-image"
                  />
                </div>
                <h3 className="feature-title">Eco Farms Worldwide</h3>
                <p className="feature-description">
                  There are many variations of passages of lorem ipsum available
                  majority have suffered.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <img
                    src={icon}
                    alt="Special Equipment Icon"
                    className="icon-image"
                  />
                </div>
                <h3 className="feature-title">Special Equipment</h3>
                <p className="feature-description">
                  There are many variations of passages of lorem ipsum available
                  majority have suffered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
