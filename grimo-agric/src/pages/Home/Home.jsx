import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";
import Overview from "../../components/Overview/Overview";
import ScrollingBanner from "../../components/Scrolling-banner/ScrollingBanner";
import FeaturesShowcase from "../../components/Features-showcase/FeaturesShowcase";
import TestimonialsSection from "../../components/Testimonial/TestimonialSection";
import BrandsSection from "../../components/BrandsSection/BrandsSection";
import CallToAction from "../../components/CallToAction/CallToAction";
import HistorySection from "../../components/HistorySection/HistorySection";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import Banner from "../../components/Banner/Banner";
import BlogSection from "../../components/Blog/BlogSection";

const Home = () => {
  return (
    <div className="home-page">
      <Hero
        title="Quality Trust: Direct to the Farm"
        subtitle="We all need a little space to grow. Give yourself the space you need to find your inner you."
        badge="BELIEVE IN QUALITY!"
        ctaText="Contact Us"
        showControls={true}
      />
      <Features />
      <Overview />
      <ScrollingBanner />
      <Services />
      <FeaturesShowcase />
      <TestimonialsSection />
      <BrandsSection />
      <CallToAction />
      <HistorySection />
      <TimelineSection />
      <Banner />
      <BlogSection />
    </div>
  );
};

export default Home;
