import React from "react";
import "./Banner.scss";
import hand from "../../assets/icons/hand.png";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-icon">
            {/* <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="#F4D03F" />
              <path
                d="M12 28L20 20L28 28"
                stroke="#2C3E50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18L20 10L28 18"
                stroke="#2C3E50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
            <img src={hand} alt="" />
          </div>
          <h1 className="hero-title">
            We're popular leader in
            <br />
            agriculture market globally
          </h1>
        </div>
        <button className="discover-btn">
          Discover More
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Banner;
