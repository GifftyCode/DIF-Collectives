import React from "react";
import "./Features.scss";

const Features = () => {
  const features = [
    {
      icon: "🚜",
      title: "Professional Farmers",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      icon: "🥬",
      title: "Fresh Vegetables",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      icon: "🌾",
      title: "Agriculture Products",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      icon: "🌱",
      title: "100% Guaranteed",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
  ];

  return (
    <section className="features">
      <div className="features__container">
        {features.map((feature, index) => (
          <div key={index} className="features__card">
            <div className="features__icon">{feature.icon}</div>
            <h3 className="features__title">{feature.title}</h3>
            <p className="features__description">{feature.description}</p>
            <button className="features__arrow">
              <span>↗</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
