// src/pages/About/About.jsx
import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import TestimonialsSection from "../../components/Testimonial/TestimonialSection";
import CallToAction from "../../components/CallToAction/CallToAction";
import HistorySection from "../../components/HistorySection/HistorySection";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import "./About.scss";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero with About-specific content */}
      <Hero
        isAboutPage={true}
        title="About Our Company"
        subtitle="Discover our journey, values, and commitment to excellence in delivering quality solutions."
        badge="OUR STORY"
        ctaText="Learn More"
        showControls={false}
      />

      {/* About-specific content section */}
      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to transform the digital landscape, we've
              been at the forefront of innovation for over a decade. Our journey
              began with a simple belief: technology should empower businesses
              to achieve their full potential.
            </p>
          </div>

          <div className="about-values">
            <h3>Our Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>Innovation</h4>
                <p>
                  We constantly push boundaries and embrace new technologies.
                </p>
              </div>
              <div className="value-item">
                <h4>Quality</h4>
                <p>Excellence is not just a goal, it's our standard.</p>
              </div>
              <div className="value-item">
                <h4>Partnership</h4>
                <p>
                  We believe in building lasting relationships with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reused components with potential customization */}
      <Features />
      <HistorySection />
      <TimelineSection />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

export default About;
