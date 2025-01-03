import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import one from '../assets/one.jpg'
import ayodhya from '../assets/ayodhya.webp'
import baranti from '../assets/baranti.webp'
import flower from '../assets/flower.jpg'
import large from '../assets/large.jpg'
import palash from '../assets/palash.webp'
import room1 from '../assets/room1.jpg'
const Gallery =()=> {
    const galleryImage =[one,ayodhya,baranti,flower,large,palash,room1]
    return(
        <>
        <div className='gallery-section'>
            <h2 className='section-heading'>Our Gallery</h2>
            <Swiper 
            Navigation = {true} modules={[Navigation,Pagination]} 
            pagination ={{clickable:18}} slidesPerView={2} 
            spaceBetween={3} breakpoints={{}}
            className='gallery-slider'   
            >  
            {
                galleryImage.map((image,index)=>(
                    <SwiperSlide key={index}>
                    <img src={image} />
                    </SwiperSlide>
                ))
            }
            </Swiper>

            
        </div>
        </>
    )
}
export default Gallery