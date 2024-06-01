import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import productsData from "../../data/productsData";
import "./ProductListingPage.css";
import FilterOptions from "../FilterOptions/FilterOptions";
import itemNotFound from "../assets/itemNotFound/img.png";
function ProductListingPage() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchParams, setSearchParams] = useSearchParams();
  const allFilters = () => {
    return {
      name: searchParams.get("name") || "",
      minPrice: searchParams.get("minPrice") || "",
      maxPrice: searchParams.get("maxPrice") || "",
      material: searchParams.get("material") || "",
      model: searchParams.get("model") || "",
      sort: searchParams.get("sort") || "",
    };
  };
  const [initialFilters, setInitialFilters] = useState(allFilters());

  const filterEmptyParams = (params) => {
    return Object.keys(params).reduce((acc, key) => {
      if (params[key]) {
        acc[key] = params[key];
      }
      return acc;
    }, {});
  };

  useEffect(() => {
    handleFilter(filterEmptyParams(initialFilters));
    window.scrollTo(0, 0);
  }, []);

  const handleFilter = (filters) => {
    let filtered = productsData;

    if (filters.name) {
      filtered = filtered.filter((product) => product.name === filters.name);
    }

    if (filters.minPrice) {
      filtered = filtered.filter(
        (product) => product.price >= parseFloat(filters.minPrice)
      );
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(filters.maxPrice)
      );
    }

    if (filters.material) {
      filtered = filtered.filter(
        (product) => product.material === filters.material
      );
    }

    if (filters.model) {
      filtered = filtered.filter((product) => product.model === filters.model);
    }

    if (filters.sort) {
      filtered = filtered.sort((a, b) =>
        filters.sort === "asc" ? a.price - b.price : b.price - a.price
      );
    }
    const filteredParams = filterEmptyParams(filters);

    setFilteredProducts(filtered);
    setSearchParams(filteredParams);
  };
  const generateTitle = () => {
    const { name, material, sort } = allFilters();
    let title = "All products";

    if (name || material || sort) {
      title = "Filtered products";
      const filterDetails = [];

      if (name) filterDetails.push(`By ${name}`);
      if (material) filterDetails.push(`Material Is ${material}`);
      if (sort === "asc") {
        filterDetails.push(`And Sorted By Low to High`);
      } else {
        filterDetails.push(`And Sorted By High to Low`);
      }

      title += ` - ${filterDetails.join(", ")}`;
    }
    return title;
  };

  return (
    <div className="product-listing-page">
      <h2 className="product-listing-page__title">Our Products</h2>
      <div className="filter-options">
        <h3 className="filter-options__title">Filter by Material</h3>
        <FilterOptions
          onFilter={handleFilter}
          products={productsData}
          initialFilters={initialFilters}
        />
      </div>
      <h1>{generateTitle()}</h1>
      <div className="product-list">
        {Object.keys(filteredProducts).length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <div>
            <h1>No Items Found!!</h1>
            <img
              className="itemNotFound"
              src={itemNotFound}
              alt="no item found"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
