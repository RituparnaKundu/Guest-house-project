import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutUs from "./components/about";
import Room from "./components/room";
import Banner from "./components/Banner";
import Services from "./components/service";
import Gallery from "./components/gallery";
import Contact from "./components/contactUs";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <div id="hero" className="app-hero">
        <Hero />
      </div>
      <div id="about" className="app-about" data-aos="fade-up">
        <AboutUs />
      </div>
      <div id="room" className="app-room" data-aos="fade-right">
        <Room />
      </div>
      <div id="banner" className="app-banner" data-aos="fade-up">
        <Banner />
      </div>
      <div id="services" className="app-services" data-aos="fade-left">
        <Services />
      </div>
  
      <div id="gallery" className="app-gallery" data-aos="zoom-in">
        <Gallery />
      </div>
      <div id="contact" className="app-contact" data-aos="fade-up">
        <Contact />
      </div>
    </>
  );
}

export default App;
