import React from "react";
import "./BrandsSection.scss";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";
import brand5 from "../../assets/images/brand5.png";
import brand6 from "../../assets/images/brand6.png";

const BrandsSection = () => {
  const brands = [
    { id: 1, name: "Rice", logo: brand1 },
    { id: 2, name: "Farm", logo: brand2 },
    { id: 3, name: "Farm Fresh", logo: brand3 },
    { id: 4, name: "Food", logo: brand4 },
    { id: 5, name: "Eco Product", logo: brand5 },
    { id: 6, name: "Tractor", logo: brand6 },
  ];

  return (
    <section className="brands-section">
      <div className="container">
        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-item">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
