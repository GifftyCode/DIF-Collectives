import React from "react";
import "./ScrollingBanner.scss";

const ScrollingBanner = () => {
  const bannerItems = [
    "Agriculture",
    "Farming",
    "Organic",
    "Vegetables",
    "Sustainable",
    "Harvest",
    "Crops",
    "Fresh",
    "Natural",
    "Green",
  ];

  return (
    <div className="scrolling-banner">
      <div className="scrolling-banner__track">
        {bannerItems.map((item, index) => (
          <div key={`first-${index}`} className="scrolling-banner__item">
            <span className="scrolling-banner__text">{item}</span>
            <span className="scrolling-banner__separator">✱</span>
          </div>
        ))}

        {bannerItems.map((item, index) => (
          <div key={`second-${index}`} className="scrolling-banner__item">
            <span className="scrolling-banner__text">{item}</span>
            <span className="scrolling-banner__separator">✱</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
