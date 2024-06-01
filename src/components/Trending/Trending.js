import React from "react";
import "./Trending.css";
import trendingData from "../../data/trendingData";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const navigate = useNavigate();

  const handleItemClick = (material) => {
    navigate(`/products?material=${material}`);
  };
  return (
    <div className="trending_now">
      <h1 className="trending_heading">Current Trending Items</h1>
      <div className="trending_now_cards">
        {trendingData.map((item) => (
          <div
            className="trending_image_container"
            onClick={() => handleItemClick(item.material)}
          >
            <img className="trending__image" src={item.image} alt={item.name} />
            <h3 className="trending__name">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
