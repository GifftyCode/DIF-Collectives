import React from "react";
import "./Portfolio.scss";
import Navbar from "../../components/Navbar/Navbar";
import img1 from "../../assets/images/port1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";
import img4 from "../../assets/images/port4.png";
import img5 from "../../assets/images/port5.png";
import img6 from "../../assets/images/port6.png";
import img7 from "../../assets/images/port7.png";
import img8 from "../../assets/images/port8.png";
import img9 from "../../assets/images/port9.png";

const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      image: img1,
      alt: "Mango Picking",
    },
    {
      id: 2,
      image: img2,
      alt: "Farmer with Harvest",
    },
    {
      id: 3,
      image: img3,
      alt: "Fresh Tomatoes",
    },
    {
      id: 4,
      image: img4,
      alt: "Seeds in Hands",
    },
    {
      id: 5,
      image: img5,
      alt: "Tractor in Field",
    },
    {
      id: 6,
      image: img6,
      alt: "Woman with Vegetables",
    },
    {
      id: 7,
      image: img7,
      alt: "Melon Harvest",
    },
    {
      id: 8,
      image: img8,
      alt: "Children Learning Farming",
    },
  ];

  const [activeCategory, setActiveCategory] = React.useState("ALL");
  const [filteredItems, setFilteredItems] = React.useState(portfolioData);

  React.useEffect(() => {
    if (activeCategory === "ALL") {
      setFilteredItems(portfolioData);
    } else {
      setFilteredItems(
        portfolioData.filter((item) => item.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <div className="portfolio-page">
      <Navbar />

      <div className="portfolio-hero">
        <div className="portfolio-hero__background">
          <div className="portfolio-hero__overlay"></div>
        </div>

        <div className="portfolio-hero__content">
          <h1 className="portfolio-hero__title">Portfolio </h1>
          <div className="portfolio-hero__breadcrumb">
            <span className="portfolio-hero__breadcrumb-item">AGRIMO</span>
            <span className="portfolio-hero__breadcrumb-separator">›</span>
            <span className="portfolio-hero__breadcrumb-item portfolio-hero__breadcrumb-item--active">
              PORTFOLIO
            </span>
          </div>
        </div>
      </div>

      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="portfolio-item__image">
                  <img src={item.image} alt={item.alt} />
                  <div className="portfolio-item__overlay">
                    <div className="portfolio-item__category"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
