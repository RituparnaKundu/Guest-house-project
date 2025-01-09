import React, { useEffect }  from "react";
import "./service.css"; 
import { FaShieldAlt, FaConciergeBell, FaUtensils, FaMapMarkedAlt } from "react-icons/fa"; // Fancy icons
import "aos/dist/aos.css";
import AOS from "aos";


const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  const services = [
    { id: 1, title: "High Class Security", icon: <FaShieldAlt /> },
    { id: 2, title: "24 Hours Room Service", icon: <FaConciergeBell /> },
    { id: 3, title: "Restaurant", icon: <FaUtensils /> },
    { id: 4, title: "Tourist Guide Support", icon: <FaMapMarkedAlt /> },
  ];

  return (
    <section className="services-section">
      {/*  <p className="services-small-title">SERVICES</p> */}
      <p className="section-heading">SERVICES</p>
      <h2 className="services-title">Strive Only For The Best.</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-item" data-aos="fade-up">
            <div className="service-icon">{service.icon}</div>
            <div className="service-text">{service.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
