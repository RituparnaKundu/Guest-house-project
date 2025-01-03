import React from "react"
import './navbar.css'
import logo from '../assets/logo.png'
const Navbar = ()=>{
    return (
        <>
        <nav className= "desktop-nav">
        <div className="logo">
            <img src={logo}/>

        </div>
        <ul className="menu-items">
            <li>
                <a href ="" className="active">Home</a>
            </li>
            <li>
                <a href ="" className="active">About</a>
            </li>
            <li>
                <a href ="" className="active">Rooms</a>
            </li>
            <li>
                <a href ="" className="active">Services</a>
            </li>
            <li>
                <a href ="" className="active">Gallery</a>
            </li>
            <li>
                <a href ="" className="active">Contact</a>
            </li>
            <li>
                <a href ="https://api.whatsapp.com/send?phone=919007062180" className="button">Book Now</a>
            </li>
            
        </ul>
        </nav>

        </>
    )
}
export default Navbar