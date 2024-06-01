import React from "react";
import { Link } from "react-router-dom";
import productsData from "../../data/productsData";
import "./RelatedProducts.css";

function RelatedProducts({ currentProductId, currentProductCategory }) {
  const relatedProducts = productsData.filter(
    (product) =>
      product.id !== parseInt(currentProductId) &&
      product.category !== currentProductCategory
  );

  return (
    <div className="related-products">
      <h2 className="related-products__title">Related Products</h2>
      <div className="related-products__list">
        {relatedProducts.slice(0, 4).map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="related-product-card"
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="related-product-card__price">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
