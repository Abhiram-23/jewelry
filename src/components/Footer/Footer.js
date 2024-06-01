import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/products" className="footer__link">
                Products
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/contact-us" className="footer__link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <h4 className="footer__title">Follow Us</h4>
          <ul className="footer__social-icons">
            <li className="footer__social-icon">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="footer__social-icon">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="footer__social-icon">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2024 Gold Center LA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
