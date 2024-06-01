import React from "react";
import "./ContactUs.css";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us__container">
        <div className="contact-us__header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-us__content">
          <div className="contact-us__info">
            <p>For all customer and sales inquiries, please contact:</p>
            <ul className="contact-us__list">
              <li>
                Customer service:{" "}
                <a href="mailto:customer.service@example.com">
                  customer.service@example.com
                </a>
              </li>
              <li>
                Wholesale inquiries:{" "}
                <a href="mailto:wholesale@example.com">wholesale@example.com</a>
              </li>
              <li>
                Press inquiries:{" "}
                <a href="mailto:press@example.com">press@example.com</a>
              </li>
            </ul>
          </div>
          <div className="contact-us__image">
            <img
              src={require("../assets/images/shop_image.jpeg")}
              alt="Our Shop"
              className="contact-us__shop-image"
            />
          </div>
        </div>
      </div>
      <div className="contact-us__follow">
        <h2>Follow Us</h2>
        <ul className="contact-us__social-media">
          <li>
            <a href="https://www.facebook.com">
              <FaFacebook /> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter /> Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <FaInstagram /> Instagram
            </a>
          </li>
          <li>
            <a href="mailto:press@example.com">
              <FaEnvelope /> Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
