import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import "./Services.scss";

const Services = () => {
  const { state } = useAppContext();
  const services = state.services;

  return (
    <section className="services section bg-light" id="services">
      <div className="container">
        <div className="services__header">
          <div className="services__badge">Our Services</div>
          <h2 className="services__title">Best Agriculture Services</h2>
          <div className="services__nav">
            <button className="services__nav-btn">
              <ChevronLeft size={20} />
            </button>
            <button className="services__nav-btn">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="services__card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="services__image">
                <img src={service.image} alt={service.title} />
                <div className="services__category">{service.category}</div>
              </div>
              <div className="services__content">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__description">{service.description}</p>
                <button className="services__arrow">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
