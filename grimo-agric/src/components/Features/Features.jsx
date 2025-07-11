import React from "react";
import "./Features.scss";
import img1 from "../../assets/icons/1.png";
import img2 from "../../assets/icons/2.png";
import img3 from "../../assets/icons/3.png";
import img4 from "../../assets/icons/4.png";

const Features = () => {
  const features = [
    {
      icon: img1,
      title: "Professional Farmers",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      icon: img2,
      title: "Fresh Vegetables",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      icon: img3,
      title: "Agriculture Products",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      icon: img4,
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
            <div className="features__header">
              <div className="features__icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="features__title">{feature.title}</h3>
            </div>
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
