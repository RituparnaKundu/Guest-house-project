import React from "react"
import ayodhya from '../assets/ayodhya.webp'
import './hero.css'
const Hero =()=> {
    return(
        <>
        <section className="hero-section">
            <div className="hero-overlay">
            <div className="hero-content">
                <h3 className="tagline">
                    Simple - Unique - Friendly
                </h3>
                <h1 className="headline">
                Make Yourself At Home In <br/>
                <span> Our Guest House.</span>
                </h1>

            </div>
            </div>
            <img src={ayodhya} className="hero-image"/>
            

        </section>
        </>
    )
}
export default Hero