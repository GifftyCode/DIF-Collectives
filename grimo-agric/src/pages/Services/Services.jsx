import React from "react";
import "./Services.scss";
import Navbar from "../../components/Navbar/Navbar";
import img1 from "../../assets/images/serv1.png";
import img2 from "../../assets/images/serv2.png";
import img3 from "../../assets/images/serv3.png";
import img4 from "../../assets/images/serv4.png";
import img5 from "../../assets/images/serv5.png";
import img6 from "../../assets/images/serv6.png";
import img7 from "../../assets/images/serv7.png";
import img8 from "../../assets/images/serv8.png";
import img9 from "../../assets/images/serv9.png";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      category: "FERTILIZER",
      title: "Harvest Concepts",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists",
      image: img1,
      delay: "0.1s",
    },
    {
      id: 2,
      category: "FRUITS",
      title: "Farming Products",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists",
      image: img2,
      delay: "0.2s",
    },
    {
      id: 3,
      category: "FERTILIZER",
      title: "Soil Fertilization",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists",
      image: img3,
      delay: "0.3s",
    },
    {
      id: 4,
      category: "VEGETABLES",
      title: "Fresh Vegetables",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists",
      image: img4,
      delay: "0.4s",
    },
    {
      id: 5,
      category: "ANIMALS",
      title: "Dairy Production",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists",
      image: img5,
      delay: "0.5s",
    },
    {
      id: 6,
      category: "FERTILIZER",
      title: "Product Supplies",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists",
      image: img6,
      delay: "0.6s",
    },
    {
      id: 7,
      category: "VEGETABLES",
      title: "Natural Carrots",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists",
      image: img7,
      delay: "0.7s",
    },
    {
      id: 8,
      category: "ORGANIC",
      title: "Nutrition Solutions",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists",
      image: img8,
      delay: "0.8s",
    },
    {
      id: 9,
      category: "VEGETABLES",
      title: "Organic Vegetables",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists",
      image: img9,
      delay: "0.9s",
    },
  ];

  return (
    <div className="services-page">
      <Navbar />

      <div className="services-hero">
        <div className="services-hero__background">
          <div className="services-hero__overlay"></div>
        </div>

        <div className="services-hero__content">
          <h1 className="services-hero__title">Services</h1>
          <div className="services-hero__breadcrumb">
            <span className="services-hero__breadcrumb-item">AGRIMO</span>
            <span className="services-hero__breadcrumb-separator">›</span>
            <span className="services-hero__breadcrumb-item services-hero__breadcrumb-item--active">
              SERVICES
            </span>
          </div>
        </div>
      </div>

      <section className="services-section">
        <div className="services-container">
          <div className="services-grid">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="service-card"
                style={{ animationDelay: service.delay }}
              >
                <div className="service-card__image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-card__content">
                  <div className="service-card__category">
                    {service.category}
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">
                    {service.description}
                  </p>
                  <button className="service-card__btn">
                    <span className="service-card__arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
