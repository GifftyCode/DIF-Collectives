import React, { useState, useMemo } from "react";
import "./Products.scss";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import Cart from "../../components/Cart/Cart";
import { useAppContext } from "../../context/AppContext";

const Products = () => {
  const { state } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [sortBy, setSortBy] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [
      ...new Set(state.products.map((product) => product.category)),
    ];
    return ["ALL", ...cats];
  }, [state.products]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = state.products;

    // Filter by category
    if (selectedCategory !== "ALL") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return sorted;
  }, [state.products, selectedCategory, sortBy, searchTerm]);

  return (
    <div className="products-page">
      <Hero
        title="Our Premium Products"
        subtitle="Discover our wide range of fresh, organic, and quality farm products directly from our fields."
        badge="SHOP NOW"
        ctaText="Browse Products"
        isProductPage={true}
        showControls={false}
      />

      <div className="products-page__container">
        <div className="products-page__header">
          <h2 className="products-page__title">Check Our Products</h2>
          <p className="products-page__subtitle">
            Fresh, organic, and quality products straight from our farm
          </p>
        </div>

        <div className="products-page__filters">
          <div className="products-page__search">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="products-page__search-input"
            />
          </div>

          <div className="products-page__category-filter">
            <label className="products-page__filter-label">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="products-page__filter-select"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="products-page__sort">
            <label className="products-page__filter-label">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="products-page__filter-select"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="products-page__results">
          <p className="products-page__count">
            Showing {filteredAndSortedProducts.length} of{" "}
            {state.products.length} products
          </p>
        </div>

        <div className="products-page__grid">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="products-page__no-results">
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      <Cart />
    </div>
  );
};

export default Products;
