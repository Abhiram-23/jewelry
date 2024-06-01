import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { FaHome, FaBox, FaEnvelope } from "react-icons/fa";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation-bar">
      <Link
        to="/"
        className={`link-item ${location.pathname === "/" ? "active" : ""}`}
      >
        <FaHome className="nav-icon" /> Home
      </Link>
      <Link
        to="/products"
        className={`link-item ${
          location.pathname === "/products" ? "active" : ""
        }`}
      >
        <FaBox className="nav-icon" /> Products
      </Link>
      <Link
        to="/contact-us"
        className={`link-item ${
          location.pathname === "/contact-us" ? "active" : ""
        }`}
      >
        <FaEnvelope className="nav-icon" /> Contact Us
      </Link>
    </nav>
  );
};

export default Navigation;
