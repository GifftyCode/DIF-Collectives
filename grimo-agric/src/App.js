import "./App.css";

import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import Overview from "./components/Overview/Overview";
import ScrollingBanner from "./components/Scrolling-banner/ScrollingBanner";
import FeaturesShowcase from "./components/Features-showcase/FeaturesShowcase";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Overview />
      <ScrollingBanner />
      <Services />
      <FeaturesShowcase />
    </div>
  );
}

export default App;
