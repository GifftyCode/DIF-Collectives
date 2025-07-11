import React from "react";
import "./MainContent.scss";
import contentImg from "../../assets/images/contentImg.png";

const MainContent = () => {
  const steps = [
    {
      number: "01",
      title: "Schedule Your Experience",
      description: "Quisque Tellus Risus Adipis Viverra Bibendum Urna.",
    },
    {
      number: "02",
      title: "Get Professional Advice",
      description: "Quisque Tellus Risus Adipis Viverra Bibendum Urna.",
    },
    {
      number: "03",
      title: "Meet Our Expert Farmer",
      description: "Quisque Tellus Risus Adipis Viverra Bibendum Urna.",
    },
    {
      number: "04",
      title: "Now Get A Best Products",
      description: "Quisque Tellus Risus Adipis Viverra Bibendum Urna.",
    },
  ];

  return (
    <section className="content">
      <div className="content-wrapper">
        <div className="content-left">
          <span className="content-badge">Get To Know Us</span>
          <h2 className="content-title">
            Agriculture matters to the future of development
          </h2>

          <div className="content-image-wrapper">
            <img
              src={contentImg}
              alt="Two farmers consulting in the field"
              className="content-image"
            />
          </div>
        </div>

        <div className="content-right">
          <p className="content-description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>

          <div className="process-steps">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`process-step ${index === 0 ? "active" : ""}`}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
