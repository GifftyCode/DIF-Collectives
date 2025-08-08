import React from "react";
import "./ProductCard.scss";
import { useAppContext } from "../../context/AppContext";

const ProductCard = ({ product }) => {
  const { dispatch, actionTypes } = useAppContext();

  const addToCart = () => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: product,
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`product-card__star ${
          index < rating ? "product-card__star--filled" : ""
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
        {!product.inStock && (
          <div className="product-card__out-of-stock">Out of Stock</div>
        )}
        <div className="product-card__category">{product.category}</div>
      </div>

      <div className="product-card__content">
        <div className="product-card__rating">
          {renderStars(product.rating)}
          <span className="product-card__rating-text">({product.rating})</span>
        </div>

        <h3 className="product-card__name">{product.name}</h3>

        <p className="product-card__description">{product.description}</p>

        <div className="product-card__price-section">
          <div className="product-card__prices">
            <span className="product-card__current-price">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="product-card__original-price">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {product.inStock && (
            <span className="product-card__stock">
              {product.stockQuantity} in stock
            </span>
          )}
        </div>

        <button
          className={`product-card__add-btn ${
            !product.inStock ? "product-card__add-btn--disabled" : ""
          }`}
          onClick={addToCart}
          disabled={!product.inStock}
        >
          <span className="product-card__cart-icon">🛒</span>
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
