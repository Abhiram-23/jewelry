import React from "react";
import "./OurServices.css";
import ourServicesData from "../../data/ourServicesData";
const OurServices = () => {
  return (
    <div className="services-container">
      <h1 className="services_heading">Our Services</h1>
      <div className="service-card-container">
        {ourServicesData.map((item) => (
          <div className="service_image_container">
            <img
              className="service__image"
              loading="lazy"
              src={item.image}
              alt={item.name}
            />
            <h3 className="service__name">{item.title}</h3>
            <h6 className="service_description">{item.description}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
