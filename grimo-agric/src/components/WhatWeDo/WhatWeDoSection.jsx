import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import "./WhatWeDoSection.scss";
import pageHero from "../../assets/images/pageHero.png";

const WhatWeDoSection = () => {
  const { state } = useAppContext();
  const [animatedValues, setAnimatedValues] = useState({
    ecoFarms: 0,
    equipment: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({ ecoFarms: 90, equipment: 78 });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const progressData = [
    {
      id: 1,
      value: animatedValues.ecoFarms,
      targetValue: 90,
      label: "Eco Farms",
      sublabel: "Worldwide",
      color: "#8B4513",
    },
    {
      id: 2,
      value: animatedValues.equipment,
      targetValue: 78,
      label: "Special",
      sublabel: "Equipment",
      color: "#8B4513",
    },
  ];

  const CircularProgress = ({ value, targetValue, label, sublabel, color }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <div className="progress-circle">
        <div className="circle-container">
          <svg width="120" height="120" className="progress-svg">
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#fff"
              strokeWidth="8"
              opacity="0.3"
            />

            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="progress-path"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="progress-content">
            <span className="progress-value">{Math.round(value)}%</span>
          </div>
        </div>
        <div className="progress-labels">
          <h4 className="progress-label">{label}</h4>
          <span className="progress-sublabel">{sublabel}</span>
        </div>
      </div>
    );
  };

  return (
    <section className="what-we-do-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="image-section">
            <div className="image-container">
              <img
                src={pageHero}
                alt="Farmer working in field with tablet"
                className="farmer-image"
              />
            </div>
          </div>

          <div className="content-section">
            <div className="content-inner">
              <div className="section-badge">
                <span className="badge-icon">🌱</span>
                <span className="badge-text">What We Do</span>
              </div>

              <h2 className="section-title">
                Healthy life with fresh products
              </h2>

              <p className="section-description">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
              </p>

              <div className="progress-section">
                {progressData.map((item) => (
                  <CircularProgress
                    key={item.id}
                    value={item.value}
                    targetValue={item.targetValue}
                    label={item.label}
                    sublabel={item.sublabel}
                    color={item.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
