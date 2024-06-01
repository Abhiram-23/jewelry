import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ContactUs from "./components/ContactUs/ContactUs";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigationContainer">
          <Navigation />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* Add more routes for product detail pages, etc. */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
