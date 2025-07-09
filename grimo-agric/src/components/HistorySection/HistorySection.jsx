import React from "react";
import "./HistorySection.scss";

const HistorySection = () => {
  return (
    <section className="history-section">
      <div className="history-content">
        <div className="history-header">
          <div className="history-badge">Our History</div>
          <div className="history-row">
            <h2 className="history-title">Farming have been since 1866</h2>
            <p className="history-description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
