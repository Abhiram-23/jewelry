import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import itemNotFound from "../assets/itemNotFound/img.png";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-title">404 Not Found</h1>
      <p className="not-found-text">
        Sorry, the page you are looking for does not exist.
      </p>
      <img className="not-found-image" src={itemNotFound} alt="Not Found" />
      <Link className="not-found-link" to="/">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
