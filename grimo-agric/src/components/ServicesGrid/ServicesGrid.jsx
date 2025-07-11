import "./ServicesGrid.scss";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import arrow from "../../assets/icons/arrow.png";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      image: img1,
      category: "FERTILIZER",
      title: "Harvest Concepts",
      alt: "Tractor working in agricultural field",
    },
    {
      id: 2,
      image: img2,
      category: "FRUITS",
      title: "Farming Products",
      alt: "Couple working with farming products",
    },
    {
      id: 3,
      image: img3,
      category: "FERTILIZER",
      title: "Soil fertilization",
      alt: "Farmer working on soil fertilization",
    },
    {
      id: 4,
      image: img4,
      category: "FRUITS",
      title: "Fresh vegetables",
      alt: "Woman harvesting fresh vegetables",
    },
  ];

  return (
    <section className="services-grid">
      <div className="hero-content">
        <span className="hero-subtitle">Who We Are</span>
        <h1 className="hero-title">Best Agriculture Services</h1>
      </div>

      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image-wrapper">
              <img
                src={service.image}
                alt={service.alt}
                className="service-image"
              />
              <button className="close-btn">
                <img src={arrow} alt="" width={15} height={15} />
              </button>
            </div>
            <div className="service-content">
              <span className="service-category">{service.category}</span>
              <h3 className="service-title">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default ServicesGrid;
