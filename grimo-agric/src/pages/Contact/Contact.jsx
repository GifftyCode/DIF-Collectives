import React, { useState } from "react";
import "./Contact.scss";
import Navbar from "../../components/Navbar/Navbar";
import BrandsSection from "../../components/BrandsSection/BrandsSection";
import contactImg from "../../assets/images/contactImg.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Mail us 24/7",
      details: ["office@grimo.com", "info@grimo.com"],
    },
    {
      icon: "📞",
      title: "Call us 24/7",
      details: [
        "Phone: +(234) 456 - 543 - 1210",
        "Mobile: +(234) 456 - 543 - 1230",
      ],
    },
    {
      icon: "📍",
      title: "Our Locations",
      details: ["544 Rich Ave, Abuja FCT, Nigeria", "90 York, USA main city"],
    },
  ];

  return (
    <div className="contact-page">
      <Navbar />

      <div className="contact-hero">
        <div className="contact-hero__background">
          <div className="contact-hero__overlay"></div>
        </div>
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Contact Us</h1>
          <div className="contact-hero__breadcrumb">
            <span className="contact-hero__breadcrumb-item">AGRIMO</span>
            <span className="contact-hero__breadcrumb-separator">›</span>
            <span className="contact-hero__breadcrumb-item contact-hero__breadcrumb-item--active">
              CONTACT US
            </span>
          </div>
        </div>
      </div>

      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-card__icon">{info.icon}</div>
                <h3 className="contact-info-card__title">{info.title}</h3>
                <div className="contact-info-card__details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="main-contact-section">
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-card__image-section">
              <div className="contact-image-content">
                <img
                  src={contactImg}
                  alt="Agricultural worker in greenhouse with strawberry basket"
                  className="contact-hero-image"
                />
              </div>
            </div>

            <div className="contact-card__form-section">
              <div className="contact-form-header">
                <div className="form-header-tag">Get To Contact Us</div>
                <h2 className="contact-form__title">Have a any Questions?</h2>
                <h3 className="contact-form__subtitle">Get in Touch!</h3>
                <p className="contact-form__description">
                  Send us a message and we'll respond as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-form__btn">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-arrow">✈</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <BrandsSection />

      <section className="map-section">
        <div className="contact-container">
          <div className="map-header">
            <h2>Find Us Here</h2>
            <p>Visit our main location in Abuja, Nigeria</p>
          </div>
          <div className="map-wrapper">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-icon">📍</div>
                <h3>Interactive Map</h3>
                <p>544 Rich Ave, Abuja FCT, Nigeria</p>
                <small>Click to view in Google Maps</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
