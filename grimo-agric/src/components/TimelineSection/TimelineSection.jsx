import React from "react";
import "./TimelineSection.scss";

const TimelineSection = () => {
  const timelineData = [
    {
      year: "1987",
      title: "Open my Farm",
      description:
        "Consequat consequat magna nostrud aute laboris aute magna sit magna occaecat cupidatat non eu magna voluptate.",
      color: "green",
    },
    {
      year: "1995",
      title: "Farm Remodelacion",
      description:
        "Minim dolor magna incididunt in mollit est deserunt magna ullamco consectetur est adipisicing cupidatat. Laboris nulla cupidatat.",
      color: "blue",
    },
    {
      year: "2000",
      title: "Grainfarmers Formed",
      description:
        "Always perfect but trying the showing of proident magna. Velit magna elit magna labore eu officia magna aute.",
      color: "yellow",
    },
    {
      year: "1910",
      title: "Start of Agriculture",
      description:
        "Consequat consequat magna Consequat nostrud aute laboris aute magna sit magna occaecat cupidatat non eu magna voluptate.",
      color: "red",
    },
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-content">
        <div className="timeline-grid">
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${item.color}`}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
