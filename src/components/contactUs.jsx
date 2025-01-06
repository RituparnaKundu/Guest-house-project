import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="Kingsukh Guest House Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.46339955582!2d86.6962171154904!3d23.546128984692316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f57f09c9df75f1%3A0x3a6db75c31c5e12d!2sBaranti%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1670414673772!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        {/* Card Positioned Over Map */}
        <div className="contact-content">
          {/* Contact Info Card */}
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>
              Beside Barshal Water Tank, <br />
              Manpur, Barhanti, <br />
              West Bengal 723156
            </p>
            <p>Email: <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></p>
            <p>Phone: <a href="tel:+919007062180">+91 9007062180</a></p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Mobile Number" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Write your message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
