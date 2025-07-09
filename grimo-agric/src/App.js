import "./App.css";

import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";

import Services from "./components/Services/Services";
import Overview from "./components/Overview/Overview";
import ScrollingBanner from "./components/Scrolling-banner/ScrollingBanner";
import FeaturesShowcase from "./components/Features-showcase/FeaturesShowcase";
import TestimonialsSection from "./components/Testimonial/TestimonialSection";
import WhatWeDoSection from "./components/WhatWeDo/WhatWeDoSection";

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
      <WhatWeDoSection />
    </div>
  );
}

export default App;
