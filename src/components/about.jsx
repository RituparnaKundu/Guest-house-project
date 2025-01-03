import React from "react"
import './about.css'
import out from '../assets/out.jpg'
const AboutUs =()=>{
    return(
        <>
        <section className="about-section" id="about-us">
           <h2>About Us</h2>
           <div className="about-content">
            <div className="about-text">
                <h3>The Best Holidays Start Here!</h3>
                <p>Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
                <div className="address">
                    <p><strong>Address :-  </strong> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
                </div>
            </div>
            <div className="about-image">
                <img src={out} alt=""/>
            </div>
           </div>
        </section>
        
        </>
    )
}
export default AboutUs