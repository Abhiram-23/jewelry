// import { Button } from "antd/es/radio";

// import React, { useState } from "react";

// function FilterOptions() {
//   return (
//     <div className="filter-options">
//       <h3>Filter Options</h3>
//       <Button type="primary">Gold</Button>
//       <Button type="primary">Diamond</Button>
//       <Button type="primary">Silver</Button>
//     </div>
//   );
// }
// export default FilterOptions;
import React, { useState, useEffect } from "react";
import "./FilterOptions.css";
const Filter = ({ onFilter, products, initialFilters }) => {
  const [filters, setFilters] = useState(initialFilters);
  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  const uniqueNames = [...new Set(products.map((product) => product.name))];
  const uniqueMaterials = [
    ...new Set(products.map((product) => product.material)),
  ];
  const uniqueModels = [...new Set(products.map((product) => product.model))];
  return (
    <div className="filter-container">
      <select
        name="name"
        value={filters.name}
        className="filter-select"
        onChange={handleChange}
      >
        <option value="">Select Name</option>
        {uniqueNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={handleChange}
        className="filter-input"
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={handleChange}
        className="filter-input"
      />

      <select
        name="material"
        value={filters.material}
        onChange={handleChange}
        className="filter-select"
      >
        <option value="">Select Material</option>
        {uniqueMaterials.map((material, index) => (
          <option key={index} value={material}>
            {material}
          </option>
        ))}
      </select>

      <select
        name="model"
        value={filters.model}
        onChange={handleChange}
        className="filter-select"
      >
        <option value="">Select Model</option>
        {uniqueModels.map((model, index) => (
          <option key={index} value={model}>
            {model}
          </option>
        ))}
      </select>

      <select
        name="sort"
        value={filters.sort}
        onChange={handleChange}
        className="filter-select"
      >
        <option value="">Sort by</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>

      <button onClick={handleFilter} className="filter-button">
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
