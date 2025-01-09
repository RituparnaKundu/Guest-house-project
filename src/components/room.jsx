import React from "react"
import Card from './card.jsx'
import './room.css'
import small from '../assets/small.jpg'
import room1 from "../assets/room1.jpg"
import large from '../assets/large.jpg'
const Room =()=> {
    return(
        <>
        <section className="room-section">
            <h2 className="section-heading">OUR LIVING ROOM</h2>
            <h3 className="section-heading-room">The Most Memorable Rest Time Starts Here.</h3>
            <div className="room-container">
                <Card images={[small]} title="Cozy Haven Room" 
                description="Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
" price="1000"/>
                <Card images={[large, room1]} title="Spacious Serenity Suite" 
                description="Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
" price="1500"/>
            </div>

        </section>
        </>
    )
}
export default Room