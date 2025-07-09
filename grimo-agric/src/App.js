import "./App.css";

import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import Overview from "./components/Overview/Overview";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Overview />
      <Products />
    </div>
  );
}

export default App;
