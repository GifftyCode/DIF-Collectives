import "./App.scss";

import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";

import Services from "./components/Services/Services";
import Overview from "./components/Overview/Overview";
import ScrollingBanner from "./components/Scrolling-banner/ScrollingBanner";
import FeaturesShowcase from "./components/Features-showcase/FeaturesShowcase";
import TestimonialsSection from "./components/Testimonial/TestimonialSection";

import CallToAction from "./components/CallToAction/CallToAction";
import HistorySection from "./components/HistorySection/HistorySection";
import TimelineSection from "./components/TimelineSection/TimelineSection";
import Banner from "./components/Banner/Banner";
import BlogSection from "./components/Blog/BlogSection";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Overview />
      <ScrollingBanner />
      <Services />
      <FeaturesShowcase />
      <TestimonialsSection />
      <CallToAction />
      <HistorySection />
      <TimelineSection />
      <Banner />
      <BlogSection />
    </div>
  );
}

export default App;
