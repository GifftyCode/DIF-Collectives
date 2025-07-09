import React from "react";
import "./BlogCard.scss";

const BlogCard = ({
  image,
  category,
  title,
  date,
  author,
  categoryColor = "#2ECC71",
}) => {
  return (
    <article className="blog-card">
      <div className="blog-image">
        <img src={image} alt={title} />
        <div
          className="category-badge"
          style={{ backgroundColor: categoryColor }}
        >
          {category}
        </div>
        <button className="read-more-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">{date}</span>
          <span className="blog-author">{author}</span>
        </div>
        <h3 className="blog-title">{title}</h3>
      </div>
    </article>
  );
};

export default BlogCard;
