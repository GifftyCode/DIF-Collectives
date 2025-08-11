import React, { useState } from "react";
import "./Blog.scss";
import Navbar from "../../components/Navbar/Navbar";

import art1 from "../../assets/images/art1.png";
import art2 from "../../assets/images/art2.png";
import art3 from "../../assets/images/art3.png";
import art4 from "../../assets/images/art4.png";
import art5 from "../../assets/images/art5.png";
import art6 from "../../assets/images/art6.png";
import art7 from "../../assets/images/art7.png";
import art8 from "../../assets/images/art8.png";
import art9 from "../../assets/images/art9.png";

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const blogData = [
    {
      id: 1,
      category: "FOOD CROPS",
      title: "What technology is used in vertical farming?",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: art1,
      delay: "0.1s",
    },
    {
      id: 2,
      category: "ORGANIC FARM",
      title: "Which type of farming is more prevalent today?",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: art2,
      delay: "0.2s",
    },
    {
      id: 3,
      category: "FARMING TIPS",
      title: "The Farmers Sentiment Darkens Hopes Fade",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: art3,
      delay: "0.3s",
    },
    {
      id: 4,
      category: "VEGETABLES",
      title: "A farmer is a person who works in agriculture.",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: art4,
      delay: "0.4s",
    },
    {
      id: 5,
      category: "AGRICULTURE",
      title: "Organic Fruits: Hidden Advantages And Information",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: art5,
      delay: "0.5s",
    },
    {
      id: 6,
      category: "VEGETABLES",
      title: "How to Include Organic Vegetables in Your Diet",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: art6,
      delay: "0.6s",
    },
    {
      id: 7,
      category: "FARMING TIPS",
      title: "Agricultural Infrastructure in Rural Areas",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: art7,
      delay: "0.7s",
    },
    {
      id: 8,
      category: "FOOD CROPS",
      title: "Are You Prepared for the Upcoming Season?",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: art8,
      delay: "0.8s",
    },
    {
      id: 9,
      category: "MIXED FARMING",
      title: "A Beginner's Guide for Managing a Successful Farm",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      image: art9,
      delay: "0.9s",
    },
  ];

  const filterOptions = [
    "All",
    "Agriculture",
    "Extensive",
    "Farming Tips",
    "Food Crops",
    "Mixed Farming",
    "Organic Farm",
  ];

  const filteredBlogs =
    activeFilter === "All"
      ? blogData
      : blogData.filter(
          (blog) =>
            blog.category.toLowerCase().replace(" ", "") ===
            activeFilter.toLowerCase().replace(" ", "")
        );

  return (
    <div className="blog-page">
      <Navbar />

      <div className="blog-hero">
        <div className="blog-hero__background">
          <div className="blog-hero__overlay"></div>
        </div>

        <div className="blog-hero__content">
          <h1 className="blog-hero__title">Blog </h1>
          <div className="blog-hero__breadcrumb">
            <span className="blog-hero__breadcrumb-item">AGRIMO</span>
            <span className="blog-hero__breadcrumb-separator">›</span>
            <span className="blog-hero__breadcrumb-item blog-hero__breadcrumb-item--active">
              BLOG
            </span>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <section className="blog-section">
        <div className="blog-container">
          {/* Filter Buttons */}
          <div className="blog-filters">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="blog-card"
                style={{ animationDelay: blog.delay }}
              >
                <div className="blog-card__image">
                  <img src={blog.image} alt={blog.title} />
                  <div className="blog-card__category-badge">
                    {blog.category}
                  </div>
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <span className="blog-card__date">
                      <i className="calendar-icon"></i>
                      {blog.date}
                    </span>
                    <span className="blog-card__author">
                      <i className="user-icon"></i>
                      {blog.author}
                    </span>
                  </div>
                  <h3 className="blog-card__title">{blog.title}</h3>
                  <button className="blog-card__read-more">
                    <span className="blog-card__arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
