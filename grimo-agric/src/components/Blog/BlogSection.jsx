import React from "react";
import BlogCard from "./BlogCard";
import "./BlogSection.scss";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      category: "FOOD CROPS",
      title: "What technology is used in vertical farming?",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      categoryColor: "#2ECC71",
    },
    {
      id: 2,
      image: blog2,
      category: "ORGANIC FARM",
      title: "Which type of farming is more prevalent today?",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      categoryColor: "#3498DB",
    },
    {
      id: 3,
      image: blog3,
      category: "FARMING TIPS",
      title: "The Farmers Sentiment Darkens Hopes Fade",
      date: "MARCH 28, 2024",
      author: "ADMIN",
      categoryColor: "#F39C12",
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <span className="section-subtitle">Latest Blog</span>
            <h2>Latest posts & articles</h2>
          </div>
          <div className="navigation-buttons">
            <button className="nav-btn prev-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="nav-btn next-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              date={post.date}
              author={post.author}
              categoryColor={post.categoryColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
