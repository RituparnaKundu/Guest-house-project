import React, {useEffect} from "react";
import "./banner.css";
import CountUp from "react-countup"; 
import AOS from "aos";
import "aos/dist/aos.css";


const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-item" data-aos="fade-up">
          <h2 className="banner-number">
            <CountUp end={100} duration={2} />+
          </h2>
          <p className="banner-text">Bookings Completed</p>
        </div>
        <div className="banner-item" data-aos="fade-up" data-aos-delay="200">
          <h2 className="banner-number">
            <CountUp end={150} duration={2} />+
          </h2>
          <p className="banner-text">Happy Customers</p>
        </div>
      </div>
    </section>
  );
};
export default Banner;
