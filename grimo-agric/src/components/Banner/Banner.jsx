import "./Banner.scss";
import hand from "../../assets/icons/hand.png";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-icon">
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
