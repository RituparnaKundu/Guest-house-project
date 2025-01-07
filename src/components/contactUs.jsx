import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { LuMapPinned } from "react-icons/lu";
import { GrContactInfo } from "react-icons/gr";
const Contact = () => {
  return (
    <div className="contact-section">
      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="Kingsukh Guest House Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1736199269170!5m2!1sen!2sin"
          width= "100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        {/* Card Positioned Over Map */}
        <div className="contact-content">
          {/* Contact Info Card */}
          <div className="contact-info">
            <h3 ><a><GrContactInfo /></a>Contact Info</h3>
            <p>
            <a><LuMapPinned /></a>Beside Barshal Water Tank, <br />
              Manpur, Barhanti, <br />
              West Bengal 723156
            </p>
            <p><a><TfiEmail  /></a>Email: <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></p>
            <p><a><FiPhoneCall /></a>Phone: <a href="tel:+919007062180">+91 9007062180</a></p>
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
