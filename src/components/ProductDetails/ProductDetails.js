import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data/productsData";
import "./ProductDetails.css";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = productsData.find((item) => item.id === parseInt(id));
    setProduct(product);
  }, [id]);

  if (!product) {
    return <div className="product-details__loading">Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-details__image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-details__image"
          />
        </div>
        <div className="product-details__info">
          <h1 className="product-details__name">{product.name}</h1>
          <h4 className="product-details__description">
            {product.description}
          </h4>
          <p className="product-details__category">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="product-details__material">
            <strong>Material:</strong> {product.material}
          </p>
          <p className="product-details__model">
            <strong>Model:</strong> {product.model}
          </p>
          <p className="product-details__price">
            <strong>Price:</strong> ${product.price}
          </p>
        </div>
      </div>
      <RelatedProducts
        currentProductId={id}
        currentProductCategory={product.category}
      />
    </div>
  );
}

export default ProductDetails;
