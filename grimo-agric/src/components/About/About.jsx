import React from "react";
import { TrendingUp, Tool } from "lucide-react";
import "./About.scss";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <div className="about__badge">Who We Are</div>
            <h2 className="about__title">
              Currently we are growing and selling organic food
            </h2>
            <p className="about__description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-number">435+</div>
                <div className="about__stat-label">Growth Total of Harvest</div>
              </div>
            </div>

            <div className="about__features">
              <div className="about__feature">
                <div className="about__feature-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="about__feature-content">
                  <h4>Eco Farms Worldwide</h4>
                  <p>Ages of lorem ipsum available majority have suffered</p>
                </div>
              </div>

              <div className="about__feature">
                <div className="about__feature-icon">
                  <Tool size={24} />
                </div>
                <div className="about__feature-content">
                  <h4>Special Equipment</h4>
                  <p>Ages of lorem ipsum available majority have suffered</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__image">
            <img src="/api/placeholder/600/500" alt="Agricultural workers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
