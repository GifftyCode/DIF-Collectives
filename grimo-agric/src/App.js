import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
