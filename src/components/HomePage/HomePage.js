import React from "react";
import "./HomePage.css";
import Trending from "../Trending/Trending";
import bannerData from "../../data/bannerData";
import OurServices from "../OurServices/OurServices";
import Carousel from "../Carousel/Carousel";
function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage__header">
        <h1 className="homepage__title">Welcome to Gold Center</h1>

        <Carousel slides={bannerData} />
      </header>

      <section className="homepage__intro">
        <p className="homepage__intro-text">
          We create modern gold and sterling silver jewelry with a focus on
          timeless designs, local production, and responsibly sourced materials.
        </p>
      </section>
      <section className="homepage__images">
        <img
          className="homepage__image"
          src={require("../assets/images/homeimage1.jpg")}
          alt="Elegant Jewelry"
        />
        <img
          className="homepage__image"
          src={require("../assets/images/homeimage2.jpg")}
          alt="Timeless Designs"
        />
      </section>
      <OurServices />
      <Trending />
    </div>
  );
}

export default HomePage;
