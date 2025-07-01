import React, { useState } from "react";
import { recommendedJobs } from "./data/mockData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import JobCard from "./components/JobCard";
import Categories from "./components/Categories";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

function App() {
  const [filteredJobs, setFilteredJobs] = useState(recommendedJobs);

  const handleSearch = (searchTerm, location) => {
    const filtered = recommendedJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onSearch={handleSearch} />

      <JobCard />

      <HowItWorks />
      <Categories />
      <Partners />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
