import React from "react";
import wave from '../assets/wave.svg';
import logo from '../assets/logo.png';
import './footer.css';
const Footer =() => {
    return (
        <div className="footer-container">
            <div className="footer-wave">
                <img src ={wave}/>
                <div className="footer-logo">
                    <img src={logo}/>

                </div>
            </div>

            <div className="footer-content">
                <p className="footer-intro">
                Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
                </p>
                <div className="footer-links">
                    <h3>QUICK LINKS</h3>
                <ul>
                <li>Browse Destinations</li>
                <li>Special Offers & Packages</li>
                <li>Room Types & Amenities</li>
                <li>Customer Reviews & Ratings</li>
                <li>Travel Tips & Guides</li>
                </ul>
                </div>
                <div className="footer-service">
                    <h3>OUR SERVICES</h3>
                    <ul>
                        <li>Concierge Assistance</li>
                        <li>Flexible Booking Options</li>
                        <li>Airport Transfers</li>
                        <li>Wellness & Recreation</li>
                    </ul>
                </div>
                <div className="footer-contact">
                <h3>CONTACT US</h3>
                <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
                <p>Email: <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></p>
                <p>Phone: <a href="tel:+919007062180">+91 9007062180</a></p>
                
            </div>

 
            

            </div>
            <div className="footer-copyright">
                <p>© {new Date().getFullYear()} Hotel Booking. All rights reserved.</p>
            </div>
        </div>
    )
}




export default Footer;