import React from "react";
import { Parallax } from "react-parallax";
import ayodhya from "../assets/ayodhya.webp";
import "./hero.css";

const Hero = () => {
  return (
    <Parallax bgImage={ayodhya} strength={500} className="hero-parallax">
      <section className="hero-section">
    
          <div className="hero-content">
            <h3 className="tagline">Simple - Unique - Friendly</h3>
            <h1 className="headline">
              Make Yourself At Home In <br />
              <span>Our Guest House.</span>
            </h1>
 
        </div>
      </section>
    </Parallax>
  );
};

export default Hero;
