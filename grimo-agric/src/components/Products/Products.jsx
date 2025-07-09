import React from "react";
import { Leaf, Award, Heart, CheckCircle } from "lucide-react";
import "./Products.scss";

const Products = () => {
  const products = [
    {
      id: 1,
      icon: Award,
      title: "Agriculture Products",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      id: 2,
      icon: CheckCircle,
      title: "Quality Products",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      id: 3,
      icon: Leaf,
      title: "Fresh Vegetables",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
    {
      id: 4,
      icon: Heart,
      title: "Pure & Organic",
      description:
        "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
    },
  ];

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="products__content">
          <div className="products__text">
            <div className="products__badge">Grow Naturally</div>
            <h2 className="products__title">
              Choose What's Perfect For Your Field
            </h2>

            <div className="products__grid">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <div
                    key={product.id}
                    className="products__item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="products__item-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="products__item-content">
                      <h4 className="products__item-title">{product.title}</h4>
                      <p className="products__item-description">
                        {product.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="products__image">
            <img src="/api/placeholder/400/500" alt="Fresh corn" />
          </div>
        </div>

        <div className="products__bottom">
          <div className="products__bottom-images">
            <div className="products__bottom-image">
              <img src="/api/placeholder/300/200" alt="Farmers working" />
            </div>
            <div className="products__bottom-image">
              <img src="/api/placeholder/300/200" alt="Harvest collection" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
