import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import "./TestimonialSection.scss";
import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import client3 from "../../assets/images/client3.png";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";
import brand5 from "../../assets/images/brand5.png";
import brand6 from "../../assets/images/brand6.png";

const TestimonialsSection = () => {
  const { state } = useAppContext();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
      author: {
        name: "Martin Bailey",
        role: "SUPERVISOR",
        image: client1,
      },
    },
    {
      id: 2,
      rating: 5,
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
      author: {
        name: "Emma Greed",
        role: "CUSTOMER",
        image: client2,
      },
    },
    {
      id: 3,
      rating: 5,
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
      author: {
        name: "Daniel Craig",
        role: "CO FOUNDER",
        image: client3,
      },
    },
  ];

  const brands = [
    { id: 1, name: "Rice", logo: brand1 },
    { id: 2, name: "Farm", logo: brand2 },
    { id: 3, name: "Farm Fresh", logo: brand3 },
    { id: 4, name: "Food", logo: brand4 },
    { id: 5, name: "Eco Product", logo: brand5 },
    { id: 6, name: "Tractor", logo: brand6 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-badge">Testimonial</span>
          <h2 className="section-title">What our customers say</h2>

          <div className="testimonials-nav">
            <button
              className="nav-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <button
              className="nav-btn next-btn"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                    <path
                      d="M0 32V16C0 7.163 7.163 0 16 0v6.4C10.698 6.4 6.4 10.698 6.4 16v1.6h9.6V32H0zM24 32V16c0-8.837 7.163-16 16-16v6.4c-5.302 0-9.6 4.298-9.6 9.6V17.6H40V32H24z"
                      fill="#8B4513"
                    />
                  </svg>
                </div>

                <div className="rating">{renderStars(testimonial.rating)}</div>

                <p className="testimonial-text">{testimonial.text}</p>

                <div className="author-info">
                  <img
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    className="author-avatar"
                  />
                  <div className="author-details">
                    <h4 className="author-name">{testimonial.author.name}</h4>
                    <span className="author-role">
                      {testimonial.author.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="brands-section">
          <div className="brands-grid">
            {brands.map((brand) => (
              <div key={brand.id} className="brand-item">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
