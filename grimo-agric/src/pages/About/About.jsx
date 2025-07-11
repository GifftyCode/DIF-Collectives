import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutHero from "../About/AboutHero";
import Overview from "../../components/Overview/Overview";
import ServicesGrid from "../../components/ServicesGrid/ServicesGrid";
import MainContent from "../../components/MainContent/MainContent";
import ScrollingBanner from "../../components/Scrolling-banner/ScrollingBanner";
import HistorySection from "../../components/HistorySection/HistorySection";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import Banner from "../../components/Banner/Banner";
import TestimonialsSection from "../../components/Testimonial/TestimonialSection";

import "./About.scss";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <AboutHero />

      <Overview />
      <ScrollingBanner />
      <ServicesGrid />
      <MainContent />
      <HistorySection />
      <TimelineSection />
      <Banner />
      <TestimonialsSection />
    </div>
  );
};

export default About;
